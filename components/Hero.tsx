import Image from "next/image";
import Link from "next/link";

const tags = [
  "Video Prodüksiyon",
  "Fotoğraf Çekimi",
  "Sosyal Medya İçerikleri",
  "Mobil Web",
  "Reklam Filmi",
  "Drone Çekimi",
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black text-white">
      {/* Full Width Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black via-[#070707] to-black" />

      {/* Full Width Glow Effects */}
      <div className="pointer-events-none absolute left-[-140px] top-24 z-0 h-[320px] w-[320px] rounded-full bg-[#FF471C]/18 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-0 z-0 h-[420px] w-[420px] rounded-full bg-[#FF471C]/14 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF471C]/10 blur-[150px]" />

      {/* Camera Visual */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden lg:block">
        {/* Blur kamera gölgesi */}
        <Image
          src="/images/kamera.png"
          alt=""
          width={1500}
          height={1100}
          className="absolute right-[5%] top-1/2 w-[1250px] -translate-y-1/2 object-contain opacity-12 blur-[85px]"
          priority
        />

        {/* Ana kamera */}
        <Image
          src="/images/kamera.png"
          alt="FrameUP Medya profesyonel video ve fotoğraf prodüksiyon ekipmanı"
          width={1100}
          height={850}
          className="absolute right-[12%] top-1/2 w-[820px] -translate-y-1/2 object-contain opacity-95"
          style={{
            filter: "drop-shadow(0 0 90px rgba(255, 71, 28, 0.28))",
          }}
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-7xl flex-col justify-center px-5 py-14 sm:px-6 sm:py-16 md:py-20 lg:min-h-[88vh] lg:py-24">
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
          <div className="w-full max-w-[690px]">
            {/* Badge */}
            <span className="mb-5 inline-flex rounded-full border border-[#FF471C]/30 bg-[#FF471C]/10 px-4 py-2 text-xs font-medium text-[#FF8A66] sm:text-sm">
              Video / Fotoğraf Prodüksiyon & Dijital Tanıtım Ajansı
            </span>

            {/* Title */}
            <h1 className="text-[32px] font-bold leading-[1.06] tracking-tight sm:text-[42px] md:text-5xl lg:text-[58px]">
              Markanız için{" "}
              <span className="bg-gradient-to-r from-[#FF471C] to-[#FF8A4C] bg-clip-text text-transparent">
                dikkat çeken
              </span>{" "}
              video, fotoğraf ve dijital tanıtım çözümleri.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-[620px] text-sm leading-7 text-white/70 sm:text-base md:text-lg">
              FrameUP Medya olarak profesyonel çekim, kurgu, sosyal medya
              içerikleri ve mobil web projeleriyle markanızın dijitalde daha
              güçlü görünmesini sağlıyoruz.
            </p>

            {/* Buttons */}
            <div className="mt-7 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/#iletisim"
                className="inline-flex justify-center rounded-lg bg-gradient-to-r from-[#FF471C] to-[#FF6B3D] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(255,71,28,0.25)] transition hover:scale-[1.02] hover:shadow-[0_0_38px_rgba(255,71,28,0.35)]"
              >
                Projeni Başlatalım
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex justify-center rounded-lg border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-[#FF471C]/60 hover:bg-[#FF471C]/10"
              >
                Çalışmaları İncele
              </Link>
            </div>

            {/* Tags */}
            <div className="mt-7 flex max-w-[620px] flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-white/70 transition hover:border-[#FF471C]/40 hover:text-white sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}