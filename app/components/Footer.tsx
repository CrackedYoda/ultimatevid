import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* Brand & Copyright */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
              UltimateVid
            </h3>
            <p className="text-gray-400 text-sm">
              The ultimate video downloader for all your needs. Download from YouTube, Instagram, TikTok, Twitter, and Facebook. Fast, secure, and always free.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              &copy; {new Date().getFullYear()} UltimateVid. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-col space-y-3">
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm" title="Go to UltimateVid Home">
              Home
            </Link>
            <Link href="/how-to-use" className="text-gray-400 hover:text-white transition-colors text-sm" title="View UltimateVid Tutorial">
              How to Use
            </Link>
            <Link href="/telegram-bot" className="text-gray-400 hover:text-white transition-colors text-sm" title="Download with Telegram Bot">
              Telegram Bot
            </Link>
          </nav>

          {/* Support */}
          <div className="flex flex-col space-y-3">
            <h4 className="text-white font-semibold mb-2">Support</h4>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm" title="Read Terms of Service">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm" title="Read Privacy Policy">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors text-sm" title="Contact Support">
              Contact Us
            </Link>
          </div>
          
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
           <p className="text-gray-600 text-xs">
             Disclaimer: UltimateVid is not affiliated with any of the social media platforms supported. 
             Use responsibly and respect copyright laws.
           </p>
        </div>
      </div>
    </footer>
  );
}
