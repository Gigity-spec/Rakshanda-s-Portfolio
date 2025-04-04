const Footer = () => {
  return (
    <footer className="bg-[#25092e] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="font-soria text-2xl text-white mb-2">Rakshinda Jabeen</h2>
            <p className="text-white opacity-70">English Teacher (CELTA Certified)</p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <a href="#home" className="text-white hover:text-[#f2c0DD] transition-colors duration-300">Home</a>
            <a href="#experience" className="text-white hover:text-[#f2c0DD] transition-colors duration-300">Experience</a>
            <a href="#publications" className="text-white hover:text-[#f2c0DD] transition-colors duration-300">Publications</a>
            <a href="#skills" className="text-white hover:text-[#f2c0DD] transition-colors duration-300">Skills</a>
            <a href="#contact" className="text-white hover:text-[#f2c0DD] transition-colors duration-300">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-white border-opacity-20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white opacity-70 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Rakshinda Jabeen. All rights reserved.</p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white opacity-70 hover:opacity-100 transition-opacity duration-300">
              <i className="fab fa-researchgate"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
