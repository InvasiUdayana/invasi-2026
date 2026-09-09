import Image from "next/image";
import Link from "next/link";

export default function TwnPage() {
  return (
    <main className="relative left-1/2 min-h-screen w-screen -translate-x-1/2 flex flex-col items-center px-4 pt-28 pb-20 overflow-hidden">
      {/* LOGO */}
      <div className="flex w-full justify-center mb-8 animate-logo">
        <Image
          src="/aset/logo.webp"
          alt="Logo INVASI 2026"
          width={220}
          height={220}
          priority
          className="h-auto w-[180px] md:w-[220px] drop-shadow-2xl"
        />
      </div>

      {/* PAMFLET */}
      <div className="flex w-full justify-center animate-pamflet">
        <div className="relative group w-full max-w-[600px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 hover:scale-[1.02]">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSeQLk2L--XqIStEf3CnkIYPMSWIBu8RfaJswRqxTDjPisR0vQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-full"
          >
            <Image
              src="/aset/TWN.webp"
              alt="Pamflet Talkshow & Webinar Nasional INVASI 2026"
              width={800}
              height={1000}
              priority
              className="h-auto w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="translate-y-4 rounded-full bg-blue-600 px-6 py-3 text-lg font-bold text-white shadow-lg transition-all duration-300 group-hover:translate-y-0">
                Klik untuk Mendaftar 🚀
              </span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
