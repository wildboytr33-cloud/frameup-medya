type Service = {
  title: string;
  desc: string;
};

type ServicesProps = {
  services: Service[];
};

const serviceIcons = [
  <svg key="drone" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" /></svg>,
  <svg key="video" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
  <svg key="ad" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6" /></svg>,
  <svg key="realestate" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l7-7 7 7" /></svg>,
  <svg key="social" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 20l4-16" /></svg>,
  <svg key="presenter" className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14a7 7 0 00-7 7" /></svg>,
];

export default function Services({ services }: ServicesProps) {
  return (
    <section id="hizmetler" className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 md:py-16 lg:py-20">
      
      {/* HEADER */}
      <div className="mb-7 max-w-3xl md:mb-10">
        <span className="inline-block mb-3 rounded-full border border-[#FF471C]/30 px-4 py-2 text-xs text-[#FF471C]">
          Hizmetler
        </span>

        <h2 className="text-xl font-bold leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
          Markanız için{" "}
          <span className="text-[#FF471C]">
            satış ve görünürlük
          </span>{" "}
          odaklı medya çözümleri
        </h2>

        <p className="mt-3 text-sm text-white/60 md:text-base">
          Antalya&apos;da işletmeler için hazırladığımız içerikler dikkat çekmek,
          güven oluşturmak ve profesyonel görünüm sağlamak için planlanır.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 md:gap-5">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="group rounded-xl border border-white/10 bg-black/70 p-4 transition hover:border-[#FF471C]/40 md:p-5"
          >
            <div className="mb-3 inline-flex rounded-lg border border-[#FF471C]/20 p-2">
              {serviceIcons[index]}
            </div>

            <h3 className="text-sm font-semibold text-white md:text-base">
              {service.title}
            </h3>

            <p className="mt-2 text-xs leading-6 text-white/60 md:text-sm">
              {service.desc}
            </p>

            {/* ❌ MOBİLDE YOK */}
            <div className="mt-4 hidden md:block">
              <div className="inline-flex items-center text-xs text-white/70">
                Detaylı Bilgi →
              </div>
            </div>

          </article>
        ))}
      </div>

      {/* ALT BLOK */}
      <div className="mt-8 grid gap-4 text-center md:grid-cols-3 md:mt-10">
        <div>
          <div className="text-base font-bold md:text-lg">Özel Çözüm</div>
          <p className="text-xs text-white/60">Her işletmeye özel plan</p>
        </div>
        <div>
          <div className="text-base font-bold md:text-lg">Profesyonel Ekip</div>
          <p className="text-xs text-white/60">Deneyimli kadro</p>
        </div>
        <div>
          <div className="text-base font-bold md:text-lg">Hızlı Teslim</div>
          <p className="text-xs text-white/60">Zamanında teslim</p>
        </div>
      </div>

    </section>
  );
}