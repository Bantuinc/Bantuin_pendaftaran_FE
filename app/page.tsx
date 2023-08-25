import Image from "next/image";
import { Hind } from "next/font/google";

const hind = Hind({ weight: ["400", "700"], subsets: ["latin"] });

function Page() {
  return (
    <div className="min-h-screen">
      <section
        className="relative min-h-[110vh] bg-[#487B85] flex gap-6 justify-center items-center bg-cover"
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
    </div>
  );
}

export default Page;
