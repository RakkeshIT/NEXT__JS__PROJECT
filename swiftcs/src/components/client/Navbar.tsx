"use client";
import Link from "next/link";
import { Menu, X, CircleUser, LogIn, Fullscreen } from "lucide-react";
import { useEffect, useState } from "react";
import Styles from '../styles/Navbar.module.css'
import gsap from "gsap";

export default function Navbar() {
    const [isopen, setIsopen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=> {
        const handleScroll = () => {
          if(window.scrollY > 10){
            setIsScrolled(true)
          }else{
            setIsScrolled(false)
          }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    useEffect(() => {
     if(isScrolled){
      gsap.to(".navbar", {
        y: 0,
        opacity: 1,
        duration: 0.5,
        ease: "power1.out",
      });
     }else{
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
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className=""
            >
              Home
            </Link>
            <Link
              href="/client/about/"
              className=""
            >
              About
            </Link>
            <Link
              href="/client/eventpage"
              className=""
            >
              Events Page
            </Link>
            <Link
              href="/client/results"
              className=""
            >
              Results
            </Link>
            <Link
              href="/admin/"
              className=""
            >
              Admin
            </Link>
            <Link
              href="/client/auth/register"
              className=""
            >
              <CircleUser/>
            </Link>
            <Link
              href="/client/auth/login"
              className=""
            >
              <LogIn/>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center "
            aria-label="Toggle Menu"
            onClick={toggleButton}
          >
            {isopen ? <X size={24}/> : <Menu size={24}/>}
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
              onClick={ () => setIsopen(false)}
            >
              Home
            </Link>
            <Link
              href="/client/about/"
              className=""
              onClick={ () => setIsopen(false)}
            >
              About
            </Link>
            <Link
              href="/client/eventpage"
              className=""
              onClick={ () => setIsopen(false)}
            >
              Events Page
            </Link>
            <Link
              href="/client/results"
              className=""
              onClick={ () => setIsopen(false)}
            >
              Results
            </Link>
            <Link
              href="/admin/"
              className=""
              onClick={ () => setIsopen(false)}
            >
              Admin
            </Link>
            <Link
              href="/client/auth/register"
              className=""
              onClick={ () => setIsopen(false)}
            >
              <CircleUser/>
            </Link>
            <Link
              href="/client/auth/login"
              className=""
              onClick={ () => setIsopen(false)}
            >
              <LogIn/>
            </Link>
         </div>
       </div>
     )}
    </nav>
  );
}
