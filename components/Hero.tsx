import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-5 pt-4 pb-6 text-white sm:px-6 sm:pt-5 sm:pb-8 md:pt-10 md:pb-16 lg:flex lg:min-h-[90vh] lg:flex-col lg:justify-center lg:py-16">
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-black/95 to-black/90" />

      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        <div className="absolute right-[10%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl" />

        <img
          src="/images/kamera.png"
          alt=""
          className="absolute right-[5%] top-1/2 w-[1200px] -translate-y-1/2 opacity-10 blur-[80px]"
        />

        <img
          src="/images/kamera.png"
          alt="Antalya video prodüksiyon ve drone çekimi için kullanılan profesyonel Sony FX3 kamera"
          className="absolute right-[8%] top-1/2 w-[750px] -translate-y-1/2 object-contain opacity-90"
          style={{
            filter: "drop-shadow(0 0 80px rgba(255, 115, 0, 0.25))",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-start gap-7 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
        <div className="w-full max-w-[660px]">
          <span className="mb-4 inline-block rounded-full border border-orange-500/30 px-4 py-2 text-xs text-orange-400 sm:px-5 sm:text-sm">
            Antalya Video Prodüksiyon, Drone Çekimi & Reklam Filmi
          </span>

          <h1 className="text-[30px] font-bold leading-[1.08] tracking-tight sm:text-[38px] md:text-5xl lg:text-5xl">
            Antalya’da markanızı{" "}
            <span className="bg-gradient-to-r from-[#FF471C] to-[#FF6B3D] bg-clip-text text-transparent">
              görünür kılan
            </span>
            , değerini yükselten ve satışa dönüştüren video prodüksiyon
            çözümleri.
          </h1>

          <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base md:mt-5 md:text-lg">
            FrameUp Medya; Antalya’da drone çekimi, reklam filmi, tanıtım
            videosu ve sosyal medya içerikleriyle işletmelerin dijitalde daha
            güçlü görünmesini sağlar.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4 md:mt-7">
            <a
              href="#iletisim"
              className="inline-flex justify-center rounded-lg bg-orange-500 px-5 py-3 text-sm font-medium transition hover:scale-[1.02]"
            >
              Projenizi Konuşalım
            </a>

            <a
              href="#hizmetler"
              className="inline-flex justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-medium transition hover:border-orange-400"
            >
              Hizmetleri İncele
            </a>

            <Link
              href="/portfolio"
              className="inline-flex justify-center rounded-lg border border-orange-500/30 px-5 py-3 text-sm font-medium text-orange-400 transition hover:bg-orange-500/10"
            >
              Portföyü İncele →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}