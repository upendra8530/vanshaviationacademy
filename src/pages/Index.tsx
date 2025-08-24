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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300">
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
            <div className="hidden lg:flex items-center space-x-6">
              <a href="#home" className="text-aviation-navy hover:text-aviation-gold transition-colors">Home</a>
              <a href="#about" className="text-aviation-navy hover:text-aviation-gold transition-colors">About</a>
              <a href="#courses" className="text-aviation-navy hover:text-aviation-gold transition-colors">Courses</a>
              <a href="#facilities" className="text-aviation-navy hover:text-aviation-gold transition-colors">Facilities</a>
              <a href="#testimonials" className="text-aviation-navy hover:text-aviation-gold transition-colors">Reviews</a>
              <a href="#contact" className="text-aviation-navy hover:text-aviation-gold transition-colors">Contact</a>
              <a href="tel:+919208099344" className="bg-aviation-gold text-aviation-navy px-4 py-2 rounded-full font-semibold hover:bg-aviation-navy hover:text-aviation-gold transition-colors">
                Call Now
              </a>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-aviation-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden bg-white border-t border-aviation-sky pb-4">
              <div className="flex flex-col space-y-4 pt-4">
                <a href="#home" className="text-aviation-navy hover:text-aviation-gold transition-colors px-4" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" className="text-aviation-navy hover:text-aviation-gold transition-colors px-4" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#courses" className="text-aviation-navy hover:text-aviation-gold transition-colors px-4" onClick={() => setIsMenuOpen(false)}>Courses</a>
                <a href="#facilities" className="text-aviation-navy hover:text-aviation-gold transition-colors px-4" onClick={() => setIsMenuOpen(false)}>Facilities</a>
                <a href="#testimonials" className="text-aviation-navy hover:text-aviation-gold transition-colors px-4" onClick={() => setIsMenuOpen(false)}>Reviews</a>
                <a href="#contact" className="text-aviation-navy hover:text-aviation-gold transition-colors px-4" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <a href="tel:+919208099344" className="mx-4 bg-aviation-gold text-aviation-navy px-4 py-2 rounded-full font-semibold hover:bg-aviation-navy hover:text-aviation-gold transition-colors text-center">
                  Call Now
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <div className="relative z-10 pt-20">

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center text-center">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Hero Content */}
              <div className="mb-8">
                <div className="inline-block bg-aviation-gold/20 text-aviation-navy px-6 py-2 rounded-full text-sm font-semibold mb-6">
                  ✈️ DGCA Approved Training Institute
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-aviation-navy mb-6 leading-tight">
                  Soar to New 
                  <span className="text-aviation-gold block">Heights</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                  Transform your passion for aviation into a professional career with India's premier flight training academy in Indore
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="#courses" 
                    className="bg-aviation-gold text-aviation-navy px-8 py-4 rounded-full text-lg font-semibold hover:bg-aviation-navy hover:text-aviation-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Explore Courses
                  </a>
                  <a 
                    href="tel:+919208099344" 
                    className="border-2 border-aviation-navy text-aviation-navy px-8 py-4 rounded-full text-lg font-semibold hover:bg-aviation-navy hover:text-white transition-all duration-300"
                  >
                    Call Now: +91 9208099344
                  </a>
                </div>
              </div>
              
              {/* Stats Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-aviation-navy mb-2">500+</div>
                  <div className="text-sm md:text-base text-muted-foreground">Flying Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-aviation-navy mb-2">50+</div>
                  <div className="text-sm md:text-base text-muted-foreground">Trained Pilots</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-aviation-navy mb-2">5+</div>
                  <div className="text-sm md:text-base text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-aviation-navy mb-2">100%</div>
                  <div className="text-sm md:text-base text-muted-foreground">DGCA Approved</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 pb-16">

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

        {/* Facilities Section */}
        <section id="facilities" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy text-center mb-12">
            World-Class Training Facilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/80 rounded-lg p-6 shadow-aviation">
              <div className="w-16 h-16 bg-aviation-gold/20 rounded-lg flex items-center justify-center mb-4">
                <Plane className="w-8 h-8 text-aviation-navy" />
              </div>
              <h3 className="text-xl font-semibold text-aviation-navy mb-3">Modern Aircraft Fleet</h3>
              <p className="text-muted-foreground">Well-maintained Cessna 152 and 172 aircraft with latest avionics and safety equipment for comprehensive flight training.</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-6 shadow-aviation">
              <div className="w-16 h-16 bg-aviation-gold/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🏢</span>
              </div>
              <h3 className="text-xl font-semibold text-aviation-navy mb-3">Advanced Simulators</h3>
              <p className="text-muted-foreground">State-of-the-art flight simulators for instrument training, emergency procedures, and weather condition practice.</p>
            </div>
            
            <div className="bg-white/80 rounded-lg p-6 shadow-aviation">
              <div className="w-16 h-16 bg-aviation-gold/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-aviation-navy mb-3">Ground School Classrooms</h3>
              <p className="text-muted-foreground">Air-conditioned classrooms with modern teaching aids, charts, and audio-visual equipment for theoretical training.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="mb-16 bg-white/80 rounded-lg p-8 shadow-aviation">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy text-center mb-12">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-aviation-sky/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-aviation-gold rounded-full flex items-center justify-center">
                    <span className="text-aviation-navy font-bold text-lg">R</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-aviation-navy">Rajesh Kumar</h4>
                    <p className="text-sm text-muted-foreground">Commercial Pilot, IndiGo</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Vansh Aviation Academy provided excellent training with experienced instructors. The practical approach and modern facilities helped me achieve my CPL successfully."
                </p>
                <div className="flex text-aviation-gold mt-3">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
              
              <div className="bg-aviation-sky/10 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-aviation-gold rounded-full flex items-center justify-center">
                    <span className="text-aviation-navy font-bold text-lg">P</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-aviation-navy">Priya Sharma</h4>
                    <p className="text-sm text-muted-foreground">First Officer, SpiceJet</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "The comprehensive ground school and flight training at Vansh Aviation Academy prepared me well for my aviation career. Highly recommended for aspiring pilots."
                </p>
                <div className="flex text-aviation-gold mt-3">
                  ⭐⭐⭐⭐⭐
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-aviation-navy text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white/80 rounded-lg p-6 shadow-aviation">
                <h3 className="text-lg font-semibold text-aviation-navy mb-3">What are the eligibility criteria for pilot training?</h3>
                <p className="text-muted-foreground">Candidates must be at least 17 years old for PPL and 18 years for CPL, have completed 10+2 with Physics and Mathematics, and pass DGCA medical examination.</p>
              </div>
              
              <div className="bg-white/80 rounded-lg p-6 shadow-aviation">
                <h3 className="text-lg font-semibold text-aviation-navy mb-3">How long does it take to complete pilot training?</h3>
                <p className="text-muted-foreground">PPL training typically takes 3-6 months, while CPL training can take 12-18 months depending on weather conditions and individual progress.</p>
              </div>
              
              <div className="bg-white/80 rounded-lg p-6 shadow-aviation">
                <h3 className="text-lg font-semibold text-aviation-navy mb-3">What is the cost of pilot training?</h3>
                <p className="text-muted-foreground">Training costs vary based on the license type and individual requirements. Contact us for detailed fee structure and payment options.</p>
              </div>
              
              <div className="bg-white/80 rounded-lg p-6 shadow-aviation">
                <h3 className="text-lg font-semibold text-aviation-navy mb-3">Do you provide job placement assistance?</h3>
                <p className="text-muted-foreground">Yes, we provide comprehensive career guidance and job placement assistance with our industry connections and airline partnerships.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-2xl mx-auto">
          <ContactInfo />
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={logoImage} 
                    alt="Vansh Aviation Academy Logo" 
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-aviation-navy font-semibold">Vansh Aviation Academy</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  DGCA-approved pilot training academy in Indore offering Commercial Pilot License (CPL), 
                  Private Pilot License (PPL), and aviation ground school programs.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-aviation-navy font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2 text-sm">
                  <a href="#about" className="block text-muted-foreground hover:text-aviation-gold transition-colors">About Us</a>
                  <a href="#courses" className="block text-muted-foreground hover:text-aviation-gold transition-colors">Training Programs</a>
                  <a href="#facilities" className="block text-muted-foreground hover:text-aviation-gold transition-colors">Facilities</a>
                  <a href="#testimonials" className="block text-muted-foreground hover:text-aviation-gold transition-colors">Student Reviews</a>
                  <a href="#faq" className="block text-muted-foreground hover:text-aviation-gold transition-colors">FAQ</a>
                  <a href="#contact" className="block text-muted-foreground hover:text-aviation-gold transition-colors">Contact Us</a>
                </div>
              </div>

              {/* Legal & Policies */}
              <div>
                <h3 className="text-aviation-navy font-semibold mb-4">Legal & Policies</h3>
                <div className="space-y-2 text-sm">
                  <a href="/privacy-policy" className="block text-muted-foreground hover:text-aviation-gold transition-colors">Privacy Policy</a>
                  <a href="/terms-of-service" className="block text-muted-foreground hover:text-aviation-gold transition-colors">Terms of Service</a>
                  <a href="/cookie-policy" className="block text-muted-foreground hover:text-aviation-gold transition-colors">Cookie Policy</a>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">DGCA Approved Training Organization</p>
                    <p className="text-xs text-muted-foreground">Registration: [License Number]</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-border pt-6 pb-4">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-muted-foreground text-sm">
                  © 2024 Vansh Aviation Academy. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                  <a href="tel:+919208099344" className="text-aviation-gold hover:text-aviation-navy text-sm font-semibold">
                    📞 +91 9208099344
                  </a>
                  <a href="mailto:aviationacademyvansh@gmail.com" className="text-aviation-gold hover:text-aviation-navy text-sm font-semibold">
                    ✉️ Email Us
                  </a>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-xs text-muted-foreground">
                  🏆 Best Aviation Training Academy in Indore, Madhya Pradesh | ✈️ Professional Pilot Training Since 2019
                </p>
              </div>
            </div>
          </div>
        </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
