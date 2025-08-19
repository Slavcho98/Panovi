import { useEffect, useState } from "react";
import { LuSettings2 } from "react-icons/lu";
import { getCookie, setCookie, deleteCookie } from "../utils/cookies";
import { useTranslation, Trans } from "react-i18next";

type Consent = { analytics: boolean; marketing: boolean; timestamp: number };
const COOKIE_KEY = "cookie_consent_v1";

type CookieConsentProps = {
  policyHref?: string;
  brand?: string;
  className?: string;
  extraPurgeKeys?: string[];
};

export default function CookieConsent({
  policyHref = "/privacy",
  brand,
  className = "",
  extraPurgeKeys = [],
}: CookieConsentProps) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [panel, setPanel] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const raw = getCookie(COOKIE_KEY);
    if (!raw) return void setOpen(true);
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

  function rejectAll() {
    purgeNonEssentialCookies(extraPurgeKeys);
    saveAndClose({ analytics: false, marketing: false, timestamp: Date.now() });
  }

  function saveCustom() {
    if (!analytics || !marketing) purgeNonEssentialCookies(extraPurgeKeys);
    saveAndClose({ analytics, marketing, timestamp: Date.now() });
  }

  if (!open) return null;

  const brandLabel = brand ?? t("cookies.defaultBrand");

  return (
    <div
      className={`fixed bottom-4 left-1/2 z-50 w-[92vw] max-w-3xl -translate-x-1/2 rounded-none border border-[#1070FF]/30 bg-white p-3 sm:p-4 shadow-[0_8px_24px_rgba(16,112,255,0.15)] ${className}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div className="flex items-start gap-2 sm:gap-3">
        <div className="mt-0.5 hidden sm:block rounded-md bg-[#1070FF]/10 p-2 text-[#1070FF]">
          <LuSettings2 className="h-5 w-5" />
        </div>

        <div className="flex-1">
          <h3 id="cookie-consent-title" className="text-xs sm:text-sm font-semibold text-neutral-900">
            {t("cookies.heading", { brand: brandLabel })}
          </h3>

          <p className="mt-1 text-xs sm:text-sm text-neutral-600">
            <Trans i18nKey="cookies.body">
              We use cookies for essential functionality and, with your consent, analytics and marketing. See our{" "}
              <a
                className="text-[#1070FF] underline decoration-[#1070FF]/40 underline-offset-2 hover:opacity-90"
                href={policyHref}
                target="_blank"
                rel="noreferrer"
              >
                privacy policy
              </a>
              .
            </Trans>
          </p>

          {panel && (
            <div className="mt-3 rounded-none border border-[#1070FF]/20 bg-[#1070FF]/5 p-3 sm:p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-medium text-neutral-800">{t("cookies.options.analytics")}</span>
                <label className="inline-flex cursor-pointer items-center gap-2 text-xs sm:text-sm">
                  <input
                    type="checkbox"
                    className="h-3 w-3 sm:h-4 sm:w-4 accent-[#1070FF]"
                    checked={analytics}
                    onChange={(e) => setAnalytics(e.target.checked)}
                  />
                  {t("cookies.allow")}
                </label>
              </div>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs sm:text-sm font-medium text-neutral-800">{t("cookies.options.marketing")}</span>
                <label className="inline-flex cursor-pointer items-center gap-2 text-xs sm:text-sm">
                  <input
                    type="checkbox"
                    className="h-3 w-3 sm:h-4 sm:w-4 accent-[#1070FF]"
                    checked={marketing}
                    onChange={(e) => setMarketing(e.target.checked)}
                  />
                  {t("cookies.allow")}
                </label>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={saveCustom}
                  className="cursor-pointer rounded-full bg-[#1070FF] px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-white hover:bg-[#0e62e6]"
                >
                  {t("cookies.actions.save")}
                </button>
                <button
                  onClick={rejectAll}
                  className="cursor-pointer rounded-full border border-[#1070FF] px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-[#1070FF] hover:bg-[#1070FF]/10"
                >
                  {t("cookies.actions.reject")}
                </button>
                <button
                  onClick={() => setPanel(false)}
                  className="cursor-pointer rounded-full border border-[#1070FF] px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-[#1070FF] hover:bg-[#1070FF]/10"
                >
                  {t("cookies.actions.back")}
                </button>
              </div>
            </div>
          )}

          {!panel && (
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                onClick={acceptAll}
                className="cursor-pointer rounded-full bg-[#1070FF] px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-white hover:bg-[#0e62e6]"
              >
                {t("cookies.actions.accept")}
              </button>
              <button
                onClick={rejectAll}
                className="cursor-pointer rounded-full border border-[#1070FF] px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-[#1070FF] hover:bg-[#1070FF]/10"
              >
                {t("cookies.actions.reject")}
              </button>
              <button
                onClick={() => setPanel(true)}
                className="cursor-pointer rounded-full border border-[#1070FF] px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm font-medium text-[#1070FF] hover:bg-[#1070FF]/10"
              >
                {t("cookies.actions.customize")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function announce(consent: Consent) {
  window.dispatchEvent(new CustomEvent("consentchange", { detail: consent }));
}

function purgeNonEssentialCookies(extraKeys: string[] = []) {
  const candidates = [
    "_ga",
    "_gid",
    "_gat",
    "_gcl_au",
    "_fbp",
    "_tt_enable_cookie",
    "_ttp",
    "_uetsid",
    "_uetvid",
    ...extraKeys,
  ];

  const cookies = document.cookie.split("; ").map((c) => c.split("=")[0]);
  for (const name of cookies) {
    if (candidates.some((prefix) => name.startsWith(prefix))) {
      deleteCookie(name, "/");
      const hostParts = location.hostname.split(".");
      if (hostParts.length > 2) {
        const parent = hostParts.slice(-2).join(".");
        deleteCookie(name, "/", `.${parent}`);
      }
    }
  }
}
