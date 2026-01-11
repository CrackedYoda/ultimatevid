import React from 'react';
import Link from 'next/link';

export default function TelegramBot() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[150px] -z-10"></div>
       
       <div className="max-w-3xl w-full text-center z-10">
         <div className="inline-block p-4 rounded-full bg-blue-500/10 mb-8 border border-blue-500/20">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.48-1.02-2.38-1.61-.98-.64-.34-1 .27-1.61z" /> {/* Simplified Telegram icon representation */}
              <path d="M10.5 13.5L12 15l-1.5-1.5z" /> {/* Placeholder for complexity */}
              {/* Using a generic paper plane icon for Telegram since I might not have the exact path handy, or just the standard send icon which looks like it */}
               <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
         </div>
         
         <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300 mb-6">
           UltimateVid Bot
         </h1>
         
         <div className="inline-block mb-4 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/30">
            <p className="text-yellow-300 font-semibold text-sm">🚀 Coming Soon</p>
         </div>
         
         <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
           Want to download videos directly from your chat? Add our Telegram bot for the fastest way to save content on the go.
         </p>

         <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              disabled
              className="px-8 py-4 bg-[#0088cc]/50 text-white rounded-full font-bold text-lg shadow-[0_0_20px_rgba(0,136,204,0.2)] cursor-not-allowed opacity-60 flex items-center gap-3"
            >
              Start Bot (Coming Soon)
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
            
            <a 
              href="/"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg transition-all"
            >
              Back to Home
            </a>
         </div>

         <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
           <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
             <h3 className="font-bold text-lg text-white mb-2">⚡ Lightning Fast</h3>
             <p className="text-gray-400">Just send a link and get the video file instantly. No ads, no waiting.</p>
           </div>
           <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
             <h3 className="font-bold text-lg text-white mb-2">🔒 Private & Secure</h3>
             <p className="text-gray-400">Your chats and downloads remain private. We don't log your activity.</p>
           </div>
         </div>
       </div>
    </main>
  );
}
