
import { useState } from "react";
import { 
  Calendar, 
  ChevronLeft, 
  ChevronRight, 
  SmilePlus,
  Frown,
  Meh,
  Smile,
  LucideHeart,
  LineChart,
  Check,
  CalendarDays,
  AlarmClock,
  Lightbulb,
  Timer,
  Music,
  BookOpen,
  Users
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const Mood = () => {
  const [selectedMood, setSelectedMood] = useState<"stressed" | "okay" | "good" | "great" | null>(null);
  const [moodNote, setMoodNote] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  // Sample mood data
  const moodHistory = [
    { date: "2025-04-01", mood: "okay", note: "Busy day with classes" },
    { date: "2025-04-02", mood: "good", note: "Completed assignment ahead of time" },
    { date: "2025-04-03", mood: "great", note: "Aced my presentation!" },
    { date: "2025-04-05", mood: "stressed", note: "Too many deadlines" },
    { date: "2025-04-07", mood: "good", note: "Productive study session" },
    { date: "2025-04-09", mood: "okay", note: "Feeling tired but hanging in there" },
    { date: "2025-04-10", mood: "stressed", note: "Difficult quiz today" },
    { date: "2025-04-12", mood: "great", note: "Weekend relaxation" },
  ];
  
  // Sample recommendations based on mood
  const recommendations = {
    stressed: [
      { id: 1, icon: <Timer className="h-4 w-4" />, text: "Take a 15-minute break" },
      { id: 2, icon: <Music className="h-4 w-4" />, text: "Listen to calming music" },
      { id: 3, icon: <AlarmClock className="h-4 w-4" />, text: "Practice deep breathing for 5 minutes" },
      { id: 4, icon: <Users className="h-4 w-4" />, text: "Talk to a friend or counselor" }
    ],
    okay: [
      { id: 1, icon: <BookOpen className="h-4 w-4" />, text: "Do something creative for 30 minutes" },
      { id: 2, icon: <Timer className="h-4 w-4" />, text: "Take regular study breaks" },
      { id: 3, icon: <Lightbulb className="h-4 w-4" />, text: "Try a new study technique" }
    ],
    good: [
      { id: 1, icon: <Check className="h-4 w-4" />, text: "Set goals for tomorrow" },
      { id: 2, icon: <BookOpen className="h-4 w-4" />, text: "Work on challenging tasks" },
      { id: 3, icon: <Users className="h-4 w-4" />, text: "Help a classmate who's struggling" }
    ],
    great: [
      { id: 1, icon: <Check className="h-4 w-4" />, text: "Keep up the momentum" },
      { id: 2, icon: <Lightbulb className="h-4 w-4" />, text: "Tackle your most difficult tasks" },
      { id: 3, icon: <Users className="h-4 w-4" />, text: "Share your energy with others" }
    ]
  };
  
  // Calculate mood statistics
  const moodStats = {
    great: moodHistory.filter(m => m.mood === "great").length,
    good: moodHistory.filter(m => m.mood === "good").length,
    okay: moodHistory.filter(m => m.mood === "okay").length,
    stressed: moodHistory.filter(m => m.mood === "stressed").length,
    total: moodHistory.length
  };
  
  const submitMoodEntry = () => {
    if (!selectedMood) return;
    
    // Here you would normally save the mood to a database
    alert(`Mood tracked: ${selectedMood} - ${moodNote}`);
    
    // Reset form
    setSelectedMood(null);
    setMoodNote("");
  };
  
  const getMoodIcon = (mood: string) => {
    switch(mood) {
      case "stressed": return <Frown className="h-6 w-6 text-red-500" />;
      case "okay": return <Meh className="h-6 w-6 text-yellow-500" />;
      case "good": return <Smile className="h-6 w-6 text-green-500" />;
      case "great": return <LucideHeart className="h-6 w-6 text-purple-500" />;
      default: return null;
    }
  };
  
  const getMoodColor = (mood: string) => {
    switch(mood) {
      case "stressed": return "bg-red-100 text-red-800";
      case "okay": return "bg-yellow-100 text-yellow-800";
      case "good": return "bg-green-100 text-green-800";
      case "great": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Mood Tracking</h1>
          <p className="text-muted-foreground">
            Monitor your wellbeing and get personalized recommendations
          </p>
        </div>
      </div>

      <Tabs defaultValue="track" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="track">Track Today</TabsTrigger>
          <TabsTrigger value="history">Mood History</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="track" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <SmilePlus className="mr-2 h-5 w-5" />
                  How are you feeling today?
                </CardTitle>
                <CardDescription>
                  {new Date().toLocaleDateString('en-US', { 
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-4 gap-4">
                  <button 
                    className={`aspect-square flex flex-col items-center justify-center p-4 rounded-xl transition-all ${
                      selectedMood === "stressed" 
                        ? "bg-red-100 ring-2 ring-red-500" 
                        : "bg-muted hover:bg-red-50"
                    }`}
                    onClick={() => setSelectedMood("stressed")}
                  >
                    <Frown className={`h-12 w-12 mb-2 ${
                      selectedMood === "stressed" ? "text-red-500" : "text-muted-foreground"
                    }`} />
                    <span className={selectedMood === "stressed" ? "text-red-700" : ""}>
                      Stressed
                    </span>
                  </button>
                  
                  <button 
                    className={`aspect-square flex flex-col items-center justify-center p-4 rounded-xl transition-all ${
                      selectedMood === "okay" 
                        ? "bg-yellow-100 ring-2 ring-yellow-500" 
                        : "bg-muted hover:bg-yellow-50"
                    }`}
                    onClick={() => setSelectedMood("okay")}
                  >
                    <Meh className={`h-12 w-12 mb-2 ${
                      selectedMood === "okay" ? "text-yellow-500" : "text-muted-foreground"
                    }`} />
                    <span className={selectedMood === "okay" ? "text-yellow-700" : ""}>
                      Okay
                    </span>
                  </button>
                  
                  <button 
                    className={`aspect-square flex flex-col items-center justify-center p-4 rounded-xl transition-all ${
                      selectedMood === "good" 
                        ? "bg-green-100 ring-2 ring-green-500" 
                        : "bg-muted hover:bg-green-50"
                    }`}
                    onClick={() => setSelectedMood("good")}
                  >
                    <Smile className={`h-12 w-12 mb-2 ${
                      selectedMood === "good" ? "text-green-500" : "text-muted-foreground"
                    }`} />
                    <span className={selectedMood === "good" ? "text-green-700" : ""}>
                      Good
                    </span>
                  </button>
                  
                  <button 
                    className={`aspect-square flex flex-col items-center justify-center p-4 rounded-xl transition-all ${
                      selectedMood === "great" 
                        ? "bg-purple-100 ring-2 ring-purple-500" 
                        : "bg-muted hover:bg-purple-50"
                    }`}
                    onClick={() => setSelectedMood("great")}
                  >
                    <LucideHeart className={`h-12 w-12 mb-2 ${
                      selectedMood === "great" ? "text-purple-500" : "text-muted-foreground"
                    }`} />
                    <span className={selectedMood === "great" ? "text-purple-700" : ""}>
                      Great
                    </span>
                  </button>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium">Add notes (optional)</label>
                  <Textarea 
                    placeholder="What's contributing to your mood today?" 
                    value={moodNote}
                    onChange={(e) => setMoodNote(e.target.value)}
                    rows={3}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full" 
                  onClick={submitMoodEntry} 
                  disabled={!selectedMood}
                >
                  Save Mood Entry
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>
                  Based on your current mood
                </CardDescription>
              </CardHeader>
              <CardContent>
                {!selectedMood ? (
                  <div className="h-52 flex flex-col items-center justify-center text-center text-muted-foreground">
                    <SmilePlus className="h-12 w-12 mb-3 opacity-50" />
                    <p>Select your mood to see personalized recommendations</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className={`p-4 rounded-lg ${
                      selectedMood === "stressed" ? "bg-red-50" :
                      selectedMood === "okay" ? "bg-yellow-50" :
                      selectedMood === "good" ? "bg-green-50" :
                      "bg-purple-50"
                    }`}>
                      <div className="flex items-center mb-3">
                        {getMoodIcon(selectedMood)}
                        <span className="ml-2 font-medium capitalize">{selectedMood}</span>
                      </div>
                      <p className="text-sm">
                        {selectedMood === "stressed" ? 
                          "It's important to take care of yourself when feeling stressed. Here are some suggestions that might help:" :
                        selectedMood === "okay" ? 
                          "You're doing okay today. Here are some ways to boost your mood:" :
                        selectedMood === "good" ? 
                          "You're having a good day! Here's how to maintain your positive momentum:" : 
                          "You're feeling great today! Here's how to share your positive energy:"}
                      </p>
                    </div>
                    
                    <ul className="space-y-2">
                      {recommendations[selectedMood].map(rec => (
                        <li key={rec.id} className="flex items-start p-2 rounded-md hover:bg-muted">
                          <div className="bg-primary/10 p-1.5 rounded-full mr-3">
                            {rec.icon}
                          </div>
                          <span className="text-sm pt-0.5">{rec.text}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Separator />
                    
                    <div className="bg-muted p-3 rounded-md">
                      <h4 className="text-sm font-medium mb-1">Need more support?</h4>
                      <p className="text-xs text-muted-foreground mb-2">
                        Remember that the university counseling center is available for all students.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        Schedule Appointment
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="history" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center">
                    <CalendarDays className="mr-2 h-5 w-5" />
                    Mood Calendar
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span>
                      {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </span>
                    <Button variant="ghost" size="icon" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-1">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center font-medium text-xs py-2">
                      {day}
                    </div>
                  ))}
                  
                  {Array.from({ length: 35 }).map((_, i) => {
                    const day = i + 1;
                    const dateStr = `2025-04-${day.toString().padStart(2, '0')}`;
                    const moodEntry = moodHistory.find(m => m.date === dateStr);
                    
                    return (
                      <div 
                        key={i} 
                        className={`aspect-square rounded-md flex flex-col items-center justify-center text-sm relative
                          ${moodEntry ? `${getMoodColor(moodEntry.mood)} hover:ring-2` : 'bg-muted hover:bg-muted/80'}`}
                      >
                        <span>{day}</span>
                        {moodEntry && (
                          <div className="absolute bottom-1 right-1">
                            {getMoodIcon(moodEntry.mood)}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Recent Entries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 max-h-96 overflow-y-auto">
                {moodHistory
                  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                  .map((entry, index) => (
                    <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">
                          {new Date(entry.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric' 
                          })}
                        </span>
                        <Badge variant="outline" className={getMoodColor(entry.mood)}>
                          <span className="capitalize">{entry.mood}</span>
                        </Badge>
                      </div>
                      {entry.note && (
                        <p className="text-sm text-muted-foreground">
                          {entry.note}
                        </p>
                      )}
                    </div>
                  ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="insights" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <Card className="md:col-span-8">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LineChart className="mr-2 h-5 w-5" />
                  Mood Trends
                </CardTitle>
                <CardDescription>
                  See how your mood has changed over time
                </CardDescription>
              </CardHeader>
              <CardContent className="h-80 flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <LineChart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Interactive mood charts will be displayed here</p>
                  <p className="text-sm">Tracking your emotional wellbeing over time</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-4">
              <CardHeader>
                <CardTitle>Mood Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <LucideHeart className="h-4 w-4 text-purple-500 mr-1" /> Great
                      </span>
                      <span className="text-sm font-medium">
                        {moodStats.great} days ({Math.round((moodStats.great / moodStats.total) * 100)}%)
                      </span>
                    </div>
                    <Progress value={(moodStats.great / moodStats.total) * 100} className="h-2 bg-muted" indicatorClassName="bg-purple-500" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <Smile className="h-4 w-4 text-green-500 mr-1" /> Good
                      </span>
                      <span className="text-sm font-medium">
                        {moodStats.good} days ({Math.round((moodStats.good / moodStats.total) * 100)}%)
                      </span>
                    </div>
                    <Progress value={(moodStats.good / moodStats.total) * 100} className="h-2 bg-muted" indicatorClassName="bg-green-500" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <Meh className="h-4 w-4 text-yellow-500 mr-1" /> Okay
                      </span>
                      <span className="text-sm font-medium">
                        {moodStats.okay} days ({Math.round((moodStats.okay / moodStats.total) * 100)}%)
                      </span>
                    </div>
                    <Progress value={(moodStats.okay / moodStats.total) * 100} className="h-2 bg-muted" indicatorClassName="bg-yellow-500" />
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm flex items-center">
                        <Frown className="h-4 w-4 text-red-500 mr-1" /> Stressed
                      </span>
                      <span className="text-sm font-medium">
                        {moodStats.stressed} days ({Math.round((moodStats.stressed / moodStats.total) * 100)}%)
                      </span>
                    </div>
                    <Progress value={(moodStats.stressed / moodStats.total) * 100} className="h-2 bg-muted" indicatorClassName="bg-red-500" />
                  </div>
                  
                  <Separator className="my-2" />
                  
                  <div className="bg-muted p-3 rounded-md">
                    <h4 className="text-sm font-medium mb-1">Mood Insights</h4>
                    <p className="text-xs text-muted-foreground">
                      You've been feeling good or great for {moodStats.good + moodStats.great} days 
                      ({Math.round(((moodStats.good + moodStats.great) / moodStats.total) * 100)}%) 
                      of the time this month. Focus on self-care during stressed days.
                    </p>
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

export default Mood;
