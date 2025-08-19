import { useTranslation, Trans } from "react-i18next";
import videoSrc from "../../assets/video_1.mp4";

const VideoPlaceholder = () => (
  <div className="relative aspect-video w-full rounded-[28px] overflow-hidden ring-1 ring-white/15 shadow-lg">
    <video
      className="h-full w-full object-cover"
      src={videoSrc}
      autoPlay
      muted
      loop
      playsInline
    />
  </div>
);

export default function StandOutSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#16283b] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <VideoPlaceholder />
          <div className="space-y-3">
            <p className="text-[14px] font-light uppercase tracking-widest mb-1">
              {t("about.standOut.kicker")}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight uppercase">
              {t("about.standOut.title")}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed text-slate-200 font-light">
              <Trans i18nKey="about.standOut.body">
                <span className="font-semibold" />
                <span className="font-semibold" />
                <span className="font-semibold" />
              </Trans>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
