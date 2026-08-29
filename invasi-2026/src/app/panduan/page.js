/* eslint-disable @next/next/no-img-element */
export default function PanduanPage() {
  const listPanduan = [
    {
      title: "ESAI MAHASISWA",
      img: "/aset/guideline-esai-mahasiswa.webp",
      link: "https://drive.google.com/drive/folders/1AEPv9paD_Ovqfs5DZAMFqNoANBPVSat8?usp=drive_link",
    },
    {
      title: "POSTER",
      img: "/aset/guideline-poster.webp",
      link: "https://drive.google.com/drive/folders/1DIANRJC9nRBnBcqQ8FOYlBtGw83NH_Gh?usp=drive_link",
    },
    {
      title: "ESAI SISWA",
      img: "/aset/guideline-esai-siswa.webp",
      link: "https://drive.google.com/drive/folders/1ICZTsUzREhig6YJSRAEhkUn5x-AHGLAw?usp=drive_link",
    },
    {
      title: "INFOGRAFIS UMUM",
      img: "/aset/guideline-infografis.webp",
      link: "https://drive.google.com/drive/folders/1HxMJqzIldiYFq4DCjf5pABHcgnuVy5H8?usp=drive_link",
    },
    {
      title: "LKTI MAHASISWA",
      img: "/aset/guideline-lkti-mahasiswa.webp",
      link: "https://drive.google.com/drive/folders/1RlPRvIPK1ybUs5gv1GADsX-509X-vHiz?usp=drive_link",
    },
    {
      title: "LKTI SISWA",
      img: "/aset/guideline-lkti-siswa.webp",
      link: "https://drive.google.com/drive/folders/1lYN2NIuCuEdb0hZEfozBGHTd7HrrhExd?usp=drive_link",
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="idea-logo reveal">
            <img src="/aset/logo.webp" alt="Logo INVASI 2026" />
          </div>
          <h2 className="tagline reveal">
            &quot;Symphony of Youth Innovation: Kolaborasi Generasi Muda dalam
            Sains Interdisipliner dan Pendidikan STEM untuk Pembangunan
            Indonesia yang Berkelanjutan&quot;
          </h2>
        </div>
      </section>

      <section className="page-header">
        <h1 className="reveal">BUKU PANDUAN</h1>
      </section>

      <section className="kompetisi-section">
        <div className="container">
          <div className="kompetisi-grid">
            {listPanduan.map((item, index) => (
              <div className="kompetisi-card reveal" key={index}>
                <h3>{item.title}</h3>
                <div className="panduan-cover">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <img src={item.img} alt={`Guideline ${item.title}`} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
