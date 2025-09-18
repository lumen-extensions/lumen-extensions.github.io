"use client"

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Code, Shield, Zap, Users, Menu, X } from "lucide-react"
import { useState } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen extension-bg">
      {/* Header */}
      <header className="no-print py-6 border-b border-gray-200 bg-white">
        <div className="container">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">LE</span>
                </div>
                <h1 className="text-xl font-bold extension-text">Lumen Extensions</h1>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-blue-600 font-medium">
                Home
              </Link>
              <Link href="/instructions" className="text-gray-600 hover:text-blue-600 font-medium">
                Instructions
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-blue-600 font-medium">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-600 hover:text-blue-600 font-medium">
                Terms of Service
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-600" />
              ) : (
                <Menu className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </nav>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className="text-blue-600 font-medium py-2 px-3 rounded-lg bg-blue-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/instructions" 
                  className="text-gray-600 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Instructions
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-gray-600 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-gray-600 hover:text-blue-600 font-medium py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12">
        <div className="container">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold extension-text mb-4">Lumen Extensions</h1>
            <p className="text-xl text-gray-600 mb-8">Professional browser extension development</p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              We create smart and user-friendly Chrome extensions that save you time and make your browser work faster and easier.
            </p>
          </div>


          {/* Key Features Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold extension-text text-center mb-8">Why Choose Our Extensions</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold extension-text mb-3">Reliable</h3>
                <p className="text-gray-600">
                  Built with modern web technologies and thoroughly tested across browsers and platforms — so you can count on them every time.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold extension-text mb-3">Purposeful</h3>
                <p className="text-gray-600">
                  Each extension is designed to solve one clear task — no bloat, no distractions, just what you need.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold extension-text mb-3">Continuously Improving</h3>
                <p className="text-gray-600">
                  We ship regular updates and evolve features based on real user feedback — your experience drives our development.
                </p>
              </Card>
            </div>
          </div>

          {/* Featured Extension Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold extension-text text-center mb-8">Featured Extension</h2>

            <Card className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Extension Icon */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                    <Image 
                      src="/icons/invoice-pro-icon.png" 
                      alt="Invoice Pro Extension Icon"
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Extension Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold extension-blue mb-3">Invoice Pro - Generator & Maker</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Quickly create, edit, and save invoices right in your browser. Perfect for freelancers, entrepreneurs, and small businesses. 
                    No sign-up, no clutter — just the features you need.
                  </p>

                  {/* Download Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button asChild className="bg-blue-600 hover:bg-blue-700">
                      <a href="#" className="flex items-center gap-3">
                        <Globe className="w-5 h-5" />
                        Chrome Web Store
                      </a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="/instructions" className="flex items-center gap-3">
                        <Code className="w-5 h-5" />
                        Installation Guide
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="no-print bg-white border-t border-gray-200 py-8 mt-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">LE</span>
              </div>
              <span className="text-gray-600">© 2024 Lumen Extensions</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/instructions" className="text-gray-500 hover:text-blue-600 text-sm">
                Instructions
              </Link>
              <Link href="/privacy" className="text-gray-500 hover:text-blue-600 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 hover:text-blue-600 text-sm">
                Terms of Service
              </Link>
              <span className="text-gray-400 text-sm">Made with ❤️ for developers</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}