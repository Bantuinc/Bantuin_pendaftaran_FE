import RegistEventForm from "@/components/RegistEventForm";
import { hind } from "@/fonts/font";
import Background from "@/public/bg_login.webp";
import { getAdditionalField } from "@/utils/registration";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

const getTypeOfCompetition = async (
  competitionId: string,
  token: string
): Promise<Competition> => {
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
  return data.data as Competition;
};

async function page({ params }: { params: { competitionId: string } }) {
  const Competition = await getTypeOfCompetition(
    params.competitionId,
    ""
  );

  const additionalFields = await getAdditionalField(
    "",
    Competition.id
  );
  if (additionalFields === null) {
    redirect("/login");
  }
  const dateTimeClose = new Date(Competition.closedAt);
  const dateTimeNow = new Date(Date.now());
  if(dateTimeClose < dateTimeNow){
    // KOMPETISI SUDAH BERAKHIR
    return (
        <section
            className={`relative min-h-[110vh] p-12 pt-28 flex gap-6 md:justify-end justify-center items-center ${hind.className} antialiased overflow-hidden`}
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
              {Competition?.name} Registration
              <span className="text-[#FFA31D] mb-12 text-center text-3xl font-semibold drop-shadow-md"><br/><br/> Registration is Closed</span>
            </h1>
          </div>
        </section>
    );
  }else{
    // KOMPETISI BELUM BERAKHIR
    return (
        <section
            className={`relative min-h-[110vh] p-12 pt-28 flex gap-6 md:justify-end justify-center items-center ${hind.className} antialiased overflow-hidden`}
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
              {Competition?.name} Registration
            </h1>
            <RegistEventForm
                competitionId={params.competitionId}
                competitionType={Competition?.type}
                additionalFields={additionalFields}
            />
          </div>
        </section>
    );
  }

}

export default page;
