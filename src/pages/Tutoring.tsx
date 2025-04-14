
import { UserPlus, Calendar, Clock, GraduationCap, Users, BookOpen, CalendarDays, Lightbulb, MessageSquare, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Tutoring = () => {
  const upcomingSessions = [
    { id: 1, subject: "Calculus", tutor: "Dr. Patel", date: "Apr 16, 2025", time: "2:00 PM - 3:30 PM", location: "Math Center" },
    { id: 2, subject: "Data Structures", tutor: "Prof. Johnson", date: "Apr 18, 2025", time: "10:00 AM - 11:30 AM", location: "CS Lab 2" }
  ];
  
  const availableTutors = [
    { id: 1, name: "Sarah Williams", subject: "Mathematics", rating: 4.8, image: null, availability: "High" },
    { id: 2, name: "David Chen", subject: "Computer Science", rating: 4.9, image: null, availability: "Medium" },
    { id: 3, name: "Emily Patel", subject: "Physics", rating: 4.7, image: null, availability: "Low" },
    { id: 4, name: "Michael Rodriguez", subject: "Chemistry", rating: 4.6, image: null, availability: "High" }
  ];
  
  const workshopEvents = [
    { id: 1, title: "Exam Preparation Strategies", date: "April 22, 2025", time: "3:00 PM - 4:30 PM", seats: 25 },
    { id: 2, title: "Research Paper Writing", date: "April 25, 2025", time: "2:00 PM - 3:30 PM", seats: 20 },
    { id: 3, title: "Programming Interview Prep", date: "April 30, 2025", time: "1:00 PM - 2:30 PM", seats: 15 }
  ];
  
  const subjectAreas = [
    { name: "Mathematics", count: 32 },
    { name: "Computer Science", count: 28 },
    { name: "Physics", count: 24 },
    { name: "Chemistry", count: 18 },
    { name: "Biology", count: 22 },
    { name: "Engineering", count: 26 }
  ];

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Tutoring Center</h1>
          <p className="text-muted-foreground">
            Get academic support and improve your grades
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            My Sessions
          </Button>
          <Button size="sm">
            <UserPlus className="mr-2 h-4 w-4" />
            Book a Tutor
          </Button>
        </div>
      </div>

      <Tabs defaultValue="schedule" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="tutors">Find Tutors</TabsTrigger>
          <TabsTrigger value="workshops">Workshops</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        
        <TabsContent value="schedule" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Upcoming Sessions
                </CardTitle>
                <CardDescription>
                  Your scheduled tutoring appointments
                </CardDescription>
              </CardHeader>
              <CardContent>
                {upcomingSessions.length > 0 ? (
                  <div className="space-y-4">
                    {upcomingSessions.map(session => (
                      <div key={session.id} className="flex items-center p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                          <GraduationCap className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{session.subject}</div>
                          <div className="text-sm text-muted-foreground">
                            {session.tutor} • {session.date} • {session.time}
                          </div>
                          <div className="text-xs mt-1">{session.location}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button variant="outline" size="sm">Reschedule</Button>
                          <Button variant="ghost" size="sm" className="text-red-500">Cancel</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Calendar className="h-12 w-12 mb-4 text-muted-foreground opacity-50" />
                    <h3 className="text-lg font-medium mb-1">No Upcoming Sessions</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      You don't have any tutoring sessions scheduled yet.
                    </p>
                    <Button>
                      <UserPlus className="mr-2 h-4 w-4" />
                      Book a Session
                    </Button>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Sessions</Button>
              </CardFooter>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Book</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Subject</label>
                      <select className="w-full p-2 rounded-md border">
                        <option>Mathematics</option>
                        <option>Computer Science</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                        <option>Engineering</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date</label>
                      <input type="date" className="w-full p-2 rounded-md border" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time</label>
                      <select className="w-full p-2 rounded-md border">
                        <option>9:00 AM - 10:30 AM</option>
                        <option>11:00 AM - 12:30 PM</option>
                        <option>1:00 PM - 2:30 PM</option>
                        <option>3:00 PM - 4:30 PM</option>
                        <option>5:00 PM - 6:30 PM</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Session Type</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button className="p-2 border rounded-md text-center">One-on-One</button>
                        <button className="p-2 border rounded-md text-center bg-muted/50">Group Session</button>
                      </div>
                    </div>
                    
                    <Button className="w-full">Find Available Tutors</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Tutoring Center Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Monday - Friday</span>
                      <span className="text-sm font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Saturday</span>
                      <span className="text-sm font-medium">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Sunday</span>
                      <span className="text-sm font-medium">12:00 PM - 6:00 PM</span>
                    </div>
                    
                    <div className="pt-3 border-t mt-3">
                      <h4 className="text-sm font-medium mb-1">Location</h4>
                      <p className="text-sm text-muted-foreground">
                        Academic Building, Floor 2, Room 203
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="tutors" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="md:col-span-1">
              <CardHeader>
                <CardTitle>Filter Tutors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Subject Area</label>
                    <select className="w-full p-2 rounded-md border">
                      <option>All Subjects</option>
                      {subjectAreas.map(subject => (
                        <option key={subject.name}>{subject.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Availability</label>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <input type="checkbox" id="avail-today" className="mr-2" />
                        <label htmlFor="avail-today" className="text-sm">Available Today</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="avail-week" className="mr-2" />
                        <label htmlFor="avail-week" className="text-sm">Available This Week</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="avail-weekend" className="mr-2" />
                        <label htmlFor="avail-weekend" className="text-sm">Available on Weekends</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Tutor Type</label>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <input type="checkbox" id="type-faculty" className="mr-2" />
                        <label htmlFor="type-faculty" className="text-sm">Faculty</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="type-graduate" className="mr-2" />
                        <label htmlFor="type-graduate" className="text-sm">Graduate Students</label>
                      </div>
                      <div className="flex items-center">
                        <input type="checkbox" id="type-peer" className="mr-2" />
                        <label htmlFor="type-peer" className="text-sm">Peer Tutors</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Rating</label>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <input type="radio" name="rating" id="rating-all" className="mr-2" defaultChecked />
                        <label htmlFor="rating-all" className="text-sm">All Ratings</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" name="rating" id="rating-4plus" className="mr-2" />
                        <label htmlFor="rating-4plus" className="text-sm">4.5+ Stars</label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" name="rating" id="rating-4" className="mr-2" />
                        <label htmlFor="rating-4" className="text-sm">4.0+ Stars</label>
                      </div>
                    </div>
                  </div>
                  
                  <Button className="w-full">Apply Filters</Button>
                </div>
              </CardContent>
            </Card>
            
            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Available Tutors</CardTitle>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-muted-foreground">Sort by:</span>
                      <select className="p-1 text-sm border rounded">
                        <option>Availability</option>
                        <option>Rating</option>
                        <option>Subject</option>
                      </select>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {availableTutors.map(tutor => (
                      <div key={tutor.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start">
                          <Avatar className="h-12 w-12 mr-4">
                            <AvatarImage src={tutor.image || ""} />
                            <AvatarFallback>{tutor.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="font-medium">{tutor.name}</div>
                            <div className="text-sm text-muted-foreground">{tutor.subject}</div>
                            <div className="flex items-center mt-1">
                              <div className="text-yellow-500 text-sm">★★★★★</div>
                              <span className="text-xs ml-1">{tutor.rating}/5.0</span>
                            </div>
                          </div>
                          <Badge variant={
                            tutor.availability === "High" ? "default" :
                            tutor.availability === "Medium" ? "secondary" : "outline"
                          }>
                            {tutor.availability} Availability
                          </Badge>
                        </div>
                        <div className="mt-4 flex justify-between">
                          <Button variant="outline" size="sm">
                            <Users className="mr-2 h-4 w-4" />
                            View Profile
                          </Button>
                          <Button size="sm">
                            <Calendar className="mr-2 h-4 w-4" />
                            Book Session
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All Tutors</Button>
                </CardFooter>
              </Card>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Become a Tutor</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Share your knowledge and help fellow students while earning. Join our tutoring program.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Flexible hours to fit your schedule</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Competitive compensation</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Professional development opportunities</span>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">Apply Now</Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Online Tutoring</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with tutors virtually from anywhere. All you need is an internet connection.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">24/7 availability for select subjects</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Screen sharing for easy collaboration</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Record sessions for later review</span>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">Try Online Tutoring</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="workshops" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CalendarDays className="mr-2 h-5 w-5" />
                  Upcoming Workshops & Events
                </CardTitle>
                <CardDescription>
                  Group learning sessions and skill-building workshops
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {workshopEvents.map(event => (
                    <div key={event.id} className="border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium">{event.title}</h3>
                          <div className="text-sm text-muted-foreground mt-1">
                            {event.date} • {event.time}
                          </div>
                        </div>
                        <Badge variant="outline">{event.seats} seats left</Badge>
                      </div>
                      <div className="mt-4 flex justify-between items-center">
                        <Button variant="outline" size="sm">
                          <Lightbulb className="mr-2 h-4 w-4" />
                          Learn More
                        </Button>
                        <Button size="sm">Register</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Workshops</Button>
              </CardFooter>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Workshop Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="ghost" className="w-full justify-start">
                      <Target className="mr-2 h-4 w-4" />
                      Exam Preparation
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Academic Writing
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Users className="mr-2 h-4 w-4" />
                      Group Study Skills
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Presentation Skills
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                      <Lightbulb className="mr-2 h-4 w-4" />
                      Research Methods
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Request a Workshop</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Don't see a workshop on a topic you need? Request one!
                  </p>
                  <div className="space-y-3">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Topic</label>
                      <input className="w-full p-2 rounded-md border" placeholder="Workshop topic" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Description</label>
                      <textarea 
                        className="w-full p-2 rounded-md border" 
                        rows={3} 
                        placeholder="Briefly describe what you'd like to learn"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full">Submit Request</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="resources" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Study Guides</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                    <div className="font-medium">Calculus I Study Guide</div>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive guide covering limits, derivatives, and integrals.
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                    <div className="font-medium">Physics Formulas Cheat Sheet</div>
                    <p className="text-sm text-muted-foreground">
                      Quick reference for mechanics, thermodynamics, and electromagnetism.
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                  
                  <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                    <div className="font-medium">Data Structures Reference</div>
                    <p className="text-sm text-muted-foreground">
                      Clear explanations of arrays, linked lists, trees, and graphs.
                    </p>
                    <Button size="sm" variant="outline" className="mt-2">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Study Guides</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Video Tutorials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-32 bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Video Preview</span>
                    </div>
                    <div className="p-3">
                      <div className="font-medium">Python Programming Basics</div>
                      <p className="text-sm text-muted-foreground">
                        Introduction to Python syntax, data types, and control structures.
                      </p>
                      <div className="flex items-center mt-2 text-xs text-muted-foreground">
                        <span>24 minutes • 4,521 views</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-32 bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground">Video Preview</span>
                    </div>
                    <div className="p-3">
                      <div className="font-medium">Organic Chemistry Reactions</div>
                      <p className="text-sm text-muted-foreground">
                        Visual guide to common organic chemistry reaction mechanisms.
                      </p>
                      <div className="flex items-center mt-2 text-xs text-muted-foreground">
                        <span>32 minutes • 3,842 views</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View Video Library</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Practice Problems</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                    <div className="font-medium">Calculus Problem Set</div>
                    <p className="text-sm text-muted-foreground">
                      100 practice problems with step-by-step solutions.
                    </p>
                    <div className="flex justify-between mt-2">
                      <Badge variant="outline">Beginner</Badge>
                      <Button size="sm" variant="ghost">Start Practice</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                    <div className="font-medium">Data Structures & Algorithms</div>
                    <p className="text-sm text-muted-foreground">
                      Coding challenges with hints and explanations.
                    </p>
                    <div className="flex justify-between mt-2">
                      <Badge variant="outline">Intermediate</Badge>
                      <Button size="sm" variant="ghost">Start Practice</Button>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg p-3 hover:bg-muted/50 transition-colors">
                    <div className="font-medium">Physics Problem Bank</div>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive collection of mechanics and E&M problems.
                    </p>
                    <div className="flex justify-between mt-2">
                      <Badge variant="outline">Advanced</Badge>
                      <Button size="sm" variant="ghost">Start Practice</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Practice Problems</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tutoring;
