
import { useState } from "react";
import { Users, Search, Plus, Filter, Tag, User, Calendar, MapPin, Clock, X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface Community {
  id: number;
  name: string;
  category: string;
  tags: string[];
  leader: string;
  members: number;
  description: string;
  meetingSchedule: string;
  location: string;
  image: string;
}

const Community = () => {
  const [communities, setCommunities] = useState<Community[]>([
    {
      id: 1,
      name: "Coding Club",
      category: "Academic",
      tags: ["Programming", "Technology", "Innovation"],
      leader: "Dr. Ramesh Kumar",
      members: 86,
      description: "A community of coding enthusiasts who collaborate on projects, participate in hackathons, and share knowledge about the latest technologies and programming languages.",
      meetingSchedule: "Every Tuesday, 5:00 PM",
      location: "Computer Science Building, Room 302",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
    },
    {
      id: 2,
      name: "Environmental Conservation Group",
      category: "Service",
      tags: ["Environment", "Sustainability", "Community Service"],
      leader: "Prof. Sunita Sharma",
      members: 62,
      description: "Dedicated to promoting environmental awareness and sustainability practices on campus and in the surrounding community through clean-up drives, tree plantation, and awareness campaigns.",
      meetingSchedule: "Every Saturday, 10:00 AM",
      location: "Botanical Garden, Central Campus",
      image: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
    },
    {
      id: 3,
      name: "Literary Society",
      category: "Cultural",
      tags: ["Literature", "Poetry", "Writing"],
      leader: "Dr. Anjali Deshmukh",
      members: 45,
      description: "A gathering of literature enthusiasts who explore various genres of writing, engage in book discussions, organize poetry slams, and publish a campus literary magazine.",
      meetingSchedule: "Every Thursday, 4:00 PM",
      location: "Library Meeting Hall",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [newCommunity, setNewCommunity] = useState({
    name: "",
    category: "Academic",
    tags: "",
    leader: "",
    description: "",
    meetingSchedule: "",
    location: ""
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredCommunities = communities.filter(community => {
    const matchesSearch = community.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         community.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         community.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || community.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleCreateCommunity = () => {
    const tagsArray = newCommunity.tags.split(',').map(tag => tag.trim());
    
    const newCommunityObj: Community = {
      id: communities.length + 1,
      name: newCommunity.name,
      category: newCommunity.category,
      tags: tagsArray,
      leader: newCommunity.leader,
      members: 1,
      description: newCommunity.description,
      meetingSchedule: newCommunity.meetingSchedule,
      location: newCommunity.location,
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80"
    };
    
    setCommunities([...communities, newCommunityObj]);
    
    setNewCommunity({
      name: "",
      category: "Academic",
      tags: "",
      leader: "",
      description: "",
      meetingSchedule: "",
      location: ""
    });
    
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Community Services</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button className="flex items-center space-x-1">
              <Plus className="h-4 w-4 mr-1" />
              <span>Create Community</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle>Create New Community</DialogTitle>
              <DialogDescription>
                Fill out the form below to create a new community for students to join.
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Community Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Enter community name" 
                    value={newCommunity.name}
                    onChange={(e) => setNewCommunity({...newCommunity, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <select 
                    id="category" 
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                    value={newCommunity.category}
                    onChange={(e) => setNewCommunity({...newCommunity, category: e.target.value})}
                  >
                    <option value="Academic">Academic</option>
                    <option value="Cultural">Cultural</option>
                    <option value="Sports">Sports</option>
                    <option value="Service">Service</option>
                    <option value="Religious">Religious</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (comma separated)</Label>
                  <Input 
                    id="tags" 
                    placeholder="Technology, Innovation, Research" 
                    value={newCommunity.tags}
                    onChange={(e) => setNewCommunity({...newCommunity, tags: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="leader">Community Leader</Label>
                  <Input 
                    id="leader" 
                    placeholder="Enter leader's name" 
                    value={newCommunity.leader}
                    onChange={(e) => setNewCommunity({...newCommunity, leader: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the purpose and activities of this community..." 
                  className="min-h-[100px]"
                  value={newCommunity.description}
                  onChange={(e) => setNewCommunity({...newCommunity, description: e.target.value})}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="meetingSchedule">Meeting Schedule</Label>
                  <Input 
                    id="meetingSchedule" 
                    placeholder="E.g., Every Tuesday, 5:00 PM" 
                    value={newCommunity.meetingSchedule}
                    onChange={(e) => setNewCommunity({...newCommunity, meetingSchedule: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Meeting Location</Label>
                  <Input 
                    id="location" 
                    placeholder="E.g., Library Meeting Hall" 
                    value={newCommunity.location}
                    onChange={(e) => setNewCommunity({...newCommunity, location: e.target.value})}
                  />
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
              <Button onClick={handleCreateCommunity} disabled={!newCommunity.name || !newCommunity.description}>Create Community</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 sticky top-16 z-10 bg-background pb-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search communities..."
            className="w-full pl-9 pr-4 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center">
          <Filter className="h-4 w-4 mr-2 text-muted-foreground" />
          <select 
            className="bg-muted rounded-md px-3 py-2 text-sm border-0 focus:ring-1 focus:ring-primary"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Academic">Academic</option>
            <option value="Cultural">Cultural</option>
            <option value="Sports">Sports</option>
            <option value="Service">Service</option>
            <option value="Religious">Religious</option>
            <option value="Professional">Professional</option>
          </select>
        </div>
      </div>

      {filteredCommunities.length === 0 ? (
        <div className="bg-card rounded-lg border p-8 text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4">
            <Users className="h-6 w-6 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-medium mb-2">No communities found</h2>
          <p className="text-muted-foreground mb-4">
            Try adjusting your search criteria or create a new community.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCommunities.map((community) => (
            <div key={community.id} className="dashboard-card overflow-hidden flex flex-col card-hover">
              <div className="h-40 overflow-hidden mb-4">
                <img src={community.image} alt={community.name} className="w-full h-full object-cover" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{community.name}</h3>
                    <span className="px-2 py-1 bg-muted text-xs rounded-full">{community.category}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {community.description}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-1 mt-2">
                  {community.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full flex items-center">
                      <Tag className="h-3 w-3 mr-1" /> {tag}
                    </span>
                  ))}
                </div>
                
                <div className="pt-3 border-t space-y-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <User className="h-3 w-3 mr-1" /> 
                    <span>Leader: {community.leader}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3 mr-1" /> 
                    <span>{community.meetingSchedule}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3 mr-1" /> 
                    <span>{community.location}</span>
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Users className="h-3 w-3 mr-1" /> 
                    <span>{community.members} members</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <Button variant="outline" className="w-full">Join Community</Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;
