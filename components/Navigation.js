"use client";
import Link from "next/link";
import { useState } from "react";
import {
  Phone,
  Calculator,
  Users,
  BookOpen,
  HelpCircle,
  Building,
  Menu,
  X,
  MessageSquare,
  UserPlus,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-start gap-1 bg-[#E84855] py-1 lg:px-4 text-white">
        <Link href="#contact" className="flex items-center gap-2">
          <Button
            variant="secondary"
            size="sm"
            className="text-xs flex items-center gap-2"
          >
            <UserPlus className="h-5 w-5" />
            השאר פרטים
          </Button>
        </Link>

        <Link
          href="https://wa.me/972502492504"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <Button
            variant="secondary"
            size="sm"
            className="text-xs flex items-center gap-2"
          >
            <MessageSquare className="h-5 w-5" />
            שלח הודעה מיידית
          </Button>
        </Link>

        <Link href="tel:+972502492504" className="flex items-center gap-2">
          <Phone className="h-5 w-5" />
          <span className="text-xs">050-2492-504</span>
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="relative flex items-center justify-between py-4 px-4">
        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-600" />
          ) : (
            <Menu className="h-6 w-6 text-gray-600" />
          )}
        </button>

        <Link href="/" className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Fusion Accountants Logo"
            className="h-24 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden space-x-8 space-x-reverse md:flex">
          <Link
            href="/services"
            className="text-gray-600 hover:text-[#E84855] flex items-center gap-2"
          >
            <Calculator className="h-5 w-5" />
            שירותים
          </Link>
          <Link
            href="/who-we-help"
            className="text-gray-600 hover:text-[#E84855] flex items-center gap-2"
          >
            <Users className="h-5 w-5" />
            עסקים ושירותים
          </Link>
          <Link
            href="/help-advice"
            className="text-gray-600 hover:text-[#E84855] flex items-center gap-2"
          >
            <HelpCircle className="h-5 w-5" />
            עצות ומדריכים
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-[#E84855] flex items-center gap-2"
          >
            <Building className="h-5 w-5" />
            אודותינו
          </Link>
          <Link
            href="/prices"
            className="text-gray-600 hover:text-[#E84855] flex items-center gap-2"
          >
            <BookOpen className="h-5 w-5" />
            מחירון
          </Link>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-full right-0 w-full bg-white shadow-lg md:hidden z-50 transform transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div
            className={`flex flex-col items-start space-y-4 p-4 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-4"
            }`}
          >
            <Link
              href="/services"
              className="text-gray-600 hover:text-[#E84855] flex items-center gap-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Calculator className="h-5 w-5" />
              שירותים
            </Link>
            <Link
              href="/who-we-help"
              className="text-gray-600 hover:text-[#E84855] flex items-center gap-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Users className="h-5 w-5" />
              עסקים ושירותים
            </Link>
            <Link
              href="/help-advice"
              className="text-gray-600 hover:text-[#E84855] flex items-center gap-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HelpCircle className="h-5 w-5" />
              עצות ומדריכים
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:text-[#E84855] flex items-center gap-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Building className="h-5 w-5" />
              אודותינו
            </Link>
            <Link
              href="/prices"
              className="text-gray-600 hover:text-[#E84855] flex items-center gap-2 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              מחירון
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
