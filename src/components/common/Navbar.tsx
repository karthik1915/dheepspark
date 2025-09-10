"use client";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";

export function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/about",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Courses Offered",
      link: "/courses",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full py-4">
        <ResizableNavbar className="">
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div>
              <NavbarButton
                variant="primary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfYneau6J4xoSYnXoY2umMxXMt7TA2G4LLfVCbX1SFARD-dfA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>

            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <Link
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </Link>
              ))}
              <NavbarButton
                variant="primary"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfYneau6J4xoSYnXoY2umMxXMt7TA2G4LLfVCbX1SFARD-dfA/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Us
              </NavbarButton>
            </MobileNavMenu>
          </MobileNav>
        </ResizableNavbar>
      </div>
    </div>
  );
}
