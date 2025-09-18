import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Monitor, Smartphone, Laptop, Code, Shield, Zap, Users } from "lucide-react"

export default function HomePage() {
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
            <div className="flex items-center space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium">
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
          </nav>
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
              We specialize in creating powerful, secure, and user-friendly browser extensions for Chrome, Firefox, Safari, and Edge. 
              Our extensions enhance productivity, streamline workflows, and provide seamless user experiences across all major browsers.
            </p>
          </div>

          {/* Browser Support Section */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-2xl font-bold extension-text text-center mb-8">Supported Browsers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Globe className="w-12 h-12 text-blue-500 mb-2" />
                <span className="font-medium">Chrome</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Monitor className="w-12 h-12 text-orange-500 mb-2" />
                <span className="font-medium">Firefox</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Smartphone className="w-12 h-12 text-blue-600 mb-2" />
                <span className="font-medium">Safari</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm">
                <Laptop className="w-12 h-12 text-blue-700 mb-2" />
                <span className="font-medium">Edge</span>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold extension-text text-center mb-8">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold extension-text mb-3">Custom Development</h3>
                <p className="text-gray-600">
                  Tailored browser extensions built from scratch to meet your specific requirements and business needs.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold extension-text mb-3">Security & Compliance</h3>
                <p className="text-gray-600">
                  Secure extensions that comply with browser store policies and industry security standards.
                </p>
              </Card>
              <Card className="p-6 text-center">
                <Zap className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold extension-text mb-3">Performance Optimization</h3>
                <p className="text-gray-600">
                  Fast, lightweight extensions optimized for speed and minimal resource consumption.
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
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Extension Info */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold extension-blue mb-3">Productivity Pro</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    A comprehensive productivity extension that helps you manage tasks, track time, and stay focused. 
                    Features include tab management, distraction blocking, and seamless integration with popular productivity tools.
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
                      <a href="#" className="flex items-center gap-3">
                        <Monitor className="w-5 h-5" />
                        Firefox Add-ons
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* About Section */}
          <div className="max-w-3xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-bold extension-text mb-6">About Lumen Extensions</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lumen Extensions is a specialized development studio focused on creating high-quality browser extensions 
              that solve real-world problems and enhance user productivity.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team combines deep technical expertise with user-centered design to deliver extensions that are not only 
              powerful and reliable, but also intuitive and enjoyable to use. We believe in the power of browser extensions 
              to transform how people work and interact with the web.
            </p>
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