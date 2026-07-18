
import {
  ShieldCheck,
  FileText,
  Database,
  Lock,
  Cookie,
  ChevronRight,
} from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#16153A] via-[#2A235A] to-[#FF1493] text-white py-24">
        <div className="absolute inset-0 bg-black/25"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 px-5 py-2 rounded-full border border-white/20 mb-6">
            <ShieldCheck size={18} />
            <span className="text-sm font-semibold tracking-wider uppercase">
              Legal Information
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Privacy Policy
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-gray-200 leading-8">
            Your privacy matters to us. This Privacy Policy explains how Slee
            Street Logistics LLC collects, uses, stores, and protects your
            personal information when you use our website and services.
          </p>

          <div className="mt-8">
            <span className="bg-white text-[#16153A] px-5 py-2 rounded-full font-semibold shadow-lg">
              Last Updated: July 2026
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}

      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-4 gap-10">
        {/* Sidebar */}

        <aside className="lg:col-span-1">
          <div className="sticky top-28 bg-white rounded-3xl shadow-xl p-8 border">
            <h3 className="text-2xl font-bold text-[#16153A] mb-6">Contents</h3>

            <ul className="space-y-4 text-gray-700">
              <li>
                <a
                  href="#intro"
                  className="flex items-center gap-2 hover:text-pink-600"
                >
                  <ChevronRight size={18} />
                  Introduction
                </a>
              </li>

              <li>
                <a
                  href="#collect"
                  className="flex items-center gap-2 hover:text-pink-600"
                >
                  <ChevronRight size={18} />
                  Information We Collect
                </a>
              </li>

              <li>
                <a
                  href="#use"
                  className="flex items-center gap-2 hover:text-pink-600"
                >
                  <ChevronRight size={18} />
                  How We Use Information
                </a>
              </li>

              <li>
                <a
                  href="#cookies"
                  className="flex items-center gap-2 hover:text-pink-600"
                >
                  <ChevronRight size={18} />
                  Cookies
                </a>
              </li>

              <li>
                <a
                  href="#sharing"
                  className="flex items-center gap-2 hover:text-pink-600"
                >
                  <ChevronRight size={18} />
                  Information Sharing
                </a>
              </li>

              <li>
                <a
                  href="#security"
                  className="flex items-center gap-2 hover:text-pink-600"
                >
                  <ChevronRight size={18} />
                  Data Security
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="flex items-center gap-2 hover:text-pink-600"
                >
                  <ChevronRight size={18} />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Content */}

        <div className="lg:col-span-3 space-y-10">
          {/* Introduction */}

          <section
            id="intro"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <FileText className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                Introduction
              </h2>
            </div>

            <p className="text-gray-700 leading-8 text-lg">
              Slee Street Logistics LLC values your trust and is committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, disclose, and safeguard your information
              whenever you interact with our website, submit forms, apply as a
              carrier, request transportation services, or communicate with our
              team.
            </p>

            <p className="text-gray-700 leading-8 text-lg mt-6">
              By accessing or using our website, you agree to the practices
              described in this Privacy Policy.
            </p>
          </section>

          {/* Information We Collect */}

          <section
            id="collect"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <Database className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                Information We Collect
              </h2>
            </div>

            <p className="text-gray-700 mb-6 leading-8">
              Depending on your interaction with our website, we may collect the
              following categories of information:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-pink-50 border rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-4 text-[#16153A]">
                  Personal Information
                </h4>

                <ul className="list-disc ml-6 space-y-3 text-gray-700">
                  <li>Full Name</li>
                  <li>Business Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>ZIP Code</li>
                  <li>Mailing Address</li>
                </ul>
              </div>

              <div className="bg-pink-50 border rounded-2xl p-6">
                <h4 className="font-bold text-xl mb-4 text-[#16153A]">
                  Carrier Information
                </h4>

                <ul className="list-disc ml-6 space-y-3 text-gray-700">
                  <li>Equipment Type</li>
                  <li>Carrier Mobile Provider</li>
                  <li>Business Details</li>
                  <li>Application Information</li>
                  <li>Supporting Documents</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Use Information */}

          <section
            id="use"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <Lock className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                How We Use Your Information
              </h2>
            </div>

            <ul className="grid md:grid-cols-2 gap-5">
              <li className="bg-gray-50 p-5 rounded-xl border">
                Process carrier applications.
              </li>

              <li className="bg-gray-50 p-5 rounded-xl border">
                Respond to inquiries and support requests.
              </li>

              <li className="bg-gray-50 p-5 rounded-xl border">
                Verify business information.
              </li>

              <li className="bg-gray-50 p-5 rounded-xl border">
                Improve website functionality.
              </li>

              <li className="bg-gray-50 p-5 rounded-xl border">
                Send important service updates.
              </li>

              <li className="bg-gray-50 p-5 rounded-xl border">
                Maintain compliance with applicable laws.
              </li>
            </ul>
          </section>

          {/* Cookies */}

          <section
            id="cookies"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <Cookie className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                Cookies & Tracking Technologies
              </h2>
            </div>

            <p className="text-gray-700 leading-8 text-lg">
              Our website may use cookies and similar technologies to improve
              user experience, analyze website traffic, remember user
              preferences, and enhance website performance. You may disable
              cookies through your browser settings, although some website
              features may not function properly.
            </p>
          </section>
          {/* Information Sharing */}

          <section
            id="sharing"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                Information Sharing & Disclosure
              </h2>
            </div>

            <p className="text-gray-700 leading-8 mb-6">
              Slee Street Logistics LLC respects your privacy and does not sell
              your personal information. We only share your information when it
              is necessary to operate our business or comply with legal
              obligations.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 border rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#16153A] mb-4">
                  We May Share Information With
                </h3>

                <ul className="list-disc ml-6 space-y-3 text-gray-700">
                  <li>Our employees and dispatch team</li>
                  <li>Technology and cloud service providers</li>
                  <li>Email communication providers</li>
                  <li>Payment processing partners</li>
                  <li>Legal authorities when required by law</li>
                  <li>Business partners involved in transportation services</li>
                </ul>
              </div>

              <div className="bg-pink-50 border rounded-2xl p-6">
                <h3 className="text-xl font-bold text-[#16153A] mb-4">
                  We Never
                </h3>

                <ul className="list-disc ml-6 space-y-3 text-gray-700">
                  <li>Sell your personal information</li>
                  <li>Share your information for unrelated marketing</li>
                  <li>
                    Disclose confidential business data without permission
                  </li>
                  <li>Provide customer information to unauthorized parties</li>
                </ul>
              </div>
            </div>
          </section>

          {/* International Transfers */}

          <section
            id="international"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <Database className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                International Data Transfers
              </h2>
            </div>

            <p className="text-gray-700 leading-8 text-lg">
              If you access our website outside the United States, your
              information may be transferred, processed, and stored on servers
              located in different countries. By using our services, you consent
              to such transfers where permitted by applicable laws.
            </p>
          </section>

          {/* Data Security */}

          <section
            id="security"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <Lock className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                Data Security
              </h2>
            </div>

            <p className="text-gray-700 leading-8 mb-8">
              We use appropriate administrative, technical, and physical
              safeguards to protect your personal information from unauthorized
              access, misuse, alteration, disclosure, or destruction.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-2xl p-6 bg-gray-50">
                <h3 className="font-bold text-xl text-[#16153A] mb-4">
                  Security Measures
                </h3>

                <ul className="space-y-3 text-gray-700 list-disc ml-6">
                  <li>Encrypted communications</li>
                  <li>Secure hosting infrastructure</li>
                  <li>Access control policies</li>
                  <li>Routine software updates</li>
                  <li>Internal security procedures</li>
                </ul>
              </div>

              <div className="border rounded-2xl p-6 bg-pink-50">
                <h3 className="font-bold text-xl text-[#16153A] mb-4">
                  Important Notice
                </h3>

                <p className="text-gray-700 leading-7">
                  While we implement industry-standard security practices, no
                  internet transmission or electronic storage method can be
                  guaranteed as completely secure.
                </p>
              </div>
            </div>
          </section>

          {/* SMS */}

          <section
            id="sms"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <FileText className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                SMS Communication
              </h2>
            </div>

            <p className="text-gray-700 leading-8 mb-6">
              By providing your mobile phone number, you consent to receive SMS
              messages related to carrier applications, dispatch updates,
              service notifications, appointment reminders, and other
              business-related communications.
            </p>

            <div className="bg-gradient-to-r from-[#16153A] to-[#FF1493] text-white rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">Your Choices</h3>

              <ul className="space-y-3 list-disc ml-6">
                <li>You may opt out of SMS communications at any time.</li>
                <li>Standard carrier messaging rates may apply.</li>
                <li>Marketing messages will only be sent where permitted.</li>
                <li>Operational service messages may still be required.</li>
              </ul>
            </div>
          </section>

          {/* Data Retention */}

          <section
            id="retention"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <Database className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                Data Retention
              </h2>
            </div>

            <p className="text-gray-700 leading-8 text-lg">
              We retain your personal information only for as long as necessary
              to provide our services, comply with legal obligations, resolve
              disputes, enforce agreements, and maintain business records. When
              information is no longer required, it is securely deleted or
              anonymized whenever reasonably possible.
            </p>
          </section>
          {/* Children's Privacy */}

          <section
            id="children"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <ShieldCheck className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                Children's Privacy
              </h2>
            </div>

            <p className="text-gray-700 leading-8 text-lg">
              Our services are intended for individuals who are at least
              eighteen (18) years of age. We do not knowingly collect personal
              information from children under the age of 18. If we become aware
              that information from a child has been collected, we will take
              reasonable steps to delete it promptly.
            </p>
          </section>

          {/* Privacy Rights */}

          <section
            id="rights"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <Lock className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                Your Privacy Rights
              </h2>
            </div>

            <p className="text-gray-700 leading-8 mb-8">
              Depending on your location and applicable privacy laws, you may
              have certain rights regarding your personal information.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-2xl p-6 bg-gray-50">
                <h3 className="font-bold text-xl text-[#16153A] mb-4">
                  Your Rights Include
                </h3>

                <ul className="list-disc ml-6 space-y-3 text-gray-700">
                  <li>Request access to your personal information.</li>
                  <li>Request correction of inaccurate information.</li>
                  <li>Request deletion of personal data where applicable.</li>
                  <li>Request restriction of certain processing activities.</li>
                  <li>Withdraw consent where legally permitted.</li>
                </ul>
              </div>

              <div className="border rounded-2xl p-6 bg-pink-50">
                <h3 className="font-bold text-xl text-[#16153A] mb-4">
                  To Exercise These Rights
                </h3>

                <p className="text-gray-700 leading-7">
                  Please contact us using the information provided below. We
                  will respond to your request within a reasonable timeframe in
                  accordance with applicable laws.
                </p>
              </div>
            </div>
          </section>

          {/* Changes */}

          <section
            id="changes"
            className="bg-white rounded-3xl shadow-lg p-10 border"
          >
            <div className="flex items-center gap-4 mb-6">
              <FileText className="text-pink-600" size={34} />
              <h2 className="text-3xl font-bold text-[#16153A]">
                Changes To This Privacy Policy
              </h2>
            </div>

            <p className="text-gray-700 leading-8 text-lg">
              Slee Street Logistics LLC may update this Privacy Policy from time
              to time to reflect changes in our services, technology, legal
              requirements, or business practices. Any updates will be posted on
              this page together with the revised "Last Updated" date. We
              encourage you to review this Privacy Policy periodically.
            </p>
          </section>

          {/* Contact */}

          <section
            id="contact"
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="bg-gradient-to-r from-[#16153A] via-[#2A235A] to-[#FF1493] text-white p-12">
              <h2 className="text-4xl font-bold mb-5">Contact Us</h2>

              <p className="text-lg text-gray-200 leading-8 max-w-3xl">
                If you have any questions about this Privacy Policy or wish to
                exercise your privacy rights, please contact Slee Street
                Logistics LLC using the information below.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                  <h3 className="font-bold text-xl mb-5">
                    Company Information
                  </h3>

                  <div className="space-y-3">
                    <p>
                      <strong>Company:</strong>
                      <br />
                      Slee Street Logistics LLC
                    </p>

                    <p>
                      <strong>Email:</strong>
                      <br />
                      contact@sleestreetlogisticsllc.com
                    </p>

                    <p>
                      <strong>Support:</strong>
                      <br />
                      michael@sleestreetlogisticsllc.com
                    </p>
                  </div>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur">
                  <h3 className="font-bold text-xl mb-5">Business Hours</h3>

                  <div className="space-y-3">
                    <p>Monday – Friday</p>

                    <p>Professional Dispatch Support</p>

                    <p>Response Time: Within 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
