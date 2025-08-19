import { useForm } from "react-hook-form";
import { LuSend } from "react-icons/lu";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  phone?: string;
  subject?: string;
  message: string;
};

type ContactFormProps = {
  title?: string;
  subtitle?: string;
  onSubmitForm?: (data: FormValues) => Promise<void> | void;
  className?: string;
};

export default function ContactForm({
  title,
  subtitle,
  onSubmitForm,
  className = "",
}: ContactFormProps) {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    try {
      await onSubmitForm?.(values);
      toast.success(t("contact.form.toasts.success"));
      reset({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err: any) {
      toast.error(err?.message || t("contact.form.toasts.fail"));
    }
  };

  const inputCls =
    "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40";
  const labelCls = "text-xs font-medium text-neutral-600";
  const errorCls = "mt-1 text-[11px] text-red-600";

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

      <div className="rounded-3xl border border-neutral-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-5 sm:p-6">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>{t("contact.form.fields.firstName.label")}*</label>
              <input
                className={inputCls}
                placeholder={t("contact.form.fields.firstName.placeholder")}
                {...register("firstName", {
                  required: t("contact.form.fields.firstName.required"),
                })}
              />
              {errors.firstName && <p className={errorCls}>{errors.firstName.message}</p>}
            </div>

            <div>
              <label className={labelCls}>{t("contact.form.fields.lastName.label")}*</label>
              <input
                className={inputCls}
                placeholder={t("contact.form.fields.lastName.placeholder")}
                {...register("lastName", {
                  required: t("contact.form.fields.lastName.required"),
                })}
              />
              {errors.lastName && <p className={errorCls}>{errors.lastName.message}</p>}
            </div>

            <div className="sm:col-span-2">
              <label className={labelCls}>{t("contact.form.fields.email.label")}*</label>
              <input
                className={inputCls}
                type="email"
                placeholder={t("contact.form.fields.email.placeholder")}
                {...register("email", {
                  required: t("contact.form.fields.email.required"),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: t("contact.form.fields.email.invalid"),
                  },
                })}
              />
              {errors.email && <p className={errorCls}>{errors.email.message}</p>}
            </div>

            <div>
              <label className={labelCls}>{t("contact.form.fields.company.label")}*</label>
              <input
                className={inputCls}
                placeholder={t("contact.form.fields.company.placeholder")}
                {...register("company", {
                  required: t("contact.form.fields.company.required"),
                })}
              />
              {errors.company && <p className={errorCls}>{errors.company.message}</p>}
            </div>

            <div>
              <label className={labelCls}>{t("contact.form.fields.phone.label")}*</label>
              <input
                className={inputCls}
                placeholder={t("contact.form.fields.phone.placeholder")}
                {...register("phone", {
                  required: t("contact.form.fields.phone.required"),
                })}
              />
              {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
            </div>

            <div className="sm:col-span-2">
              <label className={labelCls}>{t("contact.form.fields.subject.label")}*</label>
              <input
                className={inputCls}
                placeholder={t("contact.form.fields.subject.placeholder")}
                {...register("subject", {
                  required: t("contact.form.fields.subject.required"),
                })}
              />
              {errors.subject && <p className={errorCls}>{errors.subject.message}</p>}
            </div>

            <div className="sm:col-span-2">
              <label className={labelCls}>{t("contact.form.fields.message.label")}*</label>
              <textarea
                className={`${inputCls} min-h-[120px]`}
                placeholder={t("contact.form.fields.message.placeholder")}
                {...register("message", {
                  required: t("contact.form.fields.message.required"),
                  minLength: { value: 10, message: t("contact.form.fields.message.minLength") },
                })}
              />
              {errors.message && <p className={errorCls}>{errors.message.message}</p>}
            </div>
          </div>

          <div className="mt-5 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center cursor-pointer gap-2 rounded-full bg-gradient-to-r from-[#2E7BFF] to-[#1AA3FF] px-5 py-2.5 text-sm font-medium text-white shadow hover:opacity-95 disabled:opacity-60"
            >
              <LuSend className="h-4 w-4" />
              {isSubmitting ? t("contact.form.submit.sending") : t("contact.form.submit.cta")}
            </button>
          </div>

          <p className="mt-3 text-[11px] text-neutral-500 text-center">
            {t("contact.form.footerNote")}
          </p>
        </form>
      </div>
    </div>
  );
}
