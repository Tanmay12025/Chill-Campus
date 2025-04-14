
import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SmilePlus, Clock, BarChart, Book, Coffee, Dumbbell, Brain, Heart } from "lucide-react";

const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState("today");

  const handleMoodSelection = (mood: string) => {
    setSelectedMood(mood);
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Mood Tracking</h1>
        <span className="vit-badge">Mental Wellbeing</span>
      </div>

      <Tabs defaultValue="today" onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid grid-cols-4 mb-8">
          <TabsTrigger value="today">Today</TabsTrigger>
          <TabsTrigger value="week">This Week</TabsTrigger>
          <TabsTrigger value="month">This Month</TabsTrigger>
          <TabsTrigger value="insights">Insights</TabsTrigger>
        </TabsList>
        
        <TabsContent value="today" className="space-y-6">
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold mb-6">How are you feeling today?</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <MoodOption 
                name="Stressed"
                emoji="😫"
                description="Feeling overwhelmed"
                color="bg-red-100 hover:bg-red-200"
                textColor="text-red-800"
                isSelected={selectedMood === "Stressed"}
                onClick={() => handleMoodSelection("Stressed")}
              />
              
              <MoodOption 
                name="Okay"
                emoji="😐"
                description="Just getting by"
                color="bg-yellow-100 hover:bg-yellow-200"
                textColor="text-yellow-800"
                isSelected={selectedMood === "Okay"}
                onClick={() => handleMoodSelection("Okay")}
              />
              
              <MoodOption 
                name="Good"
                emoji="🙂"
                description="Feeling positive"
                color="bg-blue-100 hover:bg-blue-200"
                textColor="text-blue-800"
                isSelected={selectedMood === "Good"}
                onClick={() => handleMoodSelection("Good")}
              />
              
              <MoodOption 
                name="Great"
                emoji="😄"
                description="Energized & motivated"
                color="bg-green-100 hover:bg-green-200"
                textColor="text-green-800"
                isSelected={selectedMood === "Great"}
                onClick={() => handleMoodSelection("Great")}
              />
            </div>
            
            {selectedMood && (
              <div className="mt-6 p-4 rounded-lg bg-muted">
                <h3 className="font-medium mb-2">You selected: {selectedMood}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {selectedMood === "Stressed" && "Take some deep breaths and consider a short break from your work. Remember to practice self-care today."}
                  {selectedMood === "Okay" && "You're doing alright. Consider taking a short walk or listening to some music to lift your spirits."}
                  {selectedMood === "Good" && "That's great! Maintain this positive energy by staying hydrated and taking regular breaks."}
                  {selectedMood === "Great" && "Excellent! This is the perfect time to tackle challenging tasks or help others who might be struggling."}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <RecommendationCard 
                    title={selectedMood === "Stressed" ? "Breathing Exercise" : selectedMood === "Okay" ? "Nature Walk" : "Productive Focus"}
                    description={selectedMood === "Stressed" ? "Try 4-7-8 breathing technique for 5 minutes" : selectedMood === "Okay" ? "Take a 15-minute walk outside" : "Use this energy for tackling challenging tasks"}
                    icon={selectedMood === "Stressed" ? Brain : selectedMood === "Okay" ? Heart : Book}
                  />
                  
                  <RecommendationCard 
                    title={selectedMood === "Stressed" ? "Physical Activity" : selectedMood === "Okay" ? "Music Break" : "Help Others"}
                    description={selectedMood === "Stressed" ? "Do some light stretching to release tension" : selectedMood === "Okay" ? "Listen to uplifting music for 10 minutes" : "Share your positive energy by helping classmates"}
                    icon={selectedMood === "Stressed" ? Dumbbell : selectedMood === "Okay" ? Heart : Heart}
                  />
                  
                  <RecommendationCard 
                    title={selectedMood === "Stressed" ? "Break Time" : selectedMood === "Okay" ? "Gratitude Journal" : "Self-Care"}
                    description={selectedMood === "Stressed" ? "Take a 15-minute break from your screens" : selectedMood === "Okay" ? "Write down three things you're grateful for" : "Don't forget to maintain your wellbeing rituals"}
                    icon={selectedMood === "Stressed" ? Coffee : selectedMood === "Okay" ? Book : Coffee}
                  />
                </div>
              </div>
            )}
          </div>
          
          <div className="dashboard-card">
            <h2 className="text-lg font-semibold mb-4">Track your wellbeing factors</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Sleep Quality</span>
                  <span>7/10</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Stress Level</span>
                  <span>4/10</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Energy Level</span>
                  <span>6/10</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Focus Quality</span>
                  <span>8/10</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="week">
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold mb-6">Your mood this week</h2>
            <div className="h-64 flex items-end justify-between gap-2 mb-4">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-500 rounded-t w-full" style={{ height: '30%' }}></div>
                <div className="bg-green-500 rounded-t w-full" style={{ height: '40%' }}></div>
                <div className="bg-yellow-500 rounded-t w-full" style={{ height: '20%' }}></div>
                <div className="bg-red-500 rounded-t w-full" style={{ height: '10%' }}></div>
                <span className="text-xs">Mon</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-500 rounded-t w-full" style={{ height: '20%' }}></div>
                <div className="bg-green-500 rounded-t w-full" style={{ height: '30%' }}></div>
                <div className="bg-yellow-500 rounded-t w-full" style={{ height: '30%' }}></div>
                <div className="bg-red-500 rounded-t w-full" style={{ height: '20%' }}></div>
                <span className="text-xs">Tue</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-500 rounded-t w-full" style={{ height: '10%' }}></div>
                <div className="bg-green-500 rounded-t w-full" style={{ height: '20%' }}></div>
                <div className="bg-yellow-500 rounded-t w-full" style={{ height: '40%' }}></div>
                <div className="bg-red-500 rounded-t w-full" style={{ height: '30%' }}></div>
                <span className="text-xs">Wed</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-500 rounded-t w-full" style={{ height: '40%' }}></div>
                <div className="bg-green-500 rounded-t w-full" style={{ height: '30%' }}></div>
                <div className="bg-yellow-500 rounded-t w-full" style={{ height: '20%' }}></div>
                <div className="bg-red-500 rounded-t w-full" style={{ height: '10%' }}></div>
                <span className="text-xs">Thu</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-500 rounded-t w-full" style={{ height: '30%' }}></div>
                <div className="bg-green-500 rounded-t w-full" style={{ height: '30%' }}></div>
                <div className="bg-yellow-500 rounded-t w-full" style={{ height: '30%' }}></div>
                <div className="bg-red-500 rounded-t w-full" style={{ height: '10%' }}></div>
                <span className="text-xs">Fri</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-500 rounded-t w-full" style={{ height: '10%' }}></div>
                <div className="bg-green-500 rounded-t w-full" style={{ height: '20%' }}></div>
                <div className="bg-yellow-500 rounded-t w-full" style={{ height: '30%' }}></div>
                <div className="bg-red-500 rounded-t w-full" style={{ height: '40%' }}></div>
                <span className="text-xs">Sat</span>
              </div>
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="bg-blue-500 rounded-t w-full" style={{ height: '30%' }}></div>
                <div className="bg-green-500 rounded-t w-full" style={{ height: '40%' }}></div>
                <div className="bg-yellow-500 rounded-t w-full" style={{ height: '20%' }}></div>
                <div className="bg-red-500 rounded-t w-full" style={{ height: '10%' }}></div>
                <span className="text-xs">Sun</span>
              </div>
            </div>
            <div className="flex justify-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <span className="block w-3 h-3 rounded-full bg-blue-500"></span>
                <span>Great</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="block w-3 h-3 rounded-full bg-green-500"></span>
                <span>Good</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="block w-3 h-3 rounded-full bg-yellow-500"></span>
                <span>Okay</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="block w-3 h-3 rounded-full bg-red-500"></span>
                <span>Stressed</span>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="month">
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold mb-6">Monthly Mood Trends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Mood Distribution</h3>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-24 text-sm">Great (25%)</div>
                  <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                    <div className="bg-blue-500 h-full" style={{ width: '25%' }}></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-24 text-sm">Good (40%)</div>
                  <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                    <div className="bg-green-500 h-full" style={{ width: '40%' }}></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-24 text-sm">Okay (20%)</div>
                  <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                    <div className="bg-yellow-500 h-full" style={{ width: '20%' }}></div>
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-24 text-sm">Stressed (15%)</div>
                  <div className="flex-1 bg-muted rounded-full h-4 overflow-hidden">
                    <div className="bg-red-500 h-full" style={{ width: '15%' }}></div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-3">Contributing Factors</h3>
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg flex justify-between">
                    <div className="flex items-center gap-2">
                      <Book className="h-4 w-4 text-primary" />
                      <span className="text-sm">Academic Pressure</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-red-100 text-red-800 rounded-full">High Impact</span>
                  </div>
                  <div className="p-3 border rounded-lg flex justify-between">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span className="text-sm">Sleep Quality</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-amber-100 text-amber-800 rounded-full">Medium Impact</span>
                  </div>
                  <div className="p-3 border rounded-lg flex justify-between">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-primary" />
                      <span className="text-sm">Social Interactions</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">Positive Impact</span>
                  </div>
                  <div className="p-3 border rounded-lg flex justify-between">
                    <div className="flex items-center gap-2">
                      <Dumbbell className="h-4 w-4 text-primary" />
                      <span className="text-sm">Physical Activity</span>
                    </div>
                    <span className="text-xs px-2 py-0.5 bg-green-100 text-green-800 rounded-full">Positive Impact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="insights">
          <div className="dashboard-card">
            <h2 className="text-xl font-semibold mb-6">Your Wellbeing Insights</h2>
            
            <div className="space-y-6">
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <BarChart className="h-5 w-5 text-blue-700" />
                  </div>
                  <h3 className="text-lg font-medium text-blue-800">Mood Patterns</h3>
                </div>
                <p className="text-sm text-blue-800">
                  Your mood tends to be best in the mornings and decreases throughout the day. 
                  Consider scheduling important tasks earlier in the day when your mental energy is highest.
                </p>
              </div>
              
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <SmilePlus className="h-5 w-5 text-green-700" />
                  </div>
                  <h3 className="text-lg font-medium text-green-800">Wellbeing Boosters</h3>
                </div>
                <p className="text-sm text-green-800">
                  Days with outdoor activities and exercise show significantly higher mood ratings.
                  Try to incorporate at least 30 minutes of physical activity daily.
                </p>
              </div>
              
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                    <Brain className="h-5 w-5 text-amber-700" />
                  </div>
                  <h3 className="text-lg font-medium text-amber-800">Stress Triggers</h3>
                </div>
                <p className="text-sm text-amber-800">
                  Examination periods correlate with increased stress levels. 
                  Plan your study schedule well in advance to avoid last-minute cramming.
                </p>
              </div>
            </div>
            
            <div className="mt-6 border-t pt-4">
              <h3 className="font-medium mb-3">Personalized Recommendations</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Schedule a 20-minute morning meditation to start your day positively</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Take short 5-minute breaks between study sessions</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Limit screen time in the evening to improve sleep quality</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Join a campus club to enhance social connections</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                  <span>Consider scheduling a session with campus counseling services</span>
                </li>
              </ul>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

const MoodOption = ({ name, emoji, description, color, textColor, isSelected, onClick }: { 
  name: string;
  emoji: string;
  description: string;
  color: string;
  textColor: string;
  isSelected: boolean;
  onClick: () => void;
}) => {
  return (
    <button 
      className={`p-4 rounded-lg ${color} ${textColor} transition-all ${isSelected ? 'ring-2 ring-primary shadow-lg' : ''}`}
      onClick={onClick}
    >
      <div className="text-4xl mb-2">{emoji}</div>
      <div className="font-medium">{name}</div>
      <div className="text-xs mt-1">{description}</div>
    </button>
  );
};

const RecommendationCard = ({ title, description, icon: Icon }: {
  title: string;
  description: string;
  icon: any;
}) => {
  return (
    <div className="p-3 bg-card rounded-lg border shadow-sm">
      <div className="flex items-center gap-2 mb-2">
        <Icon className="h-4 w-4 text-primary" />
        <span className="font-medium text-sm">{title}</span>
      </div>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};

export default MoodTracker;
