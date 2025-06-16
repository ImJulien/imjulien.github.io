import React, { useState } from "react";
import { NavigationProvider, useNavigation } from "./context/NavigationContext";
import Header from "./components/layout/Header";
import { SidebarExpander } from "./components/layout/SidebarExpander";
import { Sidebar } from "./components/layout/Sidebar";
import { Chat } from "./components/layout/Chat";
import Index from "./pages/Index";
import Games from "./pages/Games";
import NotFound from "./pages/NotFound";
import "./App.css";

function AppContent() {
  const {
    currentPage,
    sidebarExpanded,
    setSidebarExpanded,
    chatOpen,
    setChatOpen,
  } = useNavigation();

  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Index />;
      case "games":
      case "classics":
      case "trending":
      case "featured":
        return <Games />;
      case "sports":
      case "esports":
      case "politics":
      case "financial":
      case "other":
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <h2 className="text-white text-2xl font-bold mb-4">
                Coming Soon
              </h2>
              <p className="text-[#5C7CA9] text-lg">
                This section is under development
              </p>
            </div>
          </div>
        );
      case "dashboard":
      case "referrals":
      case "statistics":
      case "forum":
      case "news":
      case "about":
      case "safety":
      case "settings":
      case "support":
      case "contact":
        return (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <h2 className="text-white text-2xl font-bold mb-4 capitalize">
                {currentPage}
              </h2>
              <p className="text-[#5C7CA9] text-lg">
                This section is under development
              </p>
            </div>
          </div>
        );
      default:
        return <NotFound />;
    }
  };

  return (
    <div className="min-h-screen bg-[#27374D] text-white font-['Hanken_Grotesk']">
      {/* Sidebar Expander */}
      <SidebarExpander expanded={sidebarExpanded} onToggle={toggleSidebar} />

      {/* Header */}
      <Header onChatToggle={toggleChat} />

      {/* Sidebar */}
      <Sidebar expanded={sidebarExpanded} onToggle={toggleSidebar} />

      {/* Chat */}
      <Chat isOpen={chatOpen} onToggle={toggleChat} />

      {/* Main Content - Simple responsive with minimal margins */}
      <main
        className={`transition-all duration-300 ease-in-out pt-[69px] ${
          sidebarExpanded ? "ml-[250px]" : "ml-[66px]"
        } ${chatOpen ? "mr-[250px]" : "mr-0"}`}
      >
        <div className="min-h-[calc(100vh-69px)] px-1">
          <div className="w-full min-w-0 max-w-none">{renderPage()}</div>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}

export default App;
