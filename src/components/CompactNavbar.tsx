import { useState, useEffect } from "react";
import { Terminal } from "lucide-react";

const CompactNavbar = () => {
  const [time, setTime] = useState(new Date());
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <nav 
      className={`w-full sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-[oklch(4%_0_0)]/80 backdrop-blur-xl border-white/5 py-4 shadow-2xl" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-[47.5rem] mx-auto px-6 flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-blue-500/30 flex items-center justify-center bg-gradient-to-br from-blue-600/20 to-slate-900 shadow-inner">
              <Terminal className="w-5 h-5 text-blue-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-sm tracking-tight drop-shadow-md">Iheb Etteyeb</span>
              <span className="text-[10px] text-blue-400/80 font-medium uppercase tracking-widest mt-[-2px]">
                System Online
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </div>
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Open to Work</span>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-slate-900/60 border border-white/10 px-4 py-2 rounded-lg shadow-lg backdrop-blur-md">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          <span className="font-mono text-sm font-semibold text-blue-100/90 tracking-wider">
            {formatTime(time)}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default CompactNavbar;
