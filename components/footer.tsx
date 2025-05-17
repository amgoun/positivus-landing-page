"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Linkedin, Facebook, Twitter } from "lucide-react"
import Image from "next/image"
export function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Subscribed with email:", email)
    alert("Thank you for subscribing to our newsletter!")
    setEmail("")
  }

  return (
    <footer className="w-full py-12 px-4 md:px-8 lg:px-16 text-white bg-dark rounded-t-[45px] container mx-auto">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
          <div className="mb-8 lg:mb-0">
            <Link href="/" className="inline-block mb-4">
              <div className="flex items-center">
                <Image src="/logo-light.svg"
                 alt="Positivus" 
                 width={150} height={50} />
              </div>
            </Link>
          </div>

          <div className="flex flex-wrap gap-8 mb-8 lg:mb-0">
            <Link href="/about" className="text-white hover:text-neon transition-colors">
              About us
            </Link>
            <Link href="/services" className="text-white hover:text-neon transition-colors">
              Services
            </Link>
            <Link href="/use-cases" className="text-white hover:text-neon transition-colors">
              Use Cases
            </Link>
            <Link href="/pricing" className="text-white hover:text-neon transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-white hover:text-neon transition-colors">
              Blog
            </Link>
          </div>

          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-neon transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-white hover:text-neon transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-white hover:text-neon transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-8 border-t border-gray-800">
          <div>
            <div className="inline-block bg-neon px-3 py-1 text-dark font-medium mb-4 rounded-lg">Contact us:</div>
            <div className="space-y-2">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>Address: 1234 Main St</p>
              <p>Moonstone City, Stardust State 12345</p>
            </div>
          </div>

          <div className="lg:flex lg:justify-end">
            <div className="w-full lg:w-[600px] bg-white/5 py-4 px-8 rounded-xl flex items-center justify-center min-h-[120px]">
              <form onSubmit={handleSubscribe} className="flex flex-col lg:flex-row items-center gap-6 w-full">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full flex-1 px-6 py-3 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:border-neon text-base"
                />
                <button
                  type="submit"
                  className="w-full lg:w-auto whitespace-nowrap bg-neon text-dark px-8 py-3 rounded-md hover:bg-neon/90 transition-colors text-base font-medium"
                >
                  Subscribe to news
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">© 2023 Positivus. All Rights Reserved.</p>
          <Link href="/privacy-policy" className="text-gray-400 hover:text-neon transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
