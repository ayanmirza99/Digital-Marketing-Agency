export default function Footer() {
  return (
    <footer className="selection:bg-[#383838] selection:text-white">
      {/* Main footer content */}
      <div className="px-6 pt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-3">
              <p className="font-medium">
                7500 Viscount Blvd, El Paso, TX 79925
              </p>
              <p className="font-medium">+1 (915) 881 9119</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-black rounded-full"></div>
                <a
                  href="mailto:contact@Adify.io"
                  className="font-medium hover:text-gray-600 transition-colors"
                >
                  contact@Adify.io
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 py-4 md:py-0 col-span-2">
              {/* Navigation */}
              <div>
                <h3 className="text-gray-600 font-medium mb-4">Navigation</h3>
                <nav className="space-y-2">
                  <a
                    href="#"
                    className="block font-medium hover:text-gray-600 transition-colors"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="block font-medium hover:text-gray-600 transition-colors"
                  >
                    About us
                  </a>
                  <a
                    href="#"
                    className="block font-medium hover:text-gray-600 transition-colors"
                  >
                    Projects
                  </a>
                  <a
                    href="#"
                    className="block font-medium hover:text-gray-600 transition-colors"
                  >
                    Blog
                  </a>
                </nav>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-gray-600 font-medium mb-4">Social</h3>
                <nav className="space-y-2">
                  <a
                    href="#"
                    className="flex items-center space-x-2 font-medium hover:text-gray-600 transition-colors"
                  >
                    <span>Facebook</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 font-medium hover:text-gray-600 transition-colors"
                  >
                    <span>Instagram</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 font-medium hover:text-gray-600 transition-colors"
                  >
                    <span>Youtube</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="flex items-center space-x-2 font-medium hover:text-gray-600 transition-colors"
                  >
                    <span>LinkedIn</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </nav>
              </div>
            </div>
          </div>

          {/* Brand Logo */}
        </div>
      </div>
      <div className="text-center md:text-right py-8 md:py-0 px-4">
        <h2 className="text-[20vw] md:text-[16vw] select-none tracking-[-0.02em] font-semibold">
          Adify<span className="font-light">™</span>
        </h2>
      </div>

      {/* Bottom footer */}
      <div className="bg-black px-6 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            Copyright © 2025 Adify™
          </p>
          <nav className="flex space-x-8">
            <a
              href="#"
              className="text-white text-[12px] text-center md:text-justify md:text-sm hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white text-[12px] text-center md:text-justify md:text-sm hover:text-gray-300 transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white text-[12px] text-center md:text-justify md:text-sm hover:text-gray-300 transition-colors"
            >
              Bedrock Digital
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
