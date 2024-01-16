"use client";
import Image from "next/image";

function page() {
  return (
    <section className="p-3 pt-28 sm:px-6 sm:pb-12 relative min-h-[110vh] flex flex-col-reverse md:flex-row gap-12 justify-center items-center">
      <Image
        src="/background.webp"
        alt="Hero Login Image"
        fill
        className="z-[-1] object-cover"
        sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
        priority={true}
      />
      <div className="flex flex-col items-center">
        <h1 className="text-6xl mb-6 py-2 text-center font-extrabold bg-gradient-to-r from-[#fffa] to-[#FFF] text-transparent bg-clip-text">
          Our Sponsor
        </h1>
        <div className="flex flex-col items-center gap-3 px-6 py-6 ring-2 ring-slate-200/70 rounded-[32px] bg-gradient-to-tr from-[#ccc6] to-[#cccc] backdrop-blur-[12px] md:w-[80vw] w-full shadow-lg">
          <p className="font-bold text-slate-900 text-sm">SPONSORED BY</p>
          <div className="flex flex-col gap-8 items-center w-full">
            <img
              src="/sponsor/XXL/maa.png"
              alt="MAA"
              width={1600}
              height={1200}
              className="h-[10rem] object-center w-full object-contain bg-white rounded-xl"
            />
            <div className="flex justify-center gap-6 items-center flex-wrap">
              <img
                src={"/sponsor/XL/pertamina.png"}
                width={2339}
                height={1654}
                alt="pertamina"
                className="w-auto md:h-[10rem] h-[6rem] object-contain rounded-2xl"
              />
              <img
                src={"/sponsor/XL/orica.png"}
                width={2615}
                height={1177}
                alt="orica"
                className="w-auto md:h-[10rem] h-[6rem] object-contain bg-white rounded-xl"
              />
            </div>
            <div className="flex items-center">
              <img
                src="/sponsor/L/migc.png"
                width={440}
                height={798}
                alt="migc"
                className="h-auto md:w-[6rem] w-[3rem] object-contain"
              />
            </div>
            <div className="flex justify-center gap-6 items-center flex-wrap">
              <img
                src="/sponsor/M/bib.png"
                width={4207}
                height={542}
                alt="bib"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <img
                src="/sponsor/M/antam.jpg"
                width={2537}
                height={933}
                alt="antam"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <img
                src="/sponsor/M/aptekindo.jpg"
                width={1455}
                height={717}
                alt="Aptekindo"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <img
                src="/sponsor/M/mifa.jpg"
                width={1294}
                height={527}
                alt="Mifa"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <img
                src="/sponsor/M/ptar.jpg"
                width={1250}
                height={1005}
                alt="PTAR"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
            </div>
            <div className="flex justify-center gap-6 items-center flex-wrap">
              <img
                src="/sponsor/S/aldzama.jpg"
                width={1280}
                height={647}
                alt="Aldzama"
                className="sm:h-[3rem] h-[2rem] w-auto object-contain"
              />
              <img
                src="/sponsor/S/BSSR.png"
                width={720}
                height={960}
                alt="BSSR"
                className="sm:h-[3rem] h-[2rem] w-auto object-contain"
              />
              <img
                src="/sponsor/S/dyno.jpg"
                width={1500}
                height={1250}
                alt="DYNO"
                className="sm:h-[3rem] h-[2rem] w-auto object-contain"
              />
              <img
                src="/sponsor/S/gmb.png"
                width={702}
                height={993}
                alt="gmb"
                className="sm:h-[3rem] h-[2rem] w-auto object-contain"
              />
              <img
                src="/sponsor/S/harita.png"
                width={1213}
                height={400}
                alt="Harita"
                className="sm:h-[3rem] h-[2rem] w-auto object-contain"
              />
              <img
                src="/sponsor/S/pama.jpg"
                width={1277}
                height={500}
                alt="Pama"
                className="sm:h-[3rem] h-[2rem] w-auto object-contain"
              />
              <img
                src="/sponsor/S/powerchem.png"
                width={3508}
                height={955}
                alt="PowerChem"
                className="sm:h-[3rem] h-[2rem] w-auto object-contain"
              />
              <img
                src="/sponsor/S/pyc.png"
                width={3000}
                height={3000}
                alt="PYC"
                className="sm:h-[3rem] h-[2rem] w-auto object-contain"
              />
              <img
                src="/sponsor/S/united_tractors.png"
                width={2684}
                height={1512}
                alt="United Tractors"
                className="sm:h-[3rem] h-[2rem] w-auto object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 px-6 py-6 ring-2 ring-slate-200/70 rounded-[32px] bg-gradient-to-tr from-[#ccc6] to-[#cccc] backdrop-blur-[12px] w-fit shadow-lg">
          <p className="font-bold text-slate-900 text-sm">MEDIA PARTNER</p>
          <div className="flex flex-col gap-8 items-center w-full">
            <div className="flex flex-col items-center justify-center gap-6 flex-wrap">
              <Image
                src="/media/anak_tambang.png"
                width={1334}
                height={628}
                alt="ibes"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <Image
                src="/media/beh.png"
                width={600}
                height={600}
                alt="perhapi"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <Image
                src="/media/dunia_tambang.jpg"
                width={600}
                height={600}
                alt="perhapi"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <Image
                src="/media/eventcampus.png"
                width={600}
                height={600}
                alt="perhapi"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <Image
                src="/media/imsn.png"
                width={600}
                height={600}
                alt="perhapi"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <Image
                src="/media/lomba_mahasiswa.png"
                width={600}
                height={600}
                alt="perhapi"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <Image
                src="/media/majalah_tambang.png"
                width={600}
                height={600}
                alt="perhapi"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <Image
                src="/media/media_tambang.jpg"
                width={600}
                height={600}
                alt="perhapi"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <Image
                src="/media/update_lomba_id.jpg"
                width={600}
                height={600}
                alt="perhapi"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <Image
                src="/media/urban_radio.jpg"
                width={600}
                height={600}
                alt="perhapi"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 px-6 py-6 ring-2 ring-slate-200/70 rounded-[32px] bg-gradient-to-tr from-[#ccc6] to-[#cccc] backdrop-blur-[12px] w-fit shadow-lg">
          <p className="font-bold text-slate-900 text-sm">SUPPORTED BY</p>
          <div className="flex flex-col gap-8 items-center w-full">
            <div className="flex justify-center gap-6 items-center flex-wrap">
              <Image
                src="/support/ibes.png"
                width={1334}
                height={628}
                alt="ibes"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
              <Image
                src="/support/perhapi.png"
                width={5294}
                height={4102}
                alt="perhapi"
                className="sm:h-[4rem] h-[3rem] rounded-lg w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default page;
