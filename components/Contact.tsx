const WHATSAPP_NUMBER = "905526154030";

const WHATSAPP_MESSAGE =
  "Merhaba FrameUP Medya, projem hakkında bilgi almak istiyorum.";

const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

const contactItems = [
  {
    label: "WhatsApp",
    value: "+90 552 615 40 30",
    href: WHATSAPP_URL,
    external: true,
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M3 5.5C3 4.12 4.12 3 5.5 3h2.1c.9 0 1.7.58 1.98 1.43l.73 2.18a2 2 0 01-.45 2.03l-.92.92a13.2 13.2 0 005.5 5.5l.92-.92a2 2 0 012.03-.45l2.18.73A2.08 2.08 0 0121 16.4v2.1c0 1.38-1.12 2.5-2.5 2.5C9.94 21 3 14.06 3 5.5z"
        />
      </svg>
    ),
  },
  {
    label: "E-posta",
    value: "info@frameupmedya.com",
    href: "mailto:info@frameupmedya.com",
    external: false,
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 6.5h16v11H4v-11z"
        />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M4 7l8 6 8-6"
        />
      </svg>
    ),
  },
  {
    label: "Konum",
    value: "Antalya, Türkiye",
    href: "https://www.google.com/maps/search/?api=1&query=Antalya",
    external: true,
    icon: (
      <svg
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 21s7-4.8 7-11a7 7 0 10-14 0c0 6.2 7 11 7 11z"
        />

        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M12 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section
      id="iletisim"
      className="relative w-full overflow-hidden bg-black px-5 py-10 text-white sm:px-6 md:py-14"
    >
      {/* Glow */}
      <div className="pointer-events-none absolute left-[-160px] top-20 h-[260px] w-[260px] rounded-full bg-[#FF471C]/8 blur-[110px]" />

      <div className="pointer-events-none absolute bottom-0 right-[-180px] h-[320px] w-[320px] rounded-full bg-[#FF471C]/7 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-5 sm:p-6 md:p-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,71,28,0.12),transparent_34%)]" />

          <div className="relative z-10 grid gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* LEFT */}
            <div>
              <span className="mb-3 inline-flex rounded-full border border-[#FF471C]/30 bg-[#FF471C]/10 px-3.5 py-1.5 text-[11px] font-medium text-[#FF8A66]">
                İletişim
              </span>

              <h2 className="max-w-2xl text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-[36px]">
                Projenizi{" "}
                <span className="bg-gradient-to-r from-[#FF471C] to-[#FF8A4C] bg-clip-text text-transparent">
                  birlikte konuşalım.
                </span>
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-6 text-white/60 sm:text-base">
                Video prodüksiyon, fotoğraf çekimi, sosyal medya içerikleri,
                reklam filmi veya mobil web projeniz için bizimle iletişime
                geçebilirsiniz.
              </p>

              <div className="mt-6">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#FF471C] to-[#FF6B3D] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_28px_rgba(255,71,28,0.22)] transition hover:scale-[1.02] hover:shadow-[0_0_38px_rgba(255,71,28,0.32)] sm:w-auto"
                >
                  WhatsApp’tan Yaz
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-5">
              <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[180px] w-[180px] rounded-full bg-[#FF471C]/10 blur-[70px]" />

              <div className="relative z-10 mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-white/45">
                    FrameUP Medya
                  </div>

                  <h3 className="mt-1 text-base font-semibold text-white">
                    İletişim Bilgileri
                  </h3>
                </div>

                <div className="flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />

                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
                  </span>

                  <span className="text-[10px] font-medium text-emerald-200">
                    Çevrimiçi
                  </span>
                </div>
              </div>

              <div className="relative z-10 space-y-3">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.025] px-4 py-3.5 transition hover:border-[#FF471C]/40 hover:bg-[#FF471C]/[0.035]"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#FF471C]/20 bg-[#FF471C]/10 text-[#FF8A66] transition group-hover:border-[#FF471C]/45 group-hover:bg-[#FF471C]/15 group-hover:text-white">
                      {item.icon}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] text-white/45">
                        {item.label}
                      </div>

                      <div className="mt-0.5 truncate text-sm font-semibold text-white/85">
                        {item.value}
                      </div>
                    </div>

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-black/35 text-xs text-[#FF8A66] transition group-hover:translate-x-0.5 group-hover:border-[#FF471C]/40 group-hover:bg-[#FF471C]/10">
                      →
                    </div>
                  </a>
                ))}
              </div>

              <div className="relative z-10 mt-4 rounded-2xl border border-[#FF471C]/20 bg-[#FF471C]/10 px-4 py-3 text-center text-[12px] leading-5 text-[#FFB199]">
                İlk görüşmede ihtiyacınızı dinleyip proje için en doğru üretim
                yolunu birlikte netleştiririz.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}