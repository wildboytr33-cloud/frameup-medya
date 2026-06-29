import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyUs from "../components/WhyUs";
import PresenterSection from "../components/PresenterSection";
import Contact from "../components/Contact";
import BackgroundParticles from "../components/BackgroundParticles";

export default function Home() {
  const services = [
    {
      title: "Video & Fotoğraf Prodüksiyon",
      desc: "Markalar için profesyonel video, fotoğraf, drone ve ürün çekimleri hazırlıyoruz.",
    },
    {
      title: "Sosyal Medya İçerikleri",
      desc: "Reels, kısa video ve kampanya içerikleriyle dijitalde dikkat çeken işler üretiyoruz.",
    },
    {
      title: "Reklam Filmi & Tanıtım Videosu",
      desc: "İşletmenizin mesajını satışa ve güvene hizmet eden güçlü videolara dönüştürüyoruz.",
    },
    {
      title: "Mobil Web & Dijital Tanıtım",
      desc: "İşletmelere özel mobil uyumlu tanıtım sayfaları ve dijital vitrinler tasarlıyoruz.",
    },
    {
      title: "İşletme & Mekan Çekimleri",
      desc: "Restoran, otel, klinik, mağaza ve kurumsal alanları güçlü görsellerle öne çıkarıyoruz.",
    },
    {
      title: "Marka Tanıtım Süreci",
      desc: "Yeni veya büyüyen markalar için içerik, çekim ve dijital tanıtım sürecini planlıyoruz.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "FrameUp Medya",
    url: "https://frameupmedya.com",
    description:
      "Antalya’da video prodüksiyon, fotoğraf çekimi, reklam filmi, sosyal medya içerikleri, mobil web ve dijital tanıtım çözümleri sunan kreatif prodüksiyon ajansı.",
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
    sameAs: ["https://www.instagram.com/frameupmedya"],
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

        <section className="mx-auto max-w-4xl px-5 py-8 text-center text-sm leading-7 text-white/70 sm:px-6 md:py-10 md:text-base md:leading-8">
          FrameUP Medya; video prodüksiyon, fotoğraf çekimi, sosyal medya
          içerikleri, reklam filmi ve mobil web çözümlerini tek merkezde
          planlayarak markaların dijitalde daha güçlü görünmesini sağlar.
        </section>

        <Services />
        <WhyUs />
        <PresenterSection />

        <Contact />
      </main>
    </>
  );
}