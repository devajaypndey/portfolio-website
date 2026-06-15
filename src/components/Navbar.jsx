import { useState } from "react";
import { Github, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#020B1F] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">


          <div className="flex items-center cursor-pointer">
            <span className="text-orange-500 font-black text-2xl">//</span>
            <span className="text-white font-bold text-2xl">AH</span>
          </div>


          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#resume"
              className="text-gray-300 hover:text-white text-sm font-semibold tracking-wider transition-colors duration-200"
            >
              RESUME
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-white text-sm font-semibold tracking-wider transition-colors duration-200"
            >
              CONTACT
            </a>


            <a
              href="https://github.com/devajaypndey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              <Github size={18} />
            </a>


            <button className="text-gray-300 hover:text-white transition-colors duration-200">
              <Moon size={18} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800 py-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#resume"
                className="text-gray-300 hover:text-white text-sm font-semibold tracking-wider"
              >
                RESUME
              </a>

              <a
                href="#contact"
                className="text-gray-300 hover:text-white text-sm font-semibold tracking-wider"
              >
                CONTACT
              </a>

              <div className="flex items-center space-x-5 pt-2">
                <a
                  href="https://x.com"
                  className="text-gray-300 hover:text-white"
                >
                  <span className="text-lg">𝕏</span>
                </a>

                <a
                  href="https://github.com"
                  className="text-gray-300 hover:text-white"
                >
                  <Github size={18} />
                </a>

                <button className="text-gray-300 hover:text-white">
                  <Moon size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}