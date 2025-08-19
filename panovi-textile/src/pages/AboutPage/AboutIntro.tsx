import { Trans } from "react-i18next";

function AboutIntro() {
  return (
    <section>
      <div className="mx-auto w-[90%] pt-10 pb-16 lg:py-32">
        <div className="space-y-4 text-justify text-[15px] sm:text-lg leading-relaxed text-slate-700">
          <p>
            <Trans i18nKey="about.intro.p1">
              <span className="font-semibold" />
              <span className="font-semibold" />
              <span className="font-semibold" />
              <span className="font-semibold" />
              <span className="font-semibold" />
              <span className="font-semibold" />
            </Trans>
          </p>

          <p>
            <Trans i18nKey="about.intro.p2">
              <span className="font-semibold" />
            </Trans>
          </p>

          <p>
            <Trans i18nKey="about.intro.p3">
              <span className="font-semibold" />
              <span className="font-semibold" />
              <span className="font-semibold" />
              <span className="font-semibold" />
            </Trans>
          </p>

          <p>
            <Trans i18nKey="about.intro.p4">
              <span className="font-semibold" />
              <span className="font-semibold" />
              <span className="font-semibold" />
            </Trans>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
