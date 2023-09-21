import Background from "@/public/background.webp";
import Image from "next/image";
import CompetitionList from "./CompetitionList";
import { getCompetition } from "@/utils/registration";

async function Register() {
  const competition: Competition[] = await getCompetition();

  if (!competition) return <div>Something went wrong!</div>;

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
          {competition?.map((comp: Competition, id: number) => (
            <CompetitionList
              key={id}
              imgKey={id}
              id={comp.id}
              name={comp.name}
              description={comp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Register;
