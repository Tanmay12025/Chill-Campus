
import { useState, useRef, useEffect } from "react";
import { X, Send, MessageSquare, Calendar, Book, FileText } from "lucide-react";

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface QuickOption {
  id: string;
  text: string;
  icon: React.ReactNode;
  action: () => void;
}

const Chatbot = ({ isOpen, onClose }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I am VIT Assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickOptions: QuickOption[] = [
    {
      id: "deadlines",
      text: "Ask about deadlines",
      icon: <Calendar className="h-4 w-4" />,
      action: () => handleQuickReply("What are the upcoming deadlines for this semester?"),
    },
    {
      id: "complaint",
      text: "File a complaint",
      icon: <FileText className="h-4 w-4" />,
      action: () => handleQuickReply("I want to file a complaint."),
    },
    {
      id: "resources",
      text: "Find resources",
      icon: <Book className="h-4 w-4" />,
      action: () => handleQuickReply("Where can I find study resources?"),
    },
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addMessage(input, "user");
      setInput("");
      // Simulate bot thinking
      setTimeout(() => {
        generateBotResponse(input);
      }, 800);
    }
  };

  const handleQuickReply = (text: string) => {
    addMessage(text, "user");
    // Simulate bot thinking
    setTimeout(() => {
      generateBotResponse(text);
    }, 800);
  };

  const addMessage = (text: string, sender: "user" | "bot") => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, newMessage]);
  };

  const generateBotResponse = (userInput: string) => {
    const lowerInput = userInput.toLowerCase();
    let response = "";

    if (lowerInput.includes("deadline")) {
      response = "Important deadlines:\n• April 20: Semester registration\n• April 21-28: Mid-semester exams\n• May 10: Fee payment\n• May 15: Course withdrawal";
    } else if (lowerInput.includes("complaint") || lowerInput.includes("file")) {
      response = "To file a complaint, please visit the Complaint tab in the main navigation menu. You'll need to select a category and provide details. Your complaint will be assigned a tracking number.";
    } else if (lowerInput.includes("resource") || lowerInput.includes("study")) {
      response = "You can find study resources in:\n• University Learning Management System\n• Digital Library (accessible from Quick Links)\n• Department Resource Centers\n• Academic Resource Repository";
    } else if (lowerInput.includes("exam") || lowerInput.includes("test")) {
      response = "Mid-semester exams are scheduled from April 21-28. The detailed schedule is available on the examination portal. For specific subject schedules, please check your student dashboard.";
    } else if (lowerInput.includes("holiday") || lowerInput.includes("vacation")) {
      response = "Upcoming holidays:\n• April 14: Ambedkar Jayanti\n• May 1: Labor Day\n• May 15-16: University Foundation Day celebrations";
    } else if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      response = "Hello! How can I assist you with VIT Bhopal University information today?";
    } else {
      response = "I'm not sure I understand. Could you rephrase or select one of the quick options below?";
    }

    addMessage(response, "bot");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-16 right-4 w-80 md:w-96 h-96 bg-card rounded-lg shadow-xl border overflow-hidden flex flex-col z-50 animate-fade-in">
      {/* Chatbot header */}
      <div className="bg-primary text-primary-foreground p-3 flex items-center justify-between">
        <div className="flex items-center">
          <MessageSquare className="h-5 w-5 mr-2" />
          <h3 className="font-medium">VIT Assistant</h3>
        </div>
        <button
          onClick={onClose}
          className="hover:bg-primary-foreground/10 rounded-full p-1 transition-colors"
          aria-label="Close chatbot"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                message.sender === "user"
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted"
              }`}
            >
              <div className="whitespace-pre-line">{message.text}</div>
              <div
                className={`text-xs mt-1 ${
                  message.sender === "user"
                    ? "text-primary-foreground/70"
                    : "text-muted-foreground"
                }`}
              >
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick options */}
      <div className="p-2 border-t bg-card">
        <div className="flex space-x-2 mb-2 overflow-x-auto pb-1">
          {quickOptions.map((option) => (
            <button
              key={option.id}
              onClick={option.action}
              className="flex items-center space-x-1 bg-muted px-2 py-1 rounded-full text-xs whitespace-nowrap hover:bg-muted/80 transition-colors"
            >
              {option.icon}
              <span>{option.text}</span>
            </button>
          ))}
        </div>

        {/* Input area */}
        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-muted text-sm rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary border-0"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground rounded-r-md px-3 py-2 hover:bg-primary/90 transition-colors"
            aria-label="Send message"
          >
            <Send className="h-4 w-4" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
