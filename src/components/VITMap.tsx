
import { useState } from 'react';
import { MapPin } from 'lucide-react';

const VITMap = () => {
  const [mapHovered, setMapHovered] = useState(false);
  
  return (
    <div 
      className="relative w-full h-full"
      onMouseEnter={() => setMapHovered(true)}
      onMouseLeave={() => setMapHovered(false)}
    >
      {/* Map image placeholder with campus location */}
      <div className="absolute inset-0 bg-[url('public/lovable-uploads/f2be0ce6-3d5b-42bb-b707-0b5885c1f3b2.png')] bg-cover bg-center opacity-25"></div>
      
      {/* Map overlay with stylized visualization */}
      <div className="absolute inset-0 bg-gradient-to-r from-vit-dark-bg-primary/30 to-vit-dark-accent/30"></div>
      
      {/* Campus marker */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className={`flex flex-col items-center transition-all duration-300 ${mapHovered ? 'scale-110' : 'scale-100'}`}>
          <MapPin size={36} className="text-primary animate-pulse" />
          <div className="bg-card text-card-foreground rounded-md px-3 py-1 shadow-lg mt-1">
            <p className="text-xs font-medium">VIT Bhopal University</p>
            <p className="text-xs text-muted-foreground">Kothri Kalan, Madhya Pradesh</p>
          </div>
        </div>
      </div>
      
      {/* Interactive prompt */}
      <div className="absolute bottom-4 right-4">
        <div className="bg-card rounded-lg shadow-lg p-2 text-xs">
          <p>Interactive campus map available on desktop app</p>
        </div>
      </div>
    </div>
  );
};

export default VITMap;
