const Memberships = () => {
  return (
    <section id="memberships" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Professional Memberships & Roles</h2>
          <div className="w-24 h-1 bg-[#829CBA] mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#EFE9E8] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#EFE9E8] hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-6 text-black pb-3 border-b-2 border-[#829CBA]">Professional Bodies</h3>
            <ul className="space-y-4 text-base text-gray-700">
              <li className="flex items-start">
                <span className="text-[#829CBA] mr-3 font-bold">•</span>
                <span>Life member of the Association of Indian Archivists</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#829CBA] mr-3 font-bold">•</span>
                <span>Member of various Government of India Expert Committees such as ICHR, ICPR (MHRD)</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#829CBA] mr-3 font-bold">•</span>
                <span>Member of the expert committee of Historians for 'Azadi ki Pehli Ladai ka Shaheedi Samarak' (War Memorial) Ambala Cantt. Government of Haryana</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#EFE9E8] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#EFE9E8] hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-6 text-black pb-3 border-b-2 border-[#829CBA]">Academic Roles</h3>
            <ul className="space-y-4 text-base text-gray-700">
              <li className="flex items-start">
                <span className="text-[#829CBA] mr-3 font-bold">•</span>
                <span>Visiting faculty member of Delhi University</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#829CBA] mr-3 font-bold">•</span>
                <span>Visiting Faculty member of Institute of Secretariat Training and Management (ISTM)</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#EFE9E8] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#EFE9E8] hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-6 text-black pb-3 border-b-2 border-[#829CBA]">Research Experience</h3>
            <ul className="space-y-4 text-base text-gray-700">
              <li className="flex items-start">
                <span className="text-[#829CBA] mr-3 font-bold">•</span>
                <span>Over 26 years of distinguished research and teaching experience in History, Culture, and Archives.</span>
              </li>
              {/* <li className="flex items-start">
                <span className="text-[#829CBA] mr-3 font-bold">•</span>
                <span>Participated in Seminars organized in the Allahabad University, G.B. Pant Institute of Social Science, Allahabad, National Archives of India, New Delhi & Various Universities of India</span>
              </li> */}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#EFE9E8] to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#EFE9E8] hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-6 text-black pb-3 border-b-2 border-[#829CBA]">Journalism</h3>
            <ul className="space-y-4 text-base text-gray-700">
              <li className="flex items-start">
                <span className="text-[#829CBA] mr-3 font-bold">•</span>
                <span>Associated with the Magazine 'City Guide' in the capacity of Assistant Editor from Allahabad</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#829CBA] mr-3 font-bold">•</span>
                <span>Contributed several articles in various newspapers & magazines</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Memberships

