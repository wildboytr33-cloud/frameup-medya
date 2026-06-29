import Image from "next/image";
import Link from "next/link";

const menuItems = [
  {
    label: "Hizmetlerimiz",
    href: "/#hizmetler",
  },
  {
    label: "Projelerimiz",
    href: "/portfolio",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "SSS",
    href: "/#sss",
  },
  {
    label: "İletişim",
    href: "/#iletisim",
  },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      {/* hafif glow */}
      <div className="pointer-events-none absolute left-1/2 top-1 h-12 w-[260px] -translate-x-1/2 rounded-full bg-[#FF471C]/10 blur-2xl"></div>

      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="FrameUP Medya Logo"
            width={250}
            height={85}
            className="h-auto w-[175px] object-contain sm:w-[205px] md:w-[235px]"
            priority
          />
        </Link>

        {/* MENU desktop */}
        <nav className="hidden items-center gap-7 text-sm font-medium text-white/75 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/#iletisim"
          className="rounded-lg bg-gradient-to-r from-[#FF471C] to-[#FF6B3D] px-3 py-2 text-[11px] font-semibold text-white shadow-[0_0_24px_rgba(255,71,28,0.22)] transition hover:scale-[1.02] hover:shadow-[0_0_34px_rgba(255,71,28,0.34)] sm:px-4 sm:py-2.5 sm:text-xs md:px-5 md:py-2.5 md:text-sm"
        >
          Projeni Başlatalım
        </Link>
      </div>
    </header>
  );
}