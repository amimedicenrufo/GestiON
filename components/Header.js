"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, Pencil } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <Pencil size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl">ShipeaRapido</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-400 transition-colors">
              Inicio
            </Link>
            {/* 
            <Link
              href="/about"
              className="hover:text-blue-400 transition-colors"
            >
              Acerca de
            </Link>
            <Link
              href="/services"
              className="hover:text-blue-400 transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/pages"
              className="hover:text-blue-400 transition-colors"
            >
              Paginas
            </Link>
            <Link
              href="/blog"
              className="hover:text-blue-400 transition-colors"
            >
              Contacto
            </Link>
            */}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/ASK"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              Preguntanos
            </Link>
            <Link href="/contact" className="flex items-center text-white">
              <div className="bg-blue-600 p-2 rounded-full mr-2">
                <Phone size={18} />
              </div>
              <span className="text-sm">llamanos</span>
              <span className="text-xs block ml-1">+1-888-555-0123</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-3 py-3">
              <Link
                href="/"
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              {/* 
              <Link
                href="/about"
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Acerca de
              </Link>
              <Link
                href="/services"
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/pages"
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Paginas
              </Link>
              <Link
                href="/blog"
                className="hover:text-blue-400 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
              */}
              <div className="flex flex-col space-y-3 pt-3 border-t border-gray-700">
                <Link
                  href="/ASK"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center justify-center">
                    <div className="bg-blue-700 p-2 rounded-full mr-2">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-sm">llamanos</span>
                      <span className="text-xs block">+1-888-555-0123</span>
                    </div>
                  </div>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
