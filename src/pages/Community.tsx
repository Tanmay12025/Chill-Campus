
import { Users, Search, Plus } from "lucide-react";

const Community = () => {
  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Community</h1>
        <button className="flex items-center space-x-1 bg-primary text-primary-foreground px-3 py-1.5 rounded-md text-sm hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4 mr-1" />
          <span>New Post</span>
        </button>
      </div>

      <div className="flex space-x-3 sticky top-16 z-10 bg-background pb-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search community posts..."
            className="w-full bg-muted rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <select className="bg-muted rounded-md px-3 py-2 text-sm border-0 focus:ring-1 focus:ring-primary">
          <option value="all">All Categories</option>
          <option value="academic">Academic</option>
          <option value="events">Events</option>
          <option value="clubs">Clubs & Societies</option>
          <option value="sports">Sports</option>
          <option value="alumni">Alumni</option>
        </select>
      </div>

      <div className="bg-card rounded-lg border p-8 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
          <Users className="h-6 w-6 text-muted-foreground" />
        </div>
        <h2 className="text-xl font-medium mb-2">Community Page</h2>
        <p className="text-muted-foreground mb-4">
          Connect with fellow students, faculty, and alumni. Share ideas, ask questions, and stay updated with campus happenings.
        </p>
        <p className="text-sm text-muted-foreground">
          This feature is under development and will be available soon.
        </p>
      </div>
    </div>
  );
};

export default Community;
