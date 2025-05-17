"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="w-full py-4 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center ">
            <Image src="/logo.svg" alt="Positivus Logo" width={140} height={32} className=" w-auto" />
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 font-normal text-xl">
            <Link href="/about" className=" hover:text-neon transition-colors">
              About Us
            </Link>
            <Link href="/services" className=" hover:text-neon transition-colors">
              Services
            </Link>
            <Link href="/use-cases" className=" hover:text-neon transition-colors">
              Use Cases
            </Link>
            <Link href="/pricing" className=" hover:text-neon transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className=" hover:text-neon transition-colors">
              Blog
            </Link>
            <Button
              variant="outline"
              className=" font-normal text-xl px-[30px] py-[25px] border-dark text-dark hover:bg-dark hover:text-white transition-colors rounded-[14px] "
            >
              <Link href="/contact">
              Request a Quote
              </Link>
            </Button>
          </nav>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/about"
                className="text-sm font-medium hover:text-neon transition-colors"
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium hover:text-neon transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                href="/use-cases"
                className="text-sm font-medium hover:text-neon transition-colors"
                onClick={toggleMenu}
              >
                Use Cases
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium hover:text-neon transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-neon transition-colors" onClick={toggleMenu}>
                Blog
              </Link>

              <Link href="/contact">
              <Button
                variant="outline"
                className="border-dark text-dark hover:bg-dark hover:text-white transition-colors w-full "
                
              >
 
                Request a Quote

              </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
