import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";
import BackgroundParticles from "../components/BackgroundParticles";

export default function Home() {
  const services = [
    {
      title: "Drone Çekimi",
      desc: "Antalya’da işletmeler için profesyonel drone çekimi ile iç ve dış mekanları etkileyici açılarla öne çıkarıyoruz.",
    },
    {
      title: "Video Prodüksiyon",
      desc: "Markanızın hikayesini güçlü kurgu, kaliteli çekim ve profesyonel anlatımla bir araya getiriyoruz.",
    },
    {
      title: "Reklam Filmi",
      desc: "Satış ve görünürlük odaklı reklam filmleri ile işletmenizin dijital etkisini güçlendiriyoruz.",
    },
    {
      title: "Emlak Tanıtım Videosu",
      desc: "Gayrimenkul ve proje tanıtımlarında güven oluşturan, satış sürecini destekleyen video içerikler üretiyoruz.",
    },
    {
      title: "Sosyal Medya İçerikleri",
      desc: "Reels ve kısa video formatlarına uygun, dikkat çeken ve markayı öne çıkaran içerikler hazırlıyoruz.",
    },
    {
      title: "Sunuculu Tanıtım",
      desc: "Profesyonel sunuculu tanıtım videoları ile işletmenizin mesajını daha net, güvenilir ve etkili anlatıyoruz.",
    },
  ];

  const advantages = [
    "İşletmenize özel çekim planı",
    "İç ve dış mekanı hikaye odaklı anlatım",
    "Satış ve güven oluşturan içerik yaklaşımı",
    "Drone destekli profesyonel görüntü kalitesi",
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FrameUp Medya",
    url: "https://frameupmedya.com",
    description:
      "Antalya’da video prodüksiyon, drone çekimi, reklam filmi, tanıtım videosu ve sosyal medya içerikleri üreten medya prodüksiyon ajansı.",
    areaServed: {
      "@type": "City",
      name: "Antalya",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Antalya",
      addressCountry: "TR",
    },
    telephone: "+90 530 065 79 97",
    email: "info@frameupmedya.com",
    sameAs: [
      "https://www.instagram.com/frameupmedya"
    ],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.desc,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <BackgroundParticles />
      <Header />

      <main className="relative z-10 min-h-screen bg-black/95 text-white">
        <Hero />
        <Services services={services} />
        <WhyUs advantages={advantages} />

        <section
          id="sunuculu"
          className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 md:py-20"
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/2 p-6 sm:p-8 md:p-12">
            <div className="mb-4">
              <span className="inline-block rounded-full border border-[#FF471C]/30 bg-[#FF471C]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-[#FF471C] sm:px-4 sm:py-2 sm:text-xs">
                Sunuculu Tanıtım Videoları
              </span>
            </div>

            <h2 className="text-xl font-bold leading-tight sm:text-2xl md:text-4xl lg:text-5xl">
              İşletmenizi anlatmanın en güven veren yollarından biri:{" "}
              <span className="bg-gradient-to-r from-[#FF471C] to-[#FF6B3D] bg-clip-text text-transparent">
                sunuculu tanıtım videoları
              </span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-white/70 sm:text-base md:text-lg md:leading-8">
              Profesyonel sunucu eşliğinde hazırlanan tanıtım videoları,
              markanızın mesajını daha net ve daha güvenilir şekilde aktarır.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <div className="text-lg font-semibold sm:text-xl">
                  Profesyonel
                </div>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">
                  Deneyimli sunucu kadrosu
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <div className="text-lg font-semibold sm:text-xl">
                  Güvenilir
                </div>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">
                  Marka itibarını güçlendirir
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5">
                <div className="text-lg font-semibold sm:text-xl">Etkili</div>
                <p className="mt-1 text-xs text-white/60 sm:text-sm">
                  Yüksek dönüşüm sağlar
                </p>
              </div>
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </>
  );
}