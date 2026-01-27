"use client";

import { useState } from "react";

export default function RequestForm() {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;

    setStatus("loading");

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${process.env.NEXT_PUBLIC_MAIL}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          message,
          _subject: "New Anonymous Request/Issue from UltimateVid",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch (error) { 
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-16 pt-16 border-t border-white/10">
      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group">
        
        {/* Decorative lighting */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] -ml-32 -mb-32 pointer-events-none"></div>

        <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2 text-center">Request a Platform or Report an Issue</h3>
          <p className="text-gray-400 text-sm mb-8 text-center max-w-lg mx-auto">
             Let us know what you want to see next or if you're facing any problems.
          </p>

          {status === "success" ? (
             <div className="flex flex-col items-center justify-center py-12 animate-in fade-in zoom-in duration-300">
               <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-4 text-3xl">
                 ✓
               </div>
               <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
               <p className="text-gray-400 text-center">Thank you for your feedback.</p>
               <button 
                 onClick={() => setStatus("idle")}
                 className="mt-6 text-sm text-blue-400 hover:text-blue-300 underline underline-offset-4"
               >
                 Send another message
               </button>
             </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <textarea
                  id="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what platform you want or describe the issue..."
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-blue-500/25 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-80" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </>
                )}
              </button>
              
              {status === "error" && (
                <p className="text-red-400 text-sm text-center mt-2 animate-pulse">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
