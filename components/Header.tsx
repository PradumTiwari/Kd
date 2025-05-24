"use client";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Home", link: "#" },
  { name: "Products", link: "#" },
  { name: "Pricing", link: "#" },
  { name: "Resources", link: "#" },
  { name: "Blog", link: "#" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="top-0">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center space-x-2">
          <NavbarButton variant="secondary" href="#">
            Log In
          </NavbarButton>
          <NavbarButton variant="gradient" href="#" className="hidden lg:inline-block">
            Book a Free Demo
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>
        
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="block w-full px-2 py-2 text-neutral-600 dark:text-neutral-300"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full flex-col space-y-2 pt-4">
            <NavbarButton variant="secondary" href="#" className="w-full">
              Log In
            </NavbarButton>
            <NavbarButton variant="gradient" href="#" className="w-full">
              Book a Free Demo
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}