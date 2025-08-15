'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Image
    src="/images/logo.png"
    alt="Logo"
    width={150}
    height={50}
    className="object-contain"
    priority 
  />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { name: "Benefícios", href: "#benefits" },
    { name: "Planos", href: "#price" },
    { name: "Depoimentos", href: "#testimonials" },
    { name: "Sobre", href: "#about" },
  ];

  return (
    <nav className="fixed w-full z-50 shadow-md backdrop-blur-sm" style={{
      background: 'linear-gradient(to bottom, rgba(31, 41, 55, 0.95) 0%, rgba(31, 41, 55, 0.7) 40%, rgba(31, 41, 55, 0.3) 70%, rgba(31, 41, 55, 0) 100%)'
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="#" className="text-white">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className="object-contain"
                priority 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-700 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-800 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
