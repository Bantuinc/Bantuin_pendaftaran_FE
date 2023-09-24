'use client';
import Image from "next/image";
import { hind } from "@/fonts/font";
import {useEffect, useState} from "react";

function AboutUs() {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    setBgColor(bgColor);
  }, [bgColor]);
  return (
    <>
      <section className="p-12 pt-28 md:p-6 relative min-h-[110vh] flex flex-col-reverse md:flex-row gap-12 justify-center items-center">
        <Image
          src="/background.webp"
          alt="Hero Login Image"
          fill
          className="z-[-1] object-cover"
          sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
          priority={true}
          onLoadingComplete={(result) => {
            if (result.naturalWidth === 0) {
              // Broken image
              setBgColor("bg-[#296875]");
            }
          }}
          onError={() => {
            setBgColor("bg-[#296875]");
          }}
        />
        <div className="flex px-9 py-16 ring-2 ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccc3] to-[#ccca] backdrop-blur-sm">
          <h1
            className={`${hind.className} text-6xl font-bold text-[#3f595edb]`}
          >
            About Us
          </h1>
        </div>

        <div className="md:max-w-[50%] antialiased drop-shadow-xl">
          <h3
            className={`mt-6 text-2xl font-bold bg-gradient-to-r from-[#ffffffdb] to-[#FFF] text-transparent bg-clip-text drop-shadow-md ${hind.className}`}
          >
            ISMC stands for Indonesian Student Mining Competition that has been
            held for the 13th time. In 2024, we will hold the 14th Indonesian
            Student Mining Competition (ISMC XIV). ISMC XIV is an
            international-scale student mining competition, stemming from the
            experience of the HMT-ITB team participating in the AusIMM Students
            Mining Competition held by the University of Queensland (UQ) in 1996
            in Brisbane, Australia. Furthermore, ISMC is the biggest and oldest
            student mining competition in Indonesia, which present a sequence of
            mining competition and various events that are uniquely made based
            on this year theme.
          </h3>
        </div>
      </section>
      <section>
        <Image
          src="/grand_theme.webp"
          width={1512}
          height={153}
          alt="grand_theme"
        />
      </section>
      <section className="min-h-screen p-24 relative flex flex-col-reverse md:flex-row gap-6 justify-center items-center">
        <Image
          src="/background_about_2.webp"
          fill
          alt="about_2"
          className="-z-10 object-cover"
        />
        <div className="flex p-16 ring-2 ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccc8] to-[#cccd] backdrop-blur-sm">
          <h1
            className={`${hind.className} text-5xl font-bold text-[#2A6876] text-center drop-shadow-md`}
          >
            Mine The Future: Embracing the unity, knowledge, and excellence at
            ISMC XIV
          </h1>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
