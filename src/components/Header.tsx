import React from 'react';
import { Truck, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Truck className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">Frota X</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="hover:text-blue-200 transition-colors">Início</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Fretes</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Motoristas</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Empresas</a>
            <a href="#" className="hover:text-blue-200 transition-colors">Planos</a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-blue-700 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-700">Início</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-700">Fretes</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-700">Motoristas</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-700">Empresas</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-blue-700">Planos</a>
          </div>
        </div>
      )}
    </header>
  );
}