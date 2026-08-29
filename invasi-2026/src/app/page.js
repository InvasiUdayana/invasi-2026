/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="idea-logo reveal">
            <img src="/aset/logo.webp" alt="Logo INVASI 2026" />
          </div>
          <h2 className="tagline reveal">
            "Symphony of Youth Innovation: Kolaborasi Generasi Muda dalam Sains
            Interdisipliner dan Pendidikan STEM untuk Pembangunan Indonesia yang
            Berkelanjutan"
          </h2>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <h2 className="section-title reveal">APA ITU INVASI ?</h2>
          <p className="section-desc reveal">
            INVASI merupakan wadah kolaboratif bagi generasi muda untuk
            mengembangkan dan mengimplementasikan ide-ide inovatif berbasis
            sains, merespons tantangan pembangunan berkelanjutan, serta
            berkontribusi secara nyata dalam mendukung pencapaian Tujuan
            Pembangunan Berkelanjutan menuju terwujudnya Indonesia Emas 2045.
          </p>
        </div>
      </section>

      <section className="webinar-section">
        <div className="container">
          <h2 className="section-title reveal">
            TALKSHOW &<br />
            WEBINAR NASIONAL
          </h2>
          <p className="section-desc reveal">
            Talk Show dan Webinar Nasional INVASI 2026 memberikan berbagai
            manfaat bagi peserta, antara lain e-sertifikat, poin SKP, serta
            kesempatan untuk berinteraksi langsung dengan narasumber yang
            kompeten di bidangnya. Kegiatan ini menjadi wadah untuk memperluas
            wawasan, memperkaya perspektif, serta berpartisipasi dalam forum
            diskusi berskala nasional yang menghadirkan gagasan konstruktif dan
            inspiratif.
          </p>
        </div>
      </section>

      <section className="benefit-section">
        <div className="container">
          <h2 className="section-title benefit-main-title reveal">
            BENEFIT DAFTAR INVASI
          </h2>

          <div className="benefit-grid">
            <div className="benefit-card reveal">
              <h3>MENAMBAH RELASI</h3>
              <p>
                Peserta dapat bertemu dan berinteraksi dengan individu dari
                berbagai daerah dan latar belakang, sehingga memperluas jejaring
                akademik maupun profesional.
              </p>
            </div>
            <div className="benefit-card reveal">
              <h3>Menambah Pengalaman Akademik</h3>
              <p>
                Kegiatan lomba, KTI, serta webinar nasional memberikan
                pengalaman berharga dalam mengembangkan kemampuan berpikir
                ilmiah, analisis, dan akademis yang relevan dengan dunia
                akademik.
              </p>
            </div>
            <div className="benefit-card reveal">
              <h3>Pengembangan Potensi Diri</h3>
              <p>
                Melalui INVASI, peserta didorong untuk mengasah kreativitas,
                kemampuan berpikir kritis, serta keberanian dalam menyampaikan
                gagasan inovatif secara konstruktif.
              </p>
            </div>
            <div className="benefit-card reveal">
              <h3>E-sertifikat</h3>
              <p>
                Setiap peserta akan mendapatkan e-sertifikat resmi sebagai bukti
                partisipasi.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
