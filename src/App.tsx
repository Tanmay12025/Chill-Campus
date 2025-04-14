
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Complaint from "./pages/Complaint";
import NotFound from "./pages/NotFound";
import Calendar from "./pages/Calendar";
import Events from "./pages/Events";
import Notices from "./pages/Notices";
import Settings from "./pages/Settings";
import Curriculum from "./pages/Curriculum";
import Examination from "./pages/Examination";
import Finance from "./pages/Finance";
import Faculty from "./pages/Faculty";
import Library from "./pages/Library";
import Tutoring from "./pages/Tutoring";
import Planner from "./pages/Planner";
import Pomodoro from "./pages/Pomodoro";
import Mood from "./pages/Mood";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/community" element={<Layout><Community /></Layout>} />
          <Route path="/complaint" element={<Layout><Complaint /></Layout>} />
          
          {/* Sidebar routes */}
          <Route path="/calendar" element={<Layout><Calendar /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />
          <Route path="/notices" element={<Layout><Notices /></Layout>} />
          <Route path="/settings" element={<Layout><Settings /></Layout>} />
          <Route path="/curriculum" element={<Layout><Curriculum /></Layout>} />
          <Route path="/examination" element={<Layout><Examination /></Layout>} />
          <Route path="/finance" element={<Layout><Finance /></Layout>} />
          <Route path="/faculty" element={<Layout><Faculty /></Layout>} />
          
          {/* Study Tools */}
          <Route path="/planner" element={<Layout><Planner /></Layout>} />
          <Route path="/pomodoro" element={<Layout><Pomodoro /></Layout>} />
          <Route path="/mood" element={<Layout><Mood /></Layout>} />
          
          {/* Academic Resources */}
          <Route path="/library" element={<Layout><Library /></Layout>} />
          <Route path="/tutoring" element={<Layout><Tutoring /></Layout>} />
          
          {/* Removed hostels and dining routes as per request */}
          
          {/* Additional routes for 404 pages */}
          <Route path="/clubs" element={<Layout><NotFound /></Layout>} />
          <Route path="/community-service" element={<Layout><NotFound /></Layout>} />
          <Route path="/billing" element={<Layout><NotFound /></Layout>} />
          <Route path="/registrar" element={<Layout><NotFound /></Layout>} />
          <Route path="/it" element={<Layout><NotFound /></Layout>} />
          <Route path="/wifi" element={<Layout><NotFound /></Layout>} />
          <Route path="/counselling" element={<Layout><NotFound /></Layout>} />
          <Route path="/aid" element={<Layout><NotFound /></Layout>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<Layout><NotFound /></Layout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
