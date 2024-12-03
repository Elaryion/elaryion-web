export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-rose-600">
            Privacy Policy
          </h1>

          <div className="space-y-8">
            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <span className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </span>
                Information We Collect
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We collect information that you provide directly to us, information we obtain automatically 
                when you visit our website, and information from other sources.
              </p>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <span className="bg-rose-100 text-rose-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
                  </svg>
                </span>
                How We Use Your Information
              </h2>
              <ul className="text-gray-600 space-y-3">
                {[
                  'To provide and maintain our Service',
                  'To notify you about changes to our Service',
                  'To provide customer support',
                  'To gather analysis or valuable information to improve our Service'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 flex items-center text-gray-800">
                <span className="bg-pink-100 text-pink-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                </span>
                Data Protection Rights
              </h2>
              <p className="text-gray-600 leading-relaxed">
                We would like to make sure you are fully aware of all of your data protection rights. 
                Every user is entitled to access, rectification, erasure, restrict processing, data 
                portability, and objection.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 