import React from "react";
import { useNavigation } from "../../context/NavigationContext";

interface HeaderProps {
  onChatToggle: () => void;
}

export default function Header({ onChatToggle }: HeaderProps) {
  const { setCurrentPage } = useNavigation();

  const handleLogoClick = () => {
    setCurrentPage("home");
  };

  return (
    <div className="fixed left-[66px] top-0 right-0 h-16 bg-[#1D2B3D] shadow-md z-30">
      {/* Header Content - Aligned to content edges */}
      <div className="w-full max-w-[1080px] mx-auto h-full flex items-center justify-between px-0 relative">
        {/* Logo - Aligned to left edge of content */}
        <button
          onClick={handleLogoClick}
          className="text-white font-bold text-[40px] leading-[64px] tracking-[4.8px] 
                   font-['Pixelify_Sans'] text-stroke-2 text-stroke-[#0F0C0C] 
                   hover:opacity-80 transition-opacity cursor-pointer"
          style={{
            WebkitTextStroke: "2px #0F0C0C",
          }}
        >
          bozo.win
        </button>

        {/* Login/Register Buttons - Aligned to right edge of content */}
        <div className="flex items-center gap-0">
          <button
            className="flex items-center justify-center w-[100px] h-[46px] 
                           text-white font-bold text-xl font-['Hanken_Grotesk'] 
                           hover:bg-[#233040] rounded-[5px] transition-colors"
          >
            Login
          </button>
          <button
            className="flex items-center justify-center w-[100px] h-[46px] 
                           bg-[#3469B4] text-white font-bold text-xl font-['Hanken_Grotesk'] 
                           rounded-[5px] hover:bg-[#2A5490] transition-colors ml-0"
          >
            Register
          </button>
        </div>
      </div>

      {/* Chat Button - Far Right */}
      <button
        onClick={onChatToggle}
        className="fixed right-[2px] top-[2px] w-[60px] h-[60px] bg-[#192637] 
                 rounded-[10px] flex items-center justify-center hover:bg-[#233040] 
                 transition-colors z-40"
      >
        <div className="w-[46px] h-[46px] bg-[#1D2B3D] rounded-[10px] flex items-center justify-center">
          <svg width="46" height="46" viewBox="0 0 46 46" fill="none">
            <rect width="46" height="46" rx="10" fill="#1D2B3D" />
            <path
              d="M35.8 9.66667H10.2C9.35131 9.66667 8.53737 10.0038 7.93726 10.6039C7.33714 11.204 7 12.018 7 12.8667V41.6667L13.4 35.2667H35.8C36.6487 35.2667 37.4626 34.9295 38.0627 34.3294C38.6629 33.7293 39 32.9154 39 32.0667V12.8667C39 12.018 38.6629 11.204 38.0627 10.6039C37.4626 10.0038 36.6487 9.66667 35.8 9.66667Z"
              fill="#5C7CA9"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
