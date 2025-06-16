import React, { useState } from "react";
import { useNavigation } from "../context/NavigationContext";

export default function Index() {
  const { setCurrentPage } = useNavigation();
  const [activeTab, setActiveTab] = useState("All");

  const socialLogins = [
    {
      name: "Google",
      icon: "M20.6265 11.19H12.3735V13.647H18.2325C17.9355 17.076 15.0825 18.543 12.3825 18.543C8.93549 18.543 5.91149 15.825 5.91149 12C5.91149 8.31 8.79149 5.457 12.3915 5.457C15.1725 5.457 16.8015 7.23 16.8015 7.23L18.5115 5.448C18.5115 5.448 16.3155 3 12.3015 3C7.1895 3 3.23849 7.32 3.23849 12C3.23849 16.545 6.95549 21 12.4365 21C17.2515 21 20.7615 17.697 20.7615 12.819C20.7615 11.784 20.6265 11.19 20.6265 11.19Z",
    },
    {
      name: "Facebook",
      icon: "M12 3C7.0301 3 2.96384 7.05723 2.96384 12.0542C2.96384 16.5723 6.27106 20.3223 10.5903 21V14.6747H8.29516V12.0542H10.5903V10.0572C10.5903 7.78916 11.9367 6.54217 14.006 6.54217C14.9909 6.54217 16.0211 6.71386 16.0211 6.71386V8.94578H14.8825C13.762 8.94578 13.4096 9.64157 13.4096 10.3554V12.0542H15.9217L15.515 14.6747H13.4096V21C15.5389 20.6637 17.4779 19.5773 18.8764 17.9368C20.275 16.2963 21.041 14.2099 21.0361 12.0542C21.0361 7.05723 16.9699 3 12 3Z",
    },
    {
      name: "Apple",
      icon: "M18.6392 18.749C17.8207 19.8649 16.953 20.9538 15.6316 20.9718C14.3102 20.9988 13.8862 20.2609 12.3873 20.2609C10.8786 20.2609 10.4151 20.9538 9.1628 20.9988C7.87101 21.0438 6.89478 19.8109 6.06645 18.722C4.38023 16.4991 3.08844 12.4044 4.82397 9.65056C5.68188 8.28265 7.22019 7.41871 8.88669 7.39171C10.1489 7.37371 11.3519 8.17466 12.1309 8.17466C12.9001 8.17466 14.3595 7.21172 15.888 7.35571C16.5289 7.38271 18.3236 7.58969 19.4774 9.13759C19.3886 9.19159 17.3375 10.2895 17.3573 12.5664C17.3868 15.2842 19.9704 16.1931 20 16.2021C19.9704 16.2651 19.5858 17.498 18.6392 18.749ZM13.0086 4.34991C13.7284 3.60296 14.9216 3.036 15.9077 3C16.0359 4.05293 15.5724 5.11486 14.8822 5.87081C14.2018 6.63576 13.0776 7.22972 11.9732 7.14872C11.8253 6.11379 12.3775 5.03386 13.0086 4.34991Z",
    },
    {
      name: "Twitter",
      icon: "M17.1747 3H19.9361L13.9048 10.2005L21 20H15.4459L11.0926 14.0582L6.11734 20H3.35202L9.80183 12.2969L3 3H8.69491L12.6258 8.43101L17.1747 3ZM16.2047 18.2755H17.734L7.8618 4.63462H6.21904L16.2047 18.2755Z",
    },
    {
      name: "Twitch",
      icon: "M16.459 6.63762H15.0418V10.4943H16.459V6.63762ZM12.5639 6.62109H11.1467V10.4795H12.5639V6.62109ZM6.54102 3L3 6.21398V17.786H7.24945V21L10.7908 17.786H13.6249L20 12V3H6.54102ZM18.5832 11.3584L15.7502 13.929H12.9165L10.4364 16.179V13.929H7.24945V4.28602H18.5832V11.3584Z",
    },
    {
      name: "GitHub",
      icon: "M12 3C10.7888 3 9.58937 3.23857 8.47033 3.70209C7.35129 4.16561 6.33451 4.84501 5.47803 5.70148C3.7483 7.43121 2.77655 9.77723 2.77655 12.2234C2.77655 16.3002 5.42368 19.759 9.08538 20.9857C9.54656 21.0595 9.69413 20.7736 9.69413 20.5245V18.9658C7.13924 19.5192 6.59506 17.7298 6.59506 17.7298C6.17078 16.6599 5.57125 16.374 5.57125 16.374C4.73192 15.8021 5.63582 15.8206 5.63582 15.8206C6.55816 15.8851 7.047 16.7706 7.047 16.7706C7.84944 18.1726 9.20529 17.7575 9.73103 17.5361C9.81404 16.9366 10.0538 16.5308 10.3121 16.3002C8.2645 16.0696 6.11544 15.2764 6.11544 11.7623C6.11544 10.7385 6.46593 9.91758 7.06545 9.26272C6.97322 9.03213 6.6504 8.07289 7.15769 6.82773C7.15769 6.82773 7.93245 6.5787 9.69413 7.76852C10.4228 7.5656 11.216 7.46415 12 7.46415C12.784 7.46415 13.5772 7.5656 14.3059 7.76852C16.0675 6.5787 16.8423 6.82773 16.8423 6.82773C17.3496 8.07289 17.0268 9.03213 16.9345 9.26272C17.5341 9.91758 17.8845 10.7385 17.8845 11.7623C17.8845 15.2856 15.7263 16.0604 13.6694 16.291C14.0015 16.5769 14.3059 17.1395 14.3059 17.9973V20.5245C14.3059 20.7736 14.4534 21.0687 14.9238 20.9857C18.5855 19.7498 21.2234 16.3002 21.2234 12.2234C21.2234 11.0122 20.9849 9.81282 20.5213 8.69378C20.0578 7.57474 19.3784 6.55796 18.522 5.70148C17.6655 4.84501 16.6487 4.16561 15.5297 3.70209C14.4106 3.23857 13.2112 3 12 3Z",
    },
    {
      name: "Discord",
      icon: "M17.2612 3.22461C17.2562 3.21436 17.2479 3.20633 17.2378 3.20196C16.0708 2.6358 14.8392 2.23211 13.5739 2.00098C13.5624 1.99874 13.5506 2.00038 13.54 2.00566C13.5295 2.01095 13.5207 2.01961 13.5151 2.03043C13.3474 2.35226 13.1952 2.68281 13.059 3.02083C11.6951 2.80196 10.3077 2.80196 8.94386 3.02083C8.80674 2.68195 8.65207 2.35132 8.48054 2.03043C8.47465 2.01983 8.46589 2.01136 8.45538 2.0061C8.44488 2.00085 8.43312 1.99906 8.42164 2.00098C7.15624 2.23165 5.9246 2.63538 4.75771 3.20199C4.74771 3.20644 4.73927 3.21409 4.73359 3.22387C2.40004 6.90837 1.76079 10.5023 2.07438 14.0517C2.07527 14.0604 2.0778 14.0688 2.08183 14.0764C2.08585 14.0841 2.09128 14.0908 2.0978 14.0962C3.45662 15.1599 4.97645 15.9719 6.59246 16.4974C6.60384 16.501 6.61599 16.5009 6.62728 16.4969C6.63857 16.493 6.64846 16.4856 6.65561 16.4755C7.00272 15.9762 7.31027 15.4475 7.57512 14.8947C7.57876 14.8871 7.58083 14.8788 7.58121 14.8703C7.58159 14.8618 7.58027 14.8533 7.57732 14.8454C7.57437 14.8375 7.56987 14.8303 7.56412 14.8244C7.55836 14.8184 7.55148 14.8139 7.54392 14.8109C7.05894 14.6148 6.58943 14.3783 6.1398 14.1036C6.13163 14.0986 6.12477 14.0914 6.11982 14.0829C6.11488 14.0743 6.112 14.0646 6.11144 14.0546C6.11088 14.0446 6.11265 14.0347 6.11661 14.0256C6.12057 14.0164 6.12659 14.0085 6.13413 14.0025C6.22875 13.9277 6.32172 13.8507 6.41298 13.7715C6.42099 13.7645 6.43067 13.76 6.44095 13.7586C6.45122 13.7571 6.46168 13.7587 6.47114 13.7632C9.41694 15.1846 12.6062 15.1846 15.5171 13.7632C15.5266 13.7584 15.5371 13.7566 15.5476 13.7579C15.558 13.7592 15.5679 13.7637 15.576 13.7707C15.6674 13.8504 15.7606 13.9277 15.8555 14.0025C15.8631 14.0085 15.8692 14.0163 15.8732 14.0254C15.8772 14.0345 15.8791 14.0444 15.8786 14.0544C15.8781 14.0644 15.8753 14.0742 15.8704 14.0827C15.8655 14.0913 15.8587 14.0985 15.8506 14.1036C15.402 14.3805 14.932 14.6169 14.4458 14.8102C14.4382 14.8132 14.4314 14.8179 14.4257 14.824C14.4199 14.83 14.4155 14.8372 14.4126 14.8452C14.4097 14.8532 14.4084 14.8617 14.4089 14.8702C14.4093 14.8788 14.4115 14.8871 14.4152 14.8947C14.6845 15.4444 14.9916 15.9725 15.334 16.4747C15.3409 16.485 15.3507 16.4927 15.3621 16.4968C15.3734 16.5008 15.3857 16.501 15.3971 16.4973C17.016 15.9736 18.5385 15.1616 19.899 14.0962C19.9057 14.0911 19.9112 14.0845 19.9152 14.077C19.9193 14.0694 19.9217 14.0611 19.9225 14.0524C20.2979 9.94895 19.2939 6.38449 17.2612 3.22461Z",
    },
    {
      name: "Steam",
      icon: "M10 1C11.1819 1 12.3522 1.23279 13.4442 1.68508C14.5361 2.13738 15.5282 2.80031 16.364 3.63604C17.1997 4.47177 17.8626 5.46392 18.3149 6.55585C18.7672 7.64778 19 8.8181 19 10C19 12.3869 18.0518 14.6761 16.364 16.364C14.6761 18.0518 12.3869 19 10 19C5.86 19 2.395 16.228 1.324 12.457L4.771 13.879C4.88911 14.4555 5.20254 14.9736 5.65837 15.3458C6.11421 15.718 6.68451 15.9215 7.273 15.922C8.677 15.922 9.82 14.779 9.82 13.375V13.258L12.88 11.071H12.952C14.824 11.071 16.345 9.55 16.345 7.678C16.345 5.806 14.824 4.285 12.952 4.285C11.08 4.285 9.55 5.806 9.55 7.678V7.723L7.417 10.837L7.273 10.828C6.742 10.828 6.247 10.99 5.842 11.269L1 9.28C1.387 4.645 5.257 1 10 1Z",
    },
    {
      name: "MetaMask",
      icon: "M17.5827 0L9.85913 5.75726L11.2954 2.36435L17.5827 0Z",
    },
  ];

  const directoryData = {
    Casino: {
      items: ["All", "Games", "Classics", "Featured", "Trending"],
    },
    Betting: {
      items: ["All", "Sports", "Esports", "Politics", "Financial", "Other"],
    },
    Social: {
      items: [
        "Dashboard",
        "VIP Club",
        "Referral Program",
        "Statistics",
        "Forum",
      ],
    },
    Knowledge: {
      items: [
        "News",
        "About",
        "Provably Fair",
        "Safety",
        "Changelog",
        "Portfolio",
      ],
    },
    Utility: {
      items: ["Settings", "Support", "Contact"],
    },
  };

  const handleNavigation = (page: string) => {
    const pageMap: { [key: string]: any } = {
      Games: "games",
      All: "games",
      Classics: "classics",
      Featured: "featured",
      Trending: "trending",
      Sports: "sports",
      Esports: "esports",
      Politics: "politics",
      Financial: "financial",
      Other: "other",
      Dashboard: "dashboard",
      "VIP Club": "dashboard",
      "Referral Program": "referrals",
      Statistics: "statistics",
      Forum: "forum",
      News: "news",
      About: "about",
      "Provably Fair": "about",
      Safety: "safety",
      Changelog: "news",
      Portfolio: "dashboard",
      Settings: "settings",
      Support: "support",
      Contact: "contact",
    };

    setCurrentPage(pageMap[page] || "home");
  };

  return (
    <div className="flex flex-col items-center gap-[5px] w-full p-2">
      {/* Welcome Section - Fixed height */}
      <div className="w-full h-[300px] bg-[#2A3B50] rounded-[10px] relative overflow-hidden flex">
        {/* Left Section with Content */}
        <div className="flex-1 p-4 flex flex-col justify-center space-y-6">
          <div className="space-y-2">
            <h1
              className="text-white text-[40px] font-bold leading-[52px] tracking-[2.4px]
                         font-['Hanken_Grotesk'] text-shadow-lg"
            >
              bozo.win
            </h1>
            <p
              className="text-white text-xl font-bold leading-[52px] tracking-[1.2px]
                        font-['Hanken_Grotesk']"
            >
              insert subtitle
            </p>
          </div>

          {/* Register Button */}
          <button
            className="w-[150px] h-[50px] bg-[#3469B4] rounded-[5px] shadow-md
                           hover:bg-[#2A5490] transition-colors flex items-center justify-center"
          >
            <span className="text-white text-xl font-bold font-['Hanken_Grotesk']">
              Register
            </span>
          </button>

          {/* Social Login */}
          <div className="space-y-3">
            <p
              className="text-white text-[15px] font-bold tracking-[0.9px] opacity-90
                        font-['Hanken_Grotesk']"
            >
              Or login directly with
            </p>
            <div className="flex gap-[5px] flex-wrap max-w-[364px]">
              {socialLogins.map((social, index) => (
                <button
                  key={index}
                  className="w-9 h-9 bg-[#233040] rounded-[5px] shadow-md
                           hover:bg-[#2A3B50] transition-colors flex items-center justify-center"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#5C7CA9"
                  >
                    <path d={social.icon} />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section with Clown Character */}
        <div
          className="w-[450px] h-[300px] bg-[#2B4A71]
                      flex items-center justify-center rounded-r-[10px]"
        >
          <div className="opacity-80">
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
              <g opacity="0.8">
                <path
                  d="M161.111 27.7778C167.248 27.7778 172.222 22.8032 172.222 16.6667C172.222 10.5302 167.248 5.55556 161.111 5.55556C154.975 5.55556 150 10.5302 150 16.6667C150 22.8032 154.975 27.7778 161.111 27.7778Z"
                  fill="#4289C1"
                />
                <path
                  d="M183.333 61.1111C192.538 61.1111 200 53.6492 200 44.4444C200 35.2397 192.538 27.7778 183.333 27.7778C174.129 27.7778 166.667 35.2397 166.667 44.4444C166.667 53.6492 174.129 61.1111 183.333 61.1111Z"
                  fill="#4289C1"
                />
                <path
                  d="M200 100C200 155.228 155.228 200 100 200C44.7722 200 0 155.228 0 100C0 44.7722 44.7722 0 100 0C155.228 0 200 44.7722 200 100Z"
                  fill="#5C7CA9"
                />
                <path
                  d="M38.5001 138.889C50.773 138.889 60.7223 128.94 60.7223 116.667C60.7223 104.394 50.773 94.4444 38.5001 94.4444C26.2271 94.4444 16.2778 104.394 16.2778 116.667C16.2778 128.94 26.2271 138.889 38.5001 138.889Z"
                  fill="#4289C1"
                />
                <path
                  d="M160.722 138.889C172.995 138.889 182.944 128.94 182.944 116.667C182.944 104.394 172.995 94.4444 160.722 94.4444C148.449 94.4444 138.5 104.394 138.5 116.667C138.5 128.94 148.449 138.889 160.722 138.889Z"
                  fill="#4289C1"
                />
                <path
                  d="M63.8889 83.3333C71.5595 83.3333 77.7778 74.6278 77.7778 63.8889C77.7778 53.15 71.5595 44.4444 63.8889 44.4444C56.2183 44.4444 50 53.15 50 63.8889C50 74.6278 56.2183 83.3333 63.8889 83.3333Z"
                  fill="#245A84"
                />
                <path
                  d="M141.667 83.3333C149.337 83.3333 155.556 74.6278 155.556 63.8889C155.556 53.15 149.337 44.4444 141.667 44.4444C133.996 44.4444 127.778 53.15 127.778 63.8889C127.778 74.6278 133.996 83.3333 141.667 83.3333Z"
                  fill="#245A84"
                />
                <path
                  d="M102.778 127.778C113.517 127.778 122.222 119.072 122.222 108.333C122.222 97.5945 113.517 88.8889 102.778 88.8889C92.0389 88.8889 83.3334 97.5945 83.3334 108.333C83.3334 119.072 92.0389 127.778 102.778 127.778Z"
                  fill="#245A84"
                />
                <path
                  d="M151.861 131.272C151.383 130.84 150.77 130.588 150.126 130.559C149.483 130.53 148.849 130.725 148.333 131.111C148.117 131.272 126.544 147.222 100 147.222C73.5223 147.222 51.8778 131.272 51.6667 131.111C51.1516 130.724 50.5181 130.529 49.8747 130.558C49.2312 130.586 48.6178 130.838 48.1393 131.269C47.6609 131.7 47.3471 132.284 47.2518 132.921C47.1565 133.558 47.2855 134.209 47.6167 134.761C48.3334 135.956 65.4889 172.222 100 172.222C134.511 172.222 151.672 135.956 152.383 134.761C152.714 134.209 152.842 133.559 152.747 132.923C152.652 132.287 152.339 131.703 151.861 131.272Z"
                  fill="#245A84"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="w-full h-[200px] bg-[#2A3B50] rounded-[10px] relative">
        <div className="flex items-center justify-center h-full">
          {/* BETS Column */}
          <div className="flex-1 text-center">
            <h3
              className="text-white text-[35px] font-semibold tracking-[2.1px]
                         font-['Hanken_Grotesk'] mb-8"
            >
              BETS
            </h3>
            <div
              className="space-y-1 text-white opacity-90 font-bold text-[15px]
                          tracking-[0.9px] font-['Hanken_Grotesk']"
            >
              <p>
                placed in last 24h :{" "}
                <span className="text-[#3AA0FF]">12,450</span>
              </p>
              <p>
                placed in last 30 days :{" "}
                <span className="text-[#3AA0FF]">345,234</span>
              </p>
              <p>
                all time : <span className="text-[#3AA0FF]">5,432,123</span>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-[190px] bg-white"></div>

          {/* USERS Column */}
          <div className="flex-1 text-center">
            <h3
              className="text-white text-[35px] font-semibold tracking-[2.1px]
                         font-['Hanken_Grotesk'] mb-8"
            >
              USERS
            </h3>
            <div
              className="space-y-1 text-white opacity-90 font-bold text-[15px]
                          tracking-[0.9px] font-['Hanken_Grotesk']"
            >
              <p>
                users online : <span className="text-[#3AA0FF]">1,234</span>
              </p>
              <p>
                active users (30d) :{" "}
                <span className="text-[#3AA0FF]">45,678</span>
              </p>
              <p>
                total users : <span className="text-[#3AA0FF]">234,567</span>
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-px h-[190px] bg-white"></div>

          {/* BOZO.WIN Column */}
          <div className="flex-1 text-center">
            <h3
              className="text-white text-[35px] font-semibold tracking-[2.1px]
                         font-['Hanken_Grotesk'] mb-8"
            >
              BOZO.WIN
            </h3>
            <div
              className="space-y-1 text-white opacity-90 font-bold text-[15px]
                          tracking-[0.9px] font-['Hanken_Grotesk']"
            >
              <p>
                site age: <span className="text-[#3AA0FF]">2 years</span>
              </p>
              <p>
                last update: <span className="text-[#3AA0FF]">2 days ago</span>
              </p>
              <p>
                site traffic: <span className="text-[#3AA0FF]">High</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Casino and Betting Cards */}
      <div className="w-full h-[200px] flex gap-0">
        {/* Casino Card */}
        <button
          onClick={() => setCurrentPage("games")}
          className="w-1/2 h-full rounded-l-[10px] bg-gradient-to-b from-[#2B4A71] to-[#3B80D7]
                   relative overflow-hidden hover:scale-[1.02] transition-transform group"
        >
          <div className="absolute left-4 top-10">
            <h3
              className="text-white text-[35px] font-bold tracking-[2.1px]
                         font-['Hanken_Grotesk'] mb-6"
            >
              Casino
            </h3>
            <div
              className="w-[125px] h-[50px] bg-[#3469B4] rounded-[5px] shadow-lg
                          flex items-center justify-center hover:bg-[#2A5490] transition-colors"
            >
              <span className="text-white text-xl font-bold font-['Hanken_Grotesk']">
                Open
              </span>
            </div>
          </div>

          {/* Casino Icon */}
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <g filter="url(#filter0_i_casino)">
                <path
                  d="M18.1818 50L27.2727 30V25H13.6364V30H22.7273L13.6364 50M36.3636 50L45.4545 30V25H31.8182V30H40.9091L31.8182 50M54.5455 50L63.6364 30V25H50V30H59.0909L50 50M90.9091 0C85.9091 0 81.8182 4.5 81.8182 10C81.8182 13.5 83.6364 17 86.3636 18.5V75H72.7273V65C75.4545 65 77.2727 63 77.2727 60V15C77.2727 12 75.4545 10 72.7273 10H55.4545C51.8182 4 45.4545 0 38.6364 0C31.8182 0 25.4545 4 21.8182 10H4.54545C1.81818 10 0 12 0 15V60C0 63 1.81818 65 4.54545 65V100H72.7273V85H86.3636C91.3636 85 95.4545 80.5 95.4545 75V18.5C98.1818 17 100 13.5 100 10C100 4.5 95.9091 0 90.9091 0ZM54.5455 85H22.7273V75H54.5455V85ZM68.1818 55H9.09091V20H68.1818V55Z"
                  fill="#223A5C"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_casino"
                  x="0"
                  y="0"
                  width="100"
                  height="101"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </button>

        {/* Betting Card */}
        <button
          onClick={() => setCurrentPage("sports")}
          className="w-1/2 h-full rounded-r-[10px] bg-gradient-to-b from-[#48ABAE] to-[#75F8FD]
                   relative overflow-hidden hover:scale-[1.02] transition-transform group"
        >
          <div className="absolute right-4 top-10 text-right">
            <h3
              className="text-white text-[35px] font-bold tracking-[2.1px]
                         font-['Hanken_Grotesk'] mb-6"
            >
              Betting
            </h3>
            <div
              className="w-[125px] h-[50px] bg-[#3469B4] rounded-[5px] shadow-lg
                          flex items-center justify-center hover:bg-[#2A5490] transition-colors ml-auto"
            >
              <span className="text-white text-xl font-bold font-['Hanken_Grotesk']">
                Open
              </span>
            </div>
          </div>

          {/* Betting Icon */}
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2">
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <g filter="url(#filter0_i_betting)">
                <path
                  d="M69.2857 0C71.06 0 72.5 1.3059 72.5 2.92357C72.5 5.64713 72.9693 10.0943 75.5343 13.7825C77.945 17.2414 82.4964 20.465 91.7857 20.465C93.56 20.465 95 21.7709 95 23.3885C94.9949 24.1655 94.654 24.9091 94.0518 25.4569C93.4495 26.0047 92.6349 26.3121 91.7857 26.3121C89.4136 26.3121 84.4571 27.6239 80.0857 30.6769C75.8236 33.6475 72.5 37.977 72.5 43.8535C72.4932 44.6295 72.1516 45.3716 71.5495 45.9181C70.9475 46.4646 70.1338 46.7712 69.2857 46.7712C68.4366 46.7712 67.6219 46.4638 67.0197 45.916C66.4174 45.3682 66.0765 44.6246 66.0714 43.8476C66.0714 40.9064 65.075 36.4299 62.1757 32.7651C59.3986 29.2592 54.7379 26.3121 46.7857 26.3121C45.9366 26.3121 45.1219 26.0047 44.5197 25.4569C43.9174 24.9091 43.5765 24.1655 43.5714 23.3885C43.5714 21.7709 45.0114 20.465 46.7857 20.465C50.0771 20.465 54.8536 20.4062 58.8264 18.3061C62.4521 16.3826 66.0714 12.3531 66.0714 2.92357C66.0714 1.3059 67.5114 0 69.2857 0Z"
                  fill="#4B8D8F"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_betting"
                  x="5"
                  y="0"
                  width="90"
                  height="101"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="3" />
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </button>
      </div>

      {/* Feed Section */}
      <div className="w-full min-h-[265px] bg-[#2A3B50] rounded-[10px] relative">
        {/* Feed Tabs */}
        <div className="w-full h-10 bg-[#27374D] rounded-t-[10px] flex">
          {["All", "High Wins", "Wins"].map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 h-full flex items-center justify-center text-white
                        text-xl font-bold font-['Hanken_Grotesk'] relative ${
                          activeTab === tab ? "" : "hover:bg-[#2A3B50]"
                        } transition-colors`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[5px] bg-[#3469B4] rounded-[10px]"></div>
              )}
            </button>
          ))}
        </div>

        {/* Feed Content */}
        <div className="p-4 space-y-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="w-full h-[50px] bg-[#4B6E8B] rounded-[10px] shadow-md
                                     flex items-center px-4 hover:bg-[#5A7D9A] transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#3469B4] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">P{item}</span>
                </div>
                <span className="text-white font-semibold">
                  {activeTab === "High Wins"
                    ? `Player${item} won $${(item * 1000).toLocaleString()}!`
                    : activeTab === "Wins"
                      ? `Player${item} won $${(item * 100).toLocaleString()}!`
                      : `Player${item} ${item % 2 === 0 ? "won" : "placed a bet on"} ${item % 3 === 0 ? "Slots" : item % 3 === 1 ? "Blackjack" : "Sports"}`}
                </span>
              </div>
              <div className="ml-auto text-[#5C7CA9] text-sm">
                {item} min ago
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Directory Section - Perfect 5-column layout */}
      <div className="w-full bg-[#2A3B50] rounded-[10px] p-6">
        <div className="grid grid-cols-5 gap-8 h-full">
          {Object.entries(directoryData).map(([category, data]) => (
            <div key={category} className="space-y-4">
              <h3
                className="text-white text-xl font-bold tracking-[1.2px]
                           font-['Hanken_Grotesk']"
              >
                {category}
              </h3>
              <div className="space-y-3">
                {data.items.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavigation(item)}
                    className="block text-[#3AA0FF] text-[15px] font-bold tracking-[0.9px]
                             font-['Hanken_Grotesk'] hover:text-white transition-colors text-left w-full"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
