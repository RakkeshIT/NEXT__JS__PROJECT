"use client";
import Link from "next/link";
import { Menu, X, CircleUser, LogIn, Fullscreen } from "lucide-react";
import { useEffect, useState } from "react";
import Styles from '../styles/Navbar.module.css'
import gsap from "gsap";

export default function Navbar() {
  const [isopen, setIsopen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  useEffect(() => {
    if (isScrolled) {
      gsap.to(".navbar", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      });
    } else {
      gsap.to(".navbar", {
        y: -10,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [isScrolled]);
  const toggleButton = () => {
    setIsopen(!isopen)
  }
  return (
    <nav className={`${Styles.navbar} navbar ${isScrolled ? Styles.scrolled : ''}`}>
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className={`text-xl font-bold ${Styles.Siwft}`}>
            Swift
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center">
           <div className="flex items-center gap-6">
             <Link
              href="/"
              className={`${isScrolled ? Styles.scrolled : ''}${Styles.MenuLinks} hover:underline hover:text-yellow-200 hover:transition-all hover:duration-200 hover:decoration-yellow-200`}
            >
              Home
            </Link>
            <Link
              href="/client/about/"
              className={`${isScrolled ? Styles.scrolled : ''}${Styles.MenuLinks} hover:underline hover:text-yellow-200 hover:transition-all hover:duration-200 hover:decoration-yellow-200`}
            >
              About
            </Link>
            <Link
              href="/client/eventpage"
              className={`${isScrolled ? Styles.scrolled : ''}${Styles.MenuLinks} hover:underline hover:text-yellow-200 hover:transition-all hover:duration-200 hover:decoration-yellow-200`}
            >
              Events Page
            </Link>
            <Link
              href="/client/results"
              className={`${isScrolled ? Styles.scrolled : ''}${Styles.MenuLinks} hover:underline hover:text-yellow-200 hover:transition-all hover:duration-200 hover:decoration-yellow-200`}
            >
              Results
            </Link>
            <Link
              href="/admin/"
              className={`${isScrolled ? Styles.scrolled : ''}${Styles.MenuLinks} hover:underline hover:text-yellow-200 hover:transition-all hover:duration-200 hover:decoration-yellow-200`}
            >
              Admin
            </Link>
           </div>
           <div className="flex items-center gap-2">
             <Link
              href="/client/auth/register"
              className={`relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800 `}
            >
              <span className="relative px-5 py-0.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                Register
              </span>
            </Link>
            <Link
              href="/client/auth/login"
              className=" text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-1 text-center me-2 mb-2"
            >
              🤵 Login
            </Link>
           </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center "
            aria-label="Toggle Menu"
            onClick={toggleButton}
          >
            {isopen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isopen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-2 px-4 py-2" >
            <Link
              href="/"
              className=""
              onClick={() => setIsopen(false)}
            >
              Home
            </Link>
            <Link
              href="/client/about/"
              className=""
              onClick={() => setIsopen(false)}
            >
              About
            </Link>
            <Link
              href="/client/eventpage"
              className=""
              onClick={() => setIsopen(false)}
            >
              Events Page
            </Link>
            <Link
              href="/client/results"
              className=""
              onClick={() => setIsopen(false)}
            >
              Results
            </Link>
            <Link
              href="/admin/"
              className=""
              onClick={() => setIsopen(false)}
            >
              Admin
            </Link>
            <Link
              href="/client/auth/register"
              className=""
              onClick={() => setIsopen(false)}
            >
              <CircleUser />
            </Link>
            <Link
              href="/client/auth/login"
              className=""
              onClick={() => setIsopen(false)}
            >
              <LogIn />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
