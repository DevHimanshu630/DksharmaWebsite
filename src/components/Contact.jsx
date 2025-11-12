const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-[#EFE9E8] to-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Contact</h2>
          <div className="w-24 h-1 bg-[#829CBA] mx-auto"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-[#EFE9E8]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2 text-black">Dr. Devendra Kumar Sharma</h3>
                <p className="text-lg text-gray-600 mb-6">Assistant Director of Archives</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Email</h4>
                    <a 
                      href="mailto:dvndrasharma5@gmail.com" 
                      className="text-lg text-[#829CBA] hover:text-[#829CBA]/80 font-medium transition-colors"
                    >
                      dvndrasharma5@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Mobile</h4>
                    <a 
                      href="tel:+919717670040" 
                      className="text-lg text-[#829CBA] hover:text-[#829CBA]/80 font-medium transition-colors"
                    >
                      +91 9717670040
                    </a>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">Office Address</h4>
                <p className="text-base text-gray-700 leading-relaxed">
                  National Archives of India<br />
                  Ministry of Culture (Government of India)<br />
                  Janpath, New Delhi – 110001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

