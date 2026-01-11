import React from 'react';

export default function HowToUse() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-32 p-4 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] -z-10"></div>
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>

       <div className="max-w-4xl w-full z-10">
         <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
           How to Use UltimateVid
         </h1>

         <div className="grid gap-8 md:grid-cols-3">
           {/* Step 1 */}
           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
             <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 font-bold text-xl mb-6 border border-green-500/30">
               1
             </div>
             <h3 className="text-xl font-semibold text-white mb-4">Copy URL</h3>
             <p className="text-gray-400 leading-relaxed">
               Go to the video you want to download (YouTube, TikTok, Instagram, etc.) and copy the link from the address bar or share menu.
             </p>
           </div>

           {/* Step 2 */}
           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
             <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-400 font-bold text-xl mb-6 border border-blue-500/30">
               2
             </div>
             <h3 className="text-xl font-semibold text-white mb-4">Paste Link</h3>
             <p className="text-gray-400 leading-relaxed">
               Return to UltimateVid and paste the link into the box on the homepage. Our system will automatically detect the video.
             </p>
           </div>

           {/* Step 3 */}
           <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300">
             <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold text-xl mb-6 border border-purple-500/30">
               3
             </div>
             <h3 className="text-xl font-semibold text-white mb-4">Download</h3>
             <p className="text-gray-400 leading-relaxed">
               Click the 'Download Video' button, choose your preferred quality format if available, and save the file to your device.
             </p>
           </div>
         </div>

         <div className="mt-16 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/5 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Supported Platforms</h3>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400 font-medium">
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">YouTube</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">TikTok</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Instagram</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Facebook</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Twitter / X</span>
              <span className="px-4 py-2 bg-white/5 rounded-full border border-white/10">Vimeo</span>
            </div>
         </div>
       </div>
    </main>
  );
}
