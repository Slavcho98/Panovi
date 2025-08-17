import { useForm } from "react-hook-form";
import { LuSend } from "react-icons/lu";

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
  title = "Send Us a Message",
  subtitle = "Ready to discuss your project? Fill out the form below and our team will get back to you within 24 hours.",
  onSubmitForm,
  className = "",
}: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>();

  const onSubmit = async (values: FormValues) => {
    try {
      await onSubmitForm?.(values);
    } finally {
      reset({ firstName: "", lastName: "", email: "", company: "", phone: "", subject: "", message: "" });
    }
  };

  const inputCls =
    "w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40";
  const labelCls = "text-xs font-medium text-neutral-600";
  const errorCls = "mt-1 text-[11px] text-red-600";

  return (
    <div className={`space-y-3 ${className}`}>
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold text-neutral-900">
          {title}
        </h3>
        <p className="mt-1 text-sm text-neutral-500 max-w-lg">{subtitle}</p>
      </div>

      <div className="rounded-3xl border border-neutral-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-5 sm:p-6">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>First Name*</label>
              <input
                className={inputCls}
                placeholder="Your first name"
                {...register("firstName", { required: "First name is required" })}
              />
              {errors.firstName && <p className={errorCls}>{errors.firstName.message}</p>}
            </div>

            <div>
              <label className={labelCls}>Last Name*</label>
              <input
                className={inputCls}
                placeholder="Your last name"
                {...register("lastName", { required: "Last name is required" })}
              />
              {errors.lastName && <p className={errorCls}>{errors.lastName.message}</p>}
            </div>

            <div className="sm:col-span-2">
              <label className={labelCls}>Email Address*</label>
              <input
                className={inputCls}
                type="email"
                placeholder="you@email.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                })}
              />
              {errors.email && <p className={errorCls}>{errors.email.message}</p>}
            </div>

            <div>
              <label className={labelCls}>Company Name*</label>
              <input
                className={inputCls}
                placeholder="Your company name"
                {...register("company", { required: "Company is required" })}
              />
              {errors.company && <p className={errorCls}>{errors.company.message}</p>}
            </div>

            <div>
              <label className={labelCls}>Phone Number*</label>
              <input
                className={inputCls}
                placeholder="+ 389 xx xxx xxx"
                {...register("phone", { required: "Phone is required" })}
              />
              {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
            </div>

            <div className="sm:col-span-2">
              <label className={labelCls}>Subject*</label>
              <input
                className={inputCls}
                placeholder="What can we help you with?"
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && <p className={errorCls}>{errors.subject.message}</p>}
            </div>

            <div className="sm:col-span-2">
              <label className={labelCls}>Message*</label>
              <textarea
                className={`${inputCls} min-h-[120px]`}
                placeholder="Tell us about your project requirements, quantities, timeline, and any specific needs."
                {...register("message", { required: "Message is required", minLength: { value: 10, message: "Please add a bit more detail" } })}
              />
              {errors.message && <p className={errorCls}>{errors.message.message}</p>}
            </div>
          </div>

          <div className="mt-5 text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#2E7BFF] to-[#1AA3FF] px-5 py-2.5 text-sm font-medium text-white shadow hover:opacity-95 disabled:opacity-60"
            >
              <LuSend className="h-4 w-4" />
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>

          <p className="mt-3 text-[11px] text-neutral-500 text-center">
            * Required fields. We’ll respond within 24 hours during business days.
          </p>

          {isSubmitSuccessful && (
            <p className="mt-2 text-xs text-emerald-600">Thanks! Your message has been sent.</p>
          )}
        </form>
      </div>
    </div>
  );
}
