import Image from "next/image";
import Link from "next/link";

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
            alt="FrameUp Logo"
            width={200}
            height={60}
            className="h-auto w-[150px] object-contain sm:w-[170px] md:w-[190px]"
            priority
          />
        </Link>

        {/* MENU (desktop) */}
        <nav className="hidden gap-8 text-sm font-medium text-white/80 md:flex">
          <Link href="/#hizmetler" className="transition hover:text-white">
            Hizmetler
          </Link>
          <Link href="/portfolio" className="transition hover:text-white">
            Projeler
          </Link>
          <Link href="/#neden-biz" className="transition hover:text-white">
            Neden Biz
          </Link>
          <Link href="/#sunuculu" className="transition hover:text-white">
            Sunuculu Tanıtım
          </Link>
          <Link href="/#iletisim" className="transition hover:text-white">
            İletişim
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href="/#iletisim"
          className="rounded-lg bg-gradient-to-r from-[#FF471C] to-[#FF6B3D] px-3 py-2 text-[11px] font-semibold text-white transition hover:scale-[1.02] sm:px-4 sm:py-2.5 sm:text-xs md:px-5 md:py-2.5 md:text-sm"
        >
          Teklif Al
        </Link>

      </div>
    </header>
  );
}