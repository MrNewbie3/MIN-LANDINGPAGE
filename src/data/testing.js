const data = {
  tours: [
    {
      _id: "63b91692fef6c4a4256bb56c",
      name: "Kampung Keramik Dinoyo",
      image: "https://doffie.com/wp-content/uploads/2021/07/Kampung-Wisata-Keramik-Dinoyo-Malang.jpg",
      location: "Jl. Mt Haryono Ix No. 336, Malang, East Java 65144, Indonesia",
      price: 10000,
      vtour: "https://ciboox-id.github.io/keramik-dinoyo/",
      createdAt: "2023-01-07T06:52:02.769Z",
      updatedAt: "2023-01-07T07:01:22.828Z",
      __v: 0,
    },
    {
      _id: "63c0cbfdf96e57bf930c28ef",
      name: "Kampung Topeng Malang",
      image: "https://www.desabisa.com/wp-content/uploads/2019/10/kampung-topeng-malangan-4.jpg",
      location: "Desa Tlogowaru, Kedungkandang, Malang City, East Java 65133",
      price: 10000,
      vtour: "https://ciboox-id.github.io/topeng-malangan/",
      createdAt: "2023-01-13T03:11:57.571Z",
      updatedAt: "2023-01-13T03:11:57.571Z",
      __v: 0,
    },
    {
      _id: "63c0cdb8f96e57bf930c28f1",
      name: "Tanaka Waterfall",
      image: "https://pingpoint.co.id/media/images/Slide6_0hAwExi.original.jpg",
      location: "Arjomulyo, Bangelan, Wonosari, Malang Regency, East Java 65164",
      price: 10000,
      vtour: "https://ciboox-id.github.io/tanaka/",
      createdAt: "2023-01-13T03:19:20.904Z",
      updatedAt: "2023-01-13T03:19:20.904Z",
      __v: 0,
    },
    {
      _id: "63c0cf11f96e57bf930c28f3",
      name: "Kampung Heritage Kajoetangan",
      image: "https://asset.kompas.com/crops/880zyJSrFtey1guA_iMmEF_U9zQ=/0x0:0x0/750x500/data/photo/2022/04/28/626a9710ed36d.jpg",
      location: "JL Jend Basuki Rachmad Jl. Jenderal Bauki Rahmat Gg. 4, Kauman, Kec. Klojen, Kota Malang, Jawa Timur 65119",
      price: 10000,
      vtour: "https://ciboox-id.github.io/kajoetangan/",
      createdAt: "2023-01-13T03:25:05.173Z",
      updatedAt: "2023-01-13T03:25:05.173Z",
      __v: 0,
    },
    {
      _id: "63c0ddb6f96e57bf930c28f7",
      name: "Kampung Warna Warni Jodipan",
      image: "https://lh3.googleusercontent.com/p/AF1QipOZiVHtErKWal1KGjb2sU0Q8VcAoiiLputeFTj-=s680-w680-h510",
      location: "Jl. Zaenal Zakse Jl. Ir. H. Juanda 6, Jodipan, Kec. Blimbing, Kota Malang, Jawa Timur",
      price: 10000,
      vtour: "https://ciboox-id.github.io/jodipan/",
      createdAt: "2023-01-13T04:27:34.886Z",
      updatedAt: "2023-01-13T04:27:34.886Z",
      __v: 0,
    },
    {
      _id: "63c3f4ebfe94bf3621a3947d",
      name: "Kota Malang",
      image: "undefined",
      location: "Malang",
      price: 12000,
      vtour: "../../",
      createdAt: "2023-01-15T12:43:23.701Z",
      updatedAt: "2023-01-15T12:43:23.701Z",
      __v: 0,
    },
  ],
  message: "get all tours",
};

console.log(
  data.tours.find((value) => {
    return (value.name = "Kota Malang");
  })
);
