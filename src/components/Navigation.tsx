"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

interface NavigationProps {
  currentPage: 'home' | 'instructions' | 'privacy' | 'terms'
}

export default function Navigation({ currentPage }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const getLinkClass = (page: string) => {
    const baseClass = "font-medium py-2 px-3 rounded-lg transition-colors"
    const isActive = currentPage === page
    
    if (isActive) {
      return `text-blue-600 ${baseClass} bg-blue-50`
    }
    
    return `text-gray-600 hover:text-blue-600 ${baseClass} hover:bg-gray-50`
  }

  return (
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
            <Link href="/" className={currentPage === 'home' ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600 font-medium"}>
              Home
            </Link>
            <Link href="/instructions" className={currentPage === 'instructions' ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600 font-medium"}>
              Instructions
            </Link>
            <Link href="/privacy" className={currentPage === 'privacy' ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600 font-medium"}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={currentPage === 'terms' ? "text-blue-600 font-medium" : "text-gray-600 hover:text-blue-600 font-medium"}>
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
                className={getLinkClass('home')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/instructions" 
                className={getLinkClass('instructions')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Instructions
              </Link>
              <Link 
                href="/privacy" 
                className={getLinkClass('privacy')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className={getLinkClass('terms')}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
