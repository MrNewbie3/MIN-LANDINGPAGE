const KartuPeserta = () => {
  return (
    <div className="flex justify-center uppercase w-full items-center h-screen">
      <div className=" border-2 border-black  w-80 h-fit px-4 py-8">
        <section className="top-title text-center">
          <p className="text-base font-bold">Kartu Peserta Pemetaan</p>
          <p className="text-lg font-bold">PPDB MIN 1 Kota Malang</p>
          <p className="text-sm font-light">tahun ajaran 2023/2024</p>
        </section>
        <div className="divider w-full h-1 my-2 bg-black"></div>
        <section className="content text-center mb-6">
          <p className="text-sm font-light">No. Pemetaan :350020933</p>
          <figure className=" w-full flex justify-center">
            <img src="{}" alt="" className="w-28 h-44" />
          </figure>
          <p className="name font-bold">Prayoga Adi Setyawan</p>
        </section>
        <section className="jadwal">
          <p className="text-sm font-semibold">Jadwal Pemetaan</p>
          <table className="border-collapse border border-1 border-black w-full">
            <tr className="">
              <th className="border-1 border border-black">Hari/tgl</th>
              <th className="border-1 border border-black">Pukul</th>
            </tr>
            <tr>
              <td className="border-1 border border-black">2 Maret 2022 </td>
              <td className="border-1 border border-black">07.00 WIB </td>
            </tr>
          </table>
        </section>
      </div>
    </div>
  );
};

export default KartuPeserta;
