import Link from "next/link"

export const metadata = {
  title: "Privacy Policy - Lumen Extensions",
  description: "Privacy Policy for Lumen Extensions browser extensions and services.",
}

export default function PrivacyPage() {
  const lastUpdated = "December 17, 2024"

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
              <Link href="/privacy" className="text-blue-600 font-medium">
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
        <div className="policy-container">
          <div className="policy-content bg-white rounded-lg shadow-sm p-8">
            <header className="mb-8">
              <h1 className="text-3xl font-bold extension-text mb-4">Lumen Extensions Privacy Policy</h1>
              <p className="text-gray-600">
                Last Updated: <time dateTime="2024-12-17">{lastUpdated}</time>
              </p>
            </header>

            <div className="prose prose-lg max-w-none" style={{ fontSize: "17px", lineHeight: "1.7" }}>
              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">Privacy Policy for Lumen Extensions</h2>
                <p className="text-gray-700 mb-4">
                  Lumen Extensions ("we," "us," or "our") respects the privacy of our users ("user," "you," or "your"). 
                  This Privacy Policy applies to our browser extensions and related services (the "Services") and explains 
                  how we collect, use, disclose, and safeguard your information.
                </p>
                <p className="text-gray-700 mb-4">
                  We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will 
                  alert you about any changes by updating the "Last Updated" date at the top of this document. You will 
                  be deemed to have been made aware of, will be subject to, and will be deemed to have accepted the 
                  changes in any revised Privacy Policy by your continued use of the Services after the date such a 
                  revised Privacy Policy is posted.
                </p>
                <p className="text-gray-700 mb-4">
                  The data controller of your information is Lumen Extensions.
                </p>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us by email at privacy@lumenextensions.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">1. COLLECTION OF YOUR INFORMATION</h2>
                <p className="text-gray-700 mb-4">
                  We may collect information about you in a variety of ways. The information we may collect via the 
                  Services depends on how you use them.
                </p>

                <h3 className="text-lg font-medium extension-text mb-3">Information You Provide to Us</h3>
                <p className="text-gray-700 mb-4">
                  We may collect information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Install and configure our browser extensions</li>
                  <li>Contact us for support or feedback</li>
                  <li>Subscribe to our newsletter or updates</li>
                  <li>Participate in surveys or beta testing programs</li>
                </ul>

                <h3 className="text-lg font-medium extension-text mb-3">Automatically Collected Information</h3>
                <p className="text-gray-700 mb-4">
                  When you use our Services, we may automatically collect certain information. This data does not 
                  personally identify you but is essential for the Services' functionality and improvement. We may collect:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Usage Data:</strong> Information about how you interact with our extensions, such as features used, frequency of use, and performance metrics.</li>
                  <li><strong>Technical Data:</strong> Browser type and version, operating system, extension version, and error logs.</li>
                  <li><strong>Analytics Data:</strong> Aggregated, anonymized data about extension performance and user behavior patterns.</li>
                </ul>

                <h3 className="text-lg font-medium extension-text mb-3">Information We Do NOT Collect</h3>
                <p className="text-gray-700">
                  We do not collect, store, or transmit:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Personal browsing history or website content</li>
                  <li>Passwords or sensitive authentication data</li>
                  <li>Personal files or documents from your device</li>
                  <li>Precise location data</li>
                  <li>Personal information from websites you visit</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">2. HOW WE USE YOUR INFORMATION</h2>
                <p className="text-gray-700 mb-4">
                  Having accurate information about you permits us to provide you with a smooth, efficient, and 
                  customized experience. Specifically, we may use the information collected about you for the following purposes:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>To Provide and Support the Services:</strong> To ensure the functionality of our extensions and to provide technical support.</li>
                  <li><strong>For Analytics and Improvement:</strong> To analyze the use of our Services, identify errors, and improve performance and user experience.</li>
                  <li><strong>For Communication:</strong> To respond to your inquiries, provide customer support, and send important updates about our Services.</li>
                  <li><strong>For Legal Obligations:</strong> To comply with applicable laws and regulations and to protect our rights and interests.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">3. HOW WE SHARE YOUR INFORMATION</h2>
                <p className="text-gray-700 mb-4">
                  We may share the above categories of information for certain business purposes, including:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>With Third-Party Service Providers:</strong> We may provide information to our third-party service providers and partners who assist us in improving our services. They help us with tasks such as analytics, hosting, maintenance, and customer support.</li>
                  <li><strong>For Legal Obligations and Security:</strong> We may disclose your information if it is reasonably necessary to comply with applicable law, governmental requests, or to protect our rights, property, or safety.</li>
                  <li><strong>With Your Consent:</strong> We may share your information with your explicit consent for specific purposes.</li>
                </ul>
                <p className="text-gray-700">
                  We do not sell, rent, or trade your personal information to third parties for their commercial purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">4. DATA SECURITY</h2>
                <p className="text-gray-700 mb-4">
                  We prioritize the security and protection of your data. We implement appropriate administrative, 
                  technical, organizational, and physical security measures to protect your data against unauthorized 
                  access, disclosure, alteration, or destruction.
                </p>
                <p className="text-gray-700">
                  However, no method of transmission over the Internet or method of electronic storage is 100% secure. 
                  While we strive to use commercially acceptable means to protect your personal information, we cannot 
                  guarantee its absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">5. YOUR RIGHTS AND OPTIONS</h2>
                <p className="text-gray-700 mb-4">
                  You have the right to access, correct, or erase your data, and you may object to or restrict how 
                  we use or share it. You also have the right to withdraw any consent you may have previously given 
                  for the processing of your personal information.
                </p>

                <h3 className="text-lg font-medium extension-text mb-3">Your Rights Under GDPR and CCPA</h3>
                <p className="text-gray-700 mb-4">
                  If you are a resident of the European Economic Area (GDPR) or California (CCPA), you have the 
                  following rights regarding your personal data:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Right to Access:</strong> You may request access to your data.</li>
                  <li><strong>Right to Rectification:</strong> You may request the correction of inaccurate data.</li>
                  <li><strong>Right to Erasure:</strong> You may request the deletion of your data.</li>
                  <li><strong>Right to Restriction of Processing:</strong> You may request limitations on how we process your data.</li>
                  <li><strong>Right to Object:</strong> You may object to the processing of your data.</li>
                  <li><strong>Right to Data Portability:</strong> You may request to receive your data in a portable format.</li>
                  <li><strong>Right to Lodge a Complaint:</strong> You have the right to lodge a complaint with the appropriate supervisory authority.</li>
                </ul>
                <p className="text-gray-700">
                  To exercise your rights, please submit a request to privacy@lumenextensions.com. We will respond to 
                  your request as promptly as possible.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">6. CHILDREN'S PRIVACY</h2>
                <p className="text-gray-700">
                  Our Services are not intended for use by children under the age of 13. We do not knowingly collect 
                  personal information directly from children under 13. If you have reason to believe that we may have 
                  accidentally received information from a child under 13, please contact us immediately at privacy@lumenextensions.com.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">7. CHANGES TO THIS PRIVACY POLICY</h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting 
                  the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review 
                  this Privacy Policy periodically for any changes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">8. CONTACT US</h2>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please contact us by email at privacy@lumenextensions.com.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="no-print bg-white border-t border-gray-200 py-8 mt-8">
        <div className="policy-container">
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

