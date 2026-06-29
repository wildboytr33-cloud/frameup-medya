"use client";

import { useEffect, useRef, useState } from "react";

export default function PresenterSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isInView, setIsInView] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;
        setIsInView(visible);

        if (visible) {
          setShouldLoadVideo(true);
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldLoadVideo) return;

    if (isInView) {
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [isInView, shouldLoadVideo]);

  return (
    <section
      id="sunuculu"
      ref={sectionRef}
      className="relative mx-auto max-w-5xl px-5 py-6 sm:px-6 md:py-8"
    >
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.045] to-white/[0.015] p-4 sm:p-5 md:p-6">
        {/* Glow */}
        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[220px] w-[220px] rounded-full bg-[#FF471C]/10 blur-[80px]" />
        <div className="pointer-events-none absolute left-[-120px] bottom-[-120px] h-[220px] w-[220px] rounded-full bg-[#FF471C]/7 blur-[90px]" />

        <div className="relative z-10 grid items-center gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          {/* SOL TARAF */}
          <div>
            <span className="mb-3 inline-flex rounded-full border border-[#FF471C]/30 bg-[#FF471C]/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-[#FF8A66]">
              Sunuculu Tanıtım Formatı
            </span>

            <h2 className="max-w-2xl text-xl font-bold leading-tight tracking-tight sm:text-2xl md:text-[30px]">
              Markanızı daha net, daha güven veren bir anlatımla{" "}
              <span className="bg-gradient-to-r from-[#FF471C] to-[#FF8A4C] bg-clip-text text-transparent">
                izleyiciye aktarırız.
              </span>
            </h2>

            <p className="mt-3 max-w-2xl text-xs leading-6 text-white/60 sm:text-sm">
              Sunuculu tanıtım videoları; işletmenizin hizmetini, mekanını veya
              ürününü daha anlaşılır ve güven veren bir formatta anlatmak için
              kullanılır. Metin, sunum, çekim ve kurgu sürecini markanıza uygun
              şekilde yönetiriz.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Metin", "Sunum", "Çekim", "Kurgu", "Reklam Formatı"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/35 px-3 py-1.5 text-[10px] font-medium text-white/55"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* SAĞ TARAF - 9:16 VIDEO */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-3 rounded-[24px] bg-[#FF471C]/10 blur-[45px]" />

            <div className="relative mx-auto max-w-[250px] overflow-hidden rounded-[22px] border border-white/10 bg-black/45 p-2.5 sm:max-w-[265px] lg:max-w-[280px]">
              <div className="relative aspect-[9/16] overflow-hidden rounded-[18px] border border-white/10 bg-black">
                {shouldLoadVideo ? (
                  <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    src="/videos/sunuculu-tanitim.mp4"
                    poster="/images/services/reklam-filmi.png"
                    muted
                    loop
                    playsInline
                    preload="none"
                  />
                ) : (
                  <img
                    src="/images/services/reklam-filmi.png"
                    alt="Sunuculu tanıtım video önizleme"
                    className="h-full w-full object-cover"
                  />
                )}

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />

                <div className="pointer-events-none absolute left-3 top-3 rounded-full border border-white/10 bg-black/45 px-2.5 py-1 text-[9px] font-medium text-white/70 backdrop-blur-md">
                  Sunuculu Tanıtım
                </div>

                {!isInView && (
                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#FF471C] shadow-[0_0_30px_rgba(255,71,28,0.45)]">
                      <div className="ml-1 h-0 w-0 border-y-[6px] border-l-[10px] border-y-transparent border-l-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* SADE ALT KISIM */}
              <div className="mt-2 grid grid-cols-3 gap-1.5">
                {["Sunum", "Çekim", "Kurgu"].map((item) => (
                  <div
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-2 py-1.5 text-center"
                  >
                    <div className="mx-auto mb-1 h-1 w-5 rounded-full bg-[#FF471C]" />
                    <div className="text-[9px] font-medium text-white/55">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}