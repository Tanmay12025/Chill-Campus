
import { useState, useEffect, useRef } from "react";
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Clock, 
  Coffee, 
  ChevronRight,
  Check,
  Volume2,
  Music,
  ListChecks
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";

const Pomodoro = () => {
  const { toast } = useToast();
  const [timerMode, setTimerMode] = useState<"focus" | "shortBreak" | "longBreak">("focus");
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [tasks, setTasks] = useState([
    { id: 1, text: "Complete assignment", done: false },
    { id: 2, text: "Study for quiz", done: true },
    { id: 3, text: "Read chapter 5", done: false }
  ]);
  const [newTask, setNewTask] = useState("");
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [timerVolume, setTimerVolume] = useState(80);
  
  // Ref for audio element
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Timer durations in seconds
  const timerDurations = {
    focus: 25 * 60,
    shortBreak: 5 * 60,
    longBreak: 15 * 60
  };
  
  // Session stats
  const [stats, setStats] = useState({
    completedFocus: 0,
    completedShortBreaks: 0,
    completedLongBreaks: 0,
    totalFocusTime: 0
  });
  
  // Initialize timer
  useEffect(() => {
    setSeconds(timerDurations[timerMode]);
    
    // Create audio element for timer completion sound
    if (!audioRef.current) {
      const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3");
      audio.volume = timerVolume / 100;
      audioRef.current = audio;
    }
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, [timerMode]);
  
  // Update audio volume when timerVolume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = timerVolume / 100;
    }
  }, [timerVolume]);
  
  // Timer logic
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
      }, 1000);
    } else if (seconds === 0 && isRunning) {
      setIsRunning(false);
      
      // Play sound when timer ends if enabled
      if (soundEnabled && audioRef.current) {
        audioRef.current.play().catch(err => console.error("Error playing sound:", err));
        
        // Show notification
        toast({
          title: `${timerMode === "focus" ? "Focus" : "Break"} session completed!`,
          description: timerMode === "focus" 
            ? "Time for a well-deserved break." 
            : "Ready to get back to work?",
        });
      }
      
      // Update stats
      if (timerMode === "focus") {
        setStats(prev => ({
          ...prev,
          completedFocus: prev.completedFocus + 1,
          totalFocusTime: prev.totalFocusTime + timerDurations.focus
        }));
        
        // Auto switch to break
        setTimerMode("shortBreak");
        setSeconds(timerDurations.shortBreak);
      } else if (timerMode === "shortBreak") {
        setStats(prev => ({
          ...prev,
          completedShortBreaks: prev.completedShortBreaks + 1
        }));
        
        // Switch back to focus
        setTimerMode("focus");
        setSeconds(timerDurations.focus);
      } else if (timerMode === "longBreak") {
        setStats(prev => ({
          ...prev,
          completedLongBreaks: prev.completedLongBreaks + 1
        }));
        
        // Switch back to focus
        setTimerMode("focus");
        setSeconds(timerDurations.focus);
      }
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, seconds, timerMode, soundEnabled]);
  
  // Format time as MM:SS
  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  
  // Calculate progress percentage
  const calculateProgress = () => {
    return 100 - (seconds / timerDurations[timerMode]) * 100;
  };
  
  // Toggle timer
  const toggleTimer = () => {
    setIsRunning(!isRunning);
  };
  
  // Reset timer
  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(timerDurations[timerMode]);
  };
  
  // Add new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, done: false }]);
      setNewTask("");
      
      toast({
        title: "Task added",
        description: "New task has been added to your session"
      });
    }
  };
  
  // Toggle task completion
  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, done: !task.done } : task
    ));
    
    // Show toast when task is completed
    const task = tasks.find(t => t.id === id);
    if (task && !task.done) {
      toast({
        title: "Task completed",
        description: `"${task.text}" marked as done`
      });
    }
  };

  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-1">Pomodoro Timer</h1>
          <p className="text-muted-foreground">Stay focused and take strategic breaks</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Timer</CardTitle>
              <div className="flex space-x-2">
                <Button 
                  variant={timerMode === "focus" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setTimerMode("focus")}
                >
                  <Clock className="mr-1 h-4 w-4" />
                  Focus
                </Button>
                <Button 
                  variant={timerMode === "shortBreak" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setTimerMode("shortBreak")}
                >
                  <Coffee className="mr-1 h-4 w-4" />
                  Short Break
                </Button>
                <Button 
                  variant={timerMode === "longBreak" ? "default" : "outline"} 
                  size="sm"
                  onClick={() => setTimerMode("longBreak")}
                >
                  <Coffee className="mr-1 h-4 w-4" />
                  Long Break
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center py-8">
            <div className="text-7xl font-mono font-semibold mb-6">
              {formatTime(seconds)}
            </div>
            
            <div className="w-3/4 mb-10">
              <Progress value={calculateProgress()} className="h-3" />
            </div>
            
            <div className="flex space-x-4">
              <Button 
                size="lg" 
                variant="outline" 
                onClick={resetTimer}
                disabled={isRunning}
              >
                <RotateCcw className="mr-2 h-5 w-5" />
                Reset
              </Button>
              <Button 
                size="lg" 
                variant={isRunning ? "destructive" : "default"}
                onClick={toggleTimer}
                className="w-36"
              >
                {isRunning ? (
                  <>
                    <Pause className="mr-2 h-5 w-5" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-5 w-5" />
                    Start
                  </>
                )}
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t p-4">
            <div className="flex space-x-6">
              <div className="text-center">
                <div className="text-xl font-semibold">{stats.completedFocus}</div>
                <div className="text-xs text-muted-foreground">Focus Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold">{stats.completedShortBreaks}</div>
                <div className="text-xs text-muted-foreground">Short Breaks</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold">{stats.completedLongBreaks}</div>
                <div className="text-xs text-muted-foreground">Long Breaks</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-semibold">{Math.floor(stats.totalFocusTime / 60)}</div>
                <div className="text-xs text-muted-foreground">Focus Minutes</div>
              </div>
            </div>
          </CardFooter>
        </Card>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <ListChecks className="mr-2 h-5 w-5" />
                Tasks for this Session
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-2 mb-4">
                <Input 
                  value={newTask} 
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="Add a new task"
                  onKeyDown={(e) => e.key === 'Enter' && addTask()}
                />
                <Button onClick={addTask}>Add</Button>
              </div>
              
              <div className="space-y-2">
                {tasks.length === 0 ? (
                  <div className="text-center py-4 text-muted-foreground">
                    No tasks yet. Add one to get started!
                  </div>
                ) : (
                  tasks.map(task => (
                    <div 
                      key={task.id} 
                      className={`flex items-center p-2 rounded hover:bg-muted ${
                        task.done ? 'text-muted-foreground' : ''
                      } cursor-pointer`}
                      onClick={() => toggleTask(task.id)}
                    >
                      <div className={`p-1 rounded-full border mr-2 ${
                        task.done ? 'bg-primary border-primary' : 'border-muted-foreground'
                      }`}>
                        {task.done && <Check className="h-3 w-3 text-white" />}
                      </div>
                      <span className={task.done ? 'line-through' : ''}>{task.text}</span>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Automatic Breaks</Label>
                  <div className="text-xs text-muted-foreground">
                    Start breaks automatically
                  </div>
                </div>
                <Switch checked />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Sound Notifications</Label>
                  <div className="text-xs text-muted-foreground">
                    Play sound when timer ends
                  </div>
                </div>
                <Switch 
                  checked={soundEnabled} 
                  onCheckedChange={setSoundEnabled} 
                />
              </div>
              
              <Separator />
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Volume2 className="h-4 w-4" />
                  <Label>Timer Volume</Label>
                </div>
                <input 
                  type="range" 
                  className="w-24" 
                  min="0"
                  max="100"
                  value={timerVolume}
                  onChange={(e) => setTimerVolume(Number(e.target.value))}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Music className="h-4 w-4" />
                  <Label>Focus Music</Label>
                </div>
                <Button variant="ghost" size="sm">
                  Select
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Pomodoro;
