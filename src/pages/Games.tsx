import React, { useState } from "react";

const gamesList = [
  "MINES",
  "CRASH",
  "DICE",
  "TOWERS",
  "PLINKO",
  "ROULETTE",
  "LIMBO",
  "COINFLIP",
  "WHEEL",
  "KENO",
  "SLIDE",
  "BLACKJACK",
  "ROCK PAPER SCISSORS",
  "CASES",
  "CUPS",
  "POKER",
  "BACCARAT",
  "CROSSY",
];

export function Games() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredGames = gamesList.filter((game) =>
    game.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="flex justify-center items-start min-h-screen bg-[#27374D] p-5">
      <div className="flex flex-col items-center gap-[5px] w-full max-w-[1080px]">
        {/* Page Title */}
        <div className="flex h-[50px] p-1 items-center self-stretch rounded-[10px] relative mb-4">
          <h1 className="font-['Hanken_Grotesk'] font-bold text-[30px] text-white flex w-[335px] h-[41px] flex-col justify-center text-shadow-[0px_4px_rgba(0,0,0,0.25)] leading-normal">
            Browse all casino games
          </h1>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex h-[50px] justify-center items-start gap-[10px] self-stretch rounded-[10px] relative mb-[15px]">
          {/* Search Input */}
          <div className="relative flex-1 max-w-[800px]">
            <input
              type="text"
              placeholder="Search games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-[50px] px-[14px] pr-[140px] bg-[#233040] border-none rounded-[10px] text-white placeholder-[#5C7CA9] font-['Hanken_Grotesk'] focus:outline-none focus:ring-2 focus:ring-[#3AA0FF] shadow-[0px_0px_4px_1px_rgba(0,0,0,0.25)_inset]"
            />
            <div className="absolute right-[5px] top-[9px] flex items-center gap-2 bg-[#233040] px-2 rounded">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="opacity-60"
              >
                <path
                  d="M11.835 23.67C8.52726 23.67 5.72814 22.5241 3.43761 20.2324C1.14708 17.9406 0.00121481 15.1415 9.63369e-07 11.835C-0.00121288 8.52848 1.14466 5.72935 3.43761 3.43761C5.73056 1.14587 8.52969 0 11.835 0C15.1403 0 17.94 1.14587 20.2342 3.43761C22.5284 5.72935 23.6736 8.52848 23.67 11.835C23.67 13.1702 23.4576 14.4296 23.0327 15.6131C22.6079 16.7966 22.0313 17.8435 21.303 18.7539L31.4993 28.9502C31.8331 29.284 32 29.7089 32 30.2247C32 30.7406 31.8331 31.1655 31.4993 31.4993C31.1655 31.8331 30.7406 32 30.2247 32C29.7089 32 29.284 31.8331 28.9502 31.4993L18.7539 21.303C17.8435 22.0313 16.7966 22.6079 15.6131 23.0327C14.4296 23.4576 13.1702 23.67 11.835 23.67ZM11.835 20.0284C14.111 20.0284 16.0458 19.2322 17.6396 17.6396C19.2334 16.047 20.0297 14.1122 20.0285 11.835C20.0272 9.55782 19.231 7.62356 17.6396 6.0322C16.0483 4.44085 14.1134 3.64396 11.835 3.64154C9.55661 3.63911 7.62234 4.436 6.03221 6.0322C4.44207 7.62841 3.64518 9.56267 3.64154 11.835C3.6379 14.1073 4.43479 16.0422 6.03221 17.6396C7.62963 19.237 9.56389 20.0333 11.835 20.0284Z"
                  fill="#5C7CA9"
                />
              </svg>
              <span className="font-['Hanken_Grotesk'] font-bold text-[20px] text-white">
                Search
              </span>
            </div>
          </div>

          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex h-[50px] px-[14px] justify-end items-start gap-2 bg-[#233040] rounded-[10px] min-w-[130px] hover:bg-[#2A3B50] transition-colors"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="mt-[9px]"
            >
              <path
                opacity="0.6"
                d="M19.1245 15.9978V30.0048C19.197 30.5381 19.0158 31.1069 18.5989 31.4802C18.4313 31.645 18.2321 31.7757 18.0129 31.8649C17.7937 31.9541 17.5587 32 17.3213 32C17.084 32 16.8489 31.9541 16.6297 31.8649C16.4105 31.7757 16.2113 31.645 16.0437 31.4802L12.4011 27.9073C12.2035 27.7177 12.0533 27.4859 11.9621 27.23C11.871 26.9741 11.8413 26.701 11.8755 26.432V15.9978H11.8211L1.38258 2.87961C1.08829 2.50905 0.955494 2.03929 1.01322 1.573C1.07095 1.1067 1.3145 0.681768 1.69066 0.391058C2.03499 0.142203 2.41556 0 2.81426 0H28.1857C28.5844 0 28.965 0.142203 29.3093 0.391058C29.6855 0.681768 29.929 1.1067 29.9868 1.573C30.0445 2.03929 29.9117 2.50905 29.6174 2.87961L19.1789 15.9978H19.1245Z"
                fill="#5C7CA9"
              />
            </svg>
            <span className="font-['Hanken_Grotesk'] font-bold text-[20px] text-white mt-[9px]">
              Filters
            </span>
          </button>
        </div>

        {/* Filter Options (if visible) */}
        {showFilters && (
          <div className="w-full bg-[#233040] rounded-[10px] p-4 mb-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-white font-bold mb-2">
                  Category
                </label>
                <select className="w-full bg-[#1B2736] text-white rounded px-3 py-2">
                  <option>All Games</option>
                  <option>Card Games</option>
                  <option>Dice Games</option>
                  <option>Arcade Games</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-bold mb-2">
                  Difficulty
                </label>
                <select className="w-full bg-[#1B2736] text-white rounded px-3 py-2">
                  <option>All Levels</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-bold mb-2">
                  Players
                </label>
                <select className="w-full bg-[#1B2736] text-white rounded px-3 py-2">
                  <option>Any</option>
                  <option>Single Player</option>
                  <option>Multiplayer</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Games Grid */}
        <div className="grid grid-cols-5 gap-[10px] w-full max-w-[1080px] justify-center">
          {filteredGames.map((game, index) => (
            <div
              key={index}
              className="flex w-[208px] h-[256px] flex-col justify-end items-center bg-[#5C7CA9] rounded-[10px] relative cursor-pointer hover:bg-[#4A6A94] transition-colors group"
            >
              {/* Game content/icon area */}
              <div className="flex-1 w-full rounded-t-[10px] bg-gradient-to-b from-[#6B8BB3] to-[#5C7CA9] group-hover:from-[#5A7EA0] group-hover:to-[#4A6A94] transition-all duration-300"></div>

              {/* Game title */}
              <div className="flex items-center justify-center p-4 w-full h-[76px]">
                <h3
                  className={`font-['Hanken_Grotesk'] font-bold text-white text-center leading-none ${
                    game.length > 10 ? "text-[35px]" : "text-[40px]"
                  }`}
                >
                  {game}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[10px] flex items-center justify-center">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-[10px] px-6 py-3">
                  <span className="text-white font-bold text-lg">Play Now</span>
                </div>
              </div>
            </div>
          ))}

          {/* Add empty slots if needed to fill the grid */}
          {Array.from({ length: Math.max(0, 20 - filteredGames.length) }).map(
            (_, index) => (
              <div
                key={`empty-${index}`}
                className="w-[208px] h-[256px] bg-[#2A3B50] rounded-[10px] border-2 border-dashed border-[#5C7CA9] flex items-center justify-center opacity-50"
              >
                <span className="text-[#5C7CA9] font-bold">Coming Soon</span>
              </div>
            ),
          )}
        </div>

        {/* No results message */}
        {searchQuery && filteredGames.length === 0 && (
          <div className="text-center py-8">
            <p className="text-[#5C7CA9] text-xl">
              No games found matching "{searchQuery}"
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-[#3AA0FF] hover:text-white mt-2 underline"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Games;
