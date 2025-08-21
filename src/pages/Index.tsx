import CountdownTimer from '@/components/CountdownTimer';
import ContactInfo from '@/components/ContactInfo';
import { Plane } from 'lucide-react';
import logoImage from '/vanshaviation-logo.png';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-sky">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 opacity-10">
          <Plane className="w-32 h-32 text-aviation-navy transform rotate-45" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Plane className="w-24 h-24 text-aviation-gold transform -rotate-12" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-5">
          <Plane className="w-40 h-40 text-aviation-navy transform rotate-12" />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 md:w-64 md:h-64 flex items-center justify-center bg-[#ffffff] rounded-full shadow-2xl animate-float">
              <img 
                src={logoImage} 
                alt="Vansh Aviation Academy Logo" 
                className="w-40 h-40 md:w-52 md:h-52 object-contain"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-aviation-navy mb-4">
            Coming Soon
          </h1>
          
          <div className="inline-block bg-gradient-gold text-aviation-navy px-6 py-3 rounded-full shadow-glow mb-8">
            <p className="text-lg md:text-xl font-semibold">
              Professional Aviation Training Academy
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get ready to soar to new heights with Vansh Aviation Academy. 
            Professional pilot training and aviation education starting soon.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-aviation-navy text-center mb-8">
            Launch Countdown
          </h2>
          <CountdownTimer />
        </div>

        {/* Contact Information */}
        <div className="max-w-2xl mx-auto">
          <ContactInfo />
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2024 Vansh Aviation Academy. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
