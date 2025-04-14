
import { Book, BookOpen, ChevronRight, Search, Clock, Download, BookMarked } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Library = () => {
  const recentBooks = [
    { id: 1, title: "Principles of Computer Science", author: "David Johnson", coverColor: "bg-blue-100" },
    { id: 2, title: "Advanced Calculus", author: "Maria Rodriguez", coverColor: "bg-green-100" },
    { id: 3, title: "Modern Physics", author: "Robert Chen", coverColor: "bg-purple-100" },
    { id: 4, title: "Data Structures and Algorithms", author: "Sarah Williams", coverColor: "bg-orange-100" }
  ];
  
  const bookCollections = [
    { id: 1, name: "Computer Science", count: 523 },
    { id: 2, name: "Mathematics", count: 412 },
    { id: 3, name: "Physics", count: 389 },
    { id: 4, name: "Engineering", count: 467 },
    { id: 5, name: "Business", count: 321 },
    { id: 6, name: "Literature", count: 278 }
  ];
  
  const digitalResources = [
    { id: 1, title: "IEEE Xplore Digital Library", type: "Journal Database" },
    { id: 2, title: "ACM Digital Library", type: "Research Papers" },
    { id: 3, title: "JSTOR", type: "Academic Journals" },
    { id: 4, title: "Science Direct", type: "Research Database" }
  ];

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Library Services</h1>
          <p className="text-muted-foreground">
            Access academic resources and research materials
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Clock className="mr-2 h-4 w-4" />
            Library Hours
          </Button>
          <Button size="sm">
            <BookMarked className="mr-2 h-4 w-4" />
            My Borrowings
          </Button>
        </div>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input 
          className="pl-10 py-6 bg-muted"
          placeholder="Search books, journals, or resources..." 
        />
      </div>
      
      <Tabs defaultValue="catalog" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="catalog">Catalog</TabsTrigger>
          <TabsTrigger value="digital">Digital Resources</TabsTrigger>
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="study">Study Spaces</TabsTrigger>
        </TabsList>
        
        <TabsContent value="catalog" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recently Added Books</CardTitle>
                  <CardDescription>
                    New additions to our library collection
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {recentBooks.map(book => (
                      <div key={book.id} className="flex border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                        <div className={`${book.coverColor} w-24 flex-shrink-0 flex items-center justify-center`}>
                          <Book className="h-8 w-8 text-foreground/70" />
                        </div>
                        <div className="p-3 flex-1">
                          <h3 className="font-medium line-clamp-1">{book.title}</h3>
                          <p className="text-sm text-muted-foreground">{book.author}</p>
                          <div className="mt-2 flex justify-between items-center">
                            <Badge variant="outline">New</Badge>
                            <Button size="sm" variant="ghost">
                              <BookOpen className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">View All New Additions</Button>
                </CardFooter>
              </Card>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Popular Reads</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="border-b pb-2">
                        <div className="font-medium">Artificial Intelligence: A Modern Approach</div>
                        <div className="text-sm text-muted-foreground">Stuart Russell, Peter Norvig</div>
                      </li>
                      <li className="border-b pb-2">
                        <div className="font-medium">Introduction to Algorithms</div>
                        <div className="text-sm text-muted-foreground">Thomas H. Cormen</div>
                      </li>
                      <li className="border-b pb-2">
                        <div className="font-medium">Atomic Habits</div>
                        <div className="text-sm text-muted-foreground">James Clear</div>
                      </li>
                      <li>
                        <div className="font-medium">Deep Learning</div>
                        <div className="text-sm text-muted-foreground">Ian Goodfellow</div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Reading Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="font-medium">For Computer Science Students</div>
                        <p className="text-sm text-muted-foreground">Clean Code: A Handbook of Agile Software Craftsmanship</p>
                      </div>
                      <div className="bg-muted p-3 rounded-lg">
                        <div className="font-medium">For Mathematics Students</div>
                        <p className="text-sm text-muted-foreground">Gödel, Escher, Bach: An Eternal Golden Braid</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Collections</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {bookCollections.map(collection => (
                      <li key={collection.id}>
                        <Button 
                          variant="ghost" 
                          className="w-full justify-between"
                        >
                          <span>{collection.name}</span>
                          <Badge variant="secondary">{collection.count}</Badge>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Library Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium text-sm">Opening Hours</h3>
                    <p className="text-sm text-muted-foreground">Monday - Friday: 8:00 AM - 10:00 PM</p>
                    <p className="text-sm text-muted-foreground">Saturday - Sunday: 10:00 AM - 8:00 PM</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-sm">Location</h3>
                    <p className="text-sm text-muted-foreground">Main Campus, Building C, Floor 2</p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-sm">Contact</h3>
                    <p className="text-sm text-muted-foreground">library@chillcampus.edu</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="digital" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Digital Resources</CardTitle>
                <CardDescription>
                  Access online journals, databases and e-books
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {digitalResources.map(resource => (
                    <div key={resource.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="font-medium">{resource.title}</h3>
                          <p className="text-sm text-muted-foreground">{resource.type}</p>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">View All Digital Resources</Button>
              </CardFooter>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>E-Book Collections</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li>
                      <Button variant="ghost" className="w-full justify-between">
                        <span>Academic E-Books</span>
                        <Badge variant="secondary">1,234</Badge>
                      </Button>
                    </li>
                    <li>
                      <Button variant="ghost" className="w-full justify-between">
                        <span>Research Papers</span>
                        <Badge variant="secondary">4,567</Badge>
                      </Button>
                    </li>
                    <li>
                      <Button variant="ghost" className="w-full justify-between">
                        <span>Technical Manuals</span>
                        <Badge variant="secondary">892</Badge>
                      </Button>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Access Guides</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Download className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Journal Access Guide</div>
                      <div className="text-sm text-muted-foreground">PDF, 1.2MB</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                    <Download className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Database Login Guide</div>
                      <div className="text-sm text-muted-foreground">PDF, 0.8MB</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="services" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Borrowing Services</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">How to Borrow Books</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Students can borrow up to 10 books at a time for a period of 14 days with the option to renew twice.
                    </p>
                    <Button className="mt-3" size="sm">Borrow Guidelines</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Interlibrary Loan</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Request materials from other libraries if they're not available in our collection.
                    </p>
                    <Button className="mt-3" size="sm" variant="outline">Make a Request</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Book Returns</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Return books at the circulation desk or in the drop boxes located around campus.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Research Support</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Research Consultation</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Schedule a one-on-one meeting with a librarian to get help with your research project.
                    </p>
                    <Button className="mt-3" size="sm">Schedule Appointment</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Citation Assistance</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Get help with formatting citations in APA, MLA, Chicago, and other styles.
                    </p>
                    <Button className="mt-3" size="sm" variant="outline">Citation Guide</Button>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Workshops</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Join workshops on research methodologies, database searching, and academic writing.
                    </p>
                    <div className="mt-3 flex items-center text-sm text-primary">
                      <span>Upcoming: Research Database Workshop, April 20</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="study" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Study Spaces</CardTitle>
                <CardDescription>
                  Find the perfect space for individual or group study
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-medium">Individual Study Carrels</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Quiet spaces for focused individual study. Located on floors 2 and 3.
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">50 Available</Badge>
                        <Button size="sm">Reserve</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-medium">Group Study Rooms</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Collaborative spaces for group projects and discussions. 4-8 person capacity.
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">8 Available</Badge>
                        <Button size="sm">Reserve</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-medium">Silent Reading Room</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Complete silence for deep concentration. Located on floor 4.
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">30 Available</Badge>
                        <Button size="sm">Details</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-primary/10 flex items-center justify-center">
                      <span className="text-lg font-medium">Computer Labs</span>
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-muted-foreground mb-3">
                        Workstations with specialized software for research and projects.
                      </p>
                      <div className="flex justify-between items-center">
                        <Badge variant="outline">15 Available</Badge>
                        <Button size="sm">Reserve</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Reservation System</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-sm text-muted-foreground">
                      Reserve study spaces up to 2 weeks in advance using our online system.
                    </p>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Date</label>
                      <Input type="date" />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Time</label>
                      <select className="w-full p-2 rounded-md border">
                        <option>9:00 AM - 10:00 AM</option>
                        <option>10:00 AM - 11:00 AM</option>
                        <option>11:00 AM - 12:00 PM</option>
                        <option>12:00 PM - 1:00 PM</option>
                        <option>1:00 PM - 2:00 PM</option>
                        <option>2:00 PM - 3:00 PM</option>
                      </select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Space Type</label>
                      <select className="w-full p-2 rounded-md border">
                        <option>Individual Carrel</option>
                        <option>Group Study Room</option>
                        <option>Computer Workstation</option>
                        <option>Reading Room Seat</option>
                      </select>
                    </div>
                    
                    <Button className="w-full">Check Availability</Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Library Amenities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm">Free Wi-Fi throughout the library</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm">Printing and scanning services</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm">Charging stations for devices</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm">Small café on the main floor</span>
                    </li>
                    <li className="flex items-center">
                      <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm">Lockers for personal belongings</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Library;
