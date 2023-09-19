"use client";
import Background from "@/public/background.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CompetitionList from "./CompetitionList";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

const getCompetition = async (token: string): Promise<Competition[]> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/competition`,
      {
        next: { revalidate: 3600 },
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
  const [cookieStore] = useCookies(["accessToken"]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      if (cookieStore.accessToken === undefined) {
        const alert = await Swal.fire({
          title: "Oops!",
          text: "You must login first to regist your team to competition!",
          icon: "error",
          confirmButtonText: "OK",
        });
        localStorage.setItem("redirectFrom", "/register");
        if (alert.isConfirmed) router.push("/signup");
        return;
      }
      const data: Competition[] = await getCompetition(cookieStore.accessToken);
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
          {!isLoading &&
            competition?.map((comp: Competition, id: number) => (
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
