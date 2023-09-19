"use client";
import Background from "@/public/background.webp";
import Image from "next/image";
import { useEffect, useState } from "react";
import CompetitionList from "./CompetitionList";

const getCompetition = async (): Promise<Competition[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/competition`,
      {
        next: { revalidate: 3600 },
      }
    );
    const response: CompetitionAPIResponse = await res.json();
    return response.data;
  } catch (err) {
    if (err instanceof Error) throw err.message;
    throw "Something went wrong!";
  }
};

function Register() {
  const [competition, setCompetition] = useState<Competition[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const data: Competition[] = await getCompetition();
      setCompetition(data);
      setIsLoading(false);
    })();
  });

  return (
    <section className="p-12 pt-28 md:p-16 md:pt-40 relative min-h-[110vh] flex flex-col-reverse md:flex-row gap-6 justify-center items-center">
      <Image
        src={Background}
        alt="Hero Login Image"
        fill
        className="z-[-1] object-cover"
        sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
        priority={true}
        placeholder="blur"
        quality={50}
      />
      <div>
        <h1 className="text-6xl mb-6 py-2 text-center font-extrabold bg-gradient-to-r from-[#fffa] to-[#FFF] text-transparent bg-clip-text">
          Our Competition
        </h1>
        <div className="flex flex-col gap-12 px-9 py-12 ring-2 ring-slate-200/70 rounded-[32px] bg-gradient-to-tr from-[#ccc0] to-[#ccca] backdrop-blur-[12px] md:w-[80vw] w-full">
          {!isLoading ? (
            competition?.map((comp: Competition, id: number) => (
              <CompetitionList
                key={id}
                imgKey={id}
                id={comp.id}
                name={comp.name}
                description={comp.description}
              />
            ))
          ) : (
            <div className="w-full p-16 flex gap-2 justify-center items-center text-xl font-bold text-slate-800 bg-white rounded-xl">
              Loading Competition
              <span>
                <Image
                  src="/3-dots-fade.svg"
                  alt="loading"
                  width={24}
                  height={24}
                />
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Register;
