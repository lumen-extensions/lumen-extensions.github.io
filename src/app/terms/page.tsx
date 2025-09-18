import Link from "next/link"

export const metadata = {
  title: "Terms of Service - Lumen Extensions",
  description: "Terms of Service for Lumen Extensions browser extensions and services.",
}

export default function TermsPage() {
  const lastUpdated = "December 17, 2024"

  return (
    <div className="min-h-screen extension-bg">
      {/* Header */}
      <header className="no-print py-6 border-b border-gray-200 bg-white">
        <div className="policy-container">
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
              <Link href="/terms" className="text-blue-600 font-medium">
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
              <h1 className="text-3xl font-bold extension-text mb-4">TERMS OF SERVICE</h1>
              <p className="text-gray-600">
                Last Updated: <time dateTime="2024-12-17">{lastUpdated}</time>
              </p>
            </header>

            <div className="prose prose-lg max-w-none" style={{ fontSize: "17px", lineHeight: "1.7" }}>
              <section className="mb-8">
                <p className="text-gray-700 mb-4">
                  Please read these Terms of Service ("Terms", "Agreement") carefully before using the browser extensions 
                  and related services provided by Lumen Extensions (the "Services").
                </p>
                <p className="text-gray-700 mb-4">
                  Your access to and use of the Services is conditioned on your acceptance of and compliance with 
                  these Terms. These Terms apply to all visitors, users, and others who access or use the Services.
                </p>
                <p className="text-gray-700 mb-4">
                  By using the Services, you agree to be bound by these Terms. If you disagree with any part of 
                  the Terms, then you may not access the Services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">Definitions</h2>
                <p className="text-gray-700 mb-4">
                  In these Terms, the following capitalized terms have the meanings set forth below:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Services</strong> – refers to our browser extensions, website, and any related services and content provided through them.</li>
                  <li><strong>Company</strong> (or "Lumen Extensions," "We," "Us," "Our") – refers to Lumen Extensions, the legal entity providing the Services.</li>
                  <li><strong>Content</strong> – refers to all types of content, including the look and feel of our Services, information, data, text, images, graphics, or other materials available through the Services.</li>
                  <li><strong>Device</strong> – refers to an authorized computer, smartphone, or tablet that you own or lawfully control for your personal or commercial use.</li>
                  <li><strong>Intellectual Property Rights</strong> – refers collectively to rights under copyright, trademark, patent, trade secret, and any other intellectual property or proprietary rights recognized in any country or jurisdiction worldwide.</li>
                  <li><strong>Browser Store</strong> – refers to the official extension stores such as Chrome Web Store, Firefox Add-ons, Safari Extensions Gallery, or Microsoft Edge Add-ons.</li>
                  <li><strong>Policy</strong> – refers to our Privacy Policy, which describes how we collect, use, process, store, and transfer your information. It is incorporated into these Terms by reference.</li>
                  <li><strong>Third Party Providers</strong> – refer to third-party suppliers who offer content and/or services in or through the Services, including analytics services and hosting providers.</li>
                  <li><strong>You</strong> (or "Your," or "User") – refers to the natural person or legal entity who uses our Services in accordance with these Terms.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">1. LICENSE TO USE THE SERVICES AND RESTRICTIONS</h2>
                <p className="text-gray-700 mb-4">
                  We grant you a non-exclusive, personal, limited, revocable, and non-transferable license to access 
                  and use the Services on your Devices only, subject to your agreement to comply with all terms 
                  of this Agreement.
                </p>
                <p className="text-gray-700 mb-4">
                  Please note that the Services are licensed, not sold, to you. We own all right, title, and 
                  interest in the Services and reserve all rights not expressly granted to you in this Agreement.
                </p>
                <p className="text-gray-700 mb-4">
                  You are not permitted to sell, resell, distribute, rent, sublicense, assign, copy (except for 
                  one backup copy), or otherwise transfer any rights in the Services to third parties.
                </p>
                <p className="text-gray-700">
                  You may not use any part of the Content for artificial intelligence-related purposes. Specifically, 
                  you may not use any part of the Content to develop, create, train, improve, or otherwise enhance 
                  any deep-learning or machine-learning based application or other artificial intelligence application, 
                  whether for commercial or non-commercial purposes.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">2. INTELLECTUAL PROPERTY RIGHTS</h2>
                <p className="text-gray-700 mb-4">
                  The Services, including all original content, features, functionality, graphics, user interface, 
                  code, and design, is and will remain our exclusive property. The Services are protected by 
                  copyright, trademark, and other laws of the United States and foreign countries.
                </p>
                <p className="text-gray-700 mb-4">
                  You acknowledge that all Intellectual Property Rights in our Services belong to us or are licensed 
                  to us. Your rights to access and use our Services are strictly limited to those expressly granted 
                  to you under the license described in the "License to Use the Services and Restrictions" section. 
                  All rights not expressly granted herein are expressly reserved by us and our licensors.
                </p>
                <p className="text-gray-700">
                  You shall not copy, distribute, make available to the public, or create derivative works from our 
                  Services or any part thereof unless we have given our prior written consent.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">3. ACCEPTABLE USE</h2>
                <p className="text-gray-700 mb-4">
                  You agree to use the Services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>Use the Services in any way that violates any applicable federal, state, local, or international law or regulation.</li>
                  <li>Attempt to gain unauthorized access to any part of the Services or any other systems or networks connected to the Services.</li>
                  <li>Interfere with or disrupt the Services or servers or networks connected to the Services.</li>
                  <li>Use the Services to transmit, or procure the sending of, any advertising or promotional material without our prior written consent.</li>
                  <li>Use the Services to impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
                  <li>Use the Services in any manner that could disable, overburden, damage, or impair the Services or interfere with any other party's use of the Services.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">4. THIRD-PARTY SERVICES</h2>
                <p className="text-gray-700 mb-4">
                  The Services may contain links to third-party websites, services, or resources that are 
                  not owned or controlled by us. We have no control over and assume no responsibility for the 
                  content, privacy policies, or practices of any third-party websites or services. You acknowledge 
                  and agree that we shall not be responsible or liable, directly or indirectly, for any damage or 
                  loss caused or alleged to be caused by or in connection with the use of or reliance on any such 
                  content, goods, or services.
                </p>
                <p className="text-gray-700">
                  We strongly advise you to read the terms and conditions and privacy policies of any third-party 
                  services that you visit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">5. DISCLAIMER OF WARRANTIES</h2>
                <p className="text-gray-700 mb-4">
                  THE SERVICES AND RELATED CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITH 
                  ALL FAULTS AND WITHOUT WARRANTY OF ANY KIND. YOU USE THEM AT YOUR SOLE RISK. TO THE MAXIMUM EXTENT 
                  PERMITTED BY APPLICABLE LAW, WE, AS WELL AS ANY OF OUR AFFILIATES, LICENSORS, OR DISTRIBUTORS, 
                  EXPRESSLY DISCLAIM ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING, BUT NOT 
                  LIMITED TO, THE IMPLIED WARRANTIES OF FITNESS FOR A PARTICULAR PURPOSE, MERCHANTABILITY, OR NON-INFRINGEMENT.
                </p>
                <p className="text-gray-700">
                  WE DO NOT WARRANT THAT THE SERVICES AND RELATED CONTENT WILL BE UNINTERRUPTED, ERROR-FREE, 
                  OR THAT ANY DEFECTS WILL BE CORRECTED.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">6. LIMITATION OF LIABILITY</h2>
                <p className="text-gray-700 mb-4">
                  IN NO EVENT SHALL WE, NOR OUR DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, OR LICENSORS, BE LIABLE 
                  FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING, 
                  WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>YOUR ACCESS TO OR USE OF, OR INABILITY TO ACCESS OR USE, THE SERVICES;</li>
                  <li>ANY CONTENT OBTAINED FROM THE SERVICES;</li>
                  <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">7. TERMINATION</h2>
                <p className="text-gray-700">
                  We may terminate or suspend your access to the Services immediately, without prior notice or 
                  liability, for any reason whatsoever, including, without limitation, if you breach the Terms. 
                  Upon termination, your right to use the Services will immediately cease.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">8. GOVERNING LAW AND DISPUTE RESOLUTION</h2>
                <p className="text-gray-700 mb-4">
                  These Terms shall be governed and construed in accordance with the laws of the United States. 
                  Any disputes related to these Terms shall be subject to the exclusive jurisdiction of the courts 
                  of the United States.
                </p>
                <p className="text-gray-700 mb-4">
                  If you reside in the United States, the following terms apply to you:
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li><strong>Mandatory Arbitration:</strong> You and we agree that any dispute, claim, or controversy shall be resolved exclusively through mandatory individual arbitration, rather than in a court.</li>
                  <li><strong>Class Action Waiver:</strong> You and we agree that each may bring claims against the other only in an individual capacity and not as a plaintiff or class member in any purported class or representative proceeding.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">9. BROWSER STORE TERMS</h2>
                <p className="text-gray-700 mb-4">
                  If you download, install, or access our extensions through a Browser Store, you specifically 
                  acknowledge and agree that the following additional terms apply (in the event of a conflict between 
                  them and other terms of this Agreement, the terms of this section shall prevail):
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                  <li>This Agreement is concluded between you and us only, and not with the Browser Store operator, and the Browser Store operator is not responsible for the Services or their content.</li>
                  <li>The Browser Store operator is not obligated to provide any maintenance and support services with respect to the Services.</li>
                  <li>The Browser Store operator and its subsidiaries are third-party beneficiaries of this Agreement, and upon your acceptance of the terms and conditions of this Agreement, the Browser Store operator will have the right (and will be deemed to have accepted the right) to enforce this Agreement against you as a third-party beneficiary of this Agreement.</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-xl font-semibold extension-text mb-4">10. MISCELLANEOUS</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Entire Agreement:</strong> These Terms constitute the entire agreement between us regarding 
                  the Services and supersede any prior agreements.
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Severability:</strong> If any provision of these Terms is held to be invalid or unenforceable, 
                  the remaining provisions will remain in full force and effect.
                </p>
                <p className="text-gray-700">
                  <strong>Contact Information:</strong> If you have any questions about these Terms, please contact 
                  us by email at legal@lumenextensions.com.
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

