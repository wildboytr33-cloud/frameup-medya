import Header from "../../components/Header";
import Contact from "../../components/Contact";
import PortfolioSlider from "../../components/PortfolioSlider";

const portfolioItems = [
  {
    title: "Lüks Konut Tanıtım Filmi",
    category: "Emlak",
    vimeoId: "1183782985",
    coverImage: "/images/portfolio/luks-konut-cover.png",
  },
  {
    title: "Sosyal Medya Reklam Filmi",
    category: "Drone",
    vimeoId: "1184177698",
    coverImage: "/images/portfolio/sosyal-medya-cover.png",
  },
  {
    title: "Trendy Tattoo Stüdyosu Tanıtım Videosu",
    category: "Reklam",
    vimeoId: "1184169937",
    coverImage: "/images/portfolio/trendy-tattoo-cover.png",
  },
  {
    title: "Otel Tanıtım Videosu",
    category: "Kurumsal",
    vimeoId: "1184171381",
    coverImage: "/images/portfolio/otel-cover.png",
  },
  {
    title: "İnşaat Projesi Tanıtım Filmi",
    category: "Tanıtım",
    vimeoId: "1183786558",
    coverImage: "/images/portfolio/insaat-cover.png",
  },
  {
    title: "Sunuculu Tanıtım Projesi",
    category: "Sunuculu",
    vimeoId: "1183773987",
    coverImage: "/images/portfolio/sunuculu-cover.png",
  },
  {
    title: "Güzellik Salonu Reklam Filmi",
    category: "Mekan",
    vimeoId: "1184171913",
    coverImage: "/images/portfolio/guzellik-salonu-cover.png",
  },
  {
    title: "Tattoo Stüdyosu Tanıtım Videosu",
    category: "Kurumsal",
    vimeoId: "1184170850",
    coverImage: "/images/portfolio/tattoo-studyosu-cover.png",
  },
  {
    title: "Lüks Dubleks Daire Tanıtım Filmi",
    category: "Emlak",
    vimeoId: "1184167663",
    coverImage: "/images/portfolio/luks-dubleks-cover.png",
    desc: "Modern mimari ve yüksek prodüksiyon kalitesiyle hazırlanan lüks dubleks daire tanıtım filmi.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black text-white">
        <section className="mx-auto max-w-7xl px-6 pb-14 pt-28 md:pb-16 md:pt-36">
          <div className="max-w-4xl">
            <span className="mb-5 inline-flex items-center rounded-full border border-[#FF471C]/25 bg-[#FF471C]/10 px-4 py-2 text-sm font-medium text-[#FF471C] backdrop-blur">
              FrameUp Medya Portföy
            </span>

            <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Markaların değerini görünür kılan seçili projelerimiz
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 md:text-lg">
              Antalya’da drone çekimi, reklam filmi, emlak tanıtım videosu ve
              kurumsal prodüksiyon alanlarında ürettiğimiz işleri daha güçlü bir
              görsel anlatım ve profesyonel sunum diliyle inceliyorsunuz.
            </p>
          </div>
        </section>

        <PortfolioSlider items={portfolioItems} />

        <Contact />
      </main>
    </>
  );
}