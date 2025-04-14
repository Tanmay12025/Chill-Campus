
import { Building, Home, User, MapPin, Star, Phone, Mail, Bed, Clock, Users, ShowerHead, Wifi, Coffee, Lock, Utensils } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Hostels = () => {
  const boysHostels = [
    { 
      id: 1, 
      name: "North Hall", 
      image: "/placeholder.svg", 
      occupancy: "Double", 
      distance: "5 min walk", 
      amenities: ["Wi-Fi", "Laundry", "Common Room", "Study Space"] 
    },
    { 
      id: 2, 
      name: "Eagle Heights", 
      image: "/placeholder.svg", 
      occupancy: "Single/Double", 
      distance: "7 min walk", 
      amenities: ["Wi-Fi", "Gym", "Laundry", "Study Rooms"] 
    },
    { 
      id: 3, 
      name: "Western Towers", 
      image: "/placeholder.svg", 
      occupancy: "Double/Triple", 
      distance: "10 min walk", 
      amenities: ["Wi-Fi", "Game Room", "Cafeteria", "Laundry"] 
    }
  ];
  
  const girlsHostels = [
    { 
      id: 1, 
      name: "Lakeside Residence", 
      image: "/placeholder.svg", 
      occupancy: "Double", 
      distance: "5 min walk", 
      amenities: ["Wi-Fi", "Laundry", "Common Room", "Yoga Space"] 
    },
    { 
      id: 2, 
      name: "Maple Heights", 
      image: "/placeholder.svg", 
      occupancy: "Single/Double", 
      distance: "6 min walk", 
      amenities: ["Wi-Fi", "Fitness Center", "Laundry", "Study Lounge"] 
    },
    { 
      id: 3, 
      name: "Sunrise Hall", 
      image: "/placeholder.svg", 
      occupancy: "Double/Triple", 
      distance: "8 min walk", 
      amenities: ["Wi-Fi", "Cafeteria", "Laundry", "Common Areas"] 
    }
  ];
  
  const hostelAmenities = [
    { icon: <Bed className="h-4 w-4" />, label: "Furnished Rooms" },
    { icon: <ShowerHead className="h-4 w-4" />, label: "Attached Bathrooms" },
    { icon: <Wifi className="h-4 w-4" />, label: "High-Speed Wi-Fi" },
    { icon: <Coffee className="h-4 w-4" />, label: "Common Lounges" },
    { icon: <Lock className="h-4 w-4" />, label: "24/7 Security" },
    { icon: <Utensils className="h-4 w-4" />, label: "Dining Options" }
  ];
  
  const hostelRules = [
    "Hostel entry gate closes at 10:00 PM",
    "Visitors are allowed only in common areas from 9:00 AM to 8:00 PM",
    "Smoking and alcohol are strictly prohibited",
    "Maintain cleanliness in rooms and common areas",
    "Respect quiet hours between 10:00 PM and 6:00 AM",
    "Report maintenance issues to the warden promptly"
  ];
  
  const hostelFAQs = [
    { 
      question: "How do I apply for hostel accommodation?",
      answer: "You can apply through the student portal once you have been admitted to the university. The Hostel Allocation Committee reviews applications based on distance from hometown and other criteria."
    },
    { 
      question: "What items should I bring to the hostel?",
      answer: "You should bring bedsheets, pillows, towels, personal toiletries, and study materials. Basic furniture (bed, desk, chair, wardrobe) is provided."
    },
    { 
      question: "How are roommates assigned?",
      answer: "Roommates are typically assigned based on department/course, year of study, and personal preferences indicated in your application."
    },
    {
      question: "Can I change my room or hostel?",
      answer: "Room changes are considered at the end of each semester based on availability and valid reasons. Submit a request to the Hostel Administration Office."
    }
  ];

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Hostel Accommodations</h1>
          <p className="text-muted-foreground">
            On-campus living options for students
          </p>
        </div>
      </div>

      <Tabs defaultValue="boys" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="boys">Boys Hostels</TabsTrigger>
          <TabsTrigger value="girls">Girls Hostels</TabsTrigger>
          <TabsTrigger value="info">Information & FAQs</TabsTrigger>
        </TabsList>
        
        <TabsContent value="boys" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boysHostels.map(hostel => (
              <Card key={hostel.id} className="overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <Building className="h-12 w-12 text-primary/50" />
                </div>
                <CardHeader>
                  <CardTitle>{hostel.name}</CardTitle>
                  <CardDescription>Boys Hostel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{hostel.occupancy} Occupancy</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{hostel.distance} to Academic Buildings</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {hostel.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline">{amenity}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Boys Hostel Administration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-medium">North Hall Warden</h3>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Dr. James Wilson</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">+1 (555) 234-5678</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">north.warden@chillcampus.edu</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Eagle Heights Warden</h3>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Prof. Michael Thomas</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">+1 (555) 345-6789</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">eagle.warden@chillcampus.edu</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Western Towers Warden</h3>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Dr. Robert Chen</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">+1 (555) 456-7890</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">western.warden@chillcampus.edu</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="girls" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {girlsHostels.map(hostel => (
              <Card key={hostel.id} className="overflow-hidden">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <Home className="h-12 w-12 text-primary/50" />
                </div>
                <CardHeader>
                  <CardTitle>{hostel.name}</CardTitle>
                  <CardDescription>Girls Hostel</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{hostel.occupancy} Occupancy</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{hostel.distance} to Academic Buildings</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {hostel.amenities.map((amenity, index) => (
                        <Badge key={index} variant="outline">{amenity}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Girls Hostel Administration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-medium">Lakeside Residence Warden</h3>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Dr. Emily Rodriguez</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">+1 (555) 567-8901</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">lakeside.warden@chillcampus.edu</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Maple Heights Warden</h3>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Prof. Sarah Williams</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">+1 (555) 678-9012</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">maple.warden@chillcampus.edu</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Sunrise Hall Warden</h3>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Dr. Maria Patel</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">+1 (555) 789-0123</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">sunrise.warden@chillcampus.edu</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="info" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Hostel Information</CardTitle>
                <CardDescription>
                  Important details for resident students
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-3">Hostel Amenities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {hostelAmenities.map((amenity, index) => (
                        <div key={index} className="flex items-center space-x-2 p-3 bg-muted rounded-md">
                          <div className="bg-primary/10 p-2 rounded-full">
                            {amenity.icon}
                          </div>
                          <span>{amenity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Hostel Rules & Regulations</h3>
                    <ul className="space-y-2">
                      {hostelRules.map((rule, index) => (
                        <li key={index} className="flex items-center">
                          <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                          <span className="text-sm">{rule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">Important Contacts</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium">Chief Warden</h4>
                        <div className="text-sm text-muted-foreground mt-1">Dr. Jonathan Clark</div>
                        <div className="text-sm text-muted-foreground">chief.warden@chillcampus.edu</div>
                        <div className="text-sm text-muted-foreground">+1 (555) 123-4567</div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium">Hostel Administration Office</h4>
                        <div className="text-sm text-muted-foreground mt-1">Admin Building, Room 102</div>
                        <div className="text-sm text-muted-foreground">hostels@chillcampus.edu</div>
                        <div className="text-sm text-muted-foreground">+1 (555) 890-1234</div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium">Security & Emergency</h4>
                        <div className="text-sm text-muted-foreground mt-1">24/7 Campus Security</div>
                        <div className="text-sm text-muted-foreground">security@chillcampus.edu</div>
                        <div className="text-sm text-muted-foreground">+1 (555) 911-0000</div>
                      </div>
                      
                      <div className="border rounded-md p-3">
                        <h4 className="font-medium">Maintenance & Repairs</h4>
                        <div className="text-sm text-muted-foreground mt-1">Facilities Department</div>
                        <div className="text-sm text-muted-foreground">maintenance@chillcampus.edu</div>
                        <div className="text-sm text-muted-foreground">+1 (555) 456-7890</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {hostelFAQs.map((faq, index) => (
                      <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                        <h4 className="font-medium">{faq.question}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Hostel Fees</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Single Occupancy</span>
                    <span>$3,500 per semester</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Double Occupancy</span>
                    <span>$2,800 per semester</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Triple Occupancy</span>
                    <span>$2,200 per semester</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="font-medium">Security Deposit</span>
                    <span>$500 (refundable)</span>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md mt-4">
                    <p className="text-sm">
                      <strong>Note:</strong> Fees include utilities, Wi-Fi, and basic maintenance.
                      Meal plans are purchased separately.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Apply for Accommodation</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Hostels;
