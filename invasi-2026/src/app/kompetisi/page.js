/* eslint-disable @next/next/no-img-element */
export default function KompetisiPage() {
  const listKompetisi = [
    {
      title: "ESAI MAHASISWA",
      icon: "/aset/icon-esai.webp",
      link: "https://forms.gle/Wtq7DfGMCgy4MAgy7",
    },
    {
      title: "ESAI SISWA",
      icon: "/aset/icon-esai.webp",
      link: "https://forms.gle/mhqPaD8wyNmpSJa68",
    },
    {
      title: "LKTI MAHASISWA",
      icon: "/aset/icon-lkti.webp",
      link: "https://forms.gle/ycGoULncpJ69vETj7",
    },
    {
      title: "LKTI SISWA",
      icon: "/aset/icon-lkti.webp",
      link: "https://forms.gle/z7uFmoi7Etz564Qv5",
    },
    {
      title: "POSTER",
      icon: "/aset/icon-poster.webp",
      link: "https://forms.gle/ykNjtQzLRy9HFqYVA",
    },
    {
      title: "INFOGRAFIS",
      icon: "/aset/icon-infografis.webp",
      link: "https://forms.gle/jfaZFWk5ebuJVZpv5",
    },
  ];

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="idea-logo reveal">
            <img src="/aset/logo.webp" alt="Logo INVASI 2026" />
          </div>
        </div>
      </section>

      <section className="page-header">
        <h1 className="reveal">KATEGORI LOMBA INVASI</h1>
      </section>

      <section className="kompetisi-section">
        <div className="container">
          <div className="kompetisi-grid">
            {listKompetisi.map((item, index) => (
              <div className="kompetisi-card reveal" key={index}>
                <h3>{item.title}</h3>
                <div className="kompetisi-icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="kompetisi-buttons">
                  <button className="btn-outline">SELENGKAPNYA</button>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-fill"
                  >
                    DAFTAR
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
