
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Tag, 
  Users, 
  ChevronRight,
  Filter
} from "lucide-react";
import { useState } from "react";

const Events = () => {
  const [filter, setFilter] = useState("all");
  
  const events = [
    { 
      id: 1, 
      title: "Annual Technology Summit", 
      date: "April 25, 2025", 
      time: "9:00 AM - 5:00 PM", 
      location: "Main Auditorium", 
      category: "academic", 
      attendees: 250,
      image: "https://picsum.photos/seed/event1/300/200"
    },
    { 
      id: 2, 
      title: "Cultural Night Celebration", 
      date: "May 5, 2025", 
      time: "6:00 PM - 10:00 PM", 
      location: "Campus Grounds", 
      category: "cultural", 
      attendees: 500,
      image: "https://picsum.photos/seed/event2/300/200"
    },
    { 
      id: 3, 
      title: "Career Fair 2025", 
      date: "May 12, 2025", 
      time: "10:00 AM - 3:00 PM", 
      location: "Student Center", 
      category: "career", 
      attendees: 350,
      image: "https://picsum.photos/seed/event3/300/200"
    },
    { 
      id: 4, 
      title: "Inter-College Sports Tournament", 
      date: "May 18-20, 2025", 
      time: "All Day", 
      location: "Sports Complex", 
      category: "sports", 
      attendees: 600,
      image: "https://picsum.photos/seed/event4/300/200"
    }
  ];
  
  const filteredEvents = filter === "all" 
    ? events 
    : events.filter(event => event.category === filter);

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Campus Events</h1>
        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-muted rounded-md px-3 py-1.5">
            <Filter size={16} className="mr-2" />
            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-transparent outline-none"
            >
              <option value="all">All Events</option>
              <option value="academic">Academic</option>
              <option value="cultural">Cultural</option>
              <option value="career">Career</option>
              <option value="sports">Sports</option>
            </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event) => (
          <div key={event.id} className="bg-card border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-[3/2] overflow-hidden">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{event.title}</h3>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Calendar size={16} className="mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Clock size={16} className="mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin size={16} className="mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users size={16} className="mr-2" />
                  <span>{event.attendees} Attendees</span>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary capitalize">
                  {event.category}
                </span>
                <button className="text-primary text-sm flex items-center">
                  <span>Details</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
