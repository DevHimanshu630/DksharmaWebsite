import heroImage from '../assets/national-archive.jpg'
import profilePhoto from '../assets/WhatsApp Image 2025-11-08 at 15.12.08.jpeg'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="National Archives" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full py-12 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-2 md:-inset-4 bg-white/20 rounded-full blur-xl"></div>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl">
                <img 
                  src={profilePhoto} 
                  alt="Dr. Devendra Kumar Sharma" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-center lg:text-left text-white order-1 lg:order-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-3 md:mb-4 leading-tight">
              Dr. Devendra Kumar Sharma
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-200 mb-4 md:mb-6">
              Assistant Director of Archives
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Distinguished historian, curator, and author dedicated to preserving 
              and interpreting India's historical and cultural heritage.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a 
                href="#about" 
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-black font-semibold rounded-lg hover:bg-[#EFE9E8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
              >
                Learn More
              </a>
              <a 
                href="#contact" 
                className="px-6 sm:px-8 py-2.5 sm:py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero

