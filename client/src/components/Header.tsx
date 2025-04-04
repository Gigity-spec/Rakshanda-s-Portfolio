import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 bg-white ${isScrolled ? 'bg-opacity-95 shadow-sm' : 'bg-opacity-90'} z-50 transition-all duration-300`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center">
          <span className="font-soria text-2xl text-[#A3886b]">Rakshinda Jabeen</span>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-[#25092e] hover:text-[#A3886b] transition-colors duration-300">Home</a>
          <a href="#experience" className="text-[#25092e] hover:text-[#A3886b] transition-colors duration-300">Experience</a>
          <a href="#publications" className="text-[#25092e] hover:text-[#A3886b] transition-colors duration-300">Publications</a>
          <a href="#skills" className="text-[#25092e] hover:text-[#A3886b] transition-colors duration-300">Skills</a>
          <a href="#contact" className="gradient-border hover:shadow-md transition-shadow duration-300">
            <span className="block px-5 py-2 text-[#25092e] hover:text-[#A3886b] transition-colors duration-300">Contact Me</span>
          </a>
        </nav>
        
        <button 
          className="md:hidden text-[#25092e]" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white shadow-md`}>
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-3">
            <a href="#home" onClick={closeMobileMenu} className="text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2">Home</a>
            <a href="#experience" onClick={closeMobileMenu} className="text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2">Experience</a>
            <a href="#publications" onClick={closeMobileMenu} className="text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2">Publications</a>
            <a href="#skills" onClick={closeMobileMenu} className="text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2">Skills</a>
            <a href="#contact" onClick={closeMobileMenu} className="text-[#25092e] hover:text-[#A3886b] transition-colors duration-300 py-2">Contact Me</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
