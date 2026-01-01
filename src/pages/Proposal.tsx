import edikan1 from "@/assets/edikan/1.JPG";
import edikan2 from "@/assets/edikan/2.JPG";
import edikan3 from "@/assets/edikan/3.JPG";
import edikan4 from "@/assets/edikan/4.JPG";
import edikan5 from "@/assets/edikan/5.jpg";
import edikan6 from "@/assets/edikan/6.JPG";
import edikanVideo from "@/assets/edikan/video/video.mp4";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import { ArrowLeft, ArrowRight, Heart, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

interface Slide {
  title: string;
  content: string;
  gradient: string;
  emoji?: string;
  image?: string; // Optional image path
}

// EmailJS Configuration
// To set up email notifications:
// 1. Go to https://www.emailjs.com/ and create a free account
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template with these variables: {{to_email}}, {{subject}}, {{message}}
// 4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
// 5. Replace the values below with your actual credentials
const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "",
};

const Proposal = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonScale, setYesButtonScale] = useState(1);
  const [showFunnyMessage, setShowFunnyMessage] = useState(false);
  const [showLockScreen, setShowLockScreen] = useState(true);
  const [passwordInput, setPasswordInput] = useState("");

  const slides: Slide[] = [
    {
      title: "September 2023",
      content:
        "It all started in September 2023... When I first met you, Edikan, I had no idea that you would become the most important person in my life. That moment changed everything.",
      gradient: "from-pink-200 via-rose-200 to-pink-300",
      image: edikan1,
    },
    {
      title: "The Beginning",
      content:
        "From our first conversation, I knew there was something special about you. Your smile, your laughter, your way of seeing the world... You captured my heart without even trying.",
      gradient: "from-purple-200 via-pink-200 to-rose-200",
      image: edikan2,
    },
    {
      title: "The Highs",
      content:
        "We've shared so many beautiful moments together. Every laugh, every smile, every late-night conversation... These are the memories I treasure most. You've brought so much joy and light into my life.",
      gradient: "from-yellow-200 via-orange-200 to-pink-200",
      image: edikan3,
    },
    {
      title: "The Lows",
      content:
        "We've also faced challenges together, I made mistakes but you were always there. Actually I made you go through difficult times, I've seen your strength, your resilience, and your kind heart. These moments have only made me realize how much you mean to me and how much I want to be there for you, always.",
      gradient: "from-blue-200 via-indigo-200 to-purple-200",
      image: edikan4,
    },
    {
      title: "Growing Together",
      content:
        "Through it all, we've grown. We've learned about each other, supported each other, and built something beautiful together. You've shown me what it means to care deeply, to love without even forcing it, and to be truly present.",
      gradient: "from-green-200 via-teal-200 to-cyan-200",
      image: edikan5,
    },
    {
      title: "You Are The One I Want",
      content:
        "Edikan, you are my best friend, my confidant, my peace. You make me want to be a better person. You make every day brighter just by being in it. I am recurrently told that I am brilliant, but the most brillant thing I have ever done is loving you.",
      gradient: "from-pink-300 via-rose-300 to-red-300",
      image: edikan6,
    },
    {
      title: "Will You Be My Girlfriend?",
      content:
        "Edikan, I've been thinking about this for a while, and I can't enter this new year without making this official, making it official with you. <<< I’ve loved you since I can’t remember when, and I want to love you till I can’t forget how. I want to be yours, and I want you to be mine. >>> Will you be my girlfriend? ",
      gradient: "from-red-300 via-pink-400 to-rose-400",
      emoji: "💕",
      // image: "/proposal-images/proposal.jpg",
    },
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide + 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide(currentSlide - 1);
        setIsTransitioning(false);
      }, 300);
    }
  };

  const handleYes = () => {
    setShowConfetti(true);

    // Send email notification
    sendEmailNotification();

    // Epic confetti celebration
    const duration = 8000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Left side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ["#FF69B4", "#FF1493", "#FFB6C1", "#FFC0CB", "#FF69B4"],
      });
      // Right side
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ["#FF69B4", "#FF1493", "#FFB6C1", "#FFC0CB", "#FF69B4"],
      });
      // Center
      confetti({
        ...defaults,
        particleCount: particleCount / 2,
        origin: { x: 0.5, y: 0.5 },
        colors: ["#FF69B4", "#FF1493", "#FFB6C1", "#FFC0CB", "#FF69B4"],
      });
    }, 250);

    // Heart-shaped confetti
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF69B4", "#FF1493", "#FFB6C1"],
        shapes: ["circle"],
      });
    }, 500);
  };

  // Email notification function
  const sendEmailNotification = async () => {
    try {
      // Skip if credentials are not configured
      if (
        !EMAILJS_CONFIG.SERVICE_ID ||
        !EMAILJS_CONFIG.TEMPLATE_ID ||
        !EMAILJS_CONFIG.PUBLIC_KEY
      ) {
        console.log(
          "EmailJS credentials not configured. Skipping email notification."
        );
        console.log(
          "To enable email notifications, set up EmailJS at https://www.emailjs.com/"
        );
        return;
      }

      // Initialize EmailJS
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      // Prepare email template parameters
      const templateParams = {
        to_email: "joemdjossou@gmail.com",
        subject: "🎉 She Said YES!",
        message: `Edikan said YES to your proposal! 💕\n\nTime: ${new Date().toLocaleString()}\n\nCongratulations! 🎊`,
        reply_to: "joemdjossou@gmail.com",
      };

      // Send email
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );
      console.log("Email notification sent successfully!");
    } catch (error) {
      console.error("Failed to send email notification:", error);
      // Don't show error to user - fail silently
    }
  };

  const isLastSlide = currentSlide === slides.length - 1;

  // Handle password input - only keyboard events when input is not focused
  useEffect(() => {
    if (!showLockScreen) return;

    // Handle keyboard events for desktop (only when input is not focused)
    const handleKeyPress = (e: KeyboardEvent) => {
      const input = document.querySelector(
        'input[type="tel"]'
      ) as HTMLInputElement;
      // Only handle keyboard events if input is not focused (to avoid duplication)
      if (input && document.activeElement === input) {
        return; // Let the onChange handler handle it
      }

      if (e.key >= "0" && e.key <= "9") {
        const newInput = passwordInput + e.key;
        const limitedValue = newInput.slice(0, 4);
        setPasswordInput(limitedValue);

        if (limitedValue === "2023") {
          setShowLockScreen(false);
          setPasswordInput("");
        } else if (limitedValue.length >= 4 && limitedValue !== "2023") {
          setTimeout(() => {
            setPasswordInput("");
          }, 500);
        }
      } else if (e.key === "Backspace") {
        setPasswordInput((prev) => prev.slice(0, -1));
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [passwordInput, showLockScreen]);

  return (
    <div className="min-h-screen overflow-hidden relative">
      {/* Lock Screen */}
      {showLockScreen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-pink-300 via-rose-300 to-red-300">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 text-white drop-shadow-2xl">
              <span className="bg-gradient-to-r from-white via-pink-100 to-white bg-clip-text text-transparent">
                The year everything started
              </span>
            </h1>
            {/* Password input display */}
            <div className="mb-6 relative">
              {/* Hidden input field for mobile keyboard */}
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                value={passwordInput}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 4);
                  setPasswordInput(value);
                  if (value === "2023") {
                    setShowLockScreen(false);
                    setPasswordInput("");
                  } else if (value.length >= 4 && value !== "2023") {
                    setTimeout(() => {
                      setPasswordInput("");
                    }, 500);
                  }
                }}
                autoFocus
                className="absolute opacity-0 pointer-events-none w-0 h-0"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: "1px",
                  height: "1px",
                }}
              />
              <div
                className="flex justify-center gap-4 cursor-pointer"
                onClick={() => {
                  // Focus the hidden input when circles are clicked
                  const input = document.querySelector(
                    'input[type="tel"]'
                  ) as HTMLInputElement;
                  if (input) {
                    input.focus();
                    // On mobile, trigger click to open keyboard
                    setTimeout(() => {
                      input.click();
                    }, 100);
                  }
                }}
              >
                {[0, 1, 2, 3].map((index) => (
                  <div
                    key={index}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full border-4 flex items-center justify-center text-3xl md:text-4xl font-bold transition-all duration-300 ${
                      index < passwordInput.length
                        ? "bg-white text-pink-600 border-white scale-110"
                        : "bg-white/20 text-white/50 border-white/50"
                    }`}
                  >
                    {index < passwordInput.length ? passwordInput[index] : "•"}
                  </div>
                ))}
              </div>
            </div>
            {passwordInput.length > 0 &&
              passwordInput !== "2023" &&
              passwordInput.length >= 4 && (
                <p className="text-lg text-white/70 mt-4 animate-shake">
                  Wrong password, try again...
                </p>
              )}
          </div>
        </div>
      )}

      {/* Animated background gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].gradient} transition-all duration-1000 ease-in-out`}
      />

      {/* Floating hearts animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-pink-300/30 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              fontSize: `${20 + Math.random() * 30}px`,
            }}
          >
            💖
          </div>
        ))}
      </div>

      {/* Particle effect overlay */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="particles"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-5xl w-full">
          {/* Main slide container with glassmorphism */}
          <div
            className={`bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden border border-white/20 transition-all duration-500 ${
              isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-pink-200/50 to-transparent rounded-br-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-rose-200/50 to-transparent rounded-tl-full blur-2xl"></div>

            {/* Image container (if image exists) */}
            {slides[currentSlide].image && (
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-rose-400/20 rounded-3xl blur-2xl transform scale-110"></div>
                <img
                  src={slides[currentSlide].image}
                  alt={slides[currentSlide].title}
                  className="relative w-full max-w-lg mx-auto h-80 md:h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/50 animate-float-emoji"
                />
              </div>
            )}

            {/* Emoji decoration with animation (only if no image) */}
            {!slides[currentSlide].image && slides[currentSlide].emoji && (
              <div className="text-9xl md:text-[12rem] mb-8 animate-float-emoji relative z-10">
                {slides[currentSlide].emoji}
              </div>
            )}

            {/* Title with gradient text */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 relative z-10">
              <span className="bg-gradient-to-r from-pink-600 via-rose-600 to-red-600 bg-clip-text text-transparent animate-gradient">
                {slides[currentSlide].title}
              </span>
            </h1>

            {/* Content with beautiful typography */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-800 leading-relaxed mb-10 font-medium relative z-10 max-w-3xl mx-auto">
              {slides[currentSlide].content}
            </p>

            {/* Funny message overlay */}
            {showFunnyMessage && (
              <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
                <div className="bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-3xl p-10 md:p-14 text-center max-w-lg mx-4 shadow-2xl border-4 border-pink-200 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200/30 rounded-bl-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-200/30 rounded-tr-full blur-3xl"></div>
                  <div className="text-6xl mb-6 relative z-10">😂💔</div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 relative z-10">
                    wow this is crazy😂💔
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed relative z-10 font-medium">
                    Happy new year bestie we are both single😂
                  </p>
                </div>
              </div>
            )}

            {/* Proposal buttons (only on last slide) */}
            {isLastSlide && (
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 relative z-10 min-h-[120px]">
                <button
                  onClick={handleYes}
                  style={{
                    transform: `scale(${yesButtonScale})`,
                    transition: "transform 0.3s ease-out",
                  }}
                  className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-pink-500/50 flex items-center gap-3 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <Heart className="w-7 h-7 fill-white relative z-10 animate-pulse" />
                  <span className="relative z-10">
                    Yes, I'll be your girlfriend!
                  </span>
                  <Sparkles className="w-6 h-6 relative z-10 animate-spin-slow" />
                </button>
                <button
                  onClick={() => {
                    const newCount = noClickCount + 1;
                    setNoClickCount(newCount);

                    // Make Yes button bigger
                    setYesButtonScale(1 + newCount * 0.15);

                    // Move No button to random position
                    const maxX = window.innerWidth > 768 ? 200 : 150;
                    const maxY = 100;
                    setNoButtonPosition({
                      x: (Math.random() - 0.5) * maxX,
                      y: (Math.random() - 0.5) * maxY,
                    });

                    // Show funny message after 6 clicks
                    if (newCount >= 6) {
                      setShowFunnyMessage(true);
                      setTimeout(() => {
                        setNoClickCount(0);
                        setNoButtonPosition({ x: 0, y: 0 });
                        setYesButtonScale(1);
                        setShowFunnyMessage(false);
                      }, 4000);
                    }
                  }}
                  style={{
                    transform: `translate(${noButtonPosition.x}px, ${
                      noButtonPosition.y
                    }px) scale(${Math.max(0.7, 1 - noClickCount * 0.1)})`,
                    transition: "transform 0.3s ease-out",
                  }}
                  className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 text-lg font-semibold rounded-full hover:bg-white hover:shadow-lg border border-gray-200 relative cursor-pointer"
                >
                  {noClickCount === 0
                    ? "No I don't want"
                    : noClickCount === 1
                    ? "Wait, are you sure? 😅"
                    : noClickCount === 2
                    ? "Come on, think about it! 😊"
                    : noClickCount === 3
                    ? "Please reconsider! 🥺"
                    : noClickCount === 4
                    ? "You're breaking my heart 💔"
                    : noClickCount === 5
                    ? "Okay, let's try again..."
                    : "wow this is crazy😂💔"}
                </button>
              </div>
            )}

            {/* Navigation dots with improved design */}
            <div className="flex justify-center gap-3 mt-12 relative z-10">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setIsTransitioning(false);
                    }, 300);
                  }}
                  className={`transition-all duration-500 rounded-full ${
                    index === currentSlide
                      ? "w-12 h-3 bg-gradient-to-r from-pink-500 to-rose-500 shadow-lg scale-110"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400 hover:scale-125"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Navigation arrows with enhanced design */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`p-5 rounded-full bg-white/90 backdrop-blur-md shadow-xl transition-all duration-300 ${
                currentSlide === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:bg-white hover:scale-110 hover:shadow-2xl active:scale-95"
              }`}
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-7 h-7 text-gray-700" />
            </button>

            {!isLastSlide && (
              <button
                onClick={nextSlide}
                className="p-5 rounded-full bg-white/90 backdrop-blur-md shadow-xl hover:bg-white hover:scale-110 hover:shadow-2xl active:scale-95 transition-all duration-300 group"
                aria-label="Next slide"
              >
                <ArrowRight className="w-7 h-7 text-gray-700 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Success message with enhanced design */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in overflow-y-auto p-4">
          <div className="bg-gradient-to-br from-white via-pink-50 to-rose-50 rounded-3xl p-10 md:p-14 text-center max-w-2xl mx-4 shadow-2xl border-4 border-pink-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-pink-200/30 rounded-bl-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-rose-200/30 rounded-tr-full blur-3xl"></div>

            <div className="text-8xl mb-6 animate-bounce relative z-10">🎉</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6 relative z-10">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Yayyy! 🎊
              </span>
            </h2>
            <p className="text-2xl text-gray-700 mb-8 leading-relaxed relative z-10 font-medium">
              Oh boy! I didn't know you were this romantic!😂 I love you! 💕
            </p>

            {/* Video */}
            <div className="mb-8 relative z-10">
              <video
                src={edikanVideo}
                controls
                autoPlay
                loop
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl border-4 border-pink-200"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <button
              onClick={() => {
                setShowConfetti(false);
                setCurrentSlide(0);
                setIsTransitioning(true);
                setTimeout(() => setIsTransitioning(false), 300);
              }}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-lg font-semibold rounded-full hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative z-10"
            >
              Close
            </button>
          </div>
        </div>
      )}

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
