import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Globe, Monitor, Smartphone, Laptop, Download, Settings, Shield, HelpCircle } from "lucide-react"

export const metadata = {
  title: "Installation Instructions - Lumen Extensions",
  description: "Step-by-step instructions for installing Lumen Extensions browser extensions.",
}

export default function InstructionsPage() {
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
              <Link href="/instructions" className="text-blue-600 font-medium">
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
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold extension-text mb-4">Installation Instructions</h1>
              <p className="text-lg text-gray-600">
                Follow these step-by-step instructions to install our browser extensions
              </p>
            </div>

            {/* Chrome Instructions */}
            <Card className="p-8 mb-8">
              <div className="flex items-center mb-6">
                <Globe className="w-8 h-8 text-blue-500 mr-3" />
                <h2 className="text-2xl font-bold extension-text">Google Chrome</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Download the Extension</h3>
                    <p className="text-gray-600">Click the "Add to Chrome" button on the Chrome Web Store or download the .crx file from our website.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enable Developer Mode</h3>
                    <p className="text-gray-600">Open Chrome and go to <code className="bg-gray-100 px-2 py-1 rounded">chrome://extensions/</code>. Turn on "Developer mode" in the top right corner.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Install the Extension</h3>
                    <p className="text-gray-600">Click "Load unpacked" and select the extension folder, or drag and drop the .crx file into the extensions page.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pin the Extension</h3>
                    <p className="text-gray-600">Click the puzzle piece icon in the toolbar and pin our extension for easy access.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Firefox Instructions */}
            <Card className="p-8 mb-8">
              <div className="flex items-center mb-6">
                <Monitor className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-2xl font-bold extension-text">Mozilla Firefox</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Download from Add-ons Store</h3>
                    <p className="text-gray-600">Visit the Firefox Add-ons store and search for our extension, then click "Add to Firefox".</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Allow Installation</h3>
                    <p className="text-gray-600">Click "Add" in the popup dialog to confirm the installation.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Access Extension</h3>
                    <p className="text-gray-600">The extension will appear in your Firefox toolbar. Click the extension icon to access its features.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Safari Instructions */}
            <Card className="p-8 mb-8">
              <div className="flex items-center mb-6">
                <Smartphone className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold extension-text">Safari</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enable Developer Menu</h3>
                    <p className="text-gray-600">Open Safari Preferences (Safari → Preferences), go to Advanced tab, and check "Show Develop menu in menu bar".</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Download Extension</h3>
                    <p className="text-gray-600">Download the .safariextz file from our website or the Mac App Store.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Install Extension</h3>
                    <p className="text-gray-600">Double-click the .safariextz file to install it, or use Develop → Show Extension Builder to load it manually.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enable in Safari</h3>
                    <p className="text-gray-600">Go to Safari → Preferences → Extensions and enable our extension.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Edge Instructions */}
            <Card className="p-8 mb-8">
              <div className="flex items-center mb-6">
                <Laptop className="w-8 h-8 text-blue-700 mr-3" />
                <h2 className="text-2xl font-bold extension-text">Microsoft Edge</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Open Extensions Page</h3>
                    <p className="text-gray-600">Go to <code className="bg-gray-100 px-2 py-1 rounded">edge://extensions/</code> or click the three dots menu → Extensions.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enable Developer Mode</h3>
                    <p className="text-gray-600">Turn on "Developer mode" in the left sidebar.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Load Extension</h3>
                    <p className="text-gray-600">Click "Load unpacked" and select the extension folder, or install from the Microsoft Edge Add-ons store.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Troubleshooting Section */}
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <HelpCircle className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold extension-text">Troubleshooting</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Extension not working?</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Make sure the extension is enabled in your browser's extension settings</li>
                    <li>Try refreshing the webpage or restarting your browser</li>
                    <li>Check if your browser is up to date</li>
                    <li>Disable other extensions temporarily to check for conflicts</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Permission issues?</h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Grant necessary permissions when prompted during installation</li>
                    <li>Check browser settings to ensure the extension has required permissions</li>
                    <li>For Chrome: Go to chrome://extensions/ → Details → Site access</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Still having problems?</h3>
                  <p className="text-gray-600">
                    Contact our support team at <a href="mailto:support@lumenextensions.com" className="text-blue-600 hover:underline">support@lumenextensions.com</a> 
                    and we'll help you resolve any issues.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print bg-white border-t border-gray-200 py-8 mt-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">LE</span>
              </div>
              <span className="text-gray-600">© 2024 Lumen Extensions</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
