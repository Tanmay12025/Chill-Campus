
import { useState } from "react";
import { 
  ArrowRight, 
  BrainCircuit, 
  Calendar, 
  CheckCircle2, 
  Clock,
  Lightbulb,
  ListTodo,
  Presentation,
  Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

const Planner = () => {
  const [activeTab, setActiveTab] = useState("schedule");
  
  const upcomingDeadlines = [
    { id: 1, title: "Data Structures Assignment", course: "CSE201", date: "2025-04-18", progress: 60 },
    { id: 2, title: "Calculus Quiz", course: "MTH101", date: "2025-04-20", progress: 20 },
    { id: 3, title: "Research Paper Draft", course: "ENG205", date: "2025-04-25", progress: 40 },
    { id: 4, title: "Group Project Presentation", course: "MKT302", date: "2025-04-30", progress: 75 }
  ];
  
  const studySlots = [
    { id: 1, time: "09:00 - 10:30", course: "Physics Lab", location: "Science Block", priority: "high" },
    { id: 2, time: "11:00 - 12:30", course: "Data Structures", location: "CS Building", priority: "medium" },
    { id: 3, time: "15:00 - 16:30", course: "Calculus", location: "Math Department", priority: "high" },
    { id: 4, time: "17:00 - 18:30", course: "Research Time", location: "Library", priority: "low" }
  ];
  
  const suggestedStudyTimes = [
    { id: 1, time: "08:00 - 09:30", reason: "Based on your productivity patterns" },
    { id: 2, time: "14:00 - 15:30", reason: "Best time to focus on difficult subjects" },
    { id: 3, time: "18:30 - 20:00", reason: "Optimal for review activities" }
  ];
  
  const productivity = {
    thisWeek: 78,
    lastWeek: 65,
    improvement: 13,
    totalHours: 24.5,
    focusScore: 82
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Smart Planner</h1>
          <p className="text-muted-foreground">Optimize your study time and academic performance</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Sync Calendar
          </Button>
          <Button size="sm">
            <ListTodo className="mr-2 h-4 w-4" />
            Add Task
          </Button>
        </div>
      </div>

      <Tabs defaultValue="schedule" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="tasks">Tasks & Deadlines</TabsTrigger>
          <TabsTrigger value="suggestions">AI Suggestions</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="schedule" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" /> 
                  Today's Study Schedule
                </CardTitle>
                <CardDescription>
                  Monday, April 14, 2025
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {studySlots.map(slot => (
                    <div key={slot.id} className="flex items-center p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="font-medium">{slot.course}</div>
                        <div className="text-sm text-muted-foreground">{slot.time}</div>
                        <div className="text-xs mt-1">{slot.location}</div>
                      </div>
                      <Badge variant={
                        slot.priority === "high" ? "destructive" : 
                        slot.priority === "medium" ? "default" : 
                        "secondary"
                      }>
                        {slot.priority.charAt(0).toUpperCase() + slot.priority.slice(1)} Priority
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Export Schedule</Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BrainCircuit className="mr-2 h-5 w-5" />
                  Focus Insights
                </CardTitle>
                <CardDescription>
                  Your productivity metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Weekly Focus Score</span>
                      <span className="text-sm font-medium">{productivity.focusScore}%</span>
                    </div>
                    <Progress value={productivity.focusScore} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted rounded-md p-3 text-center">
                      <div className="text-2xl font-bold">{productivity.thisWeek}%</div>
                      <div className="text-xs text-muted-foreground">This Week</div>
                    </div>
                    <div className="bg-muted rounded-md p-3 text-center">
                      <div className="text-2xl font-bold">{productivity.totalHours}h</div>
                      <div className="text-xs text-muted-foreground">Study Time</div>
                    </div>
                  </div>
                  
                  <div className="bg-primary/10 p-3 rounded-md">
                    <div className="flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">Improvement</span>
                    </div>
                    <div className="mt-1 text-sm">
                      {productivity.improvement}% increase from last week
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="tasks" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                  <CardDescription>
                    Track your assignments and exams
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingDeadlines.map(task => (
                      <div key={task.id} className="border-b pb-4 last:border-0">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <div className="font-medium">{task.title}</div>
                            <div className="text-sm text-muted-foreground">
                              {task.course} • Due: {task.date}
                            </div>
                          </div>
                          <Badge variant={
                            new Date(task.date) < new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000) 
                              ? "destructive" 
                              : "outline"
                          }>
                            {new Date(task.date) < new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000) 
                              ? "Urgent" 
                              : "Upcoming"}
                          </Badge>
                        </div>
                        <div className="flex items-center mt-2">
                          <div className="w-full mr-2">
                            <Progress value={task.progress} className="h-2" />
                          </div>
                          <span className="text-xs whitespace-nowrap">{task.progress}% complete</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Add New Task</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="task-title">Title</Label>
                      <Input id="task-title" placeholder="Task title" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="task-course">Course</Label>
                      <Input id="task-course" placeholder="Course code" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="task-date">Due Date</Label>
                      <Input id="task-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="task-priority">Priority</Label>
                      <select id="task-priority" className="w-full p-2 rounded-md border">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                      </select>
                    </div>
                    <Button type="submit" className="w-full">Add Task</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="suggestions" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="mr-2 h-5 w-5" />
                  AI Study Recommendations
                </CardTitle>
                <CardDescription>
                  Based on your learning patterns and deadlines
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <div className="font-medium mb-1">Focus on Data Structures Today</div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Your deadline is approaching in 4 days, and you're 60% complete.
                    </p>
                    <Button size="sm" variant="default" className="w-full">
                      Add to Schedule
                    </Button>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="font-medium mb-1">Begin Calculus Review</div>
                    <p className="text-sm text-muted-foreground mb-2">
                      You're currently at 20% preparation for your upcoming quiz.
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      Add to Schedule
                    </Button>
                  </div>
                  
                  <div className="bg-muted p-4 rounded-lg">
                    <div className="font-medium mb-1">Schedule Group Meeting</div>
                    <p className="text-sm text-muted-foreground mb-2">
                      For your presentation due on April 30th.
                    </p>
                    <Button size="sm" variant="outline" className="w-full">
                      Contact Group Members
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5" />
                  Optimal Study Times
                </CardTitle>
                <CardDescription>
                  Personalized based on your past productivity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {suggestedStudyTimes.map(slot => (
                    <div key={slot.id} className="flex items-center border-b pb-3 last:border-0 last:pb-0">
                      <div className="p-2 rounded-full bg-primary/10 mr-3">
                        <Clock className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{slot.time}</div>
                        <div className="text-sm text-muted-foreground">{slot.reason}</div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ArrowRight className="h-5 w-5" />
                      </Button>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="bg-muted p-3 rounded-md text-sm">
                    <div className="flex items-center mb-2">
                      <BrainCircuit className="h-4 w-4 mr-2 text-primary" />
                      <span className="font-medium">AI Insight</span>
                    </div>
                    <p>
                      You're most productive in the morning and early evening. We've scheduled your hardest tasks during these periods.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Recalculate Optimal Times
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <Card className="col-span-8">
              <CardHeader>
                <CardTitle>Study Performance Analytics</CardTitle>
                <CardDescription>
                  Track your productivity and learning patterns
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <Presentation className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Interactive analytics charts will be displayed here</p>
                  <p className="text-sm">Tracking your study patterns over time</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Course Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Data Structures</span>
                      <span className="text-sm font-medium">86%</span>
                    </div>
                    <Progress value={86} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Calculus</span>
                      <span className="text-sm font-medium">72%</span>
                    </div>
                    <Progress value={72} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">Physics</span>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm">English</span>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                  
                  <Separator />
                  
                  <div className="bg-primary/10 p-3 rounded-md">
                    <div className="flex items-center">
                      <CheckCircle2 className="h-4 w-4 mr-2 text-primary" />
                      <span className="text-sm font-medium">Achievement</span>
                    </div>
                    <div className="mt-1 text-sm">
                      You've improved in Calculus by 12% since last month!
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Planner;
