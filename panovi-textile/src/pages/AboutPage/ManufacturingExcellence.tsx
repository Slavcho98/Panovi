import { Trans } from "react-i18next";

function ManufacturingExcellence() {
  return (
    <section>
      <div className="mx-auto w-[90%] pt-10 pb-16 lg:py-32">
        <div className="space-y-4 text-justify text-[15px] sm:text-lg leading-relaxed text-slate-700">
          <p>
            <Trans i18nKey="about.excellence.p1">
              {/* 0 */}<span className="font-semibold" />
              {/* 1 */}<span className="font-semibold" />
              {/* 2 */}<span className="font-semibold" />
              {/* 3 */}<span className="font-semibold" />
            </Trans>
          </p>

          <p>
            <Trans i18nKey="about.excellence.p2">
              {/* 0 */}<span className="font-semibold" />
              {/* 1 */}<span className="font-semibold" />
              {/* 2 */}<span className="font-semibold" />
            </Trans>
          </p>

          <p>
            <Trans i18nKey="about.excellence.p3">
              {/* 0 */}<span className="font-semibold" />
              {/* 1 */}<span className="font-semibold" />
              {/* 2 */}<span className="font-semibold" />
              {/* 3 */}<span className="font-semibold" />
              {/* 4 */}<span className="font-semibold" />
              {/* 5 */}<span className="font-semibold" />
              {/* 6 */}<span className="font-semibold" />
            </Trans>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ManufacturingExcellence;
