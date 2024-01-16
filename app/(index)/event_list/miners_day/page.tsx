import Background from "@/public/bg_insight.webp";
import Background_countdown from "@/public/bg_insight_detail.webp";
import { Calendar, Fingerprint, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function MinersDay() {
  return (
    <>
      <section className=" lg:p-28 lg:pt-40 sm:p-12 sm:pt-40 p-6 pt-40 relative min-h-[100vh] flex gap-6 justify-center items-start">
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
          <div className="flex lg:flex-row flex-col gap-12 px-9 py-12 md:w-[80vw] w-full">
            <div
              className="p-20 relative flex items-center w-fit -ml-32 md:rounded-r-[75px] rounded-3xl bg-[#d9d9d9]"
              style={{ boxShadow: "-20vw 0 0 #d9d9d9" }}
            >
              <Image src="/logo2.png" height={300} width={400} alt="Hero" />
            </div>
            <div className={`text-left flex flex-col gap-3 md:max-w-[50%]`}>
              <h1 className="mb-6 text-white text-6xl font-bold drop-shadow-md">
                Miners{"'"} Day
              </h1>
              <p className="font-bold text-slate-50 md:text-lg text-sm">
                Consists of Bandung tour & outbound and Laboratory tour
              </p>
              <div className="mt-6 flex md:flex-row flex-col gap-3">
                <Link href="#detail" className="flex-1">
                  <button className="py-4 px-8 flex justify-center gap-2 rounded-xl bg-[#FFA31D] w-full font-bold text-lg text-white hover:shadow-lg hover:bg-orange-400 duration-300 ease-in-out transition-all">
                    <Fingerprint className="-ml-4" />
                    <span className="drop-shadow-md">Detail</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-screen py-4 bg-white text-center">
        <h1 className="text-[9vw] font-black bg-clip-text text-transparent bg-[url('/mining_competition.jpg')]">
          Miners{"'"} Day
        </h1>
      </section>
      <section
        id="detail"
        className="relative py-12 px-6 min-h-screen w-full flex flex-col gap-6 justify-center items-center"
      >
        <Image
          src={Background_countdown}
          alt="Countdown Image"
          fill
          sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
          placeholder="blur"
          quality={50}
          className="z-[-1] object-cover fixed"
        />
        <div className="py-8 px-16 flex flex-col items-center gap-12 ring-2 md:max-w-[80vw] ring-slate-200/70 shadow-xl shadow-slate-900/30 rounded-[32px] bg-gradient-to-tr from-[#ccc0] to-[#ccca] backdrop-blur-[12px] text-center">
          <h1 className="md:text-4xl text-3xl text-center font-extrabold text-slate-900 drop-shadow-md">
            Bandung Tour & Outbound
          </h1>
          <p>
            an activity that will invite all of the 14th ISMC Mining Competition
            participants to explore various interesting tourist spots in the
            city of Bandung. In addition, there will be outbound activities that
            will be carried out together with a team consisting of students from
            various universities. During this series of events, participants
            will be given the opportunity to interact with students from other
            universities so that they can share experiences, knowledge and
            culture with each other.
          </p>
          <div className="bg-slate-800 p-6 rounded-xl text-white">
            <div className="flex flex-col items-center gap-3 text-sm">
              <Calendar />
              Friday, 23rd February 2024
              <MapPin />
              Grafika Cikole
            </div>
          </div>
        </div>
        <div className="py-8 px-16 flex flex-col items-center gap-12 ring-2 md:max-w-[80vw] ring-slate-200/70 shadow-xl shadow-slate-900/30 rounded-[32px] bg-gradient-to-tr from-[#ccc0] to-[#ccca] backdrop-blur-[12px] text-center">
          <h1 className="md:text-4xl text-3xl text-center font-extrabold text-slate-900 drop-shadow-md">
            Laboratory Tour
          </h1>
          <p>
            The Laboratory Tour is an activity that provides an opportunity for
            all of the 14th ISMC Mining Competition participants to visit
            laboratories in the Mining Engineering Study Program of ITB. The
            participants will be given an in-depth explanation of laboratory
            facilities and equipment used in teaching and research in the mining
            sector and will be able to see directly the tools used in practicum
            and study their functions and usage in detail.
          </p>
          <div className="bg-slate-800 p-6 rounded-xl text-white">
            <div className="flex flex-col items-center gap-3 text-sm">
              <Calendar />
              Friday, 23rd February 2024
              <MapPin />
              Laboratories at ITB
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MinersDay;
