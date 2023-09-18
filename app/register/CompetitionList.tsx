"use client";

import Image from "next/image";

type RegistProps = {
  id: string;
  name: string;
  description: string;
  imgKey: number;
};

function CompetitionList({ id, name, description, imgKey }: RegistProps) {
  const registCompe = async (id: string) => {
    console.log("register :", id);
  };
  const RegistImg = [
    "background_mining_competition.webp",
    "bg_login.webp",
    "bg_login.webp",
    "background.webp",
  ];
  return (
    <div
      className={`flex ${
        imgKey % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col gap-12 items-center justify-between`}
    >
      <div
        className={`${
          imgKey % 2 == 1 ? "text-left" : "text-right"
        } flex flex-col gap-3`}
      >
        <h1 className="mb-6 text-white text-5xl font-bold drop-shadow-md">
          {name}
        </h1>
        <p className="font-bold text-slate-50 text-lg">{description}</p>
        <div className="flex gap-3">
          <button
            onClick={() => registCompe(id)}
            className="py-4 px-8 rounded-xl bg-[#FFA31D] w-full font-semibold text-md text-orange-900"
          >
            Regist
          </button>
          <button className="py-4 px-8 rounded-xl ring-1 ring-slate-400 w-full font-semibold text-md text-slate-900 bg-gradient-to-tr from-slate-600/10 to-slate-600/20">
            Detail
          </button>
        </div>
      </div>
      <Image
        src={`/${RegistImg[imgKey]}`}
        alt="hero"
        width={500}
        height={500}
        className="w-[30rem] h-auto cover rounded-2xl"
      />
    </div>
  );
}

export default CompetitionList;
