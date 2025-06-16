import React, { createContext, useContext, useState, ReactNode } from "react";

type Page =
  | "home"
  | "games"
  | "sports"
  | "classics"
  | "trending"
  | "featured"
  | "esports"
  | "politics"
  | "financial"
  | "other"
  | "dashboard"
  | "referrals"
  | "statistics"
  | "forum"
  | "news"
  | "about"
  | "safety"
  | "settings"
  | "support"
  | "contact"
  | "not-found";

interface NavigationContextType {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  sidebarExpanded: boolean;
  setSidebarExpanded: (expanded: boolean) => void;
  chatOpen: boolean;
  setChatOpen: (open: boolean) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined,
);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [sidebarExpanded, setSidebarExpanded] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const value = {
    currentPage,
    setCurrentPage,
    sidebarExpanded,
    setSidebarExpanded,
    chatOpen,
    setChatOpen,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
