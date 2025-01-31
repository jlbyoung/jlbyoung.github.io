"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Search, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useRouter } from "next/navigation";
function SiteHeader() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50  border-none rounded-full w-50 py-5 px-4">
      <nav className=" top-0 z-50 container backdrop-blur mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-16 border-slate-900 rounded-full border shadow-xl border-gray-800">
        <div className="flex items-center justify-start">
          <Avatar>
            <AvatarImage src="https://github.com/jlbyoung.png" />
            <AvatarFallback>JY2</AvatarFallback>
          </Avatar>

          <div className="flex items-center ml-5">James Young</div>
          <div className="hidden md:flex ml-5 space-x-4">
            {/* <Link
              href="#components"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Components
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Showcase
            </Link> */}
          </div>
        </div>{" "}
        <div className="flex ml-auto items-center space-x-4">
          <a href="https://github.com/jlbyoung">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
          <Button
            variant="default"
            onClick={() => router.push("mailto:imjamesyoung@gmail.com")}
          >
            Get In Touch
          </Button>
        </div>
      </nav>
    </header>
  );
}

export default SiteHeader;
