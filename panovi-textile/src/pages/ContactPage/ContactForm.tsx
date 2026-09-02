import { useState } from "react";
import { LuCheck, LuCopy, LuMail, LuSend, LuShieldCheck, LuTimerReset } from "react-icons/lu";
import { useTranslation } from "react-i18next";

type ContactFormProps = {
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function ContactForm({
  title,
  subtitle,
  className = "",
}: ContactFormProps) {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const contactEmail = t("contact.cards.2.line1").trim();
  const mailtoHref = `mailto:${contactEmail}`;

  const copyEmail = async () => {
    if (!navigator.clipboard || !contactEmail) return;

    try {
      await navigator.clipboard.writeText(contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <div>
        <h3 className="text-2xl sm:text-3xl font-light text-neutral-900">
          {title ?? t("contact.form.title")}
        </h3>
        <p className="mt-1 text-sm text-neutral-500 max-w-lg font-light">
          {subtitle ?? t("contact.form.subtitle")}
        </p>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-[0_14px_36px_rgba(0,0,0,0.08)] p-5 sm:p-7">
        <div className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-sky-200/45 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="relative space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700">
            <LuMail className="h-3.5 w-3.5" />
            {t("contact.form.emailCta.badge", { defaultValue: "Direct email" })}
          </div>

          <div className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] uppercase tracking-wide text-neutral-500">
                {t("contact.form.fields.email.label")}
              </p>
              <p className="mt-1 text-base font-medium text-neutral-900 break-all">{contactEmail}</p>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100"
            >
              {copied ? <LuCheck className="h-4 w-4" /> : <LuCopy className="h-4 w-4" />}
              {copied
                ? t("contact.form.emailCta.copied", { defaultValue: "Copied" })
                : t("contact.form.emailCta.copy", { defaultValue: "Copy email" })}
            </button>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-neutral-200 bg-white p-3.5">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800">
                <LuTimerReset className="h-4 w-4 text-sky-600" />
                {t("contact.form.emailCta.responseTitle", { defaultValue: "Fast response" })}
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                {t("contact.form.emailCta.responseBody", {
                  defaultValue: "We usually reply within 24 hours on business days.",
                })}
              </p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-3.5">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-neutral-800">
                <LuShieldCheck className="h-4 w-4 text-emerald-600" />
                {t("contact.form.emailCta.privacyTitle", {
                  defaultValue: "Private communication",
                })}
              </p>
              <p className="mt-1 text-xs text-neutral-500">
                {t("contact.form.emailCta.privacyBody", {
                  defaultValue: "Your request goes straight to our inbox without intermediate form processing.",
                })}
              </p>
            </div>
          </div>

          <a
            href={mailtoHref}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2E7BFF] to-[#1AA3FF] px-5 py-3 text-sm font-medium text-white shadow transition hover:opacity-95 sm:w-auto"
          >
              <LuSend className="h-4 w-4" />
              {t("contact.form.emailCta.open", {
                defaultValue: "Send email",
              })}
          </a>
        </div>
      </div>
    </div>
  );
}
