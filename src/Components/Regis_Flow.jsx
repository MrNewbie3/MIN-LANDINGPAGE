import CardComps from "./Card_Comp";

const items = [
  {
    title: "Daftar Akun",
    value: "Buat akun PPDB",
    status: true,
  },
  {
    title: "Identitas diri",
    value: "Lengkapi data identitas",
    status: false,
  },
  {
    title: "Unggah berkas",
    value: "lengkapi berkas berkas",
    status: false,
  },
  {
    title: "Verifikasi",
    value: "Tunggu hasil verifikasi",
    status: false,
  },
  {
    title: "Lakukan tes",
    value: "Tes dilakukan secara offline",
    status: false,
  },
  {
    title: "Hasil tes",
    value: "Lihat di pengumuman",
    status: false,
  },
];

const RegisFlow = () => {
  return (
    <section>
      <div className="title font-semibold text-lg mb-8">Alur Pendaftaran</div>
      <div className="card-flow-wrapper flex flex-row flex-wrap gap-x-5 gap-y-5">
        {items.map((comps) => {
          return <CardComps title={comps.title} value={comps.value} status={comps.status} />;
        })}
      </div>
    </section>
  );
};
export default RegisFlow;
