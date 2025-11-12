const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. Devendra Kumar Sharma</h3>
            <p className="text-gray-400 text-sm">
              Assistant Director of Archives<br />
              National Archives of India
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#research" className="hover:text-white transition-colors">Research</a></li>
              <li><a href="#exhibitions" className="hover:text-white transition-colors">Exhibitions</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:dvndrasharma5@gmail.com" className="hover:text-white transition-colors">
                  dvndrasharma5@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919717670040" className="hover:text-white transition-colors">
                  +91 9717670040
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Dr. Devendra Kumar Sharma | All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

