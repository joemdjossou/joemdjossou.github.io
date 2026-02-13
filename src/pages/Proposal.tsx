import edikan1 from "@/assets/edikan/1.JPG";
import edikan3 from "@/assets/edikan/3.JPG";
import edikan4 from "@/assets/edikan/4.JPG";
import edikan5 from "@/assets/edikan/5.jpg";
import edikan6 from "@/assets/edikan/6.JPG";
import spotifyLogo from "@/assets/edikan/spotify.png";
import valPicture from "@/assets/edikan/val_picture.jpg";
import valVideo from "@/assets/edikan/video/1_val.mp4";
import { ArrowRight, Heart, Menu, X } from "lucide-react";
import { useState } from "react";

const Proposal = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToClosing = () => {
    document.getElementById("closing")?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };
  const scrollToStory = () => {
    document
      .getElementById("our-story")
      ?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };
  const scrollToVideo = () => {
    document
      .getElementById("for-you-video")
      ?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#fdf2f8] text-[#4c0519]">
      {/* Header - Bloom style */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-rose-800 hover:bg-rose-50"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={scrollToStory}
                className="text-sm font-medium text-rose-800 hover:text-rose-600 transition-colors"
              >
                Our Story
              </button>
              <button
                onClick={scrollToStory}
                className="text-sm font-medium text-rose-800 hover:text-rose-600 transition-colors"
              >
                Moments
              </button>
            </nav>
            <div className="flex items-center gap-2 font-semibold text-xl text-rose-900">
              <span className="relative">For Edikan</span>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button
                onClick={scrollToStory}
                className="text-sm font-medium text-rose-800 hover:text-rose-600 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={scrollToVideo}
                className="bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                Watch video
              </button>
            </nav>
            <div className="md:hidden">
              <button
                onClick={scrollToVideo}
                className="bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold px-4 py-2 rounded-full"
              >
                Watch video
              </button>
            </div>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-rose-100 bg-white py-4 px-4 space-y-2">
            <button
              onClick={scrollToStory}
              className="block w-full text-left py-2 text-rose-800 font-medium"
            >
              Our Story
            </button>
            <button
              onClick={scrollToStory}
              className="block w-full text-left py-2 text-rose-800 font-medium"
            >
              Moments
            </button>
            <button
              onClick={scrollToStory}
              className="block w-full text-left py-2 text-rose-800 font-medium"
            >
              About Us
            </button>
          </div>
        )}
      </header>

      {/* Hero - soft pink, warm welcome + your photo with rose */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 py-16 md:py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 md:gap-12 items-center">
          <div className="md:col-span-1 flex flex-col items-center md:items-start gap-4">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <img
                src={edikan1}
                alt="Edikan"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs uppercase tracking-widest text-rose-600 font-semibold">
              Me & You 🎶
            </p>
            <div className="text-5xl opacity-80">💕</div>
          </div>
          <div className="md:col-span-1 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-rose-900 leading-tight">
              My Love, My Edikan...
            </h1>
            <p className="text-lg md:text-xl text-rose-800/90 max-w-md mx-auto md:mx-0">
              It still feels like a dream that it started with “Congrats Edi.” Who
              knew the person I was cheering for would turn out to be the
              one I choose, again and again, every day?
            </p>
            <button
              onClick={scrollToStory}
              className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              Start here
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="md:col-span-1 flex flex-col items-center md:items-end">
            <span className="text-xs uppercase tracking-widest text-rose-600 font-semibold mb-2">
              For you,
            </span>
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white max-w-xs">
              <img
                src={valPicture}
                alt="For you"
                className="w-full aspect-[3/4] object-cover"
              />
            </div>
            <p className="text-sm text-rose-700 mt-2 font-medium">
              One rose, one heart.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Hand picked for my heart-picked person - wide card */}
      <section id="our-story" className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl border border-rose-100 overflow-hidden">
            <div className="grid md:grid-cols-3 gap-0">
              <div className="p-6 md:p-8 flex flex-col justify-center bg-rose-50/50">
                <span className="text-xs uppercase tracking-widest text-rose-600 font-semibold mb-2">
                  Our story
                </span>
                <p className="text-rose-800 font-medium">Today</p>
                <p className="text-sm text-rose-700 mt-1">
                  When everything continues.
                </p>
                <div className="mt-6 rounded-xl overflow-hidden max-w-[200px]">
                  <img
                    src={edikan3}
                    alt=""
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 flex items-center justify-center bg-gradient-to-b from-rose-100/50 to-white">
                <img
                  src={edikan4}
                  alt="Us"
                  className="rounded-2xl shadow-lg max-h-[400px] w-auto object-cover"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-rose-900 mb-4">
                  You’re the one I chose to love.
                </h2>
                <p className="text-rose-800 leading-relaxed mb-6">
                  So much laughter — all those “😂😂😂” — but beneath the jokes,
                  something true was taking root. The late-night conversations, the “Have you eaten?”, the
                  “Pray for meeee,” the staircase waits, the 7AM
                  rants… love was taking shape without fanfare.
                </p>
                <p className="text-rose-700 text-sm mb-6">
                  Keep scrolling—there’s more I want to say.
                </p>
                <button
                  onClick={() =>
                    document
                      .getElementById("moments")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700"
                >
                  Keep reading
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Two-column - Why you? + Blooms recall */}
      <section id="moments" className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
              You show you care in the little things.
            </h2>
            <p className="text-rose-700 text-sm"></p>
            <p className="text-rose-800 leading-relaxed text-lg">
              You fret when I skip meals. You miss me out loud. You pray for me.
              You’re there. You love me. I want you to know I notice every bit
              of it.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-lg aspect-square max-w-sm">
              <img
                src={edikan5}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm italic text-rose-700">— I notice it all.</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-rose-900">
              You’re the one on my mind.
            </h2>
            <p className="text-rose-700 text-sm">
              Through every up and down — you’re still the one.
            </p>
            <p className="text-rose-800 leading-relaxed">
              You make me gentler, more deliberate, more disciplined, more
              thankful. Loving you is both calm and fierce at the same time.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-rose-100 rounded-2xl p-4 border border-rose-200">
                <p className="text-sm font-semibold text-rose-900 mb-2">
                  Your heart
                </p>
                <p className="text-xs text-rose-700 line-clamp-2">
                  Your joy, your strength, your faith.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-rose-200 shadow">
                <p className="text-sm font-semibold text-rose-900 mb-2">
                  Your mind
                </p>
                <p className="text-xs text-rose-700">
                  One of the smartest choices I've made is loving you on purpose.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={edikan6}
                alt=""
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section: Made with love */}
      <section className="py-16 md:py-24 px-4 bg-rose-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4">
            Today I'm celebrating us.
          </h2>
          <p className="text-lg text-rose-800 max-w-2xl mx-auto mb-4">
            Your heart, your joy, your strength, your faith, your beautiful
            mind. Choosing to love you on purpose is one of the best things
            I’ve ever done — and you know I’ve said it before.
          </p>
          <p className="text-lg text-rose-800 max-w-2xl mx-auto mb-8 font-medium italic">
            Je t’aime pour tout ce que tu es, tout ce que tu as été, et tout ce
            que tu seras.
          </p>
          <p className="text-rose-700 max-w-xl mx-auto mb-8">
            You push me to be better. You light up every day. I hope that comes
            through in every word here.
          </p>
          <button
            onClick={scrollToVideo}
            className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Keep scrolling — there’s something at the bottom
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Section: Our Spotify playlist */}
      <section className="py-16 md:py-24 px-4 bg-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-rose-900 mb-4">
            Our soundtrack.
          </h2>
          <p className="text-rose-800 leading-relaxed mb-6">
            These are the songs that remind me of you. Put them on whenever you
            need to feel close, or when you just want to smile.
          </p>
          <a
            href="https://open.spotify.com/playlist/5iZ2PlKDp5euBjvYivwHHQ?si=IRcC8bkSQhmzYS-cqv6tNA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full transition-all shadow-lg overflow-hidden border-0 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#1DB954] hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background:
                "linear-gradient(135deg, #1DB954 0%, #1ed760 50%, #1DB954 100%)",
              backgroundSize: "200% 200%",
              color: "white",
            }}
          >
            <img
              src={spotifyLogo}
              alt="Spotify"
              className="w-8 h-8 rounded-full object-cover flex-shrink-0 ring-2 ring-white/30"
            />
            <span className="font-semibold">
              Listen to our playlist on Spotify
            </span>
          </a>
        </div>
      </section>

      {/* Section: Video */}
      <section
        id="for-you-video"
        className="py-16 md:py-24 px-4 bg-gradient-to-b from-rose-100 to-rose-200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-rose-900 mb-4">
            One more thing.
          </h2>
          <p className="text-lg text-rose-800 max-w-2xl mx-auto mb-8">
            I recorded this for you. Watch it whenever you’re ready—then you’ll
            know everything I’ve been trying to say.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-black">
            <video
              src={valVideo}
              controls
              className="w-full aspect-video object-contain"
              poster={valPicture}
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-rose-700 mt-6 text-sm">
            When you’re done, scroll down to the end.
          </p>
          <button
            onClick={scrollToClosing}
            className="mt-6 inline-flex items-center gap-2 text-rose-600 font-semibold hover:text-rose-700"
          >
            Take me to the end
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Closing - Happy Valentine's */}
      <section
        id="closing"
        className="py-16 md:py-24 px-4 bg-gradient-to-br from-rose-200 via-pink-200 to-rose-300"
      >
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur rounded-3xl shadow-2xl p-8 md:p-12 border border-rose-200/50">
            <span className="text-6xl md:text-8xl block mb-6">❤️</span>
            <p className="text-lg md:text-xl text-rose-800 leading-relaxed mb-6 font-medium italic">
              Je t'aime pour tout ce que tu es,
              <br />
              tout ce que tu as été,
              <br />
              et tout ce que tu seras.
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-rose-900 mb-6">
              Happy Valentine's Day, my baby girl ❤️
            </h2>
            <p className="text-xl text-rose-800 font-semibold">Your King.</p>
            <p className="text-lg text-rose-700 mt-2">E.J</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-rose-900 text-rose-100 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-semibold text-xl flex items-center justify-center gap-2">
            Made with love for Edikan{" "}
            <Heart className="w-5 h-5 fill-rose-400 text-rose-400" />
          </p>
          <p className="mt-4 text-rose-200/80 text-sm">
            © {new Date().getFullYear()} — E.E
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float-heart {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px) rotate(5deg);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-40px) translateX(-10px) rotate(-5deg);
            opacity: 0.7;
          }
          75% {
            transform: translateY(-20px) translateX(5px) rotate(3deg);
            opacity: 0.5;
          }
        }

        @keyframes float-emoji {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.1);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes shake {
          0%, 100% {
            transform: translateX(0);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(5px);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }

        .animate-float-heart {
          animation: float-heart 6s ease-in-out infinite;
        }

        .animate-float-emoji {
          animation: float-emoji 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20% 30%, rgba(255, 182, 193, 0.3), transparent),
            radial-gradient(2px 2px at 60% 70%, rgba(255, 105, 180, 0.3), transparent),
            radial-gradient(1px 1px at 50% 50%, rgba(255, 20, 147, 0.2), transparent),
            radial-gradient(1px 1px at 80% 10%, rgba(255, 192, 203, 0.3), transparent),
            radial-gradient(2px 2px at 90% 80%, rgba(255, 182, 193, 0.2), transparent);
          background-size: 200% 200%;
          animation: float-heart 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Proposal;
