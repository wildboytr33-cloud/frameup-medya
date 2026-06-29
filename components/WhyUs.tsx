type WhyUsProps = {
  advantages?: string[];
};

type Advantage = {
  title: string;
  desc: string;
};

type ProductionStep = {
  number: string;
  title: string;
  desc: string;
};

const advantages: Advantage[] = [
  {
    title: "Kreatif Yönlendirme",
    desc: "Markanın ihtiyacına göre içerik fikrini, anlatım dilini ve çekim yaklaşımını netleştiririz.",
  },
  {
    title: "Prodüksiyon Kontrolü",
    desc: "Çekim günü, kadrajdan ışığa kadar sürecin bütün teknik ve görsel kontrolünü sağlarız.",
  },
  {
    title: "Post-Prodüksiyon Disiplini",
    desc: "Kurgu, renk, ses, tempo ve sosyal medya formatlarını tek bir profesyonel akışta tamamlarız.",
  },
  {
    title: "Çoklu Platform Teslimi",
    desc: "İçerikleri Instagram, reklam, web sitesi ve portfolyo kullanımı için ayrı formatlarda hazırlarız.",
  },
];

const productionSteps: ProductionStep[] = [
  {
    number: "01",
    title: "Kreatif Brief",
    desc: "Marka mesajı ve içerik yönü netleşir.",
  },
  {
    number: "02",
    title: "Çekim Rejisi",
    desc: "Sahne, kadraj, ışık ve akış planlanır.",
  },
  {
    number: "03",
    title: "Set Yönetimi",
    desc: "Ekip, ekipman ve görüntü dili kontrol edilir.",
  },
  {
    number: "04",
    title: "Post-Prodüksiyon",
    desc: "Kurgu, renk, ses ve final formatlar hazırlanır.",
  },
];

const controlItems = [
  "Kreatif Akış",
  "Kamera & Işık",
  "Kurgu & Renk",
  "Yayın Formatı",
];

const deliveryItems = [
  "Reklam Filmi",
  "Reels",
  "Fotoğraf",
  "Web Sunumu",
];

const advantageIcons = [
  <svg
    key="creative"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z"
    />
  </svg>,

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
    key="post"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4 5h16v14H4zM8 5v14M16 5v14M4 9h4M16 9h4M4 15h4M16 15h4"
    />
  </svg>,

  <svg
    key="delivery"
    className="h-4 w-4"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M4 6h16v10H4zM8 20h8M10 16v4M14 16v4"
    />
  </svg>,
];

export default function WhyUs(_props: WhyUsProps) {
  return (
    <section
      id="neden-biz"
      className="relative w-full overflow-hidden bg-black px-5 py-10 text-white sm:px-6 md:py-12 lg:py-14"
    >
      {/* glow */}
      <div className="pointer-events-none absolute left-[-180px] top-24 h-[240px] w-[240px] rounded-full bg-[#FF471C]/7 blur-[110px]" />
      <div className="pointer-events-none absolute right-[-180px] bottom-10 h-[280px] w-[280px] rounded-full bg-[#FF471C]/7 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-start gap-7 lg:grid-cols-[1fr_0.88fr] lg:gap-8">
          {/* LEFT */}
          <div>
            <div className="mb-6 max-w-2xl">
              <span className="mb-3 inline-flex rounded-full border border-[#FF471C]/30 bg-[#FF471C]/10 px-3.5 py-1.5 text-[11px] font-medium text-[#FF8A66]">
                Neden FrameUP?
              </span>

              <h2 className="max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[34px]">
                Fikirden teslimata kadar{" "}
                <span className="bg-gradient-to-r from-[#FF471C] to-[#FF8A4C] bg-clip-text text-transparent">
                  tüm prodüksiyon sürecini
                </span>{" "}
                biz yönetiyoruz.
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
                FrameUP’ta içerik üretimi yalnızca çekim gününden ibaret
                değildir. Kreatif fikirden çekim rejisine, set yönetiminden
                post-prodüksiyona kadar markanızın dijital görünümünü tek
                merkezden kontrol ederiz.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {advantages.map((item, index) => (
                <article
                  key={item.title}
                  className="group rounded-xl border border-white/10 bg-white/[0.025] p-3.5 transition duration-300 hover:-translate-y-0.5 hover:border-[#FF471C]/45 hover:bg-[#FF471C]/[0.035]"
                >
                  <div className="mb-3 inline-flex rounded-lg border border-[#FF471C]/25 bg-[#FF471C]/10 p-2 text-[#FF8A66] transition group-hover:border-[#FF471C]/50 group-hover:text-white">
                    {advantageIcons[index]}
                  </div>

                  <h3 className="text-[14px] font-semibold leading-snug text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-5 text-white/60">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 rounded-[24px] bg-[#FF471C]/10 blur-[50px]" />

            <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] p-3.5 shadow-[0_0_40px_rgba(255,71,28,0.08)]">
              <div className="pointer-events-none absolute inset-0 opacity-[0.10]">
                <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:28px_28px]" />
              </div>

              <div className="relative z-10">
                {/* top */}
                <div className="mb-3 flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-3.5 py-2.5 backdrop-blur-xl">
                  <div>
                    <div className="text-[10px] text-white/45">
                      FrameUP Production Control
                    </div>
                    <div className="mt-0.5 text-[13px] font-semibold text-white">
                      Uçtan Uca Prodüksiyon
                    </div>
                  </div>

                  <div className="rounded-full border border-[#FF471C]/25 bg-[#FF471C]/10 px-2.5 py-1 text-[10px] font-medium text-[#FF8A66]">
                    Tam kontrol
                  </div>
                </div>

                {/* step grid */}
                <div className="rounded-xl border border-white/10 bg-black/45 p-3">
                  <div className="mb-3">
                    <div className="text-[10px] text-white/45">
                      Profesyonel Akış
                    </div>
                    <h3 className="mt-0.5 text-[13px] font-semibold text-white">
                      Tüm süreç tek sistemde yönetilir.
                    </h3>
                  </div>

                  <div className="grid gap-2 sm:grid-cols-2">
                    {productionSteps.map((step) => (
                      <div
                        key={step.number}
                        className="rounded-xl border border-white/10 bg-white/[0.035] p-3"
                      >
                        <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-lg border border-[#FF471C]/25 bg-[#FF471C]/10 text-[10px] font-bold text-[#FF8A66]">
                          {step.number}
                        </div>

                        <h4 className="text-[12px] font-semibold text-white">
                          {step.title}
                        </h4>
                        <p className="mt-1 text-[10.5px] leading-4 text-white/52">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* control + delivery */}
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/10 bg-black/45 p-3">
                    <div className="mb-2">
                      <div className="text-[10px] text-white/45">
                        Kontrol Alanları
                      </div>
                      <h3 className="mt-0.5 text-[13px] font-semibold text-white">
                        Tüm detaylar bizde
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {controlItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-2"
                        >
                          <div className="mb-1.5 h-1.5 w-7 rounded-full bg-[#FF471C]" />
                          <div className="text-[10px] font-medium text-white/70">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/10 bg-black/45 p-3">
                    <div className="mb-2">
                      <div className="text-[10px] text-white/45">
                        Teslim Formatları
                      </div>
                      <h3 className="mt-0.5 text-[13px] font-semibold text-white">
                        Her mecraya uygun çıktı
                      </h3>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {deliveryItems.map((item) => (
                        <div
                          key={item}
                          className="rounded-lg border border-white/10 bg-white/[0.035] px-2.5 py-2 text-center"
                        >
                          <div className="mx-auto mb-1.5 h-1.5 w-7 rounded-full bg-[#FF471C]" />
                          <div className="text-[10px] font-medium text-white/70">
                            {item}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* note */}
                <div className="mt-3 rounded-xl border border-[#FF471C]/20 bg-[#FF471C]/10 px-3 py-2.5 text-center text-[10.5px] leading-4 text-[#FFB199]">
                  Amaç: İçeriği parçalı değil, markaya uygun profesyonel bir
                  prodüksiyon sistemiyle yönetmek.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}