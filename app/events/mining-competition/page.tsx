import { hind, ubuntu } from "@/app/layout";
import Image from "next/image";

function MiningCompetition() {
  return (
    <>
      <section className="lg:p-28 lg:pt-40 sm:p-12 sm:pt-40 p-6 pt-40 relative min-h-[140vh] flex gap-6 justify-center items-start">
        <Image
          src="/background_mining_competition.webp"
          alt="Mining Competition Image"
          fill
          className="z-[-1] object-cover fixed"
        />
        <div className="flex flex-col gap-6 ring-2 md:max-w-[80vw] ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccc7] to-[#ccc] backdrop-blur-sm">
          <h1
            className={`p-12 text-[#296875] text-center text-5xl ${ubuntu.className} font-bold`}
          >
            SEPTEMBER 25 - FEBRUARY 25, 2023
          </h1>

          <div className="flex lg:flex-row flex-col justify-between items-start gap-6 pl-12 lg:pl-0 pr-12 pb-40">
            <div
              className="p-20 relative w-fit -ml-32 rounded-r-[75px] bg-[#D9D9D9]"
              style={{ boxShadow: "-20vw 0 0 #d9d9d9" }}
            >
              <Image src="/logo2.png" height={300} width={400} alt="Hero" />
            </div>
            <p
              className={`${hind.className} lg:max-w-[50%] text-[#346973] font-bold text-center text-3xl`}
              style={{ lineHeight: "1.5em" }}
            >
              Several competitions based on the mining profession, including the
              surface mining competitions and underground mining competitions,
              among students of mining engineering, both domestic or overseas.
            </p>
          </div>
        </div>
      </section>
      <section>
        <Image
          src="/mining_competition.webp"
          alt="mining competition"
          width={1512}
          height={153}
        />
      </section>
    </>
  );
}

export default MiningCompetition;
