import Image from "next/image";
import Background from "@/public/bg_login.webp";
import { hind } from "@/fonts/font";
import RegistCompetitionForm from "@/components/RegistCompetitionForm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const getTypeOfCompetition = async (competitionId: string, token: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/competition/${competitionId}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data: APIResponse = await res.json();
  return data.data;
};

async function page({ params }: { params: { competitionId: string } }) {
  const accessToken = cookies().get("accessToken")?.value;
  if (!accessToken) {
    redirect("/login");
  }

  const typeOfCompetition = await getTypeOfCompetition(
    params.competitionId,
    accessToken
  );

  return (
    <section
      className={`relative min-h-[110vh] p-12 pt-28 flex gap-6 justify-end items-center ${hind.className} antialiased overflow-hidden`}
    >
      <Image
        src={Background}
        alt="Hero Login Image"
        fill
        className="object-cover"
        sizes="{(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw}"
        priority={true}
        placeholder="blur"
        quality={50}
      />
      <div
        className="p-20 absolute left-0 w-fit md:block hidden rounded-r-[75px] bg-[#D9D9D9]"
        style={{ boxShadow: "-20vw 0 0 #d9d9d9" }}
      >
        <Image src="/logo2.png" height={300} width={400} alt="Hero" priority />
      </div>
      <div className="flex flex-col px-9 py-16 sm:w-[28rem] ring-2 ring-slate-200/70 rounded-[25px] bg-gradient-to-tr from-[#ccc8] to-[#ccca] backdrop-blur-[12px] text-white">
        <h1 className="mb-12 text-center text-4xl font-semibold drop-shadow-md">
          Registration
        </h1>
        <RegistCompetitionForm
          competitionId={params.competitionId}
          competitionType={typeOfCompetition.type}
        />
      </div>
    </section>
  );
}

export default page;
