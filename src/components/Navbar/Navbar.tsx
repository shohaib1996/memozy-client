"use client";

import Link from "next/link";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "../ModeToggle/ModeToggle";

export function FloatingNavbar() {
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
                <div className="flex flex-col gap-6 mt-8 mx-3">
                  <Link
                    href="/how-to-use"
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    How to use Memozy
                  </Link>
                  <Link
                    href="/web-app"
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Web App
                  </Link>
                  <Link
                    href="/versusly-ai"
                    className="text-lg text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Versusly AI
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
            <Link
              href="/"
              className="font-semibold text-lg hover:text-primary transition-colors"
            >
              Memozy
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="https://www.memozy.ai/how-to-use-memozy.html"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                How to use Memozy
              </Link>
              <Link
                href="/web-app"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Web App
              </Link>
              <Link
                href="/versusly-ai"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Versusly AI
              </Link>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Link
              href="/memozy"
              className="hidden md:block text-sm font-medium hover:text-primary transition-colors"
            >
              Memozy
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
