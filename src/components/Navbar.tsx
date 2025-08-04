"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveLink = (href) => {
    return pathname === href;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/whoweare", label: "Who We Are" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contactus", label: "Contact Us" },
  ];

  return (
    <>
      <div
        className={`flex flex-row justify-center w-full h-auto overflow-hidden fixed top-0 z-50 ${
          isScrolled ? "bg-[#0e0e0e4d]" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h3 className="font-neue">EvryTec</h3>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-row gap-8">
            {navLinks.map((link) => (
              <span
                key={link.href}
                className={`font-neue text-sm font-light transition-colors duration-200 ${
                  isActiveLink(link.href)
                    ? "text-[#7153e9] font-medium"
                    : "text-white hover:text-[#7153e9]"
                }`}
              >
                <Link href={link.href}>{link.label}</Link>
              </span>
            ))}
          </div>

          {/* Desktop Button */}
          <Button className="hidden md:block bg-gradient-to-r from-[#7153e9] via-[#8d5ff6] to-[#93b1f0] font-neue relative reflect overflow-hidden cursor-pointer">
            start building today
          </Button>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <label className="hamburger">
              <input
                type="checkbox"
                checked={isMobileMenuOpen}
                onChange={toggleMobileMenu}
              />
              <svg viewBox="0 0 32 32">
                <path
                  className="line line-top-bottom"
                  d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                ></path>
                <path className="line" d="M7 16 27 16"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#0e0e0e] z-40 transition-transform duration-300 transform ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map((link) => (
            <span
              key={link.href}
              className={`font-neue text-xl font-light transition-colors duration-200 ${
                isActiveLink(link.href)
                  ? "text-[#7153e9] font-medium"
                  : "text-white hover:text-[#7153e9]"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href={link.href}>{link.label}</Link>
            </span>
          ))}
          <Button
            className="bg-gradient-to-r from-[#7153e9] via-[#8d5ff6] to-[#93b1f0] font-neue relative reflect overflow-hidden cursor-pointer mt-8"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            start building today
          </Button>
        </div>
      </div>

      <style jsx>{`
        .hamburger {
          cursor: pointer;
        }

        .hamburger input {
          display: none;
        }

        .hamburger svg {
          height: 3em;
          transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line {
          fill: none;
          stroke: white;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-width: 3;
          transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
            stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
        }

        .line-top-bottom {
          stroke-dasharray: 12 63;
        }

        .hamburger input:checked + svg {
          transform: rotate(-45deg);
        }

        .hamburger input:checked + svg .line-top-bottom {
          stroke-dasharray: 20 300;
          stroke-dashoffset: -32.42;
        }
      `}</style>
    </>
  );
};

export default Navbar;
