"use client";

import Image from "next/image";

type RegistProps = {
  id: string;
  name: string;
  description: string;
  imgKey: number;
};

function ButtonRegist({ id, name, description, imgKey }: RegistProps) {
  const registCompe = async (id: string) => {
    console.log("register :", id);
  };
  const RegistImg = [
    "background_mining_competition.webp",
    "bg_login.webp",
    "mining_competition.jpg",
    "background.webp",
  ];
  return (
    <div
      className={`flex ${
        imgKey % 2 == 0 ? "md:flex-row" : "md:flex-row-reverse"
      } flex-col gap-12 items-center justify-between`}
    >
      <div>
        <h1 className="text-slate-800 text-xl font-bold">{name}</h1>
        <p>{description}</p>
        <button onClick={() => registCompe(id)}>Regist</button>
      </div>
      <Image
        src={`/${RegistImg[imgKey]}`}
        alt="hero"
        width={500}
        height={500}
        className="w-80 h-80 cover rounded-xl"
      />
    </div>
  );
}

export default ButtonRegist;
