import { useState, useEffect, useRef } from 'react';
import { Link } from 'wouter';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Determine active section based on scroll position
      const sections = ['home', 'experience', 'publications', 'skills', 'education', 'celta', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard navigation for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMobileMenuOpen && e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isMobileMenuOpen && mobileMenuRef.current) {
      const focusableElements = mobileMenuRef.current.querySelectorAll(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
        
        firstElement.focus();
        
        const handleTabKey = (e: KeyboardEvent) => {
          if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        };
        
        mobileMenuRef.current.addEventListener('keydown', handleTabKey);
        return () => {
          mobileMenuRef.current?.removeEventListener('keydown', handleTabKey);
        };
      }
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 bg-white ${isScrolled ? 'bg-opacity-95 shadow-sm' : 'bg-opacity-90'} z-50 transition-all duration-300`}
      role="banner"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a 
          href="#home" 
          className="flex items-center"
          aria-label="Go to home section"
        >
          <span className="font-soria text-2xl text-[#A3886b]">Rakshinda Jabeen</span>
        </a>
        
        <nav 
          className="hidden md:flex items-center space-x-5"
          aria-label="Main navigation"
        >
          <a 
            href="#home" 
            className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-1 px-2 ${activeSection === 'home' ? 'border-b-2 border-[#f2c0DD]' : ''}`}
            aria-current={activeSection === 'home' ? 'page' : undefined}
          >
            Home
          </a>
          <a 
            href="#experience" 
            className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-1 px-2 ${activeSection === 'experience' ? 'border-b-2 border-[#f2c0DD]' : ''}`}
            aria-current={activeSection === 'experience' ? 'page' : undefined}
          >
            Experience
          </a>
          <a 
            href="#publications" 
            className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-1 px-2 ${activeSection === 'publications' ? 'border-b-2 border-[#f2c0DD]' : ''}`}
            aria-current={activeSection === 'publications' ? 'page' : undefined}
          >
            Publications
          </a>
          <a 
            href="#skills" 
            className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-1 px-2 ${activeSection === 'skills' ? 'border-b-2 border-[#f2c0DD]' : ''}`}
            aria-current={activeSection === 'skills' ? 'page' : undefined}
          >
            Skills
          </a>
          <a 
            href="#education" 
            className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-1 px-2 ${activeSection === 'education' ? 'border-b-2 border-[#f2c0DD]' : ''}`}
            aria-current={activeSection === 'education' ? 'page' : undefined}
          >
            Education
          </a>
          <a 
            href="#celta" 
            className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-1 px-2 ${activeSection === 'celta' ? 'border-b-2 border-[#f2c0DD]' : ''}`}
            aria-current={activeSection === 'celta' ? 'page' : undefined}
          >
            CELTA
          </a>
          <a 
            href="#contact" 
            className="gradient-border hover:shadow-md transition-shadow duration-300"
            aria-current={activeSection === 'contact' ? 'page' : undefined}
          >
            <span className={`block px-5 py-2 text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 ${activeSection === 'contact' ? 'text-[#A3886b]' : ''}`}>Contact Me</span>
          </a>
        </nav>
        
        <button 
          ref={menuButtonRef}
          className="md:hidden text-[#25092e] p-2 rounded-md" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div 
        id="mobile-menu"
        ref={mobileMenuRef}
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="container mx-auto px-4 py-3">
          <nav 
            className="flex flex-col space-y-3"
            aria-label="Mobile navigation"
          >
            <a 
              href="#home" 
              onClick={closeMobileMenu} 
              className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2 px-3 rounded ${activeSection === 'home' ? 'bg-[#f2c0DD] bg-opacity-20 font-medium' : ''}`}
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Home
            </a>
            <a 
              href="#experience" 
              onClick={closeMobileMenu} 
              className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2 px-3 rounded ${activeSection === 'experience' ? 'bg-[#f2c0DD] bg-opacity-20 font-medium' : ''}`}
              aria-current={activeSection === 'experience' ? 'page' : undefined}
            >
              Experience
            </a>
            <a 
              href="#publications" 
              onClick={closeMobileMenu} 
              className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2 px-3 rounded ${activeSection === 'publications' ? 'bg-[#f2c0DD] bg-opacity-20 font-medium' : ''}`}
              aria-current={activeSection === 'publications' ? 'page' : undefined}
            >
              Publications
            </a>
            <a 
              href="#skills" 
              onClick={closeMobileMenu} 
              className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2 px-3 rounded ${activeSection === 'skills' ? 'bg-[#f2c0DD] bg-opacity-20 font-medium' : ''}`}
              aria-current={activeSection === 'skills' ? 'page' : undefined}
            >
              Skills
            </a>
            <a 
              href="#education" 
              onClick={closeMobileMenu} 
              className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2 px-3 rounded ${activeSection === 'education' ? 'bg-[#f2c0DD] bg-opacity-20 font-medium' : ''}`}
              aria-current={activeSection === 'education' ? 'page' : undefined}
            >
              Education
            </a>
            <a 
              href="#celta" 
              onClick={closeMobileMenu} 
              className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2 px-3 rounded ${activeSection === 'celta' ? 'bg-[#f2c0DD] bg-opacity-20 font-medium' : ''}`}
              aria-current={activeSection === 'celta' ? 'page' : undefined}
            >
              CELTA
            </a>
            <a 
              href="#contact" 
              onClick={closeMobileMenu} 
              className={`text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2 px-3 rounded ${activeSection === 'contact' ? 'bg-[#f2c0DD] bg-opacity-20 font-medium' : ''}`}
              aria-current={activeSection === 'contact' ? 'page' : undefined}
            >
              Contact Me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
