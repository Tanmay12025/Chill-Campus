
import { useState } from "react";
import { CalendarCheck, ChevronDown, ChevronUp } from "lucide-react";

interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: "academic" | "cultural" | "sports" | "workshop";
}

const Events = () => {
  const [expandedEventId, setExpandedEventId] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Sample event data
  const events: Event[] = [
    {
      id: "1",
      title: "Annual Technical Symposium",
      date: "April 20, 2025",
      time: "10:00 AM - 5:00 PM",
      location: "Main Auditorium",
      description: "Join us for a day full of technical presentations, workshops, and competitions featuring the latest innovations in technology.",
      category: "academic"
    },
    {
      id: "2",
      title: "Cultural Night - Rhythm 2025",
      date: "April 25, 2025",
      time: "6:00 PM - 10:00 PM",
      location: "Open Air Theatre",
      description: "Experience a night of music, dance, and drama performances by talented students from various departments.",
      category: "cultural"
    },
    {
      id: "3",
      title: "Inter-College Sports Tournament",
      date: "May 2-5, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "University Sports Complex",
      description: "Compete in various sports including cricket, football, basketball, and athletics against teams from other colleges.",
      category: "sports"
    },
    {
      id: "4",
      title: "AI & Machine Learning Workshop",
      date: "May 10, 2025",
      time: "11:00 AM - 4:00 PM",
      location: "Computer Science Block",
      description: "Learn practical skills in artificial intelligence and machine learning through hands-on exercises and expert guidance.",
      category: "workshop"
    }
  ];

  const toggleEventDetails = (eventId: string) => {
    if (expandedEventId === eventId) {
      setExpandedEventId(null);
    } else {
      setExpandedEventId(eventId);
    }
  };

  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.category === filter);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "academic": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "cultural": return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
      case "sports": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "workshop": return "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200";
    }
  };

  return (
    <div className="dashboard-card">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold flex items-center">
          <CalendarCheck className="h-5 w-5 mr-2" />
          Upcoming Events
        </h3>
        <select 
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="text-xs bg-muted rounded px-2 py-1 border-0 focus:ring-1 focus:ring-primary"
        >
          <option value="all">All Events</option>
          <option value="academic">Academic</option>
          <option value="cultural">Cultural</option>
          <option value="sports">Sports</option>
          <option value="workshop">Workshops</option>
        </select>
      </div>

      <div className="space-y-3">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <div key={event.id} className="border rounded-md overflow-hidden">
              <div 
                className="flex justify-between items-center p-3 cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleEventDetails(event.id)}
              >
                <div>
                  <h4 className="font-medium text-sm">{event.title}</h4>
                  <div className="flex items-center mt-1 text-xs text-muted-foreground">
                    <span>{event.date}</span>
                    <span className="mx-1">•</span>
                    <span>{event.time}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className={`mr-2 text-xs px-2 py-0.5 rounded-full ${getCategoryColor(event.category)}`}>
                    {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                  </span>
                  {expandedEventId === event.id ? (
                    <ChevronUp className="h-4 w-4 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>
              </div>
              
              {expandedEventId === event.id && (
                <div className="p-3 border-t bg-muted/30">
                  <div className="text-xs mb-2">
                    <strong>Location:</strong> {event.location}
                  </div>
                  <p className="text-xs text-muted-foreground">{event.description}</p>
                  <button 
                    className="mt-2 text-xs text-primary hover:underline"
                  >
                    Add to My Calendar
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-muted-foreground">
            No events found for the selected category.
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
