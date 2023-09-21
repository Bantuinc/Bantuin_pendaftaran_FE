import Image from "next/image";
import Background from "@/public/bg_insight.webp";
import { ubuntu } from "@/fonts/font";
import Link from "next/link";
import { Fingerprint } from "lucide-react";

interface CompetitionDescriptionProps {
  competitionId: string;
  competitionName: string;
  competitionDescription: string;
}

function CompetitionDescription({
  competitionId,
  competitionName,
  competitionDescription,
}: CompetitionDescriptionProps) {
  return (
    <>
      <section className="lg:p-28 lg:pt-40 sm:p-12 sm:pt-40 p-6 pt-40 relative min-h-[100vh] flex gap-6 justify-center items-start">
        <Image
          src={Background}
          alt="Mining Insight Image"
          fill
          priority={true}
          sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
          placeholder="blur"
          quality={50}
          className="z-[-1] object-cover fixed"
        />
        <div className="flex flex-col gap-6 ring-2 md:max-w-[80vw] ring-slate-200/70 shadow-xl rounded-[32px] bg-gradient-to-tr from-[#ccc0] to-[#ccca] backdrop-blur-[12px]">
          <h1
            className={`p-12 text-[#296875] text-center drop-shadow-sm text-5xl ${ubuntu.className} font-bold`}
          >
            SEPTEMBER 25 - FEBRUARY 25, 2023
          </h1>
          <div className="flex lg:flex-row flex-col gap-12 px-9 py-12 md:w-[80vw] w-full">
            <div
              className="p-20 relative flex items-center w-fit -ml-32 md:rounded-r-[75px] rounded-3xl bg-[#d9d9d9]"
              style={{ boxShadow: "-20vw 0 0 #d9d9d9" }}
            >
              <Image src="/logo2.png" height={300} width={400} alt="Hero" />
            </div>
            <div className={`text-left flex flex-col gap-3 md:max-w-[50%]`}>
              <h1 className="mb-6 text-white text-6xl font-bold drop-shadow-md">
                {competitionName}
              </h1>
              <p className="font-bold text-slate-50 md:text-lg text-sm">
                {competitionDescription}
              </p>
              <Link href={`/register/${competitionId}`} className="mt-6 flex-1">
                <button className="py-4 px-8 flex justify-center gap-2 rounded-xl bg-[#FFA31D] w-full font-bold text-lg text-white hover:shadow-lg hover:bg-orange-400 duration-300 ease-in-out transition-all">
                  <Fingerprint className="-ml-4" />
                  <span className="drop-shadow-md">Regist</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen py-4 bg-white text-center">
        <h1 className="text-[9vw] font-black bg-clip-text text-transparent bg-[url('/mining_competition.jpg')]">
          {competitionName}
        </h1>
      </section>
    </>
  );
}

export default CompetitionDescription;
