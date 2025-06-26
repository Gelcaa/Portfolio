import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  return (
    <nav className="sticky top-0 w-full backdrop-blur shadow flex items-center justify-between px-8 py-4 z-50 bg-black/60">
      <h1 className="font-bold text-4xl text-gray-400 tracking-wide">
        <a href="#home">Angelica</a>
      </h1>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-gray-400 font-medium transition-colors duration-200 hover:text-white"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden relative">
        <button className="text-gray-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        {isOpen && (
          <div className="absolute top-12 right-0 bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col space-y-4 min-w-[150px]">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-400 font-medium transition-colors duration-200 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
