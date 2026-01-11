"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-black/20 border-b border-white/10 shadow-lg transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo - Left Side */}
          <div className="flex-shrink-0 flex items-center gap-3">
             <div className="relative h-12 w-12 hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/logo.png" 
                  alt="UltimateVid - Free Video Downloader Logo" 
                  fill 
                  className="object-contain drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]" 
                  priority
                />
             </div>
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-extrabold text-2xl tracking-tight hidden sm:block">UltimateVid</span>
          </div>

          {/* Desktop Links - Right Side */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-6">
              <Link href="/" className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200">
                Home
              </Link>
              <Link href="/how-to-use" className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200">
                How to use
              </Link>
              <Link href="/telegram-bot" className="text-gray-300 hover:text-white hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200">
                TelegramBot
              </Link>
            </div>
          </div>

          {/* Mobile menu button (Hamburger) - Placed on the Right */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white p-2 rounded-md transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full left-0 top-20 bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`} 
        id="mobile-menu"
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
           <Link href="/" className="text-gray-300 hover:text-white hover:bg-white/10 block px-3 py-3 rounded-md text-base font-medium">Home</Link>
           <Link href="/how-to-use" className="text-gray-300 hover:text-white hover:bg-white/10 block px-3 py-3 rounded-md text-base font-medium">How to use</Link>
           <Link href="/telegram-bot" className="text-gray-300 hover:text-white hover:bg-white/10 block px-3 py-3 rounded-md text-base font-medium">TelegramBot</Link>
        </div>
      </div>
    </nav>
  );
}
