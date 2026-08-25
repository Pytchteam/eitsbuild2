import React, { useState, useEffect } from 'react';
import { ShieldCheck, HardHat, Sparkles, Building, Hammer, Compass, Star, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const stages = [
    {
      label: 'Initializing Jamaican Engineering Rigor',
      sublabel: 'Structural Integrity & Seismic Codes',
      icon: <Building className="w-5 h-5 text-red-500" />,
    },
    {
      label: 'Calibrating Laser-Level Finishing Matrices',
      sublabel: 'Zero-Lippage Porcelain & Level 5 Skim Coating',
      icon: <Sparkles className="w-5 h-5 text-red-500" />,
    },
    {
      label: 'Loading 14-Parish Logistics & Equipment Fleet',
      sublabel: 'Kingston HQ & Islandwide Mobilization Units',
      icon: <Compass className="w-5 h-5 text-red-500" />,
    },
    {
      label: 'Verifying Quality Assurance & 5.0★ Standards',
      sublabel: 'Itemized BOQ & Milestone Disbursement Protocols',
      icon: <ShieldCheck className="w-5 h-5 text-red-500" />,
    },
    {
      label: 'Welcome to E.I.T.S Construction & Finishing',
      sublabel: 'Building With Quality. Finishing With Excellence.',
      icon: <HardHat className="w-5 h-5 text-red-500" />,
    },
  ];

  useEffect(() => {
    // Increment progress at a measured, authentic construction calibration pace (~4.5s total duration)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Smooth, rhythmic pace
        const increment = prev < 25 ? 1 : prev < 55 ? 1.2 : prev < 80 ? 1.5 : prev < 96 ? 1.2 : 0.8;
        const next = Math.min(100, Math.round((prev + increment) * 10) / 10);
        return next;
      });
    }, 55);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Map progress smoothly across the 5 stages
    if (progress < 20) {
      setCurrentStageIndex(0);
    } else if (progress < 45) {
      setCurrentStageIndex(1);
    } else if (progress < 70) {
      setCurrentStageIndex(2);
    } else if (progress < 92) {
      setCurrentStageIndex(3);
    } else {
      setCurrentStageIndex(4);
    }

    if (progress >= 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true);
        const exitTimer = setTimeout(() => {
          onComplete();
        }, 700);
        return () => clearTimeout(exitTimer);
      }, 750);

      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  const currentStage = stages[currentStageIndex];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#070709] transition-all duration-700 select-none overflow-hidden ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#FF1F1F 1.5px, transparent 1.5px), radial-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px, 16px 16px',
        }}
      />

      {/* Atmospheric Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-red-800/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-red-950/20 blur-[100px] rounded-full pointer-events-none" />

      {/* Laser scanline sweeping effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent animate-pulse -translate-y-full"
             style={{
               animation: 'scanline 3.5s ease-in-out infinite alternate',
             }}
        />
      </div>

      <style>{`
        @keyframes scanline {
          0% { transform: translateY(-50px); opacity: 0.2; }
          50% { opacity: 0.8; }
          100% { transform: translateY(100vh); opacity: 0.2; }
        }
      `}</style>

      {/* Main Center Stage Presentation Card */}
      <div className="max-w-md w-full mx-4 p-6 sm:p-8 clay-card relative z-10 border border-white/15 rounded-[36px] shadow-2xl flex flex-col items-center text-center">
        
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/60 border border-red-500/30 text-red-400 text-[11px] font-extrabold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
          <span>E.I.T.S Jamaican Gateway</span>
        </div>

        {/* 3D Glossy Emblem Logo */}
        <div className="relative mb-6 group">
          <div className="w-20 h-20 sm:w-24 sm:h-24 red-gloss rounded-3xl flex items-center justify-center font-black text-4xl sm:text-5xl text-white shadow-2xl shadow-red-600/40 relative z-10">
            E
          </div>
          {/* Subtle spinning accent ring */}
          <div className="absolute -inset-2.5 rounded-[32px] border border-dashed border-red-500/30 animate-spin" style={{ animationDuration: '14s' }} />
        </div>

        {/* Brand Typography */}
        <div className="mb-6">
          <h1 className="font-display text-2xl sm:text-3xl font-black uppercase text-white tracking-tight flex items-center justify-center gap-1.5">
            <span>E.I.T.S</span>
            <span className="text-red-500 font-light">/</span>
            <span className="text-gray-200">Company</span>
          </h1>
          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest block mt-0.5">
            Construction &amp; Finishing Jamaica
          </span>
          <div className="flex items-center justify-center gap-1.5 text-amber-400 text-xs font-bold mt-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
            <span className="text-gray-300 ml-1 text-[11px]">5.0 Verified Rating</span>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full space-y-2 mb-6">
          <div className="flex items-center justify-between text-xs font-bold">
            <span className="text-gray-400 uppercase tracking-wider text-[10px]">System Readiness</span>
            <span className="text-red-400 font-black font-mono text-sm">{progress}%</span>
          </div>

          <div className="w-full h-3 bg-[#0A0A0C] rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
            <div
              className="h-full bg-gradient-to-r from-red-600 via-red-500 to-amber-400 rounded-full transition-all duration-200 shadow-lg shadow-red-600/50 relative"
              style={{ width: `${progress}%` }}
            >
              {/* Highlight shimmer */}
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
            </div>
          </div>
        </div>

        {/* Dynamic Stage Indicator Pill */}
        <div className="w-full gloss-block p-4 rounded-2xl border border-white/10 flex items-center gap-3.5 text-left mb-6 transition-all">
          <div className="w-10 h-10 rounded-xl stat-icon-3d flex items-center justify-center shrink-0">
            {currentStage.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs sm:text-sm font-extrabold uppercase text-white tracking-tight truncate">
              {currentStage.label}
            </h4>
            <p className="text-[10px] sm:text-[11px] text-gray-400 truncate mt-0.5">
              {currentStage.sublabel}
            </p>
          </div>
          <div className="w-5 h-5 rounded-full bg-emerald-950/80 border border-emerald-500/40 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          </div>
        </div>

        {/* Tagline & Skip Direct Option */}
        <div className="w-full flex items-center justify-between pt-2 border-t border-white/5 text-xs text-gray-400">
          <div className="flex items-center gap-1.5 text-[11px] text-gray-400">
            <MapPin className="w-3.5 h-3.5 text-red-500" />
            <span>Kingston • 14 Parishes</span>
          </div>

          <button
            onClick={handleSkip}
            className="text-[11px] font-bold text-red-400 hover:text-white uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors py-1 px-2.5 rounded-lg hover:bg-white/5"
          >
            <span>Enter Site</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

      </div>

      {/* Bottom Footer Note */}
      <div className="absolute bottom-6 text-center text-[11px] text-gray-500 uppercase tracking-widest font-semibold">
        Strength • Quality • Reliability • Craftsmanship
      </div>
    </div>
  );
};
