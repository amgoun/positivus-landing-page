"use client"

import type React from "react"

import { useState } from "react"
import { SectionHeader } from "@/components/ui/section-header"
import Image from "next/image"
export function ContactUs() {
  const [formType, setFormType] = useState("say-hi")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section className="w-full py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="mb-6">
          
          <SectionHeader
          title="Contact Us"
          description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
        />
        </div>

        <div className="bg-light rounded-[45px] p-8 md:p-10 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3">
              <div className="flex space-x-6 mb-8">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="form-type"
                    value="say-hi"
                    checked={formType === "say-hi"}
                    onChange={() => setFormType("say-hi")}
                    className="sr-only"
                  />
                  <span
                    className={`w-5 h-5 rounded-full border-2 border-dark flex items-center justify-center mr-2 ${
                      formType === "say-hi" ? "bg-neon" : "bg-transparent"
                    }`}
                  >
                    {formType === "say-hi" && <span className="w-2 h-2 rounded-full bg-dark"></span>}
                  </span>
                  <span>Say Hi</span>
                </label>

                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="form-type"
                    value="get-quote"
                    checked={formType === "get-quote"}
                    onChange={() => setFormType("get-quote")}
                    className="sr-only"
                  />
                  <span
                    className={`w-5 h-5 rounded-full border-2 border-dark flex items-center justify-center mr-2 ${
                      formType === "get-quote" ? "bg-neon" : "bg-transparent"
                    }`}
                  >
                    {formType === "get-quote" && <span className="w-2 h-2 rounded-full bg-dark"></span>}
                  </span>
                  <span>Get a Quote</span>
                </label>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-dark"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-dark"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-dark"
                    placeholder="Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-dark text-white py-4 rounded-md hover:bg-dark/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            <div className="lg:col-span-2 relative hidden lg:block">
              <div className="absolute inset-0">
                <div className="relative h-full w-full">
                  {/* Star decoration */}
                  <div className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                    <div className="relative">
                      <div className="absolute inset-0 h-[500px] w-[500px]">
                        <Image src="/Illustration-contact.svg"
                         alt="Contact illustration" 
                         fill className="object-contain  translate-x-[15px]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
