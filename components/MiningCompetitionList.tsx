import Image from "next/image";
import Link from "next/link";

type MiningCompetitionListProps = {
    src: string;
    text: string;
    route: string;
}

function MiningCompetitionList({src,text, route}:MiningCompetitionListProps) {
  return (
    <Link href={`events/mining-competition/${route}`}>
      <div className="flex flex-col items-center justify-between min-h-[300px] p-9 ring-2 ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccc8] to-[#ccca] backdrop-blur-[12px] text-white">
        <Image
          src={`/mining_competition/${src}`}
          width={167}
          height={168}
          alt={text}
          className="w-auto h-[165px] bg-contain"
        />
        <h1 className="text-xl font-bold text-black">
          {text}
        </h1>
      </div>
    </Link>
  );
}

export default MiningCompetitionList;
