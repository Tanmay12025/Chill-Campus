
import Calendar from "@/components/dashboard/Calendar";
import Events from "@/components/dashboard/Events";
import NoticeBoard from "@/components/dashboard/NoticeBoard";
import VITMap from "@/components/VITMap";

const Home = () => {
  return (
    <div className="space-y-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <span className="vit-badge">Academic Year 2024-25</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Calendar />
        <Events />
        <NoticeBoard />
      </div>

      <div className="border-t pt-6">
        <h2 className="text-xl font-bold mb-4">Chill Campus University</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="dashboard-card md:col-span-2">
            <h3 className="text-lg font-semibold mb-3">About</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Chill Campus University is one of India's leading institutions known for academic excellence and innovative research. 
              Established with a vision to provide world-class education, Chill Campus offers a wide range of undergraduate, 
              postgraduate, and doctoral programs in Engineering, Management, Computer Applications, and Sciences.
            </p>
            <p className="text-sm text-muted-foreground">
              Our campus spans over 200 acres with state-of-the-art infrastructure, including modern laboratories, 
              a well-stocked library, sports facilities, and comfortable accommodation for students.
            </p>
            
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-muted rounded-md p-3 text-center">
                <div className="text-2xl font-bold text-primary">15,000+</div>
                <div className="text-xs text-muted-foreground">Students</div>
              </div>
              <div className="bg-muted rounded-md p-3 text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-xs text-muted-foreground">Faculty</div>
              </div>
              <div className="bg-muted rounded-md p-3 text-center">
                <div className="text-2xl font-bold text-primary">30+</div>
                <div className="text-xs text-muted-foreground">Programs</div>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <h3 className="text-lg font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm flex items-center text-primary hover:underline">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Digital Library
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex items-center text-primary hover:underline">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Academic Calendar
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex items-center text-primary hover:underline">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Examination Schedule
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex items-center text-primary hover:underline">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Fee Structure
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex items-center text-primary hover:underline">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Hostel Accommodations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm flex items-center text-primary hover:underline">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2"></span>
                  Transport Facilities
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-3">Campus Map</h3>
          <div className="border rounded-lg overflow-hidden h-72">
            <VITMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
