import { FileText, Fingerprint } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type RegistProps = {
  id: string;
  name: string;
  description: string;
  imgKey: number;
  openedAt: string;
};

function CompetitionList({
  id,
  name,
  description,
  imgKey,
  openedAt,
}: RegistProps) {
  const RegistImg = [
    "background_mining_competition.webp",
    "bg_login.webp",
    "bg_login.webp",
    "background.webp",
  ];

  const CompetitionOpened = (): boolean => {
    const res = new Date(openedAt).getTime() - new Date().getTime();
    if (res <= 0) {
      return true;
    }
    return false;
  };

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
          <Link
            href={`${CompetitionOpened() ? `/register/${id}` : ""}`}
            className="flex-1"
          >
            <button
              disabled={!CompetitionOpened()}
              className="py-4 px-8 flex justify-center gap-2 disabled:cursor-not-allowed disabled:bg-slate-700 rounded-xl bg-[#FFA31D] w-full font-bold text-lg text-white hover:shadow-lg hover:bg-orange-400 duration-300 ease-in-out transition-all"
            >
              <Fingerprint className="-ml-4" />
              <span className="drop-shadow-md">Register</span>
            </button>
          </Link>
          <a
            href={"https://bit.ly/MiningCompetitionBooklet"}
            className="flex-1"
          >
            <button className="py-4 px-8 flex justify-center gap-2 rounded-xl ring-1 ring-slate-400 w-full font-semibold text-md text-slate-900 bg-gradient-to-tr from-slate-600/10 to-slate-600/20 hover:shadow-lg transition-all">
              <FileText className="-ml-4" />
              Booklet
            </button>
          </a>
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
