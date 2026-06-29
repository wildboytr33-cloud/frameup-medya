type Service = {
  title: string;
  desc: string;
  tags: string[];
  image: string;
  imagePosition?: string;
};

type ServicesProps = {
  services?: Service[];
};

const frameupServices: Service[] = [
  {
    title: "Video & Fotoğraf Prodüksiyon",
    desc: "Markanız için profesyonel video, fotoğraf, drone ve ürün çekimleri hazırlıyoruz.",
    tags: ["Video", "Fotoğraf", "Drone"],
    image: "/images/services/video-produksiyon.png",
    imagePosition: "center",
  },
  {
    title: "Sosyal Medya İçerikleri",
    desc: "Reels, kısa video ve kampanya içerikleriyle dijitalde dikkat çeken işler üretiyoruz.",
    tags: ["Reels", "Shorts", "Kampanya"],
    image: "/images/services/sosyal-medya.png",
    imagePosition: "center",
  },
  {
    title: "Reklam Filmi & Tanıtım Videosu",
    desc: "İşletmenizin mesajını satışa ve güvene hizmet eden güçlü videolara dönüştürüyoruz.",
    tags: ["Reklam", "Tanıtım", "Kurgu"],
    image: "/images/services/reklam-filmi.png",
    imagePosition: "center",
  },
  {
    title: "Mobil Web & Dijital Tanıtım",
    desc: "İşletmenize özel mobil uyumlu tanıtım sayfaları ve dijital vitrinler tasarlıyoruz.",
    tags: ["Mobil Web", "Landing Page", "Vitrin"],
    image: "/images/services/mobil-web.png",
    imagePosition: "center",
  },
  {
    title: "İşletme & Mekan Çekimleri",
    desc: "Restoran, otel, klinik, mağaza ve kurumsal alanları güçlü görsellerle öne çıkarıyoruz.",
    tags: ["Restoran", "Otel", "Klinik"],
    image: "/images/services/mekan-cekimi.png",
    imagePosition: "center",
  },
  {
    title: "Marka Tanıtım Süreci",
    desc: "Yeni veya büyüyen markalar için içerik, çekim ve dijital tanıtım sürecini planlıyoruz.",
    tags: ["Strateji", "Planlama", "Büyüme"],
    image: "/images/services/marka-sureci.png",
    imagePosition: "left center",
  },
];

const serviceIcons = [
  <svg
    key="production"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>,

  <svg
    key="social"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7 8h10M7 12h6m-6 4h8M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H9l-4 3v-3H5a2 2 0 01-2-2V7a2 2 0 012-2z"
    />
  </svg>,

  <svg
    key="ad"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v18c-1.543-1.766-5.067-3-9.168-3H7a4.001 4.001 0 01-1.564-7.683z"
    />
  </svg>,

  <svg
    key="web"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>,

  <svg
    key="location"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M3 12l9-9 9 9M5 10v10h14V10M9 20v-6h6v6"
    />
  </svg>,

  <svg
    key="strategy"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M9 6l6 6-6 6M4 6l6 6-6 6M15 6h5M15 18h5"
    />
  </svg>,
];

export default function Services(_props: ServicesProps) {
  return (
    <section
      id="hizmetler"
      className="relative w-full overflow-hidden bg-black px-5 py-10 text-white sm:px-6 md:py-12 lg:py-14"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-[-180px] top-20 h-[240px] w-[240px] rounded-full bg-[#FF471C]/7 blur-[100px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-10 h-[260px] w-[260px] rounded-full bg-[#FF471C]/6 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mx-auto mb-7 max-w-2xl text-center md:mb-8">
          <span className="mb-3 inline-flex rounded-full border border-[#FF471C]/30 bg-[#FF471C]/10 px-3.5 py-1.5 text-[11px] font-medium text-[#FF8A66]">
            Hizmetlerimiz
          </span>

          <h2 className="mx-auto max-w-2xl text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-[32px]">
            Markanızın dijitalde{" "}
            <span className="bg-gradient-to-r from-[#FF471C] to-[#FF8A4C] bg-clip-text text-transparent">
              daha güçlü görünmesi
            </span>{" "}
            için üretiriz.
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-6 text-white/60 sm:text-sm">
            Video, fotoğraf, sosyal medya, reklam filmi ve mobil web
            çözümlerini tek merkezde planlayarak işletmenize profesyonel bir
            dijital görünüm kazandırıyoruz.
          </p>
        </div>

        {/* CARDS */}
        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {frameupServices.map((service, index) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.025] transition duration-300 hover:-translate-y-0.5 hover:border-[#FF471C]/45 hover:bg-[#FF471C]/[0.035]"
            >
              {/* Image Strip */}
              <div className="relative h-[88px] overflow-hidden border-b border-white/10 bg-white/[0.03]">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-65 transition duration-500 group-hover:scale-105 group-hover:opacity-85"
                  style={{
                    objectPosition: service.imagePosition || "center",
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black/88" />
                <div className="absolute inset-0 bg-[#FF471C]/10 opacity-0 transition duration-300 group-hover:opacity-100" />

                <div className="absolute left-3 top-3 inline-flex rounded-lg border border-[#FF471C]/25 bg-black/55 p-2 text-[#FF8A66] backdrop-blur-md transition group-hover:border-[#FF471C]/50 group-hover:text-white">
                  {serviceIcons[index]}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex min-h-[150px] flex-col p-4">
                <h3 className="text-[14px] font-semibold leading-snug text-white md:text-[15px]">
                  {service.title}
                </h3>

                <p className="mt-2 text-[12px] leading-5 text-white/60 md:text-[13px]">
                  {service.desc}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-black/40 px-2 py-1 text-[9px] font-medium text-white/55"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ALT BLOK */}
        <div className="mx-auto mt-6 grid max-w-4xl gap-3 md:mt-7 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-center">
            <div className="text-sm font-bold text-white">Stratejik Plan</div>
            <p className="mt-1 text-[11px] leading-4 text-white/55">
              Her işletmeye özel yaklaşım
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-center">
            <div className="text-sm font-bold text-white">
              Profesyonel Üretim
            </div>
            <p className="mt-1 text-[11px] leading-4 text-white/55">
              Çekim, kurgu ve dijital sunum
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-center">
            <div className="text-sm font-bold text-white">
              Dijital Görünürlük
            </div>
            <p className="mt-1 text-[11px] leading-4 text-white/55">
              Güçlü marka algısı
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}