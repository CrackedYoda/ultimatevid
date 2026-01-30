"use client";
import { useState } from "react";
import { checkUrl, getUrl } from "../service/vidService";
import RequestForm from "./components/RequestForm";

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
          text: "Simply paste the video URL and click Download. UltimateVid will process the video and provide you with high-quality download options.",
        },
      },
      {
        "@type": "Question",
        name: "Which platforms are supported?",
        acceptedAnswer: {
          text: "We support over 100+ platforms including Twitch, Bilibili, Vimeo, Reddit, Dailymotion, YouTube, Instagram, TikTok, Twitter, and Facebook.",
        },
      },
    ],
  };
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await checkUrl(url);

      console.log("Check succeeded:", data);
      const fileUrl = await getUrl(url);
      console.log("File URL:", fileUrl);

      const downloadLink = `${process.env.NEXT_PUBLIC_API_URL}/media/${fileUrl}`;

      window.location.href = downloadLink;
    } catch (err: any) {
      setError(err.message ?? "Failed to download");
    } finally {
      setLoading(false);
      setUrl("");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* Background decoration elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>

      <div className="w-full max-w-2xl z-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 mb-6 py-2 tracking-tight drop-shadow-sm">
            UltimateVid
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-lg mx-auto mb-3">
            The Universal Video Downloader. Supports 100+ platforms.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500 mt-4">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-purple-400">
              Twitch
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pink-400">
              Facebook
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400">
              Tiktok
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400">
              Twitter
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-red-400">
              Instagram
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-red-400">
              Youtube
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-orange-400">
              Reddit
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400">
              Dailymotion
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400">
              Bilibili
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400">
              Vimeo
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              + many more without watermark
            </span>
          </div>
        </div>

        {/* Card Container */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_40px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_rgba(59,130,246,0.15)] transition-shadow duration-500">
          <div className="flex flex-col gap-6">
            {error && (
              <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center animate-in fade-in slide-in-from-top-2">
                {error}
              </div>
            )}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-green-400 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative">
                <label
                  htmlFor="video-url"
                  className="text-xs text-gray-500 block mb-2 px-2"
                >
                  Paste Video URL
                </label>
                <input
                  id="video-url"
                  type="url"
                  value={url}
                  onChange={(e) => {
                    setUrl(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Paste link here..."
                  className="w-full bg-black/50 border border-white/10 text-white placeholder-gray-500 rounded-xl px-6 py-5 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent focus:bg-black/70 transition-all shadow-inner"
                  aria-label="Video URL input"
                  disabled={loading}
                />
              </div>
            </div>

            <button
              onClick={handleDownload}
              disabled={loading}
              className="relative w-full group overflow-hidden rounded-xl bg-gradient-to-r from-green-500 to-blue-600 p-px font-bold text-white shadow-[0_10px_20px_rgba(37,99,235,0.2)] transition-all hover:scale-[1.01] hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-700 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              <div className="relative flex items-center justify-center gap-3 bg-transparent px-8 py-4 text-xl">
                {loading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-6 w-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Starting Download...
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Download Video
                  </>
                )}
              </div>
            </button>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              By using our service you accept our{" "}
              <a
                href="#"
                className="text-gray-400 hover:text-white underline decoration-gray-600 underline-offset-4 transition-colors"
              >
                Terms of Service
              </a>
              .
            </p>
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-16 text-center w-full max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Why Use UltimateVid?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <article className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                ⚡
              </div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">
                Lightning Fast
              </h3>
              <p className="text-gray-400 text-sm">
                Our optimized engine processes videos from Twitch, Bilibili, and
                others in seconds.
              </p>
            </article>
            <article className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🎬
              </div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">
                Universal Support
              </h3>
              <p className="text-gray-400 text-sm">
                From Reddit threads to Vimeo showcases, we support nearly every
                video site.
              </p>
            </article>
            <article className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition duration-300">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 text-2xl">
                🔒
              </div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">
                Secure & Free
              </h3>
              <p className="text-gray-400 text-sm">
                No registration needed. SSL encrypted downloads for your
                privacy.
              </p>
            </article>
          </div>

          <div className="mt-16 pt-16 border-t border-white/10">
            <h3 className="text-xl font-semibold text-white mb-8">
              Supported Platforms
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 opacity-70">
              {[
                "Twitch",
                "Bilibili",
                "Vimeo",
                "Reddit",
                "Dailymotion",
                "YouTube",
                "TikTok",
                "Instagram",
                "Facebook",
                "Twitter/X",
                "SoundCloud",
                "Bandcamp",
              ].map((platform) => (
                <div
                  key={platform}
                  className="p-3 bg-white/5 rounded-lg border border-white/5 text-sm md:text-base font-medium text-gray-300 hover:text-white hover:bg-white/10 transition cursor-default"
                >
                  {platform}
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-500 text-sm">
              And 100+ other video streaming websites supported.
            </p>
          </div>

          <div id="request-section">
            <RequestForm />
          </div>
        </section>
      </div>
    </main>
  );
}
