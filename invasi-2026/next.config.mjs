/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      // === PANITIA INVASI 2026: EDIT LINK DI BAWAH INI ===

      // Pendaftaran Lomba
      {
        source: "/competition",
        destination: "/kompetisi",
        permanent: true,
      },
      {
        source: "/PendaftaranEsaiMahasiswa",
        destination: "https://forms.gle/Wtq7DfGMCgy4MAgy7",
        permanent: true,
      },
      {
        source: "/PendaftaranEsaiSiswa",
        destination: "https://forms.gle/mhqPaD8wyNmpSJa68",
        permanent: true,
      },
      {
        source: "/PendaftaranLKTIMahasiswa",
        destination: "https://forms.gle/ycGoULncpJ69vETj7",
        permanent: true,
      },
      {
        source: "/PendaftaranLKTISiswa",
        destination: "https://forms.gle/z7uFmoi7Etz564Qv5",
        permanent: true,
      },
      {
        source: "/PendaftaranPoster",
        destination: "https://forms.gle/ykNjtQzLRy9HFqYVA",
        permanent: true,
      },
      {
        source: "/PendaftaranInfografis",
        destination: "https://forms.gle/jfaZFWk5ebuJVZpv5",
        permanent: true,
      },

      // Pengumpulan Karya
      {
        source: "/PengumpulanEsaiSiswa",
        destination: "https://forms.gle/4Q8TNg2igeYirNX6A",
        permanent: true,
      },
      {
        source: "/PengumpulanLKTIMahasiswa",
        destination: "https://forms.gle/1xVPoArtz14JRGHz6",
        permanent: true,
      },
      {
        source: "/PengumpulanLKTISiswa",
        destination: "https://forms.gle/Qtn4iSSY3rmtKPhW8",
        permanent: true,
      },
      {
        source: "/PengumpulanPoster",
        destination: "https://forms.gle/CQyz5apF8ekFpgJ1A",
        permanent: true,
      },
      {
        source: "/PengumpulanInfografis",
        destination: "https://forms.gle/nGoRQA5Qu6hKWobn8",
        permanent: true,
      },

      // Berkas & Media
      {
        source: "/PamfletINVASI2026",
        destination:
          "https://drive.google.com/drive/folders/1BvlwBAAa7ZGNr7SKDfaWyHxQ3B69g1VL",
        permanent: true,
      },
      {
        source: "/LogoINVASI2026",
        destination:
          "https://drive.google.com/drive/folders/1-XTNQXk26Kceaj6i90oFSlSqM-gHtjMI?usp=drive_link",
        permanent: true,
      },
      {
        source: "/TwibbonINVASI2026",
        destination:
          "https://drive.google.com/drive/folders/1fuQbw_iI743EnqyGm3ZnNYoaDU5qDAJh?usp=drive_link",
        permanent: true,
      },

      // Folder Berkas/Syarat Lomba
      {
        source: "/BerkasEsaiMahasiswa",
        destination:
          "https://drive.google.com/drive/folders/10QzKEzjS6lnh3JILEtQrz4raX2vNJB1a?usp=drive_link",
        permanent: true,
      },
      {
        source: "/BerkasEsaiSiswa",
        destination:
          "https://drive.google.com/drive/folders/1SNLZaYyqtss_7oU3n25a4XlC8SKra6QV?usp=drive_link",
        permanent: true,
      },
      {
        source: "/BerkasLKTIMahasiswa",
        destination:
          "https://drive.google.com/drive/folders/1e8zYCkPVBthrd7UOn-CAJ-bwoMRGa3wN?usp=drive_link",
        permanent: true,
      },
      {
        source: "/BerkasLKTISiswa",
        destination:
          "https://drive.google.com/drive/folders/18Zk5xxN3wGhj5NiUBagNuFRq-pQheDC2?usp=drive_link",
        permanent: true,
      },
      {
        source: "/BerkasPoster",
        destination:
          "https://drive.google.com/drive/folders/1L25leMutm2YitR5kePiIEMAhg_gBM2jj?usp=sharing",
        permanent: true,
      },
      {
        source: "/BerkasInfografis",
        destination:
          "https://drive.google.com/drive/folders/1AIAsMddRX5Ce4sfUfdC78sZgN0bSuwiL?usp=drive_link",
        permanent: true,
      },

      // Booklet / Guideline Lomba
      {
        source: "/guidelineinvasi2026",
        destination:
          "https://drive.google.com/drive/folders/1Ih8dJWX0Mbl6ryZfZMk6yLojLmvsgKjF?usp=drive_link",
        permanent: true,
      },
      {
        source: "/GuidelineLKTISiswa",
        destination:
          "https://drive.google.com/drive/folders/1lYN2NIuCuEdb0hZEfozBGHTd7HrrhExd?usp=drive_link",
        permanent: true,
      },
      {
        source: "/GuidelineLKTIMahasiswa",
        destination:
          "https://drive.google.com/drive/folders/1RlPRvIPK1ybUs5gv1GADsX-509X-vHiz?usp=drive_link",
        permanent: true,
      },
      {
        source: "/GuidelineEsaiSiswa",
        destination:
          "https://drive.google.com/drive/folders/1ICZTsUzREhig6YJSRAEhkUn5x-AHGLAw?usp=drive_link",
        permanent: true,
      },
      {
        source: "/GuidelineEsaiMahasiswa",
        destination:
          "https://drive.google.com/drive/folders/1AEPv9paD_Ovqfs5DZAMFqNoANBPVSat8?usp=drive_link",
        permanent: true,
      },
      {
        source: "/GuidelinePoster",
        destination:
          "https://drive.google.com/drive/folders/1DIANRJC9nRBnBcqQ8FOYlBtGw83NH_Gh?usp=drive_link",
        permanent: true,
      },
      {
        source: "/GuidelineInfografis",
        destination:
          "https://drive.google.com/drive/folders/1HxMJqzIldiYFq4DCjf5pABHcgnuVy5H8?usp=drive_link",
        permanent: true,
      },
      //TWN INVASI 2026
      {
        source: "/PendaftaranTWNinvasi2026",
        destination: "https://forms.gle/W1ksF6hk7kecEjUt9",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
