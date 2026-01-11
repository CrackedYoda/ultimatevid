import React from 'react';

export const metadata = {
  title: "UltimateVid - Free Video Downloader",
  description: "Download videos from YouTube, Instagram, TikTok, Twitter, and Facebook. Fast, free, and high-quality video downloads.",
};

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How to download videos with UltimateVid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply paste the video URL and click Download. UltimateVid will process the video and provide you with high-quality download options."
        }
      },
      {
        "@type": "Question",
        name: "Which platforms are supported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We support YouTube, Instagram, TikTok, Twitter, and Facebook."
        }
      }
    ]
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      
      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

      <div className="w-full max-w-2xl z-10">
        <div className="text-center mb-12">
           <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-6 py-2 tracking-tight drop-shadow-sm">
             UltimateVid
           </h1>
           <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto mb-3">
             Download videos from your favorite platforms instantly. High quality, fast, and free.
           </p>
           <p className="text-sm text-gray-500">
             Supports YouTube, Instagram, TikTok, Twitter, and Facebook.
           </p>
        </div>

        {/* Card Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.15)] transition-shadow duration-500">
          
          <div className="flex flex-col gap-6">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <label htmlFor="video-url" className="text-xs text-gray-500 block mb-2 px-2">Paste Video URL</label>
                <input 
                  id="video-url"
                  type="url" 
                  placeholder="Paste link here..." 
                  className="w-full bg-black/50 border border-white/10 text-white placeholder-gray-500 rounded-xl px-6 py-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-black/70 transition-all shadow-inner"
                  aria-label="Video URL input"
                />
              </div>
            </div>

            <button className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-blue-600 p-px font-bold text-white shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] active:scale-[0.98]">
               <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
               <div className="relative flex items-center justify-center gap-3 bg-transparent px-8 py-4 text-xl">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                 </svg>
                 Download Video
               </div>
            </button>
          </div>
          
          <div className="mt-8 text-center">
             <p className="text-sm text-gray-500">
               By using our service you accept our <a href="#" className="text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-4 transition-colors">Terms of Service</a>.
             </p>
          </div>

        </div>

        {/* Features Section */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why Choose UltimateVid?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10">
              <h3 className="text-lg font-semibold text-green-400 mb-3">⚡ Fast Downloads</h3>
              <p className="text-gray-400 text-sm">Download videos in seconds with our optimized servers.</p>
            </article>
            <article className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10">
              <h3 className="text-lg font-semibold text-blue-400 mb-3">🎬 High Quality</h3>
              <p className="text-gray-400 text-sm">Choose from multiple quality options including 4K.</p>
            </article>
            <article className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10">
              <h3 className="text-lg font-semibold text-purple-400 mb-3">🔒 Secure</h3>
              <p className="text-gray-400 text-sm">Your privacy is protected with encrypted connections.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}
