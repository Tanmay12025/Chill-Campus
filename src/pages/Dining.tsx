
import { UtensilsCrossed, Clock, Utensils, Coffee, Leaf, CircleOff, Pizza, MapPin, Star, CreditCard, BadgeDollarSign, Cake } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Dining = () => {
  const messOptions = [
    { 
      id: 1, 
      name: "Central Dining Hall", 
      type: ["Veg", "Non-Veg", "Jain"], 
      rating: 4.2, 
      timings: "7:00 AM - 9:30 PM",
      location: "Campus Center"
    },
    { 
      id: 2, 
      name: "North Campus Mess", 
      type: ["Veg", "Non-Veg"], 
      rating: 4.0, 
      timings: "7:30 AM - 9:00 PM",
      location: "North Hostel Complex"
    },
    { 
      id: 3, 
      name: "South Side Dining", 
      type: ["Veg", "Jain"], 
      rating: 4.3, 
      timings: "7:00 AM - 9:00 PM",
      location: "South Academic Block"
    }
  ];
  
  const restaurantOptions = [
    { 
      id: 1, 
      name: "Campus Cafe", 
      cuisine: "Multi-cuisine", 
      rating: 4.5, 
      priceRange: "$$",
      location: "Student Center, Ground Floor"
    },
    { 
      id: 2, 
      name: "The Brew House", 
      cuisine: "Coffee & Snacks", 
      rating: 4.6, 
      priceRange: "$",
      location: "Library Building, Floor 1"
    },
    { 
      id: 3, 
      name: "Fresh Bites", 
      cuisine: "Healthy & Salads", 
      rating: 4.4, 
      priceRange: "$$",
      location: "Sports Complex"
    },
    { 
      id: 4, 
      name: "Spice Route", 
      cuisine: "Indian & Asian", 
      rating: 4.7, 
      priceRange: "$$$",
      location: "Campus Gateway"
    }
  ];
  
  const vegMenu = [
    { item: "Paneer Butter Masala", price: "$4.50" },
    { item: "Veg Biryani", price: "$4.00" },
    { item: "Dal Makhani", price: "$3.50" },
    { item: "Aloo Gobi", price: "$3.00" },
    { item: "Veg Pulao", price: "$3.50" },
    { item: "Roti/Naan", price: "$1.00" }
  ];
  
  const nonVegMenu = [
    { item: "Butter Chicken", price: "$5.50" },
    { item: "Chicken Biryani", price: "$5.00" },
    { item: "Mutton Curry", price: "$6.00" },
    { item: "Fish Tikka", price: "$5.50" },
    { item: "Egg Curry", price: "$4.00" },
    { item: "Chicken Fried Rice", price: "$4.50" }
  ];
  
  const jainMenu = [
    { item: "Jain Paneer Curry", price: "$4.50" },
    { item: "Jain Pulao", price: "$3.50" },
    { item: "Dal Tadka (Jain)", price: "$3.00" },
    { item: "Mixed Veg (Jain)", price: "$3.50" },
    { item: "Jain Roti/Naan", price: "$1.00" }
  ];
  
  const mealPlans = [
    { 
      name: "Basic Plan", 
      meals: "15 meals/week", 
      price: "$1,200/semester",
      features: ["All dining halls", "No rollover meals", "Basic variety"] 
    },
    { 
      name: "Standard Plan", 
      meals: "19 meals/week", 
      price: "$1,500/semester",
      features: ["All dining locations", "Weekend service", "Greater variety", "5 guest passes/semester"] 
    },
    { 
      name: "Premium Plan", 
      meals: "Unlimited", 
      price: "$1,800/semester",
      features: ["All campus dining options", "Restaurant discounts", "Special event access", "10 guest passes/semester"] 
    }
  ];

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Mess & Restaurant Options</h1>
          <p className="text-muted-foreground">
            Campus dining facilities and food services
          </p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Clock className="mr-2 h-4 w-4" />
            Dining Hours
          </Button>
          <Button size="sm">
            <Utensils className="mr-2 h-4 w-4" />
            Meal Plans
          </Button>
        </div>
      </div>

      <Tabs defaultValue="mess" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="mess">Mess Facilities</TabsTrigger>
          <TabsTrigger value="restaurants">Campus Restaurants</TabsTrigger>
          <TabsTrigger value="menu">Menu Examples</TabsTrigger>
          <TabsTrigger value="plans">Meal Plans</TabsTrigger>
        </TabsList>
        
        <TabsContent value="mess" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {messOptions.map(mess => (
              <Card key={mess.id}>
                <CardHeader>
                  <CardTitle>{mess.name}</CardTitle>
                  <CardDescription>Campus Mess</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Utensils className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">
                        {mess.type.join(", ")} Options
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{mess.timings}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{mess.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-yellow-500" />
                      <span className="text-sm">{mess.rating}/5.0 Student Rating</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {mess.type.map(type => (
                        <Badge key={type} variant={
                          type === "Veg" ? "default" : 
                          type === "Non-Veg" ? "destructive" : 
                          "outline"
                        }>
                          {type === "Veg" && <Leaf className="h-3 w-3 mr-1" />}
                          {type === "Non-Veg" && <UtensilsCrossed className="h-3 w-3 mr-1" />}
                          {type === "Jain" && <CircleOff className="h-3 w-3 mr-1" />}
                          {type}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">View Today's Menu</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Mess Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-medium">Meal Timings</h3>
                  <div className="border rounded-md p-3">
                    <div className="font-medium text-sm">Breakfast</div>
                    <div className="text-sm text-muted-foreground">7:00 AM - 9:30 AM</div>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="font-medium text-sm">Lunch</div>
                    <div className="text-sm text-muted-foreground">12:00 PM - 2:30 PM</div>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="font-medium text-sm">Dinner</div>
                    <div className="text-sm text-muted-foreground">7:00 PM - 9:30 PM</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Dietary Accommodations</h3>
                  <div className="text-sm">
                    <p className="mb-2">Our mess facilities cater to various dietary requirements:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                        <span>Vegetarian options at all locations</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                        <span>Jain food (no root vegetables)</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                        <span>Non-vegetarian options at select locations</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-1.5 w-1.5 bg-primary rounded-full mr-2"></div>
                        <span>Special diet accommodations with prior notice</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Mess Committee</h3>
                  <p className="text-sm">
                    The student-faculty mess committee meets monthly to review food quality, 
                    suggest improvements, and address student concerns.
                  </p>
                  <div className="border rounded-md p-3">
                    <div className="font-medium text-sm">Committee Contact</div>
                    <div className="text-sm text-muted-foreground">messcommittee@chillcampus.edu</div>
                    <Button variant="outline" size="sm" className="mt-2 w-full">
                      Submit Feedback
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="restaurants" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurantOptions.map(restaurant => (
              <Card key={restaurant.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>{restaurant.name}</CardTitle>
                      <CardDescription>{restaurant.cuisine}</CardDescription>
                    </div>
                    <Badge variant="outline">{restaurant.priceRange}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span className="text-sm">{restaurant.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-2 text-yellow-500" />
                      <span className="text-sm">{restaurant.rating}/5.0 Student Rating</span>
                    </div>
                    <div className="bg-muted p-3 rounded-md mt-2">
                      <h4 className="text-sm font-medium">Popular Items:</h4>
                      <ul className="mt-1">
                        {restaurant.name === "Campus Cafe" && (
                          <>
                            <li className="text-sm">• Grilled Panini - $5.99</li>
                            <li className="text-sm">• Butter Chicken Bowl - $7.99</li>
                            <li className="text-sm">• Veggie Wrap - $4.99</li>
                          </>
                        )}
                        {restaurant.name === "The Brew House" && (
                          <>
                            <li className="text-sm">• Caramel Macchiato - $3.99</li>
                            <li className="text-sm">• Chocolate Croissant - $2.99</li>
                            <li className="text-sm">• Iced Americano - $2.49</li>
                          </>
                        )}
                        {restaurant.name === "Fresh Bites" && (
                          <>
                            <li className="text-sm">• Protein Bowl - $8.49</li>
                            <li className="text-sm">• Greek Salad - $6.99</li>
                            <li className="text-sm">• Avocado Toast - $5.49</li>
                          </>
                        )}
                        {restaurant.name === "Spice Route" && (
                          <>
                            <li className="text-sm">• Butter Naan & Curry - $9.99</li>
                            <li className="text-sm">• Pad Thai - $10.99</li>
                            <li className="text-sm">• Biryani Special - $11.49</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Options
                  </Button>
                  <Button>
                    <Pizza className="mr-2 h-4 w-4" />
                    Full Menu
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Special Dining Events</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">International Food Festival</h3>
                      <Badge>Upcoming</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      April 25, 2025 • Campus Center Plaza
                    </p>
                    <p className="text-sm mt-2">
                      Sample cuisines from around the world prepared by student clubs and local restaurants.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Farm-to-Table Dinner</h3>
                      <Badge variant="outline">Monthly</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      First Friday of each month • Campus Cafe
                    </p>
                    <p className="text-sm mt-2">
                      Special dinner featuring locally-sourced ingredients and sustainable practices.
                    </p>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Cultural Night Dinners</h3>
                      <Badge variant="secondary">Recurring</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Wednesdays • Central Dining Hall
                    </p>
                    <p className="text-sm mt-2">
                      Weekly themed dinners celebrating different cultures and cuisines.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Food Services Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Payment Methods</h3>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Campus Card</Badge>
                      <Badge variant="outline">Meal Plan</Badge>
                      <Badge variant="outline">Credit/Debit</Badge>
                      <Badge variant="outline">Mobile Payment</Badge>
                      <Badge variant="outline">Cash</Badge>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Catering Services</h3>
                    <p className="text-sm text-muted-foreground">
                      Campus dining offers catering for student organization events, 
                      department meetings, and special functions.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Request Catering Quote
                    </Button>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Food Allergies & Restrictions</h3>
                    <p className="text-sm text-muted-foreground">
                      Students with food allergies or dietary restrictions can schedule
                      a consultation with our nutrition team to ensure their needs are met.
                    </p>
                    <Button variant="outline" size="sm" className="mt-2">
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="menu" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="bg-green-50 dark:bg-green-900/20">
                <CardTitle className="flex items-center">
                  <Leaf className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                  Vegetarian Menu
                </CardTitle>
                <CardDescription>
                  Available at all dining locations
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {vegMenu.map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                      <span>{item.item}</span>
                      <span className="font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50">
                <p className="text-xs text-muted-foreground">
                  * All vegetarian meals include rice/roti, salad, and dessert of the day.
                </p>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="bg-red-50 dark:bg-red-900/20">
                <CardTitle className="flex items-center">
                  <UtensilsCrossed className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" />
                  Non-Vegetarian Menu
                </CardTitle>
                <CardDescription>
                  Available at select dining locations
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {nonVegMenu.map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                      <span>{item.item}</span>
                      <span className="font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50">
                <p className="text-xs text-muted-foreground">
                  * All non-vegetarian meals include rice/roti, salad, and dessert of the day.
                </p>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader className="bg-yellow-50 dark:bg-yellow-900/20">
                <CardTitle className="flex items-center">
                  <CircleOff className="h-5 w-5 mr-2 text-yellow-600 dark:text-yellow-400" />
                  Jain Menu
                </CardTitle>
                <CardDescription>
                  No onion, garlic, or root vegetables
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-3">
                  {jainMenu.map((item, index) => (
                    <div key={index} className="flex justify-between items-center pb-2 border-b last:border-0">
                      <span>{item.item}</span>
                      <span className="font-medium">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-muted/50">
                <p className="text-xs text-muted-foreground">
                  * All Jain meals include rice/roti, salad, and dessert of the day.
                </p>
              </CardFooter>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Weekly Rotation</CardTitle>
                <CardDescription>
                  Our menus rotate weekly with daily specials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="border rounded-md p-3">
                    <div className="font-medium">Monday Special</div>
                    <p className="text-sm text-muted-foreground">
                      North Indian Cuisine Day
                    </p>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="font-medium">Tuesday Special</div>
                    <p className="text-sm text-muted-foreground">
                      South Indian Cuisine Day
                    </p>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="font-medium">Wednesday Special</div>
                    <p className="text-sm text-muted-foreground">
                      International Cuisine Day
                    </p>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="font-medium">Thursday Special</div>
                    <p className="text-sm text-muted-foreground">
                      Chinese & Oriental Cuisine
                    </p>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="font-medium">Friday Special</div>
                    <p className="text-sm text-muted-foreground">
                      Street Food Festival
                    </p>
                  </div>
                  <div className="border rounded-md p-3">
                    <div className="font-medium">Weekend Special</div>
                    <p className="text-sm text-muted-foreground">
                      Chef's Special Menu
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Special Diet Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Allergen Information</h3>
                    <p className="text-sm text-muted-foreground">
                      All menu items are labeled with common allergens. Students with severe 
                      allergies should contact the dining services for accommodations.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Nutritional Information</h3>
                    <p className="text-sm text-muted-foreground">
                      Calorie and nutritional information is available for all menu items 
                      via the digital menu boards or the campus dining app.
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h3 className="text-sm font-medium mb-2">Special Diet Programs</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Gluten-Free Options</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Vegan Menu Available</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">Low-Calorie Selections</span>
                      </div>
                      <div className="flex items-center">
                        <div className="h-2 w-2 bg-primary rounded-full mr-2"></div>
                        <span className="text-sm">High-Protein Options</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="text-sm font-medium flex items-center">
                      <Cake className="h-4 w-4 mr-2" />
                      Special Occasion Requests
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      Birthday cakes and special occasion meals can be ordered with 48 hours notice.
                    </p>
                    <Button size="sm" variant="outline" className="mt-2 w-full">
                      Request Special Order
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="plans" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mealPlans.map((plan, index) => (
              <Card key={index} className={index === 1 ? "border-primary" : ""}>
                {index === 1 && (
                  <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.meals}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <span className="text-2xl font-bold">{plan.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="h-5 w-5 flex-shrink-0">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="text-primary"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <span className="ml-2 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                    Select Plan
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Meal Plan Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-3">
                  <h3 className="font-medium">Using Your Meal Plan</h3>
                  <p className="text-sm text-muted-foreground">
                    Meal plans are loaded onto your student ID card. Simply swipe your 
                    card at any campus dining location to redeem meals or use flex dollars.
                  </p>
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="text-sm font-medium">Meal Equivalencies</h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      One meal swipe can be used for any meal at the dining hall, or for a 
                      meal combo at campus restaurants up to a $9 value.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Flex Dollars</h3>
                  <p className="text-sm text-muted-foreground">
                    All meal plans include Flex Dollars that can be used at any campus dining 
                    location, including restaurants and convenience stores.
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex justify-between items-center text-sm border-b pb-1">
                      <span>Basic Plan</span>
                      <span className="font-medium">$100 Flex Dollars</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b pb-1">
                      <span>Standard Plan</span>
                      <span className="font-medium">$200 Flex Dollars</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span>Premium Plan</span>
                      <span className="font-medium">$300 Flex Dollars</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-medium">Changing or Canceling</h3>
                  <p className="text-sm text-muted-foreground">
                    Meal plans can be changed or upgraded within the first two weeks of each 
                    semester. After that, you can only upgrade your plan.
                  </p>
                  <div className="border rounded-md p-3">
                    <h4 className="text-sm font-medium">Need Help?</h4>
                    <p className="text-xs text-muted-foreground mt-1 mb-2">
                      Contact the Dining Services Office for assistance with meal plans.
                    </p>
                    <div className="flex items-center text-xs">
                      <Mail className="h-3 w-3 mr-1" />
                      <span>dining@chillcampus.edu</span>
                    </div>
                    <div className="flex items-center text-xs mt-1">
                      <Phone className="h-3 w-3 mr-1" />
                      <span>+1 (555) 234-5678</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <div className="w-full flex flex-col sm:flex-row justify-between gap-4">
                <Button variant="outline" className="flex-1">
                  <BadgeDollarSign className="mr-2 h-4 w-4" />
                  Add Flex Dollars
                </Button>
                <Button className="flex-1">
                  <Utensils className="mr-2 h-4 w-4" />
                  Manage Meal Plan
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dining;
