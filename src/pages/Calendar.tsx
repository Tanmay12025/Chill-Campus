
import { useState } from "react";
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // Sample events data
  const events = [
    { date: "2025-04-15", title: "Mid-Semester Break Begins", type: "holiday" },
    { date: "2025-04-22", title: "Classes Resume", type: "academic" },
    { date: "2025-04-25", title: "Campus Cultural Festival", type: "event" },
    { date: "2025-04-28", title: "Guest Lecture: AI & Future", type: "academic" },
    { date: "2025-05-01", title: "Labor Day", type: "holiday" },
    { date: "2025-05-05", title: "Registration for Next Semester", type: "academic" },
  ];

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Academic Calendar</h1>
        <div className="flex items-center space-x-2">
          <button onClick={prevMonth} className="p-2 rounded-md hover:bg-muted">
            <ChevronLeft size={20} />
          </button>
          <div className="font-medium">
            {format(currentMonth, "MMMM yyyy")}
          </div>
          <button onClick={nextMonth} className="p-2 rounded-md hover:bg-muted">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-medium py-2 bg-muted rounded-md">
            {day}
          </div>
        ))}
        {Array.from({ length: 35 }).map((_, i) => (
          <div 
            key={i} 
            className="aspect-square border rounded-md flex flex-col p-1 hover:bg-muted/50 transition-colors"
          >
            <div className="text-right text-sm">{i + 1}</div>
            <div className="flex-1 overflow-hidden text-xs">
              {i === 14 && (
                <div className="bg-red-100 text-red-800 rounded px-1 py-0.5 mb-1">
                  Mid-Semester Break
                </div>
              )}
              {i === 24 && (
                <div className="bg-blue-100 text-blue-800 rounded px-1 py-0.5 mb-1">
                  Cultural Festival
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-medium mb-4">Upcoming Events</h2>
        <div className="space-y-3">
          {events.map((event, index) => (
            <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50">
              <div className="bg-primary/10 rounded-md p-2 text-primary">
                <CalendarIcon size={18} />
              </div>
              <div>
                <div className="font-medium">{event.title}</div>
                <div className="text-sm text-muted-foreground">{event.date}</div>
                <div className="mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    event.type === 'holiday' ? 'bg-red-100 text-red-800' : 
                    event.type === 'academic' ? 'bg-blue-100 text-blue-800' : 
                    'bg-green-100 text-green-800'
                  }`}>
                    {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
