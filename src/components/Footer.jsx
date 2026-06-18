import { Home, GitBranch } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#FFFAF3] border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between h-14 text-sm">

          {/* Left Side */}
          <div className="flex items-center gap-1 text-gray-400">
            <span>© 2026 Built with</span>

            <span className="text-red-500">❤</span>

            <span>by</span>

            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white transition-colors duration-200"
            >
              Ajay Pandey
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-8 mt-4 md:mt-0">

            <a
              href="#uses"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Uses
            </a>

            <a
              href="#tech-stack"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Tech Stack
            </a>

            <a
              href="/"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Home"
            >
              <Home size={14} />
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <GitBranch size={14} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}