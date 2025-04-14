
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface CommunityService {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  organizer: string;
  start_date: string | null;
  end_date: string | null;
  location: string | null;
  max_participants: number | null;
  created_at: string;
  created_by: string;
  participantCount?: number;
  isParticipating?: boolean;
}

const Community = () => {
  const [communityServices, setCommunityServices] = useState<CommunityService[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [formOpen, setFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    organizer: "",
    location: "",
    start_date: "",
    end_date: "",
    max_participants: "",
  });
  const [submitting, setSubmitting] = useState(false);
  
  const { user, profile } = useAuth();
  const { toast } = useToast();

  const fetchCommunityServices = async () => {
    setIsLoading(true);
    try {
      // Fetch all community services
      const { data: servicesData, error: servicesError } = await supabase
        .from('community_services')
        .select('*')
        .order('created_at', { ascending: false });

      if (servicesError) throw servicesError;

      let services = servicesData || [];

      if (user) {
        // For each service, check if the user is participating
        const enhancedServices = await Promise.all(
          services.map(async (service) => {
            // Count participants
            const { count: participantCount } = await supabase
              .from('community_participants')
              .select('*', { count: 'exact', head: true })
              .eq('community_id', service.id);

            // Check if user is participating
            const { data: participationData } = await supabase
              .from('community_participants')
              .select('*')
              .eq('community_id', service.id)
              .eq('user_id', user.id)
              .maybeSingle();

            return {
              ...service,
              participantCount: participantCount || 0,
              isParticipating: !!participationData,
            };
          })
        );

        setCommunityServices(enhancedServices);
      } else {
        setCommunityServices(services);
      }
    } catch (error: any) {
      console.error('Error fetching community services:', error);
      toast({
        title: "Error",
        description: "Failed to load community services. " + error.message,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCommunityServices();
  }, [user]);

  const handleJoinLeave = async (serviceId: string, isJoining: boolean) => {
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to join community services",
        variant: "destructive",
      });
      return;
    }

    try {
      if (isJoining) {
        // Join the community service
        const { error } = await supabase
          .from('community_participants')
          .insert({ community_id: serviceId, user_id: user.id });

        if (error) throw error;

        toast({
          title: "Success",
          description: "You have joined this community service",
        });
      } else {
        // Leave the community service
        const { error } = await supabase
          .from('community_participants')
          .delete()
          .eq('community_id', serviceId)
          .eq('user_id', user.id);

        if (error) throw error;

        toast({
          title: "Success",
          description: "You have left this community service",
        });
      }

      // Refresh the list
      fetchCommunityServices();
    } catch (error: any) {
      console.error('Error joining/leaving community service:', error);
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to create community services",
        variant: "destructive",
      });
      return;
    }

    if (!profile || !['faculty', 'admin'].includes(profile.user_type)) {
      toast({
        title: "Permission denied",
        description: "Only faculty and administrators can create community services",
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('community_services')
        .insert({
          title: formData.title,
          description: formData.description,
          organizer: formData.organizer,
          location: formData.location,
          start_date: formData.start_date || null,
          end_date: formData.end_date || null,
          max_participants: formData.max_participants ? parseInt(formData.max_participants) : null,
          created_by: user.id,
        });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Community service created successfully",
      });

      // Reset form and close dialog
      setFormData({
        title: "",
        description: "",
        organizer: "",
        location: "",
        start_date: "",
        end_date: "",
        max_participants: "",
      });
      setFormOpen(false);
      
      // Refresh the list
      fetchCommunityServices();
    } catch (error: any) {
      console.error('Error creating community service:', error);
      toast({
        title: "Error",
        description: error.message || "An unexpected error occurred",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const canCreateService = profile && ['faculty', 'admin'].includes(profile.user_type);

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Community Services</h1>
          <p className="text-muted-foreground">
            Join community service initiatives and contribute to society
          </p>
        </div>

        {canCreateService && (
          <Dialog open={formOpen} onOpenChange={setFormOpen}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Create Service
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create Community Service</DialogTitle>
                <DialogDescription>
                  Fill in the details to create a new community service opportunity.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="organizer">Organizer</Label>
                  <Input
                    id="organizer"
                    name="organizer"
                    value={formData.organizer}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="start_date">Start Date</Label>
                    <Input
                      id="start_date"
                      name="start_date"
                      type="datetime-local"
                      value={formData.start_date}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="end_date">End Date</Label>
                    <Input
                      id="end_date"
                      name="end_date"
                      type="datetime-local"
                      value={formData.end_date}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="max_participants">Maximum Participants</Label>
                  <Input
                    id="max_participants"
                    name="max_participants"
                    type="number"
                    min="1"
                    value={formData.max_participants}
                    onChange={handleInputChange}
                  />
                </div>
                
                <DialogFooter>
                  <Button type="submit" disabled={submitting}>
                    {submitting ? "Creating..." : "Create Service"}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        )}
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p>Loading community services...</p>
        </div>
      ) : communityServices.length === 0 ? (
        <div className="text-center p-12 border rounded-lg">
          <h3 className="text-xl font-medium mb-2">No community services available yet</h3>
          <p className="text-muted-foreground mb-4">
            {canCreateService 
              ? "Create a new community service to get started."
              : "Check back later for new opportunities to serve the community."}
          </p>
          {canCreateService && (
            <Button onClick={() => setFormOpen(true)}>
              <Plus className="h-4 w-4 mr-2" />
              Create Service
            </Button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityServices.map((service) => (
            <Card key={service.id} className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.organizer}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="mb-4">{service.description}</p>
                
                <div className="space-y-2 text-sm">
                  {service.location && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{service.location}</span>
                    </div>
                  )}
                  
                  {service.start_date && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {format(new Date(service.start_date), "PPP")}
                        {service.end_date && ` - ${format(new Date(service.end_date), "PPP")}`}
                      </span>
                    </div>
                  )}
                  
                  {service.participantCount !== undefined && (
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>
                        {service.participantCount} participant{service.participantCount !== 1 ? 's' : ''}
                        {service.max_participants && ` / ${service.max_participants}`}
                      </span>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter>
                {user ? (
                  <Button 
                    variant={service.isParticipating ? "outline" : "default"}
                    className="w-full"
                    onClick={() => handleJoinLeave(service.id, !service.isParticipating)}
                  >
                    {service.isParticipating ? "Leave" : "Join"}
                  </Button>
                ) : (
                  <Button className="w-full" variant="outline" disabled>
                    Sign in to join
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Community;
