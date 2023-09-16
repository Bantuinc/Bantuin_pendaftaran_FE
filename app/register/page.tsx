import Image from "next/image";
import Background from "@/public/background.webp";
import ButtonRegist from "./ButtonRegist";

const getCompetition = async () => {
  try{

    const res = await fetch(
      "https://4427-202-80-212-185.ngrok-free.app/api/competition"
      );
      return res.json();
    }
    catch{
      return respon;
    }
};

async function Register() {
  const competition = await getCompetition();
  console.log(competition);
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
          Register
        </h1>
        <div className="flex flex-col gap-12 p-9 ring-2 ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccca] to-[#ccc] backdrop-blur-[12px] md:w-[80vw] w-full">
          {competition.data &&
            competition?.data.map((comp: any, id: number) => (
              <ButtonRegist
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

export const respon = {
  isSuccess: true,

  statusCode: 200,

  message: "Success",

  timestamp: 1694872576,

  data: [
    {
      id: "0603e4b6-80c5-4162-8c12-a8f3f3e0040e",

      name: "Hackaton Contest",

      description: "Competition 4",

      requiredMember: 4,

      maxMember: 6,

      quota: 10,

      type: 1,

      openedAt: "2023-09-14T01:27:55.602292Z",

      closedAt: "2023-10-14T01:27:55.602293Z",

      status: 1,

      createdAt: "2023-09-14T01:27:55.602293Z",

      updatedAt: "2023-09-14T01:27:55.602293Z",
    },

    {
      id: "08258f33-0778-4347-aed4-179d275d4f31",

      name: "Mining Competition",

      description: "Competition 1",

      requiredMember: 8,

      maxMember: 8,

      quota: 10,

      type: 1,

      openedAt: "2023-09-14T01:27:55.602135Z",

      closedAt: "2023-10-14T01:27:55.602167Z",

      status: 1,

      createdAt: "2023-09-14T01:27:55.602229Z",

      updatedAt: "2023-09-14T01:27:55.602257Z",
    },

    {
      id: "1c39307a-9b2d-46e4-a3fb-77cb603d6aa6",

      name: "Paper Contest",

      description: "Competition 2",

      requiredMember: 1,

      maxMember: 3,

      quota: 10,

      type: 1,

      openedAt: "2023-09-14T01:27:55.602286Z",

      closedAt: "2023-10-14T01:27:55.602286Z",

      status: 1,

      createdAt: "2023-09-14T01:27:55.602286Z",

      updatedAt: "2023-09-14T01:27:55.602287Z",
    },

    {
      id: "b7952fca-5bba-4b13-8cd7-ea37cf282a56",

      name: "Poster Contest",

      description: "Competition 3",

      requiredMember: 1,

      maxMember: 1,

      quota: 10,

      type: 2,

      openedAt: "2023-09-14T01:27:55.602292Z",

      closedAt: "2023-10-14T01:27:55.602292Z",

      status: 1,

      createdAt: "2023-09-14T01:27:55.602292Z",

      updatedAt: "2023-09-14T01:27:55.602292Z",
    },
  ],
};