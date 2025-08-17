import { useEffect, useState } from "react";

import { LuSettings2 } from "react-icons/lu";
import { getCookie, setCookie } from "../utils/cookies";

type Consent = {
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
};

const COOKIE_KEY = "cookie_consent_v1";

type CookieConsentProps = {
  policyHref?: string;
  brand?: string;
  className?: string;
};

export default function CookieConsent({
  policyHref = "/privacy",
  brand = "this site",
  className = "",
}: CookieConsentProps) {
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const raw = getCookie(COOKIE_KEY);
    if (!raw) {
      setOpen(true);
      return;
    }
    try {
      const c: Consent = JSON.parse(raw);
      announce(c);
    } catch {
      setOpen(true);
    }
  }, []);

  function saveAndClose(next: Consent) {
    setCookie(COOKIE_KEY, JSON.stringify(next), { days: 180, sameSite: "Lax" });
    announce(next);
    setOpen(false);
    setPanel(false);
  }

  function acceptAll() {
    saveAndClose({ analytics: true, marketing: true, timestamp: Date.now() });
  }

  function essentialOnly() {
    saveAndClose({ analytics: false, marketing: false, timestamp: Date.now() });
  }

  function saveCustom() {
    saveAndClose({ analytics, marketing, timestamp: Date.now() });
  }

  if (!open) return null;

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 rounded-2xl border border-neutral-200 bg-white p-4 shadow-lg ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 hidden sm:block rounded-xl bg-neutral-100 p-2 text-neutral-700">
          <LuSettings2 className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <h3
            id="cookie-consent-title"
            className="text-sm font-semibold text-neutral-900"
          >
            Cookies on {brand}
          </h3>
          <p className="mt-1 text-sm text-neutral-600">
            We use cookies for essential functionality and, with your consent,
            analytics and marketing. See our{" "}
            <a
              className="underline hover:no-underline"
              href={policyHref}
              target="_blank"
              rel="noreferrer"
            >
              privacy policy
            </a>
            .
          </p>

          {panel && (
            <div className="mt-3 rounded-xl border border-neutral-200 bg-neutral-50 p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-800">
                  Analytics
                </span>
                <label className="inline-flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="size-4 accent-neutral-900"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  Allow
                </label>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-800">
                  Marketing
                </span>
                <label className="inline-flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="checkbox"
                    className="size-4 accent-neutral-900"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                  />
                  Allow
                </label>
              </div>
            </div>
          )}

          <div className="mt-3 flex flex-wrap gap-2">
            {panel ? (
              <>
                <button
                  onClick={saveCustom}
                  className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-black"
                >
                  Save choices
                </button>
                <button
                  onClick={() => setPanel(false)}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:border-neutral-400"
                >
                  Back
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={acceptAll}
                  className="rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:bg-black"
                >
                  Accept all
                </button>
                <button
                  onClick={essentialOnly}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:border-neutral-400"
                >
                  Essential only
                </button>
                <button
                  onClick={() => setPanel(true)}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-700 hover:border-neutral-400"
                >
                  Customize
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function announce(consent: Consent) {
  window.dispatchEvent(new CustomEvent("consentchange", { detail: consent }));
}
