export default function Contact() {
  return (
    <section id="iletisim" className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20">
      
      {/* HEADER */}
      <div className="mb-10 max-w-2xl md:mb-14">
        <span className="inline-block rounded-full border border-[#FF471C]/30 px-4 py-2 text-xs text-[#FF471C]">
          İletişim
        </span>

        <h2 className="mt-3 text-2xl font-bold leading-tight md:text-4xl">
          Projenizi{" "}
          <span className="text-[#FF471C]">konuşalım</span>
        </h2>

        <p className="mt-3 text-sm text-white/60 md:text-base">
          Antalya’da drone çekimi, video prodüksiyon veya tanıtım
          projeniz için hemen iletişime geçin.
        </p>
      </div>

      {/* GRID */}
      <div className="grid gap-4 md:grid-cols-2 md:gap-6">
        
        {/* SOL */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
          <h3 className="text-base font-semibold md:text-lg">
            İletişim Bilgileri
          </h3>

          <div className="mt-5 space-y-4 text-sm md:text-base">
            
            <div>
              <p className="text-white/60">Telefon</p>
              <a href="tel:+905300657997" className="text-white">
                +90 530 065 79 97
              </a>
            </div>

            <div>
              <p className="text-white/60">E-posta</p>
              <a href="mailto:info@frameupmedya.com" className="text-white">
                info@frameupmedya.com
              </a>
            </div>

            <div>
              <p className="text-white/60">Konum</p>
              <p className="text-white">Antalya, Türkiye</p>
            </div>

          </div>
        </div>

        {/* SAĞ */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-5 md:p-6">
          <h3 className="text-base font-semibold md:text-lg">
            Hızlı İletişim
          </h3>

          <div className="mt-5 space-y-3">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/905300657997"
              className="flex items-center justify-center rounded-lg bg-[#FF471C] px-5 py-3 text-sm font-medium transition hover:scale-[1.02]"
            >
              WhatsApp’tan Yaz
            </a>

            {/* TELEFON */}
            <a
              href="tel:+905300657997"
              className="flex items-center justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-medium transition hover:border-[#FF471C]"
            >
              Hemen Ara
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}