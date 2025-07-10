"use client";

import "../globals.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import DesktopSidebar from "@/components/DesktopSidebar";
import Header from "@/components/Header";
import MobileSidebar from "@/components/MobileSidebar";
import { LayoutDashboard, Analytics, Book, Sparkle, Bookmark, Settings } from "@/assests";

const sidebarItems = [
  { icon: LayoutDashboard, text: "Dashboard", href: "/dashboard" },
  {
    icon: Analytics,
    text: "Analysis",
    href: "/organizer/analysis",
  },
  {
    icon: Book,
    text: "News and Report",
    href: "/organizer/news-and-report",
  },

  {
    icon: Sparkle,
    text: "Exclusive Report",
    href: "/organizer/exclusive",
  },
  {
    icon: Bookmark,
    text: "WatchList",
    href: "/organizer/watchlist",
  },
  {
    icon: Settings,
    text: "Settings",
    href: "/organizer/setting",
  },
];

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarExpanded, setSidebarExpanded] = useState<boolean>(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSidebarExpanded(false);
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    if (isMobile) {
      setMobileMenuOpen(!mobileMenuOpen);
    } else {
      setSidebarExpanded(!sidebarExpanded);
    }
  };

  const isAuthPage = pathname?.includes("/admin/auth/");

  if (isAuthPage) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f5f5]">
        {children}
      </div>
    );
  }

  return (
    <div className="flex h-full min-h-screen gap-1 bg-[#262626] ">
      <DesktopSidebar
        sidebarExpanded={sidebarExpanded}
        sidebarItems={sidebarItems}
        toggleSidebar={toggleSidebar}
        pathname={pathname}
      />

      <MobileSidebar
        pathname={pathname}
        sidebarItems={sidebarItems}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      <div
        className={`flex-1 ${
          !sidebarExpanded ? "lg:ml-[120px]" : "lg:ml-[240px]"
        } transition-all duration-400 ease-in-out`}
      >
        <Header toggleSidebar={toggleSidebar} />

        <main className="min-h-[calc(100vh-64px)] overflow-y-auto p-4">
          {children}
        </main>
      </div>
    </div>
  );
}