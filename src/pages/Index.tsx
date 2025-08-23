import ContactInfo from '@/components/ContactInfo';
import { Plane, Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
const logoImage = '/vanshaviation-logo.png';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      {/* Navigation */}
      <nav className="relative z-20 bg-white/90 backdrop-blur-sm shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="Vansh Aviation Academy Logo" 
                className="w-12 h-12 object-contain"
              />
              <div className="text-left">
                <h1 className="text-xl font-bold text-aviation-navy">
                  Vansh Aviation Academy
                </h1>
                <p className="text-xs text-aviation-gold font-medium">
                  Professional Pilot Training
                </p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-aviation-navy hover:text-aviation-gold transition-colors">Home</a>
              <a href="#about" className="text-aviation-navy hover:text-aviation-gold transition-colors">About</a>
              <a href="#courses" className="text-aviation-navy hover:text-aviation-gold transition-colors">Courses</a>
              <a href="#contact" className="text-aviation-navy hover:text-aviation-gold transition-colors">Contact</a>
              <a href="tel:+919208099344" className="bg-aviation-gold text-aviation-navy px-4 py-2 rounded-full font-semibold hover:bg-aviation-navy hover:text-aviation-gold transition-colors">
                Call Now
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-aviation-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-t border-aviation-sky pb-4">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#home" className="text-aviation-navy hover:text-aviation-gold transition-colors px-4">Home</a>
                <a href="#about" className="text-aviation-navy hover:text-aviation-gold transition-colors px-4">About</a>
                <a href="#courses" className="text-aviation-navy hover:text-aviation-gold transition-colors px-4">Courses</a>
                <a href="#contact" className="text-aviation-navy hover:text-aviation-gold transition-colors px-4">Contact</a>
                <a href="tel:+919208099344" className="mx-4 bg-aviation-gold text-aviation-navy px-4 py-2 rounded-full font-semibold hover:bg-aviation-navy hover:text-aviation-gold transition-colors text-center">
                  Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">

        {/* Hero Section */}
        <section id="home" className="text-center mb-16">
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
            Soar to New Heights
          </h1>
          
          <div className="inline-block bg-gradient-gold text-aviation-navy px-6 py-3 rounded-full shadow-glow mb-8">
            <p className="text-lg md:text-xl font-semibold">
              Professional Aviation Training Academy
            </p>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Embark on your aviation career with Vansh Aviation Academy in Indore, Madhya Pradesh. We provide DGCA-approved pilot training, 
            commercial pilot license (CPL) courses, private pilot license (PPL) programs, and comprehensive aviation ground school education. 
            Join India's premier flight training institute to achieve your dreams of becoming a professional pilot.
          </p>
        </section>

        {/* About Section */}
        <section id="about" className="mb-16 bg-white/80 rounded-lg p-8 shadow-aviation">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy text-center mb-8">
              About Vansh Aviation Academy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-4">
                  Vansh Aviation Academy is a premier flight training institute located in Indore, Madhya Pradesh. 
                  We are dedicated to providing world-class aviation education and training to aspiring pilots.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Our DGCA-approved programs are designed to meet international aviation standards, ensuring our 
                  graduates are well-prepared for successful careers in aviation.
                </p>
                <p className="text-lg text-muted-foreground">
                  With experienced instructors, modern facilities, and a commitment to safety and excellence, 
                  we help students achieve their dreams of becoming professional pilots.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="w-64 h-64 bg-aviation-sky/20 rounded-lg flex items-center justify-center">
                  <Plane className="w-32 h-32 text-aviation-navy opacity-50" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy text-center mb-12">
            Our Training Programs
          </h2>
          {/* Services Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-card rounded-lg p-6 shadow-aviation border border-border">
              <div className="w-12 h-12 bg-aviation-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                <Plane className="w-6 h-6 text-aviation-navy" />
              </div>
              <h3 className="text-lg font-semibold text-aviation-navy mb-2">Commercial Pilot License (CPL) Training</h3>
              <p className="text-sm text-muted-foreground">DGCA-approved CPL training in Indore with experienced flight instructors, modern aircraft fleet, and comprehensive flight simulation.</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-aviation border border-border">
              <div className="w-12 h-12 bg-aviation-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                <Plane className="w-6 h-6 text-aviation-navy" />
              </div>
              <h3 className="text-lg font-semibold text-aviation-navy mb-2">Private Pilot License (PPL) Training</h3>
              <p className="text-sm text-muted-foreground">Begin your pilot career with DGCA-approved PPL courses, including flight training, aviation theory, and aircraft handling at our Indore facility.</p>
            </div>
            
            <div className="bg-card rounded-lg p-6 shadow-aviation border border-border">
              <div className="w-12 h-12 bg-aviation-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                <Plane className="w-6 h-6 text-aviation-navy" />
              </div>
              <h3 className="text-lg font-semibold text-aviation-navy mb-2">Aviation Ground School</h3>
              <p className="text-sm text-muted-foreground">Complete aviation ground school programs covering aerodynamics, navigation, meteorology, air regulations, and aircraft systems for pilot certification.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy text-center mb-12">
            Why Choose Vansh Aviation Academy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center p-6 bg-card rounded-lg shadow-aviation border border-border">
              <div className="w-16 h-16 bg-aviation-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-aviation-navy">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-aviation-navy mb-2">DGCA Approved</h3>
              <p className="text-sm text-muted-foreground">Certified training programs approved by DGCA India</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-aviation border border-border">
              <div className="w-16 h-16 bg-aviation-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-aviation-navy">★</span>
              </div>
              <h3 className="text-lg font-semibold text-aviation-navy mb-2">Expert Instructors</h3>
              <p className="text-sm text-muted-foreground">Experienced aviation professionals and certified flight instructors</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-aviation border border-border">
              <div className="w-16 h-16 bg-aviation-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-aviation-navy">✈</span>
              </div>
              <h3 className="text-lg font-semibold text-aviation-navy mb-2">Modern Aircraft</h3>
              <p className="text-sm text-muted-foreground">Well-maintained training aircraft and flight simulators</p>
            </div>
            
            <div className="text-center p-6 bg-card rounded-lg shadow-aviation border border-border">
              <div className="w-16 h-16 bg-aviation-gold rounded-full flex items-center justify-center mb-4 mx-auto">
                <span className="text-2xl font-bold text-aviation-navy">🎓</span>
              </div>
              <h3 className="text-lg font-semibold text-aviation-navy mb-2">Career Support</h3>
              <p className="text-sm text-muted-foreground">Job placement assistance and career guidance</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-2xl mx-auto">
          <ContactInfo />
        </section>

        {/* Footer */}
        <footer className="text-center mt-16 pt-8 border-t border-border">
          <div className="flex justify-center items-center gap-3 mb-4">
            <img 
              src={logoImage} 
              alt="Vansh Aviation Academy Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-aviation-navy font-semibold">Vansh Aviation Academy</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 Vansh Aviation Academy. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
