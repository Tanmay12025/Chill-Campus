
import { useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, getDay } from "date-fns";

interface HolidayEvent {
  date: Date;
  title: string;
  type: "holiday" | "academic" | "exam";
}

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Sample holiday data
  const holidays: HolidayEvent[] = [
    { date: new Date(2025, 3, 14), title: "Ambedkar Jayanti", type: "holiday" },
    { date: new Date(2025, 3, 21), title: "Mid-Semester Exams Begin", type: "exam" },
    { date: new Date(2025, 3, 28), title: "Faculty Development Program", type: "academic" }
  ];

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const days = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  const startDay = getDay(startOfMonth(currentMonth));
  
  const getEventForDate = (date: Date) => {
    return holidays.find(
      (holiday) => 
        holiday.date.getDate() === date.getDate() && 
        holiday.date.getMonth() === date.getMonth() && 
        holiday.date.getFullYear() === date.getFullYear()
    );
  };

  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <CalendarIcon className="h-5 w-5 mr-2" />
          Calendar
        </h3>
        <div className="flex items-center space-x-1">
          <button
            onClick={prevMonth}
            className="p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <span className="text-sm font-medium">
            {format(currentMonth, "MMMM yyyy")}
          </span>
          <button
            onClick={nextMonth}
            className="p-1 rounded-full hover:bg-muted transition-colors"
            aria-label="Next month"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 text-center text-xs font-medium mb-1">
        {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
          <div key={day} className="py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 text-center">
        {/* Empty cells for start padding */}
        {Array.from({ length: startDay }).map((_, index) => (
          <div key={`empty-${index}`} className="p-1"></div>
        ))}

        {/* Days of month */}
        {days.map((day) => {
          const event = getEventForDate(day);
          
          let cellClasses = "text-xs rounded-full flex items-center justify-center w-8 h-8 mx-auto relative";
          if (event) {
            switch (event.type) {
              case "holiday":
                cellClasses += " bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200";
                break;
              case "academic":
                cellClasses += " bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200";
                break;
              case "exam":
                cellClasses += " bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-200";
                break;
              default:
                cellClasses += " hover:bg-muted";
            }
          } else {
            cellClasses += " hover:bg-muted";
          }
          
          return (
            <div key={day.toString()} className="p-1 relative group">
              <div className={cellClasses}>
                {format(day, "d")}
              </div>
              {event && (
                <div className="hidden group-hover:block absolute z-10 bottom-full left-1/2 transform -translate-x-1/2 mb-1 bg-popover text-popover-foreground text-xs p-1 rounded shadow-lg whitespace-nowrap">
                  {event.title}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-red-100 dark:bg-red-900 mr-1"></div>
          <span>Holiday</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-100 dark:bg-blue-900 mr-1"></div>
          <span>Academic</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-amber-100 dark:bg-amber-900 mr-1"></div>
          <span>Exam</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
