import Image from "next/image";
import { Hind, Roboto } from "next/font/google";
import GalleryImage from "@/components/GalleryImage";

const hind = Hind({ weight: ["400", "700"], subsets: ["latin"] });
export const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

function Page() {
  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-[110vh] bg-[url('/background.png')] flex gap-6 justify-center items-center bg-cover"
        // style={{
        //   backgroundImage: "url('/hero.jpeg')",
        // }}
      >
        {/* <div className="absolute flex p-16 gap-12 items-start justify-between w-full h-full top-0 left-0"> */}
        <div className="flex px-9 py-16 ring-1 ring-slate-200/70 rounded-[25px] bg-gradient-radial from-[#fff6] to-[#FFFFFF03] backdrop-blur-sm">
          <Image src="/logo2.png" height={300} width={400} alt="Hero" />
        </div>

        <div className="max-w-[50%]">
          <h1 className="text-6xl py-2 font-extrabold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text">
            The 14th Indonesian Student Mining Competition
          </h1>
          <h3
            className={`mt-6 text-2xl font-bold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text ${hind.className}`}
          >
            Welcome, let’s embrace unity, knowledge, and excellence here.
            #MineTheFuture
          </h3>
        </div>
        {/* </div> */}
      </section>
      <section
        className="p-16 min-h-screen flex flex-col justify-center items-center object-cover"
        style={{
          background:
            "linear-gradient(#f8d09eaa, #f8d09eaa),url('/texture.png')",
        }}
      >
        <div className="w-fit">
          <h1
            className={`text-[#2A6876] text-6xl font-bold ${roboto.className}`}
          >
            Gallery
          </h1>
          <Underline />
        </div>
        <div className="p-24 flex flex-col justify-center w-full ring-2 ring-slate-100 rounded-[25px] bg-gradient-radial from-[#fff6] to-[#FFFFFF03] backdrop-blur-[8px]">
          <GalleryImage />
        </div>
      </section>
      <section className="p-16 min-h-screen flex flex-col items-center justify-center bg-[#296875]">
        <div className="mb-12 w-fit">
          <h1 className={`text-6xl font-bold text-white ${roboto.className}`}>
            FAQ
          </h1>
          <Underline />
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-[#F8CF9D] rounded-3xl">
            <div className="px-10 py-5 text-[#425B5F] font-medium bg-[#FFA31D] border-2 border-yellow-400 rounded-3xl text-xl">
              What is ISMC?
            </div>
            <div className="px-10 py-5">
              ISMC is a competition for mining engineering students in
              Indonesia. This competition is held by Himpunan Mahasiswa Teknik
              Pertambangan Universitas Pembangunan Nasional Veteran Yogyakarta.
            </div>
          </div>
          <div className="bg-[#F8CF9D] rounded-3xl">
            <div className="px-10 py-5 text-[#425B5F] font-medium bg-[#9FB9B9] border-2 border-gray-400 rounded-3xl text-xl">
              What is ISMC?
            </div>
            <div className="px-10 py-5">
              ISMC is a competition for mining engineering students in
              Indonesia. This competition is held by Himpunan Mahasiswa Teknik
              Pertambangan Universitas Pembangunan Nasional Veteran Yogyakarta.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;

const Underline = () => {
  return <div className="mt-3 mb-9 w-full h-2 bg-[#FFA31D] rounded-full"></div>;
};
