"use client";

import { useMemo, useState } from "react";

type PortfolioItem = {
  title: string;
  category: string;
  vimeoId: string;
  coverImage: string;
  desc?: string;
};

export default function PortfolioSlider({ items }: { items: PortfolioItem[] }) {
  const [current, setCurrent] = useState(0);
  const [soundOn, setSoundOn] = useState(true);

  const prev = () => {
    setCurrent((index) => (index === 0 ? items.length - 1 : index - 1));
  };

  const next = () => {
    setCurrent((index) => (index === items.length - 1 ? 0 : index + 1));
  };

  const visibleItems = useMemo(() => {
    const prevIndex = current === 0 ? items.length - 1 : current - 1;
    const nextIndex = current === items.length - 1 ? 0 : current + 1;

    return {
      prev: items[prevIndex],
      current: items[current],
      next: items[nextIndex],
    };
  }, [current, items]);

  if (!items?.length) return null;

  return (
    <section
      id="projeler"
      className="relative z-20 mx-auto max-w-7xl px-5 pb-16 sm:px-6 md:pb-24"
    >
      <div className="mb-6 md:mb-10">
        <h2 className="text-xl font-bold md:text-3xl">Projelerimiz</h2>
        <p className="mt-2 text-sm text-white/60 md:text-base">
          Gerçek işler, güçlü sunum ve profesyonel prodüksiyon kalitesi.
        </p>
      </div>

      {/* MOBİL: 3'LÜ GRID - DİREKT VİDEO LİNK */}
      <div className="relative z-50 grid grid-cols-3 gap-3 md:hidden">
        {items.map((item) => (
          <a
            key={item.vimeoId}
            href={`https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&muted=1&playsinline=1&title=0&byline=0&portrait=0`}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-50 block overflow-hidden rounded-xl border border-white/10 bg-black text-left"
          >
            <div className="relative aspect-[9/16]">
              <img
                src={item.coverImage}
                alt={item.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/70 text-xs text-white">
                  ▶
                </div>
              </div>

              <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-2">
                <p className="line-clamp-2 text-[10px] font-semibold leading-3 text-white">
                  {item.title}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* DESKTOP: SLIDER */}
      <div className="hidden md:block">
        <div className="relative flex items-center justify-center gap-4 lg:gap-6">
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-black/70 px-4 py-3 text-white/80 backdrop-blur-xl transition hover:border-[#FF471C]/50 hover:text-white lg:left-2"
            aria-label="Önceki proje"
          >
            ←
          </button>

          <div className="translate-y-5 opacity-55">
            <CoverCard item={visibleItems.prev} small />
          </div>

          <DesktopVideoCard
            item={visibleItems.current}
            soundOn={soundOn}
            onToggleSound={() => setSoundOn((value) => !value)}
          />

          <div className="translate-y-5 opacity-55">
            <CoverCard item={visibleItems.next} small />
          </div>

          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 z-30 -translate-y-1/2 rounded-full border border-white/10 bg-black/70 px-4 py-3 text-white/80 backdrop-blur-xl transition hover:border-[#FF471C]/50 hover:text-white lg:right-2"
            aria-label="Sonraki proje"
          >
            →
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2.5">
          {items.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current ? "w-8 bg-[#FF471C]" : "w-2.5 bg-white/20"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function DesktopVideoCard({
  item,
  soundOn,
  onToggleSound,
}: {
  item: PortfolioItem;
  soundOn: boolean;
  onToggleSound: () => void;
}) {
  return (
    <article className="relative w-[280px] overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_30px_100px_rgba(0,0,0,0.6)] lg:w-[300px]">
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <iframe
          key={`${item.vimeoId}-${soundOn ? "sound" : "muted"}-desktop`}
          src={`https://player.vimeo.com/video/${item.vimeoId}?autoplay=1&muted=${
            soundOn ? 0 : 1
          }&loop=1&autopause=0&title=0&byline=0&portrait=0`}
          className="absolute inset-0 h-full w-full"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title={item.title}
        />

        <button
          type="button"
          onClick={onToggleSound}
          className="absolute bottom-4 right-4 z-20 rounded-full border border-white/15 bg-black/60 px-3 py-2 text-xs font-medium text-white backdrop-blur"
        >
          {soundOn ? "Ses Açık" : "Ses Aç"}
        </button>

        <Badge category={item.category} />
      </div>

      <CardText item={item} />
    </article>
  );
}

function CoverCard({ item, small }: { item: PortfolioItem; small?: boolean }) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:border-[#FF471C]/35 ${
        small ? "w-[220px] scale-[0.94]" : "w-full"
      }`}
    >
      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <img
          src={item.coverImage}
          alt={item.title}
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

        <Badge category={item.category} />

        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black/60 text-sm text-white backdrop-blur">
            ▶
          </div>
        </div>
      </div>

      <CardText item={item} />
    </article>
  );
}

function Badge({ category }: { category: string }) {
  return (
    <div className="absolute left-4 top-4 z-10 rounded-full border border-[#FF471C]/30 bg-black/45 px-3 py-1 text-xs font-medium text-[#FF471C] backdrop-blur">
      {category}
    </div>
  );
}

function CardText({ item }: { item: PortfolioItem }) {
  return (
    <div className="border-t border-white/10 bg-gradient-to-b from-[#1b0d08] to-[#130a07] p-4">
      <h3 className="text-sm font-semibold text-white">{item.title}</h3>
      {item.desc ? (
        <p className="mt-2 text-xs leading-6 text-white/60">{item.desc}</p>
      ) : null}
    </div>
  );
}