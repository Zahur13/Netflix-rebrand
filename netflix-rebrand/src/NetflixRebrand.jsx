import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Search,
  User,
  Play,
  ChevronRight,
  Star,
  Brain,
  Eye,
  Headphones,
  Film,
} from "lucide-react";

const NetflixRebrand = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentShow, setCurrentShow] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featuredShows = [
    {
      title: "Neural Detective",
      genre: "AI Sci-Fi Thriller",
      rating: "98%",
      year: "2025",
      backdrop: "from-red-600 to-orange-600",
      description:
        "A detective uses AI to solve impossible crimes in a neural-enhanced future",
    },
    {
      title: "Mind Sync",
      genre: "Psychological Drama",
      rating: "95%",
      year: "2025",
      backdrop: "from-purple-600 to-indigo-600",
      description:
        "Humans can now share consciousness. But what happens when minds collide?",
    },
    {
      title: "Digital Dreams",
      genre: "Animated Adventure",
      rating: "92%",
      year: "2025",
      backdrop: "from-cyan-600 to-blue-600",
      description:
        "A young girl discovers she can enter the digital world through her dreams",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShow((prev) => (prev + 1) % featuredShows.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? "bg-black/90 backdrop-blur-xl"
            : "bg-gradient-to-b from-black/80 to-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                NeuralFlix
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="hover:text-red-400 transition-colors">
                  Home
                </a>
                <a href="#" className="hover:text-red-400 transition-colors">
                  AI Picks
                </a>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Neural Series
                </a>
                <a href="#" className="hover:text-red-400 transition-colors">
                  My Mind
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 hover:text-red-400 cursor-pointer transition-colors" />
              <User className="w-5 h-5 hover:text-red-400 cursor-pointer transition-colors" />
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Featured Content */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${featuredShows[currentShow].backdrop} opacity-30 transition-all duration-1000`}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

          {/* Animated particles */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-red-500 rounded-full animate-pulse opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 4}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="mb-6 flex items-center space-x-4">
              <span className="bg-red-600 px-3 py-1 rounded text-sm font-semibold">
                AI EXCLUSIVE
              </span>
              <span className="text-gray-300">
                {featuredShows[currentShow].year} •{" "}
                {featuredShows[currentShow].genre}
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 transform transition-all duration-1000">
              {featuredShows[currentShow].title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed transform transition-all duration-1000">
              {featuredShows[currentShow].description}
            </p>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="text-lg font-semibold">
                  {featuredShows[currentShow].rating}
                </span>
              </div>
              <span className="text-gray-400">AI Match Score</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <Play className="w-6 h-6" />
                {isPlaying ? "Playing..." : "Play Now"}
              </button>
              <button className="border border-white/40 hover:border-white/80 hover:bg-white/10 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                + My List
              </button>
            </div>
          </div>
        </div>

        {/* Show Indicators */}
        <div className="absolute bottom-20 right-8 space-y-3">
          {featuredShows.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentShow(index)}
              className={`block w-1 transition-all duration-300 ${
                index === currentShow
                  ? "h-12 bg-red-500"
                  : "h-6 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              AI-Powered Entertainment
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience entertainment that understands you better than you
              understand yourself
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8" />,
                title: "Neural Recommendations",
                description:
                  "AI analyzes your emotions, viewing patterns, and preferences to suggest perfect content",
                color: "from-red-500 to-pink-500",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "Adaptive Streaming",
                description:
                  "Content quality adjusts based on your attention level and device capabilities",
                color: "from-purple-500 to-indigo-500",
              },
              {
                icon: <Headphones className="w-8 h-8" />,
                title: "Immersive Audio AI",
                description:
                  "3D spatial audio that adapts to your environment and hearing preferences",
                color: "from-cyan-500 to-blue-500",
              },
              {
                icon: <Film className="w-8 h-8" />,
                title: "Interactive Stories",
                description:
                  "AI generates personalized storylines that respond to your choices in real-time",
                color: "from-emerald-500 to-teal-500",
              },
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border border-white/10 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
                  <div
                    className={`text-transparent bg-gradient-to-r ${feature.color} bg-clip-text mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending AI Content */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
            AI-Curated for You
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { title: "Robot Wars 2025", emoji: "🤖", type: "Series" },
              { title: "AI Love Story", emoji: "💕", type: "Film" },
              { title: "Neural Hackers", emoji: "💻", type: "Series" },
              { title: "Digital Awakening", emoji: "⚡", type: "Documentary" },
              { title: "Cyber City", emoji: "🌆", type: "Anime" },
              { title: "Mind Games", emoji: "🧠", type: "Reality" },
              { title: "Virtual Reality", emoji: "🥽", type: "Film" },
              { title: "AI Comedy Club", emoji: "😂", type: "Comedy" },
              { title: "Future Sports", emoji: "🏆", type: "Sports" },
              { title: "Neural Music", emoji: "🎵", type: "Concert" },
              { title: "Tech Titans", emoji: "👑", type: "Biography" },
              { title: "Space AI", emoji: "🚀", type: "Sci-Fi" },
            ].map((show, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
                  <div className="aspect-[3/4] flex flex-col items-center justify-center p-4">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                      {show.emoji}
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold mb-1 group-hover:text-red-300 transition-colors">
                        {show.title}
                      </div>
                      <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                        {show.type}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs">AI Pick</span>
                        </div>
                        <Play className="w-6 h-6 bg-white/20 rounded-full p-1 hover:bg-red-600 transition-colors" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Personalization Features */}
      <section className="py-20 bg-gradient-to-r from-red-900/30 to-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                Your AI Entertainment Companion
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                NeuralFlix doesn't just recommend content—it creates
                personalized viewing experiences tailored to your mood,
                schedule, and preferences using advanced AI algorithms.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Mood-Based Streaming",
                    description:
                      "AI detects your emotional state and adjusts content recommendations",
                    icon: "😊",
                  },
                  {
                    title: "Smart Time Management",
                    description:
                      "Suggests perfect episodes based on your available viewing time",
                    icon: "⏰",
                  },
                  {
                    title: "Neural Dubbing",
                    description:
                      "AI voice synthesis in any language with emotion preservation",
                    icon: "🎭",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="text-2xl">{feature.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-red-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl border border-white/10">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">🧠</div>
                  <h3 className="text-2xl font-bold mb-2">Neural Profile</h3>
                  <p className="text-gray-400">AI learning your preferences</p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      label: "Sci-Fi Preference",
                      value: 95,
                      color: "bg-purple-500",
                    },
                    {
                      label: "Thriller Affinity",
                      value: 87,
                      color: "bg-red-500",
                    },
                    { label: "Comedy Mood", value: 72, color: "bg-yellow-500" },
                    {
                      label: "Documentary Interest",
                      value: 64,
                      color: "bg-blue-500",
                    },
                  ].map((pref, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{pref.label}</span>
                        <span>{pref.value}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className={`${pref.color} h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${pref.value}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Neural Subscription Plans
            </h2>
            <p className="text-xl text-gray-400">
              Choose your AI-enhanced entertainment experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic AI",
                price: "$9.99",
                color: "from-gray-600 to-gray-700",
                features: [
                  "HD Streaming",
                  "Basic AI Recommendations",
                  "2 Devices",
                  "Neural Subtitles",
                ],
              },
              {
                name: "Neural Pro",
                price: "$15.99",
                color: "from-red-600 to-pink-600",
                features: [
                  "4K + HDR",
                  "Advanced AI Curation",
                  "6 Devices",
                  "Mood-Based Streaming",
                  "AI Voice Dubbing",
                ],
                popular: true,
              },
              {
                name: "Mind Sync Ultra",
                price: "$22.99",
                color: "from-purple-600 to-indigo-600",
                features: [
                  "8K + Dolby Vision",
                  "Predictive AI",
                  "Unlimited Devices",
                  "Interactive Stories",
                  "Neural Audio",
                  "Early AI Access",
                ],
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`relative ${plan.popular ? "scale-105" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-red-500 to-pink-500 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div
                  className={`bg-gradient-to-br ${
                    plan.color
                  } p-8 rounded-2xl border ${
                    plan.popular ? "border-red-500" : "border-white/10"
                  } hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold mb-2">{plan.price}</div>
                    <div className="text-gray-300">per month</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-3"
                      >
                        <Star className="w-4 h-4 text-white fill-current" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-white text-black hover:bg-gray-200"
                        : "bg-white/20 hover:bg-white/30"
                    }`}
                  >
                    Start Neural Experience
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-black to-red-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              {
                number: "500M+",
                label: "Neural Viewers",
                color: "text-red-400",
              },
              {
                number: "50K+",
                label: "AI-Generated Hours",
                color: "text-purple-400",
              },
              {
                number: "99.7%",
                label: "Prediction Accuracy",
                color: "text-blue-400",
              },
              {
                number: "190+",
                label: "Neural Countries",
                color: "text-emerald-400",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="group hover:scale-110 transition-transform duration-300"
              >
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color} group-hover:animate-pulse`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/40 to-purple-900/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Ready to Enter the Neural Age?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join millions experiencing the future of entertainment today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25">
              Start Free Neural Trial
            </button>
            <button className="border border-white/30 hover:border-white/60 hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Explore AI Features
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            30-day free trial • Cancel anytime • Neural learning included
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent mb-4">
                NeuralFlix
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                The world's leading AI-powered entertainment platform.
                Redefining how humans experience stories through neural
                intelligence.
              </p>
              <div className="flex space-x-4">
                {["📱", "🐦", "📘", "📷"].map((social, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer"
                  >
                    {social}
                  </div>
                ))}
              </div>
            </div>

            {[
              {
                title: "AI Experience",
                links: [
                  "Neural Recommendations",
                  "Mood Streaming",
                  "Interactive Stories",
                  "Voice AI",
                ],
              },
              {
                title: "Content",
                links: [
                  "AI Originals",
                  "Neural Series",
                  "Future Films",
                  "Documentary AI",
                ],
              },
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Neural Guide",
                  "Account Settings",
                  "Developer API",
                ],
              },
            ].map((column, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-red-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2025 NeuralFlix, Inc. Powered by Neural Intelligence.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-red-400 transition-colors">
                AI Ethics
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6"
            >
              <X className="w-8 h-8" />
            </button>
            {["Home", "AI Picks", "Neural Series", "My Mind"].map(
              (item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-3xl font-light hover:text-red-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
          </div>
        </div>
      )}

      {/* Floating AI Assistant */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="bg-gradient-to-r from-red-600 to-pink-600 w-14 h-14 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 animate-pulse">
          <Brain className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default NetflixRebrand;
