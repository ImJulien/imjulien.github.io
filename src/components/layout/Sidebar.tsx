import React, { useState } from "react";
import { useNavigation } from "../../context/NavigationContext";

interface SidebarProps {
  expanded: boolean;
  onToggle: () => void;
}

export function Sidebar({ expanded, onToggle }: SidebarProps) {
  const { setCurrentPage } = useNavigation();
  const [expandedSections, setExpandedSections] = useState<{
    casino: boolean;
    betting: boolean;
  }>({
    casino: false,
    betting: false,
  });

  const toggleSection = (section: "casino" | "betting") => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleNavigation = (page: any) => {
    setCurrentPage(page);
  };

  const handleCasinoClick = () => {
    handleNavigation("games");
  };

  const handleBettingClick = () => {
    handleNavigation("sports");
  };

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-[#1B2736] transition-all duration-300 ease-in-out z-40 ${
        expanded ? "w-[250px]" : "w-[66px]"
      }`}
    >
      <div className="flex flex-col h-full p-[5px] gap-[5px] overflow-y-auto scrollbar-hide">
        {/* Casino Section */}
        <div className="relative">
          {/* Casino Main Button */}
          <button
            onClick={handleCasinoClick}
            className={`flex h-14 px-4 justify-center items-center bg-[#2A3B50] cursor-pointer w-full ${
              expandedSections.casino
                ? "rounded-t-[10px]"
                : "rounded-t-[10px] mb-0"
            } hover:bg-gradient-to-r hover:from-[#BFBC67] hover:to-[#F2B33D] transition-all`}
          >
            <div className="w-6 h-6 relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.36364 12L6.54545 7.2V6H3.27273V7.2H5.45455L3.27273 12M8.72727 12L10.9091 7.2V6H7.63636V7.2H9.81818L7.63636 12M13.0909 12L15.2727 7.2V6H12V7.2H14.1818L12 12M21.8182 0C20.6182 0 19.6364 1.08 19.6364 2.4C19.6364 3.24 20.0727 4.08 20.7273 4.44V18H17.4545V15.6C18.1091 15.6 18.5455 15.12 18.5455 14.4V3.6C18.5455 2.88 18.1091 2.4 17.4545 2.4H13.3091C12.4364 0.96 10.9091 0 9.27273 0C7.63636 0 6.10909 0.96 5.23636 2.4H1.09091C0.436364 2.4 0 2.88 0 3.6V14.4C0 15.12 0.436364 15.6 1.09091 15.6V24H17.4545V20.4H20.7273C21.9273 20.4 22.9091 19.32 22.9091 18V4.44C23.5636 4.08 24 3.24 24 2.4C24 1.08 23.0182 0 21.8182 0ZM13.0909 20.4H5.45455V18H13.0909V20.4ZM16.3636 13.2H2.18182V4.8H16.3636V13.2Z"
                  fill="url(#paint0_linear_casino)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_casino"
                    x1="12"
                    y1="0"
                    x2="12"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BFBC67" />
                    <stop offset="1" stopColor="#F2B33D" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {expanded && (
              <span className="ml-3 text-white font-semibold">Casino</span>
            )}
          </button>

          {/* Casino Sub-Icons - Show when expanded */}
          {expandedSections.casino && (
            <div className="bg-[#2A3B50] px-4 py-4 space-y-4">
              <button
                onClick={() => handleNavigation("games")}
                className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors w-full"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16.2399 1.10349C16.5798 -0.361687 18.7939 -0.37044 19.1487 1.09299L19.1654 1.16301L19.1988 1.2978C19.6075 2.93977 21.0173 4.19489 22.7838 4.48372C24.4054 4.7498 24.4054 6.94494 22.7838 7.21101C21.9161 7.35395 21.1124 7.73496 20.4734 8.30635C19.8344 8.87773 19.3884 9.61409 19.1914 10.4232L19.1487 10.6018C18.7958 12.0652 16.5798 12.0564 16.238 10.5912L16.2027 10.4372C16.0145 9.62475 15.5737 8.88359 14.9365 8.30833C14.2992 7.73307 13.4946 7.34983 12.6252 7.20751C11.0073 6.94319 11.0073 4.75155 12.6252 4.48722C13.4915 4.3455 14.2936 3.96455 14.9298 3.39269C15.5661 2.82082 16.0078 2.08379 16.199 1.27504L16.225 1.16301L16.2399 1.10349Z"
                  />
                </svg>
                {expanded && <span className="font-bold text-left">Games</span>}
              </button>

              <button
                onClick={() => handleNavigation("classics")}
                className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors w-full"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.8557 0H16.5837C17.8508 0 18.8875 1.13684 18.8875 2.52632V10.6105L14.8557 0ZM21.0763 2.02105L22.5738 2.77895C23.7257 3.28421 24.3017 4.8 23.8409 6.06316L21.0763 13.5158V2.02105ZM18.6572 16.8L12.8974 1.64211C12.5518 0.631579 11.7455 0.126316 10.8239 0.126316C10.4783 0.126316 10.2479 0.252632 9.90234 0.378947L1.37791 4.16842C0.225958 4.67368 -0.350017 6.06316 0.225958 7.32632L5.98571 22.4842C6.33129 23.4947 7.13766 24 8.05922 24C8.4048 24 8.63519 24 8.98078 23.7474L17.5052 19.9579C18.4268 19.5789 18.8875 18.6947 18.8875 17.6842C18.7724 17.4316 18.7724 17.0526 18.6572 16.8ZM11.0543 16.1684L7.36805 13.1368L7.82883 8.08421L11.5151 11.1158L11.0543 16.1684Z" />
                </svg>
                {expanded && (
                  <span className="font-bold text-left">Classics</span>
                )}
              </button>

              <button
                onClick={() => handleNavigation("trending")}
                className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors w-full"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.466 0.874729L9.8011 0L9.48398 1.67878C8.97924 4.32962 6.91402 6.79276 4.63606 8.52368C0.176609 11.9137 -0.799846 15.598 0.580933 18.6392C1.90225 21.5496 5.25576 23.5424 8.65948 23.8749L9.44699 23.9513C7.49936 22.9075 6.24939 20.4686 6.68543 18.6462C7.11618 16.855 8.58549 15.1774 11.4078 13.6295L12.8309 12.851L13.3621 14.2471C13.6752 15.072 14.2169 15.7347 14.7679 16.4078C15.0322 16.7322 15.3004 17.0601 15.5462 17.4088C16.3958 18.6196 16.6204 19.9658 16.0721 21.3017C15.5726 22.5159 14.7494 23.4705 13.6144 24L14.8961 23.8749C18.0911 23.5632 20.4364 22.6051 21.9599 21.0028C23.4701 19.4143 24 17.3694 24 15.1925C24 13.165 23.05 11.0749 21.9295 9.33584C20.6161 7.29906 18.9023 5.60753 17.0314 3.96814C16.7076 4.53584 16.7327 4.76524 16.0668 5.67705C15.202 3.66338 13.5788 1.9691 11.466 0.874729Z" />
                </svg>
                {expanded && (
                  <span className="font-bold text-left">Trending</span>
                )}
              </button>

              <button
                onClick={() => handleNavigation("featured")}
                className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors w-full"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.7705 5.1498C15.2122 5.1498 15.5458 5.32105 15.795 5.56518C16.1971 5.9587 16.3672 6.53806 16.6177 7.01781C17.9013 9.48156 19.9288 11.5521 22.4574 12.9814L23.0296 13.2935C23.5478 13.5838 23.9987 13.9227 24 14.5725C24.0013 15.4615 23.1614 15.77 22.4574 16.1672C19.9288 17.5965 17.9013 19.667 16.6177 22.1308C16.3672 22.6117 16.1958 23.1911 15.795 23.5846C15.5471 23.8287 15.2122 24 14.7705 24C14.3288 24 13.9939 23.8287 13.7461 23.5846C13.514 23.3575 13.3611 23.0721 13.2253 22.7806L13.0275 22.3433C12.9946 22.2721 12.9599 22.2017 12.9233 22.132C11.6397 19.6682 9.61222 17.5977 7.0837 16.1684L6.66046 15.9364C6.08955 15.6206 5.53974 15.2611 5.54106 14.5725C5.54369 13.6858 6.38094 13.3798 7.0837 12.9826C9.61222 11.5533 11.6397 9.48277 12.9233 7.01903C13.1738 6.53806 13.3452 5.9587 13.7461 5.56518C13.9939 5.32227 14.3288 5.1498 14.7705 5.1498Z" />
                </svg>
                {expanded && (
                  <span className="font-bold text-left">Featured</span>
                )}
              </button>
            </div>
          )}

          {/* Casino Expander Button - Always visible now */}
          <button
            onClick={() => toggleSection("casino")}
            className="flex h-6 px-4 justify-center items-center bg-[#233040]
                     rounded-b-[10px] cursor-pointer w-full hover:bg-[#2A3B50]
                     transition-colors"
          >
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              className={`transform transition-transform ${
                expandedSections.casino ? "rotate-180" : ""
              }`}
            >
              <path
                d="M2.35 11L10 4.19542L17.65 11L20 8.89488L10 0L0 8.89488L2.35 11Z"
                fill="#5C7CA9"
              />
            </svg>
          </button>
        </div>

        {/* Betting Section */}
        <div className="relative">
          {/* Betting Main Button */}
          <button
            onClick={handleBettingClick}
            className={`flex h-14 px-4 justify-center items-center bg-[#2A3B50] cursor-pointer w-full ${
              expandedSections.betting
                ? "rounded-t-[10px]"
                : "rounded-t-[10px] mb-0"
            } hover:bg-gradient-to-r hover:from-[#BFBC67] hover:to-[#F2B33D] transition-all`}
          >
            <div className="w-6 h-6 relative">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 0C18.414 0 18.75 0.313416 18.75 0.701656C18.75 1.35531 18.8595 2.42262 19.458 3.30781C20.0205 4.13794 21.0825 4.9116 23.25 4.9116C23.664 4.9116 24 5.22501 24 5.61325C23.9988 5.79973 23.9193 5.97819 23.7787 6.10966C23.6382 6.24112 23.4481 6.31491 23.25 6.31491C22.6965 6.31491 21.54 6.62974 20.52 7.36245C19.5255 8.0754 18.75 9.11447 18.75 10.5248C18.7484 10.7111 18.6687 10.8892 18.5282 11.0203C18.3877 11.1515 18.1979 11.2251 18 11.2251C17.8019 11.2251 17.6118 11.1513 17.4713 11.0198C17.3307 10.8884 17.2512 10.7099 17.25 10.5234C17.25 9.81754 17.0175 8.74318 16.341 7.86363C15.693 7.02221 14.6055 6.31491 12.75 6.31491C12.5519 6.31491 12.3618 6.24112 12.2213 6.10966C12.0807 5.97819 12.0012 5.79973 12 5.61325C12 5.22501 12.336 4.9116 12.75 4.9116C13.518 4.9116 14.6325 4.89748 15.5595 4.39347C16.4055 3.93182 17.25 2.96475 17.25 0.701656C17.25 0.313416 17.586 0 18 0Z"
                  fill="url(#paint0_linear_betting)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_betting"
                    x1="13.5"
                    y1="0"
                    x2="13.5"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#BFBC67" />
                    <stop offset="1" stopColor="#F2B33D" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {expanded && (
              <span className="ml-3 text-white font-semibold">Betting</span>
            )}
          </button>

          {/* Betting Sub-Icons - Show when expanded */}
          {expandedSections.betting && (
            <div className="bg-[#2A3B50] px-4 py-4 space-y-4">
              <button
                onClick={() => handleNavigation("sports")}
                className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors w-full"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.79979 22.3235C4.05645 21.2907 2.60918 19.8315 1.59628 18.0854C0.579899 16.3433 0.0303301 14.3719 0 12.3593L0.172861 12.3924C3.6885 13.0796 7.68815 11.8376 10.9749 9.83509C11.408 9.57171 11.8313 9.29334 12.2445 9C12.7369 9.61035 13.178 10.2302 13.532 10.8405C13.9791 11.6058 14.382 12.5166 14.7421 13.4901C14.1237 13.7874 13.5245 14.1115 12.9443 14.4624C9.61585 16.472 6.77616 19.4019 5.80098 22.3212L5.79979 22.3235Z"
                  />
                  <path d="M17.0395 14.4019C19.3143 13.5338 21.6336 13.201 23.642 13.6423L23.8879 13.6966C23.7422 14.763 23.4543 15.8051 23.032 16.7951C22.136 18.9015 20.6561 20.7076 18.767 22L18.7513 21.9048C18.5234 20.4915 18.2472 19.0865 17.9232 17.6921C17.6675 16.5849 17.3728 15.4883 17.0395 14.4019Z" />
                </svg>
                {expanded && (
                  <span className="font-bold text-left">Sports</span>
                )}
              </button>

              <button
                onClick={() => handleNavigation("esports")}
                className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors w-full"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 25"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.94718 3.93506V6.1591C5.94836 6.47026 6.04025 6.77405 6.21119 7.03196C6.48549 7.43697 6.94151 7.70231 7.45926 7.70231H16.5403C16.7862 7.70263 17.0285 7.64171 17.2461 7.52488C17.4636 7.40804 17.6498 7.23882 17.7884 7.03196C17.9599 6.77424 18.0524 6.47044 18.0541 6.1591V2.24521C18.0528 2.196 18.0448 2.14722 18.0301 2.10032C18.0098 2.04192 17.9776 1.98859 17.9355 1.94386C17.8934 1.89914 17.8424 1.86406 17.786 1.84094C17.7296 1.81782 17.6689 1.8072 17.6082 1.80978C17.5474 1.81236 17.4879 1.82809 17.4335 1.85592L16.6655 2.24521L15.9471 2.61181L15.9111 2.62927L15.0265 3.07966L12.3024 0.30572C12.222 0.224169 12.1132 0.178375 11.9998 0.178375C11.8863 0.178375 11.7775 0.224169 11.6972 0.30572L8.97305 3.07792L8.09015 2.62927L8.05243 2.61006L7.33239 2.24346L6.56607 1.85417C6.50085 1.82126 6.42848 1.80581 6.35578 1.80927C6.28308 1.81272 6.21244 1.83497 6.15052 1.87392C6.0886 1.91287 6.03744 1.96723 6.00187 2.03189C5.96629 2.09654 5.94747 2.16935 5.94718 2.24346V3.93506Z"
                  />
                </svg>
                {expanded && (
                  <span className="font-bold text-left">Esports</span>
                )}
              </button>

              <button
                onClick={() => handleNavigation("politics")}
                className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors w-full"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 5.80353C12.8466 5.80353 13.6586 5.49781 14.2573 4.95362C14.8559 4.40943 15.1923 3.67136 15.1923 2.90176C15.1923 2.13217 14.8559 1.39409 14.2573 0.849907C13.6586 0.305721 12.8466 0 12 0C11.1534 0 10.3414 0.305721 9.74274 0.849907C9.14407 1.39409 8.80775 2.13217 8.80775 2.90176C8.80775 3.67136 9.14407 4.40943 9.74274 4.95362C10.3414 5.49781 11.1534 5.80353 12 5.80353Z"
                  />
                </svg>
                {expanded && (
                  <span className="font-bold text-left">Politics</span>
                )}
              </button>

              <button
                onClick={() => handleNavigation("financial")}
                className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors w-full"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.78947 17.0526L0 20.7663V10.1053H3.78947M10.1053 14.7284L8.12211 13.0358L6.31579 14.7032V5.05263H10.1053M16.4211 12.6316L12.6316 16.4211V0H16.4211M19.9705 12.3916L17.6842 10.1053H24V16.4211L21.7389 14.16L12.6316 23.1916L8.24842 19.3768L3.47368 24H0L8.17263 15.9916L12.6316 19.7558" />
                </svg>
                {expanded && (
                  <span className="font-bold text-left">Financial</span>
                )}
              </button>

              <button
                onClick={() => handleNavigation("other")}
                className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors w-full"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C13.0752 0 14.1168 0.1416 15.108 0.4068L12.5568 2.9568C12.3633 3.15112 12.1925 3.36692 12.048 3.6H12C10.3386 3.6 8.71458 4.09265 7.33321 5.01566C5.95184 5.93866 4.87519 7.25056 4.23941 8.78546C3.60364 10.3204 3.43729 12.0093 3.7614 13.6388C4.08552 15.2682 4.88554 16.7649 6.0603 17.9397C7.23506 19.1145 8.7318 19.9145 10.3612 20.2386C11.9907 20.5627 13.6796 20.3964 15.2145 19.7606C16.7494 19.1248 18.0613 18.0482 18.9843 16.6668C19.9074 15.2854 20.4 13.6614 20.4 12V11.952C20.632 11.808 20.846 11.638 21.042 11.442L23.5932 8.892C23.8584 9.8832 24 10.9248 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0Z" />
                </svg>
                {expanded && <span className="font-bold text-left">Other</span>}
              </button>
            </div>
          )}

          {/* Betting Expander Button - Always visible now */}
          <button
            onClick={() => toggleSection("betting")}
            className="flex h-6 px-4 justify-center items-center bg-[#233040]
                     rounded-b-[10px] cursor-pointer w-full hover:bg-[#2A3B50]
                     transition-colors"
          >
            <svg
              width="20"
              height="11"
              viewBox="0 0 20 11"
              fill="none"
              className={`transform transition-transform ${
                expandedSections.betting ? "rotate-180" : ""
              }`}
            >
              <path
                d="M2.35 11L10 4.19542L17.65 11L20 8.89488L10 0L0 8.89488L2.35 11Z"
                fill="#5C7CA9"
              />
            </svg>
          </button>
        </div>

        {/* Social Section */}
        <div className="flex flex-col bg-[#2A3B50] rounded-[10px] p-4 gap-4 mb-[5px]">
          <button
            onClick={() => handleNavigation("dashboard")}
            className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors"
          >
            <svg width="28" height="24" viewBox="0 0 28 24" fill="currentColor">
              <path d="M15.0208 3.96429C15.575 3.58929 15.9444 2.90893 15.9444 2.14286C15.9444 0.958929 15.0743 0 14 0C12.9257 0 12.0556 0.958929 12.0556 2.14286C12.0556 2.91429 12.425 3.58929 12.9792 3.96429L10.1938 10.1036C9.75139 11.0786 8.60417 11.3571 7.83125 10.6768L3.5 6.85714C3.74306 6.49821 3.88889 6.05357 3.88889 5.57143C3.88889 4.3875 3.01875 3.42857 1.94444 3.42857C0.870139 3.42857 0 4.3875 0 5.57143C0 6.75536 0.870139 7.71429 1.94444 7.71429H1.97847L4.2 21.1821C4.46736 22.8107 5.75556 24 7.2625 24H20.7375C22.2396 24 23.5278 22.8161 23.8 21.1821L26.0215 7.71429H26.0556C27.1299 7.71429 28 6.75536 28 5.57143C28 4.3875 27.1299 3.42857 26.0556 3.42857C24.9813 3.42857 24.1111 4.3875 24.1111 5.57143C24.1111 6.05357 24.2569 6.49821 24.5 6.85714L20.1688 10.6768C19.3958 11.3571 18.2486 11.0786 17.8062 10.1036L15.0208 3.96429Z" />
            </svg>
            {expanded && <span className="font-bold">VIP</span>}
          </button>

          <button
            onClick={() => handleNavigation("referrals")}
            className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.2869 9.06655L22.0592 12.8387C22.6714 13.4427 23.158 14.1618 23.491 14.9545C23.8241 15.7473 23.9971 16.5982 24 17.4581C24.0028 18.318 23.8356 19.1699 23.5078 19.9649C23.1801 20.7599 22.6983 21.4823 22.0902 22.0903C21.4821 22.6984 20.7598 23.1801 19.9647 23.5079C19.1697 23.8356 18.3177 24.0028 17.4577 24C16.5978 23.9971 15.7469 23.8241 14.9541 23.4911C14.1613 23.158 13.4422 22.6714 12.8382 22.0593L11.5815 20.8027C11.4116 20.6388 11.276 20.4426 11.1827 20.2257C11.0894 20.0088 11.0403 19.7755 11.0381 19.5394C11.0359 19.3033 11.0808 19.0691 11.1701 18.8505C11.2594 18.632 11.3914 18.4333 11.5583 18.2663C11.7252 18.0993 11.9237 17.9671 12.1422 17.8776C12.3607 17.7881 12.5948 17.743 12.8309 17.745C13.067 17.7469 13.3004 17.7958 13.5174 17.8889C13.7344 17.982 13.9307 18.1174 14.0948 18.2871L15.3539 19.5449C15.9106 20.0966 16.6632 20.4053 17.447 20.4035C18.2308 20.4017 18.982 20.0895 19.5361 19.5352C20.0903 18.9809 20.4023 18.2297 20.4039 17.4459C20.4055 16.6621 20.0966 15.9097 19.5447 15.3531L15.7724 11.5809C15.3646 11.173 14.8467 10.893 14.2822 10.7751C13.7176 10.6571 13.1309 10.7065 12.594 10.9171C12.4027 10.9929 12.2233 11.0704 12.0557 11.1494L11.5056 11.4067C10.7706 11.7386 10.2051 11.8809 9.48549 11.1625C8.45171 10.1287 8.71964 9.17443 9.97986 8.30548C11.2352 7.4417 12.7535 7.04486 14.271 7.18389C15.7885 7.32292 17.2094 7.98904 18.2869 9.06655Z" />
            </svg>
            {expanded && <span className="font-bold">Referrals</span>}
          </button>

          <button
            onClick={() => handleNavigation("statistics")}
            className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.8416 0H15.1584V24H8.8416V0ZM0 8H6.3156V24H0V8ZM24 10.6667H17.6844V24H24V10.6667Z" />
            </svg>
            {expanded && <span className="font-bold">Leaderboard</span>}
          </button>

          <button
            onClick={() => handleNavigation("forum")}
            className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors"
          >
            <svg
              width="30"
              height="26"
              viewBox="0 0 30 26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M10.8595 18.9851C12.9042 18.8735 14.8542 18.1162 16.4085 16.8301C17.9629 15.5439 19.0354 13.8004 19.4606 11.8683C19.8858 9.93613 19.6401 7.92276 18.7614 6.13862C17.8828 4.35448 16.4199 2.89865 14.5984 1.99564C12.7769 1.09263 10.698 0.792581 8.68216 1.14177C6.66635 1.49096 4.82564 2.47 3.44387 3.9279C2.0621 5.38581 1.21602 7.24161 1.03609 9.20913C0.856166 11.1767 1.35239 13.1466 2.44825 14.8153L1.78879 16.7232V16.7262C1.53527 17.4567 1.40929 17.8212 1.49794 18.0657C1.57571 18.2772 1.75146 18.4452 1.97076 18.5202C2.22272 18.6072 2.59911 18.4857 3.35189 18.2442L3.36278 18.2412L5.34115 17.6052C6.98504 18.6118 8.91549 19.0946 10.8595 18.9851Z" />
            </svg>
            {expanded && <span className="font-bold">Forum</span>}
          </button>
        </div>

        {/* Info Section */}
        <div className="flex flex-col bg-[#2A3B50] rounded-[10px] p-4 gap-4 mb-[5px]">
          <button
            onClick={() => handleNavigation("news")}
            className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.8148 2.66669C23.1051 2.66673 23.3853 2.7733 23.6022 2.9662C23.8191 3.1591 23.9577 3.42491 23.9917 3.71321L24 3.85187V20.4445C24 21.3514 23.6535 22.224 23.0314 22.8839C22.4092 23.5437 21.5584 23.9409 20.653 23.9941L20.4444 24H5.62963C4.87737 24.0001 4.15323 23.7141 3.60409 23.2C3.05496 22.6858 2.72194 21.9821 2.67259 21.2314L2.66667 21.0371V12.1482C2.6667 11.8579 2.77328 11.5777 2.96618 11.3608C3.15908 11.1438 3.42489 11.0052 3.71318 10.9713L3.85185 10.963H6.22222V3.85187C6.22226 3.56158 6.32884 3.2814 6.52174 3.06447C6.71464 2.84754 6.98044 2.70895 7.26874 2.67498L7.40741 2.66669H22.8148Z" />
            </svg>
            {expanded && <span className="font-bold">News</span>}
          </button>

          <button
            onClick={() => handleNavigation("about")}
            className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.3333 0L24 6V22.8096C23.9996 23.1254 23.86 23.4282 23.6117 23.6514C23.3635 23.8746 23.0269 24 22.676 24H1.324C0.973838 23.9978 0.63869 23.8717 0.390957 23.649C0.143224 23.4263 0.00279287 23.1247 0 22.8096V1.1904C0 0.5328 0.593333 0 1.324 0H17.3333ZM10.6667 6V8.4H13.3333V6H10.6667ZM10.6667 10.8V18H13.3333V10.8H10.6667Z" />
            </svg>
            {expanded && <span className="font-bold">About</span>}
          </button>

          <button
            onClick={() => handleNavigation("safety")}
            className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.55556 17.4545L4.66667 13.0909L6.39 11.5527L9.55556 14.3673L17.61 7.17818L19.3333 8.72727M12 0L1 4.36364V10.9091C1 16.9636 5.69333 22.6255 12 24C18.3067 22.6255 23 16.9636 23 10.9091V4.36364L12 0Z" />
            </svg>
            {expanded && <span className="font-bold">Safety</span>}
          </button>
        </div>

        {/* Utility Section */}
        <div className="flex flex-col bg-[#2A3B50] rounded-[10px] p-4 gap-4">
          <button
            onClick={() => handleNavigation("settings")}
            className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.0027 16.2C10.8887 16.2 9.82045 15.7575 9.0328 14.9698C8.24515 14.1822 7.80265 13.1139 7.80265 12C7.80265 10.8861 8.24515 9.81781 9.0328 9.03015C9.82045 8.2425 10.8887 7.8 12.0027 7.8C13.1166 7.8 14.1848 8.2425 14.9725 9.03015C15.7602 9.81781 16.2026 10.8861 16.2026 12C16.2026 13.1139 15.7602 14.1822 14.9725 14.9698C14.1848 15.7575 13.1166 16.2 12.0027 16.2ZM20.9186 13.164C20.9667 12.78 21.0026 12.396 21.0026 12C21.0026 11.604 20.9667 11.208 20.9186 10.8L23.4506 8.844C23.6786 8.664 23.7386 8.34 23.5946 8.076L21.1946 3.924C21.0506 3.66 20.7266 3.552 20.4626 3.66L17.4746 4.86C16.8506 4.392 16.2026 3.984 15.4466 3.684L15.0026 0.504002C14.9783 0.362663 14.9047 0.234515 14.7948 0.142264C14.685 0.0500134 14.5461 -0.000383729 14.4026 2.20016e-06H9.60265C9.30265 2.20016e-06 9.05065 0.216002 9.00265 0.504002L8.55865 3.684C7.80265 3.984 7.15465 4.392 6.53065 4.86L3.54265 3.66C3.27865 3.552 2.95465 3.66 2.81065 3.924L0.410651 8.076C0.254652 8.34 0.326652 8.664 0.554652 8.844L3.08665 10.8C3.03865 11.208 3.00265 11.604 3.00265 12C3.00265 12.396 3.03865 12.78 3.08665 13.164L0.554652 15.156C0.326652 15.336 0.254652 15.66 0.410651 15.924L2.81065 20.076C2.95465 20.34 3.27865 20.436 3.54265 20.34L6.53065 19.128C7.15465 19.608 7.80265 20.016 8.55865 20.316L9.00265 23.496C9.05065 23.784 9.30265 24 9.60265 24H14.4026C14.7027 24 14.9546 23.784 15.0026 23.496L15.4466 20.316C16.2026 20.004 16.8506 19.608 17.4746 19.128L20.4626 20.34C20.7266 20.436 21.0506 20.34 21.1946 20.076L23.5946 15.924C23.7386 15.66 23.6786 15.336 23.4506 15.156L20.9186 13.164Z" />
            </svg>
            {expanded && <span className="font-bold">Settings</span>}
          </button>

          <button
            onClick={() => handleNavigation("support")}
            className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.3832 0 0 5.3832 0 12V16.9716C0 18.2004 1.0764 19.2 2.4 19.2H3.6C3.91826 19.2 4.22348 19.0736 4.44853 18.8485C4.67357 18.6235 4.8 18.3183 4.8 18V11.8284C4.8 11.5101 4.67357 11.2049 4.44853 10.9799C4.22348 10.7548 3.91826 10.6284 3.6 10.6284H2.5104C3.1776 5.9844 7.1736 2.4 12 2.4C16.8264 2.4 20.8224 5.9844 21.4896 10.6284H20.4C20.0817 10.6284 19.7765 10.7548 19.5515 10.9799C19.3264 11.2049 19.2 11.5101 19.2 11.8284V19.2C19.2 20.5236 18.1236 21.6 16.8 21.6H14.4V20.4H9.6V24H16.8C19.4472 24 21.6 21.8472 21.6 19.2C22.9236 19.2 24 18.2004 24 16.9716V12C24 5.3832 18.6168 0 12 0Z" />
            </svg>
            {expanded && <span className="font-bold">Support</span>}
          </button>

          <button
            onClick={() => handleNavigation("contact")}
            className="flex items-center gap-3 text-[#5C7CA9] hover:text-[#3AA0FF] transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C13.0752 0 14.1168 0.1416 15.108 0.4068L12.5568 2.9568C12.3633 3.15112 12.1925 3.36692 12.048 3.6H12C10.3386 3.6 8.71458 4.09265 7.33321 5.01566C5.95184 5.93866 4.87519 7.25056 4.23941 8.78546C3.60364 10.3204 3.43729 12.0093 3.7614 13.6388C4.08552 15.2682 4.88554 16.7649 6.0603 17.9397C7.23506 19.1145 8.7318 19.9145 10.3612 20.2386C11.9907 20.5627 13.6796 20.3964 15.2145 19.7606C16.7494 19.1248 18.0613 18.0482 18.9843 16.6668C19.9074 15.2854 20.4 13.6614 20.4 12V11.952C20.632 11.808 20.846 11.638 21.042 11.442L23.5932 8.892C23.8584 9.8832 24 10.9248 24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0Z" />
            </svg>
            {expanded && <span className="font-bold">Contact</span>}
          </button>
        </div>
      </div>
    </aside>
  );
}
