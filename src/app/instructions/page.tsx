"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, FileText, CheckCircle } from "lucide-react"
import Navigation from "@/components/Navigation"

export default function InstructionsPage() {
  return (
    <div className="min-h-screen extension-bg">
      <Navigation currentPage="instructions" />

      {/* Main Content */}
      <main className="py-12">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold extension-text mb-2">Invoice Generator & Maker</h1>
              <p className="text-gray-600">
                Get started in just a few steps
              </p>
            </div>

            <Tabs defaultValue="quick-start" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="quick-start" className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Quick Start
                </TabsTrigger>
                <TabsTrigger value="full-guide" className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Full Guide
                </TabsTrigger>
              </TabsList>

              {/* Quick Start Tab */}
              <TabsContent value="quick-start" className="space-y-8">
                <Card className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold extension-text mb-4">Quick Start Guide</h2>
                    <p className="text-gray-600">
                      Get up and running in under 5 minutes
                    </p>
                  </div>

                  {/* Quick Start Steps */}
                  <div className="space-y-12">
                    {/* Step 1: Open Extensions Page */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          1
                        </div>
                        <h3 className="text-xl font-semibold extension-text">Open Chrome Extensions Page</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-100 rounded-lg p-8 text-center">
                          <Image 
                            src="/images/quick-start/step1-extensions.webp" 
                            alt="Chrome extensions management page"
                            width={1200}
                            height={600}
                            className="mx-auto rounded-lg shadow-sm"
                          />
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Go to <code className="bg-gray-200 px-2 py-1 rounded">chrome://extensions/</code> or click the three dots menu → More tools → Extensions. 
                          Make sure "Developer mode" is enabled in the top right corner.
                        </p>
                      </div>
                    </div>

                    {/* Step 2: Find and Pin */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          2
                        </div>
                        <h3 className="text-xl font-semibold extension-text">Find and Pin Extension</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-100 rounded-lg p-8 text-center">
                          <Image 
                            src="/images/quick-start/step2-find-pin.webp" 
                            alt="Finding and pinning the extension"
                            width={1200}
                            height={600}
                            className="mx-auto rounded-lg shadow-sm"
                          />
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Look for "Invoice Generator & Maker" in your installed extensions list. Click the pin icon next to it 
                          to keep it visible in your browser toolbar for easy access.
                        </p>
                      </div>
                    </div>

                    {/* Step 3: Start Invoice Extension */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          3
                        </div>
                        <h3 className="text-xl font-semibold extension-text">Start Invoice Extension</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-100 rounded-lg p-8 text-center">
                          <Image 
                            src="/images/quick-start/step3-start.webp" 
                            alt="Starting the invoice extension"
                            width={1200}
                            height={600}
                            className="mx-auto rounded-lg shadow-sm"
                          />
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Click the Invoice Generator & Maker icon in your toolbar to open the extension. 
                          You'll see the main interface with options to create new invoices, manage clients, and view existing invoices.
                        </p>
                      </div>
                    </div>

                    {/* Step 4: Fill Invoice */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          4
                        </div>
                        <h3 className="text-xl font-semibold extension-text">Fill Invoice Details</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-100 rounded-lg p-8 text-center">
                          <Image 
                            src="/images/quick-start/step4-fill.webp" 
                            alt="Filling invoice form"
                            width={1200}
                            height={600}
                            className="mx-auto rounded-lg shadow-sm"
                          />
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Fill in your business information, client details, add line items with descriptions and prices. 
                          The extension will automatically calculate subtotals, taxes, and the final total.
                        </p>
                      </div>
                    </div>

                    {/* Step 5: Preview, Save, Print, Mark as Sent */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          5
                        </div>
                        <h3 className="text-xl font-semibold extension-text">Preview, Save, Print & Mark as Sent</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-gray-100 rounded-lg p-8 text-center">
                          <Image 
                            src="/images/quick-start/step5-actions.webp" 
                            alt="Invoice actions: preview, save, print, mark as sent"
                            width={1200}
                            height={600}
                            className="mx-auto rounded-lg shadow-sm"
                          />
                        </div>
                        <p className="text-gray-600 leading-relaxed">
                          Use the action buttons to: <strong>Preview</strong> your invoice, <strong>Save Draft</strong> for later editing, 
                          <strong>Print/Save PDF</strong> for sharing, and <strong>Mark as Sent</strong> to track its status.
                        </p>
                      </div>
                    </div>

                    {/* Success Message */}
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-green-800 mb-2">You're All Set!</h3>
                      <p className="text-green-700">
                        You've successfully installed and set up Invoice Generator & Maker. 
                        Check out the Full Guide below for detailed instructions on all features.
                      </p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {/* Full Guide Tab */}
              <TabsContent value="full-guide" className="space-y-8">
                <Card className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold extension-text mb-4">Complete User Manual</h2>
                    <p className="text-gray-600">
                      Comprehensive guide to all features and functionality
                    </p>
                  </div>

                  <div className="prose max-w-none">
                    <h3 className="text-xl font-bold extension-text mb-4">1) Installation</h3>
                    <p className="text-gray-600 mb-4">
                      Install from Chrome Web Store. After installation, click the extension icon to open the interface. 
                      The page will open automatically on first install.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Screenshot: Extension card in CWS + icon in toolbar.
                    </p>

                    <h3 className="text-xl font-bold extension-text mb-4">2) First Launch and Interface</h3>
                    <p className="text-gray-600 mb-2">
                      Top menu: New invoice, Invoices, Clients, Settings.
                    </p>
                    <p className="text-gray-600 mb-2">
                      Document modes: Edit / Preview (toggle in header).
                    </p>
                    <p className="text-gray-600 mb-4">
                      Actions: Save Draft, Print invoice, Save PDF, Mark as sent (after sending, additional options become available: Duplicate, Mark as Paid).
                    </p>
                    <p className="text-gray-600 mb-6">
                      Screenshot: "New Invoice" (form + right sidebar).
                    </p>

                    <h3 className="text-xl font-bold extension-text mb-4">3) Creating an Invoice (New invoice)</h3>
                    
                    <h4 className="text-lg font-semibold extension-text mb-3">Top Panel:</h4>
                    <p className="text-gray-600 mb-2">
                      Number, Date, Terms are set automatically; number can be adjusted manually.
                    </p>
                    <p className="text-gray-600 mb-2">
                      Auto-numbering is configured in Settings (prefix/counter — enable and set rules).
                    </p>
                    <p className="text-gray-600 mb-4">
                      When selecting Terms → Custom Date, a Due Date field appears.
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">From Section:</h4>
                    <p className="text-gray-600 mb-2">
                      Company name, email (required), address, phone, Tax/Business ID, website.
                    </p>
                    <p className="text-gray-600 mb-4">
                      These fields can be filled once in Settings — they will be automatically inserted in each new invoice.
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">Bill To Section:</h4>
                    <p className="text-gray-600 mb-2">
                      Company/Client name, email (required), address and contacts.
                    </p>
                    <p className="text-gray-600 mb-4">
                      We recommend first adding a client in the Clients tab — then use autocomplete.
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">Items Section:</h4>
                    <p className="text-gray-600 mb-2">
                      Click + Add Item, fill in Description, Rate, Qty.
                    </p>
                    <p className="text-gray-600 mb-2">
                      Amounts are calculated automatically; in the Summary block you can see Subtotal, Tax, Total, Balance Due.
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">Taxes and Discounts (right sidebar):</h4>
                    <p className="text-gray-600 mb-2">
                      Tax: None / Percentage / Fixed Amount; specify value.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Discount: None / Percentage / Fixed Amount.
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">Currency:</h4>
                    <p className="text-gray-600 mb-4">
                      Select USD / EUR / GBP — symbol updates automatically.
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">Design:</h4>
                    <p className="text-gray-600 mb-4">
                      In the TEMPLATE section, choose one of 12 color accents.
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">Additional:</h4>
                    <p className="text-gray-600 mb-2">
                      Payment Instructions — payment details and methods (IBAN/SWIFT, PayPal link, etc.). 
                      Available in Settings for pre-filling: use Default Payment Instructions and Insert example button to quickly insert template. 
                      These instructions will be inserted in new invoices.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Notes — terms and comments; also inserted if set in Settings.
                    </p>

                    <h3 className="text-xl font-bold extension-text mb-4">4) Preview, Saving and Statuses</h3>
                    <p className="text-gray-600 mb-2">
                      Preview: quick print view of document right on the page.
                    </p>
                    <p className="text-gray-600 mb-2">
                      Save Draft: saves draft to Invoices section (Draft status).
                    </p>
                    <p className="text-gray-600 mb-4">
                      Mark as sent: marks invoice as "sent" and locks editing. Important: you send the invoice any convenient way 
                      (e.g., printed or saved PDF and sent by email). For it to be counted in Invoices statistics, manually click Mark as sent. 
                      In Invoices list, Sent status will be displayed (as well as Draft/Overdue/Paid).
                    </p>
                    <p className="text-gray-600 mb-6">
                      Duplicate: creates editable copy of sent invoice.
                    </p>

                    <h3 className="text-xl font-bold extension-text mb-4">5) Printing and Saving PDF (High Quality PDF)</h3>
                    <p className="text-gray-600 mb-2">
                      Print invoice: opens browser's system print dialog.
                    </p>
                    <p className="text-gray-600 mb-2">
                      Save PDF: also opens system print; in dialog select Destination → Save as PDF.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Why this way: system print gives maximum quality PDF (vector graphics, correct fonts, precise margins).
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">Recommended Print Settings:</h4>
                    <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-1">
                      <li>Destination: Save as PDF</li>
                      <li>Layout: Portrait</li>
                      <li>Margins: Default (or None if you need edge-to-edge)</li>
                      <li>Options: enable Background graphics (if you want to preserve color bar/logo completely)</li>
                    </ul>

                    <h3 className="text-xl font-bold extension-text mb-4">6) Managing Invoices (Invoices)</h3>
                    <p className="text-gray-600 mb-2">
                      Summary cards: number of invoices, total amount, paid, to be paid.
                    </p>
                    <p className="text-gray-600 mb-2">
                      Search + filters: by status and period.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Row actions: Edit, Duplicate, Mark as Paid, More (contextual).
                    </p>
                    <p className="text-gray-600 mb-6">
                      Statuses: DRAFT, SENT, OVERDUE, PAID — statuses participate in analytics.
                    </p>

                    <h3 className="text-xl font-bold extension-text mb-4">7) Client Database (Clients)</h3>
                    <p className="text-gray-600 mb-2">
                      New Client — adding client with contacts.
                    </p>
                    <p className="text-gray-600 mb-2">
                      Search, edit, delete.
                    </p>
                    <p className="text-gray-600 mb-6">
                      Client data is used for autocomplete in "New invoice".
                    </p>

                    <h3 className="text-xl font-bold extension-text mb-4">8) Settings</h3>
                    <p className="text-gray-600 mb-2">
                      Business Profile — your company data (used "by default" in new invoices).
                    </p>
                    <p className="text-gray-600 mb-2">
                      Invoice Defaults — currency, date format, Terms, auto-numbering (enable, prefix, next number).
                    </p>
                    <p className="text-gray-600 mb-6">
                      Default Payment Instructions — pre-fill payment instructions for all new invoices; Insert example button for quick start.
                    </p>

                    <h3 className="text-xl font-bold extension-text mb-4">9) Privacy, Offline Mode and Backups</h3>
                    <p className="text-gray-600 mb-2">
                      Data (Settings, Clients, Items, Invoices, Media) is stored locally and available offline.
                    </p>
                    <p className="text-gray-600 mb-4">
                      For safety, use regular backups:
                    </p>
                    <p className="text-gray-600 mb-2">
                      Export All (JSON backup): exports all data (Settings, Clients, Items, Invoices Draft/Sent/Paid, Media/logo) into one JSON v2 file.
                    </p>
                    <p className="text-gray-600 mb-4">
                      Import Backup (JSON): restores full copy; can Merge (combine) or Replace (replace data entirely).
                    </p>
                    <p className="text-gray-600 mb-6">
                      We recommend making backup before clearing browser data/reinstalling/moving to another computer.
                    </p>

                    <h3 className="text-xl font-bold extension-text mb-4">10) Frequently Asked Questions (FAQ)</h3>
                    
                    <h4 className="text-lg font-semibold extension-text mb-3">PDF "doesn't save":</h4>
                    <p className="text-gray-600 mb-4">
                      In print dialog select Destination → Save as PDF; make sure browser doesn't block downloads.
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">Due Date doesn't appear:</h4>
                    <p className="text-gray-600 mb-4">
                      Select Terms → Custom Date.
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">Tax/discount not visible:</h4>
                    <p className="text-gray-600 mb-4">
                      In sidebar select type (Percentage/Fixed) and specify value.
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">Need to fix sent invoice:</h4>
                    <p className="text-gray-600 mb-4">
                      Use Duplicate, edit copy; if necessary, mark as sent again.
                    </p>

                    <h4 className="text-lg font-semibold extension-text mb-3">Currency symbol "doesn't match":</h4>
                    <p className="text-gray-600 mb-6">
                      Check currency selection in CURRENCY section (right sidebar).
                    </p>

                    <h3 className="text-xl font-bold extension-text mb-4">11) Support</h3>
                    <p className="text-gray-600 mb-2">
                      Contact: specify e-mail/form on website.
                    </p>
                    <p className="text-gray-600 mb-6">
                      For faster response, include browser/extension version and, if possible, invoice number (without personal data).
                    </p>

                    <div className="bg-blue-50 p-6 rounded-lg mt-8">
                      <h4 className="text-lg font-semibold extension-text mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-600 mr-2" />
                        Quick Reference
                      </h4>
                      <ul className="text-gray-600 space-y-1">
                        <li>• Create professional invoices in minutes</li>
                        <li>• Track statuses and amounts</li>
                        <li>• Export quality PDFs through system print</li>
                        <li>• Work offline, make JSON backups (Export All / Import Backup) regularly</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
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
              <span className="text-gray-600">© 2025 Lumen Extensions</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
