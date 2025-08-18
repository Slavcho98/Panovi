import { NavLink } from "react-router-dom";

type PrivacyPolicyProps = {
  brand?: string;
  company?: string;
  address?: string;
  contactEmail?: string;
  lastUpdated?: string;
  className?: string;
};

export default function PrivacyPolicy({
  brand = "PANOVI",
  company = "PANOVI DOOEL",
  address = "Miro Baraga 56, 2210 Probištip, North Macedonia",
  contactEmail = "panovi.vladimir@gmail.com",
  lastUpdated = "2025-08-18",
  className = "",
}: PrivacyPolicyProps) {
  return (
    <section className={`bg-[#F4F7FC] ${className}`}>
      <div className="mx-auto w-[90%] max-w-5xl px-4 sm:px-6 py-12 sm:py-16">
        <header className="text-center">
          <p className="text-xs tracking-wider text-neutral-500">
            PRIVACY POLICY
          </p>
          <h1 className="mt-1 text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm sm:text-base text-neutral-600">
            This policy explains how {company} (“{brand}”, “we”, “us”) collects,
            uses, and protects your personal data when you visit our website,
            contact us, or use our services.
          </p>
          <p className="mt-2 text-xs text-neutral-500">
            Last updated: {lastUpdated}
          </p>
        </header>

        <nav className="mx-auto mt-8 max-w-3xl rounded-2xl bg-white p-5 ring-1 ring-black/5">
          <ul className="grid gap-2 text-sm text-neutral-700 sm:grid-cols-2">
            <li>
              <a href="#who-we-are" className="hover:text-black">
                Who We Are
              </a>
            </li>
            <li>
              <a href="#data-we-collect" className="hover:text-black">
                Data We Collect
              </a>
            </li>
            <li>
              <a href="#how-we-use" className="hover:text-black">
                How We Use Data
              </a>
            </li>
            <li>
              <a href="#cookies" className="hover:text-black">
                Cookies & Preferences
              </a>
            </li>
            <li>
              <a href="#lawful-basis" className="hover:text-black">
                Lawful Basis
              </a>
            </li>
            <li>
              <a href="#sharing" className="hover:text-black">
                Sharing & Processors
              </a>
            </li>
            <li>
              <a href="#retention" className="hover:text-black">
                Data Retention
              </a>
            </li>
            <li>
              <a href="#rights" className="hover:text-black">
                Your Rights
              </a>
            </li>
            <li>
              <a href="#security" className="hover:text-black">
                Security
              </a>
            </li>
            <li>
              <a href="#children" className="hover:text-black">
                Children’s Privacy
              </a>
            </li>
            <li>
              <a href="#transfers" className="hover:text-black">
                International Transfers
              </a>
            </li>
            <li>
              <a href="#changes" className="hover:text-black">
                Changes to This Policy
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-10 space-y-10">
          <section
            id="who-we-are"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Who We Are
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-700">
              {company}, located at {address}. For privacy-related questions,
              contact us at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-[#1070FF] underline"
              >
                {contactEmail}
              </a>
              .
            </p>
          </section>

          <section
            id="data-we-collect"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Data We Collect
            </h2>
            <ul className="mt-2 list-disc pl-5 text-sm sm:text-base text-neutral-700 space-y-2">
              <li>
                Contact data: name, email, phone, company, subject, message
                (e.g., when you submit our contact form).
              </li>
              <li>
                Usage data: pages viewed, clicks, device/browser information,
                approximate location (via analytics if consented).
              </li>
              <li>
                Cookies: small files stored in your browser to remember
                preferences, enable functionality, and measure performance.
              </li>
            </ul>
          </section>

          <section
            id="how-we-use"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              How We Use Your Data
            </h2>
            <ul className="mt-2 list-disc pl-5 text-sm sm:text-base text-neutral-700 space-y-2">
              <li>Responding to inquiries and providing customer support.</li>
              <li>Improving our website, services, and user experience.</li>
              <li>
                Operating analytics and performance measurement (with consent).
              </li>
              <li>
                Complying with legal obligations and protecting our rights.
              </li>
            </ul>
          </section>

          <section
            id="cookies"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Cookies & Preferences
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-700">
              We use essential cookies for core functionality. With your
              consent, we also use analytics and marketing cookies. You can
              manage your preferences anytime via the cookie banner. See our{" "}
              <NavLink
                to="/privacy#cookies"
                className="text-[#1070FF] underline"
              >
                Cookie section
              </NavLink>
              .
            </p>
          </section>

          <section
            id="lawful-basis"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Lawful Basis
            </h2>
            <ul className="mt-2 list-disc pl-5 text-sm sm:text-base text-neutral-700 space-y-2">
              <li>
                Consent: for analytics/marketing cookies and similar processing.
              </li>
              <li>
                Legitimate interests: improving services, site security, fraud
                prevention.
              </li>
              <li>
                Contract/performance: communicating about your inquiries or
                orders.
              </li>
              <li>
                Legal obligations: compliance with applicable laws and
                regulations.
              </li>
            </ul>
          </section>

          <section
            id="sharing"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Sharing & Processors
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-700">
              We may share data with trusted service providers (e.g., hosting,
              analytics) who process data on our behalf under data processing
              agreements. We do not sell your personal data.
            </p>
          </section>

          <section
            id="retention"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Data Retention
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-700">
              We retain personal data only for as long as necessary for the
              purposes described above, or as required by law. Retention periods
              vary by data type and context.
            </p>
          </section>

          <section
            id="rights"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Your Rights
            </h2>
            <ul className="mt-2 list-disc pl-5 text-sm sm:text-base text-neutral-700 space-y-2">
              <li>
                Access, rectification, deletion, or restriction of your personal
                data.
              </li>
              <li>
                Objection to processing and the right to data portability where
                applicable.
              </li>
              <li>
                Withdrawal of consent at any time for consent-based processing.
              </li>
              <li>
                Lodge a complaint with your local supervisory authority if you
                believe your rights are infringed.
              </li>
            </ul>
          </section>

          <section
            id="security"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Security
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-700">
              We implement technical and organizational measures to protect
              personal data. No system is completely secure, but we work to
              safeguard information against unauthorized access, alteration, or
              disclosure.
            </p>
          </section>

          <section
            id="children"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Children’s Privacy
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-700">
              Our site is not directed to children under the age required by
              applicable law. We do not knowingly collect personal data from
              children. If you believe a child has provided data, contact us to
              request deletion.
            </p>
          </section>

          <section
            id="transfers"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              International Transfers
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-700">
              If personal data is transferred outside your country, we implement
              appropriate safeguards (e.g., standard contractual clauses) to
              protect your data in accordance with applicable laws.
            </p>
          </section>

          <section
            id="changes"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Changes to This Policy
            </h2>
            <p className="mt-2 text-sm sm:text-base text-neutral-700">
              We may update this policy from time to time. The “Last updated”
              date at the top indicates the latest revision. Material changes
              will be highlighted on this page.
            </p>
          </section>

          <section
            id="contact"
            className="rounded-2xl bg-white p-6 ring-1 ring-black/5"
          >
            <h2 className="text-xl sm:text-2xl font-semibold text-neutral-900">
              Contact
            </h2>
            <dl className="mt-2 grid gap-2 text-sm sm:text-base text-neutral-700">
              <div>
                <dt className="font-medium text-neutral-900">Company</dt>
                <dd>{company}</dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-900">Address</dt>
                <dd>{address}</dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-900">Email</dt>
                <dd>
                  <a
                    href={`mailto:${contactEmail}`}
                    className="text-[#1070FF] underline"
                  >
                    {contactEmail}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-col gap-2 sm:flex-row">
              <NavLink
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-700 hover:border-neutral-400"
              >
                Back to Home
              </NavLink>
              <NavLink
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-5 py-2.5 text-sm font-medium text-white hover:opacity-95"
              >
                Contact Us
              </NavLink>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
