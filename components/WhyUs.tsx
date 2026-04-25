type WhyUsProps = {
  advantages: string[];
};

const advantageIcons = [
  <svg key="plan" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
  </svg>,
  <svg key="story" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>,
  <svg key="sales" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2" />
  </svg>,
  <svg key="quality" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4" />
  </svg>,
];

export default function WhyUs({ advantages }: WhyUsProps) {
  return (
    <section id="neden-biz" className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16 lg:py-20">
      
      {/* HEADER */}
      <div className="mb-7 max-w-3xl md:mb-10">
        <span className="mb-3 inline-block rounded-full border border-[#FF471C]/30 px-4 py-2 text-xs text-[#FF471C]">
          Neden FrameUp Medya
        </span>

        <h2 className="text-xl font-bold leading-tight sm:text-2xl md:text-4xl">
          Sadece video çekmiyoruz, işletmenizi{" "}
          <span className="text-[#FF471C]">
            daha güçlü gösteriyoruz
          </span>
        </h2>

        <p className="mt-3 text-sm text-white/60 md:text-base">
          Her çekimi sadece estetik değil, ticari etki açısından da planlıyoruz.
          Hikaye, kurgu ve güçlü görsel dil ile markanızı yukarı taşıyoruz.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid gap-3 md:grid-cols-2 md:gap-5">
        {advantages.map((item, index) => (
          <div
            key={item}
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-[#FF471C]/40 md:p-5"
          >
            <div className="mb-3 inline-flex rounded-lg border border-[#FF471C]/20 p-2">
              {advantageIcons[index]}
            </div>

            <h3 className="text-sm font-semibold md:text-base">
              {item}
            </h3>

            <p className="mt-2 text-xs leading-6 text-white/60 md:text-sm">
              {index === 0 && "İşletmenize özel çekim planı oluşturuyoruz."}
              {index === 1 && "Hikaye odaklı anlatım ile değer katıyoruz."}
              {index === 2 && "Satış ve güven oluşturan içerikler üretiyoruz."}
              {index === 3 && "Profesyonel ekipman ve kalite sunuyoruz."}
            </p>
          </div>
        ))}
      </div>

      {/* 🔥 SADECE DESKTOP */}
      <div className="hidden md:block mt-10 rounded-xl border border-white/10 bg-white/[0.04] p-6">
        <div className="grid gap-6 text-center md:grid-cols-3">
          <div>
            <div className="text-xl font-bold">%100</div>
            <p className="text-sm text-white/60">Memnuniyet</p>
          </div>
          <div>
            <div className="text-xl font-bold">7/24</div>
            <p className="text-sm text-white/60">Destek</p>
          </div>
          <div>
            <div className="text-xl font-bold">50+</div>
            <p className="text-sm text-white/60">Proje</p>
          </div>
        </div>
      </div>

    </section>
  );
}