import CommonHeader from "@/app/components/common/common_section";

// app/privacy-policy/page.jsx
export default function PrivacyPolicy() {
  return (
    <>
   <CommonHeader heading="Privacy Policy" />
    <div className="bg-white text-gray-800 px-6 py-12 container mx-auto space-y-6">
      <p className="text-sm text-gray-500">Last updated: December 16, 2020</p>
      <h1 className="text-3xl font-bold">Privacy Policy font-anton</h1>
      <p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
      <p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.</p>

      {/* Interpretation and Definitions */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Interpretation and Definitions </h2>
        <h3 className="text-xl font-semibold mt-4 font-anton">Interpretation</h3>
        <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.</p>

        <h3 className="text-xl font-semibold mt-4">Definitions</h3>
        <ul className="list-disc list-inside space-y-1 font-anton">
          <li><strong>Account</strong>: A unique account created for You to access our Service or parts of our Service.</li>
          <li><strong>Company</strong>: Refers to ABCON Engineers.</li>
          <li><strong>Cookies</strong>: Small files placed on Your device.</li>
          <li><strong>Country</strong>: Refers to New South Wales, Australia.</li>
          <li><strong>Device</strong>: Any device that can access the Service.</li>
          <li><strong>Personal Data</strong>: Any information that relates to an identified or identifiable individual.</li>
          <li><strong>Service</strong>: The website <a className="text-blue-600 underline" href="https://www.abcon.com.au">www.abcon.com.au</a></li>
          <li><strong>Usage Data</strong>: Data collected automatically.</li>
        </ul>
      </section>

      {/* Types of Data Collected */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Types of Data Collected</h2>

        <h3 className="text-xl font-semibold mt-4 font-anton">Personal Data</h3>
        <ul className="list-disc list-inside">
          <li>Email address</li>
          <li>First and last name</li>
          <li>Phone number</li>
          <li>Usage Data</li>
        </ul>

        <h3 className="text-xl font-semibold mt-4 font-anton">Usage Data</h3>
        <p>Includes IP address, browser type, browser version, pages visited, time/date of visit, time spent, device identifiers.</p>
      </section>

      {/* Tracking Technologies and Cookies */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Tracking Technologies and Cookies</h2>
        <p>We use Cookies and similar tracking technologies like beacons, tags, and scripts to collect and track information.</p>

        <ul className="list-disc list-inside space-y-1">
          <li><strong>Cookies or Browser Cookies</strong>: You can instruct your browser to refuse all Cookies.</li>
          <li><strong>Flash Cookies</strong>: Certain features may use Flash Cookies to collect and store information.</li>
          <li><strong>Web Beacons</strong>: Small electronic files that permit analytics like counting users.</li>
        </ul>

        <p><strong>Cookies we use:</strong></p>
        <ul className="list-disc list-inside">
          <li><strong>Necessary</strong>: Essential to provide the Service.</li>
          <li><strong>Cookies Policy / Notice Acceptance</strong>: Identify if users accepted cookies.</li>
          <li><strong>Functionality</strong>: Remember choices like login details or language.</li>
        </ul>
      </section>

      {/* Use of Your Personal Data */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Use of Your Personal Data</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>To provide and maintain our Service</li>
          <li>To manage Your Account</li>
          <li>To contact You</li>
          <li>To provide You with news, offers, and general information</li>
          <li>To manage Your requests</li>
          <li>For business transfers</li>
          <li>For other purposes: data analysis, identifying usage trends</li>
        </ul>
      </section>

      {/* Sharing Your Data */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Sharing Your Personal Data</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>With Service Providers</li>
          <li>For business transfers</li>
          <li>With Affiliates</li>
          <li>With business partners</li>
          <li>With other users</li>
          <li>With Your consent</li>
        </ul>
      </section>

      {/* Retention */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Retention of Your Personal Data</h2>
        <p>We retain Your Personal Data only as long as necessary.</p>
      </section>

      {/* Transfer */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Transfer of Your Personal Data</h2>
        <p>Your information may be processed outside of Your jurisdiction, including in countries with different data protection laws.</p>
      </section>

      {/* Disclosure */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Disclosure of Your Personal Data</h2>
        <ul className="list-disc list-inside space-y-1">
          <li><strong>Business Transactions</strong>: Data may be transferred during acquisitions or mergers.</li>
          <li><strong>Law Enforcement</strong>: May disclose if required to by law.</li>
          <li><strong>Other Legal Requirements</strong>: To protect rights, prevent fraud, enforce policies.</li>
        </ul>
      </section>

      {/* Security */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Security of Your Personal Data</h2>
        <p>We use commercially acceptable means to protect Your Personal Data, but no method of transmission is 100% secure.</p>
      </section>

      {/* Links */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Links to Other Websites</h2>
        <p>We are not responsible for content or practices of third-party sites.</p>
      </section>

      {/* Changes */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Changes to This Privacy Policy</h2>
        <p>We may update Our Privacy Policy periodically. Check this page for updates.</p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-2xl font-semibold mt-8 font-anton">Contact Us</h2>
        <p>If you have any questions about this Privacy Policy:</p>
        <ul className="list-disc list-inside">
          <li>By email: info@abcon.com.au</li>
          <li>By phone: +61 (2) 9708 6844</li>
        </ul>
      </section>
    </div>
    </>
  );
}