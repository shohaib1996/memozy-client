"use client";

import Link from "next/link";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
// import { ModeToggle } from "../ModeToggle/ModeToggle";
import { AnimatedThemeToggler } from "../ui/animated-theme-toggler";
import logo from "../../../public/logo.png";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-sm z-50 ">
      <div className="border-b border-border py-3">
        <div className="flex items-center justify-between container mx-auto px-4">
          {/* Left side navigation */}

          <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <ul className="flex flex-col gap-6 mt-8 mx-3 font-outfit">
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.memozy.ai/how-to-use-memozy.html"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      How to use Memozy
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://app.memozy.ai/?_gl=1*p17y2l*_gcl_au*MjAxMDA4MTc1My4xNzYwMDcyOTQ4*_ga*MTIwODMwOTMzNC4xNzYwMDcyOTQ4*_ga_EJ2RK3CM1T*czE3NjAxMjE2NDckbzgkZzEkdDE3NjAxMjE2NzQkajMzJGwwJGgw#/login"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Web App
                    </Link>
                  </li>
                  <li>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://versusly.ai/"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Versusly AI
                    </Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
            <Link
              href="/"
              className="font-semibold text-lg hover:text-primary transition-colors font-outfit flex items-center gap-2"
            >
              <Image
                src={logo}
                alt="logo"
                width={30}
                height={30}
                className="animate-pulse"
              />
              Memozy
            </Link>
            <ul className="hidden md:flex items-center gap-6 font-outfit">
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.memozy.ai/how-to-use-memozy.html"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  How to use Memozy
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://app.memozy.ai/?_gl=1*p17y2l*_gcl_au*MjAxMDA4MTc1My4xNzYwMDcyOTQ4*_ga*MTIwODMwOTMzNC4xNzYwMDcyOTQ4*_ga_EJ2RK3CM1T*czE3NjAxMjE2NDckbzgkZzEkdDE3NjAxMjE2NzQkajMzJGwwJGgw#/login"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Web App
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://versusly.ai/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Versusly AI
                </Link>
              </li>
            </ul>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* <ModeToggle/> */}
            <AnimatedThemeToggler />
          </div>
        </div>
      </div>
    </nav>
  );
}
