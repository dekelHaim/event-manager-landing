'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  return (
    <header className="fixed top-0 right-0 left-0 bg-white bg-opacity-90 shadow-md z-50">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo/Title */}
        <div className="text-xl font-semibold md:text-2xl">אירועים מושלמים</div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4 space-x-reverse">
          <li>
            <Link href="/#about" className="hover:text-primary transition-colors">
              עלי
            </Link>
          </li>
          <li>
            <Link href="/#events" className="hover:text-primary transition-colors">
              האירועים שלי
            </Link>
          </li>
          <li>
            <Link href="/#gallery" className="hover:text-primary transition-colors">
              גלריית תמונות
            </Link>
          </li>
          <li>
            <Link href="/#testimonials" className="hover:text-primary transition-colors">
              ממליצים
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-primary transition-colors">
              יצירת קשר
            </Link>
          </li>
        </ul>

        {/* Contact Button */}
        <Button asChild className="hidden md:inline-block">
          <Link href="/#contact">צור קשר</Link>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 border rounded"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation Links */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white space-y-2 px-4 py-2 text-center shadow-md">
          <li>
            <Link href="/#about" className="hover:text-primary transition-colors">
              עלי
            </Link>
          </li>
          <li>
            <Link href="/#events" className="hover:text-primary transition-colors">
              האירועים שלי
            </Link>
          </li>
          <li>
            <Link href="/#gallery" className="hover:text-primary transition-colors">
              גלריית תמונות
            </Link>
          </li>
          <li>
            <Link href="/#testimonials" className="hover:text-primary transition-colors">
              ממליצים
            </Link>
          </li>
          <li>
            <Link href="/#contact" className="hover:text-primary transition-colors">
              יצירת קשר
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}
