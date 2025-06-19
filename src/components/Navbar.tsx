import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certificates", href: "#certificates" },
  ];
  return (
    <nav className="sticky top-0 w-full backdrop-blur shadow flex items-center justify-between px-8 py-4">
      <h1 className=" font-bold text-4xl text-gray-400 tracking-wide">
        Angelica
      </h1>
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className=" text-gray-400 font-medium transition-colors duration-200 hover:text-white"
          >
            {item.name}
          </a>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-gray-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
        {isOpen && (
          <div className="md:hidden absolute top-16 right-0 bg-gray-800 p-4 rounded-lg shadow-lg">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-400 font-medium transition-colors duration-200 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </button>
    </nav>
  );
}
