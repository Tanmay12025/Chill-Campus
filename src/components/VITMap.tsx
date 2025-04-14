
import { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

interface CollegeLocation {
  name: string;
  location: string;
  coordinates: {
    top: string;
    left: string;
  };
  mapImage: string;
}

const collegeLocations: Record<string, CollegeLocation> = {
  'vitbhopal.ac.in': {
    name: 'VIT Bhopal University',
    location: 'Kothri Kalan, Madhya Pradesh',
    coordinates: {
      top: '50%',
      left: '50%'
    },
    mapImage: 'public/lovable-uploads/f2be0ce6-3d5b-42bb-b707-0b5885c1f3b2.png'
  },
  'vit.ac.in': {
    name: 'VIT Vellore',
    location: 'Vellore, Tamil Nadu',
    coordinates: {
      top: '60%',
      left: '45%'
    },
    mapImage: 'public/lovable-uploads/3db12187-f9b7-4b22-9fd4-31dc5f0cca1f.png'
  },
  'default': {
    name: 'Chill Campus University',
    location: 'Campus Location',
    coordinates: {
      top: '50%',
      left: '50%'
    },
    mapImage: 'public/lovable-uploads/f2be0ce6-3d5b-42bb-b707-0b5885c1f3b2.png'
  }
};

const VITMap = () => {
  const [mapHovered, setMapHovered] = useState(false);
  const [collegeInfo, setCollegeInfo] = useState<CollegeLocation>(collegeLocations['default']);
  const { user } = useAuth();
  
  useEffect(() => {
    if (user?.email) {
      const emailDomain = user.email.split('@')[1];
      
      // Check if we have a matching college for this email domain
      const matchingCollege = Object.entries(collegeLocations).find(
        ([domain]) => emailDomain?.includes(domain)
      );
      
      if (matchingCollege) {
        setCollegeInfo(matchingCollege[1]);
      } else {
        setCollegeInfo(collegeLocations['default']);
      }
    }
  }, [user]);
  
  return (
    <div className="relative w-full h-full">
      <div 
        className="relative w-full h-full overflow-hidden rounded-lg"
        onMouseEnter={() => setMapHovered(true)}
        onMouseLeave={() => setMapHovered(false)}
      >
        {/* Map image responsive and fixed to prevent sliding */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url('${collegeInfo.mapImage}')` }}
        ></div>
        
        {/* Map overlay with stylized visualization */}
        <div className="absolute inset-0 bg-gradient-to-r from-vit-dark-bg-primary/30 to-vit-dark-accent/30"></div>
        
        {/* Campus marker positioned based on college */}
        <div 
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ 
            top: collegeInfo.coordinates.top, 
            left: collegeInfo.coordinates.left 
          }}
        >
          <div className={`flex flex-col items-center transition-all duration-300 ${mapHovered ? 'scale-110' : 'scale-100'}`}>
            <MapPin size={36} className="text-primary animate-pulse" />
            <div className="bg-card text-card-foreground rounded-md px-3 py-1 shadow-lg mt-1">
              <p className="text-xs font-medium">{collegeInfo.name}</p>
              <p className="text-xs text-muted-foreground">{collegeInfo.location}</p>
            </div>
          </div>
        </div>
        
        {/* Interactive prompt */}
        <Drawer>
          <DrawerTrigger asChild>
            <button className="absolute bottom-4 right-4 bg-card rounded-lg shadow-lg p-2 text-xs hover:bg-accent transition-colors">
              Explore interactive campus map
            </button>
          </DrawerTrigger>
          <DrawerContent className="h-[85vh]">
            <div className="p-4 mx-auto w-full max-w-4xl">
              <h3 className="text-lg font-semibold mb-4">{collegeInfo.name} - Interactive Map</h3>
              <div className="aspect-video bg-cover bg-center rounded-lg shadow-md overflow-hidden"
                style={{ backgroundImage: `url('${collegeInfo.mapImage}')` }}
              >
                {/* Could add interactive map elements here in the future */}
              </div>
              <div className="mt-4">
                <h4 className="font-medium">Key Locations</h4>
                <ul className="mt-2 space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                    <span>Main Academic Building</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-destructive rounded-full mr-2"></span>
                    <span>Library</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-amber-500 rounded-full mr-2"></span>
                    <span>Student Center</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-emerald-500 rounded-full mr-2"></span>
                    <span>Sports Complex</span>
                  </li>
                </ul>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default VITMap;
