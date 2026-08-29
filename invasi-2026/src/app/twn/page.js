import Image from "next/image";

export default function TwnPage() {
  return (
    <main className="flex min-height-[80vh] flex-col items-center justify-center py-20 px-5 text-center">
      {/* Logo INVASI di atas */}
      <div className="mb-8 animate-bounce">
        <Image
          src="/favicon.ico" // Menggunakan logo yang barusan kamu ganti
          alt="Logo INVASI 2026"
          width={150}
          height={150}
          className="mx-auto"
        />
      </div>

      {/* Teks Utama */}
      <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-4">
        COMING SOON
      </h1>

      {/* Teks Tambahan */}
      <p className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto">
        Talkshow & Webinar Nasional INVASI 2026 sedang dalam perjalanan. Siapkan
        dirimu untuk ilmu dan inspirasi yang luar biasa!
      </p>

      {/* Dekorasi Estetik (Opsional) */}
      <div className="mt-10 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
    </main>
  );
}
