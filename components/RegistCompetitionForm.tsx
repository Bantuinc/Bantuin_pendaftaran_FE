"use client";
import { hind } from "@/fonts/font";
import { getAdditionalField } from "@/utils/registration";
import { getUserNameId } from "@/utils/userCredentials";
import axios, { AxiosError } from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

const CITIZENSHIP = {
  domestic: 1,
  overseas: 2,
};
interface StringObject {
  [key: string]: string;
}

function RegistCompetitionForm({ competitionId }: { competitionId: string }) {
  const [teamName, setTeamName] = useState<string>("");
  const [citizenShip, setCitizenShip] = useState<1 | 2>(1);
  const [fieldLoaded, setFieldLoaded] = useState<boolean>(false);
  const [field, setField] = useState<AdditionalField[]>([]);
  const [AdditionalFieldValue, setAdditionalFieldValue] =
    useState<StringObject>({});

  const [cookies] = useCookies(["accessToken"]);
  const accessToken = cookies.accessToken! as string;
  const userNameId = getUserNameId(accessToken);

  const handleCompetitionRegist = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const requestBody = {
      teamName,
      citizenship: citizenShip,
      createdBy: userNameId,
      teamAdditional: {
        ...AdditionalFieldValue,
      },
    };

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/competition/${competitionId}/teams`,
        requestBody,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      Swal.fire({
        title: "Success!",
        text: "Your team has been registered successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        Swal.fire({
          title: "Error!",
          text: error?.response?.data?.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };

  const getFormFields = async () => {
    const response = await getAdditionalField(accessToken, competitionId);
    if (response === null) throw "User not Authorized, Please Login Again!";
    setField(response);
    setFieldLoaded(true);
  };

  const handleAdditionalField = (
    e: ChangeEvent<HTMLInputElement>,
    normalizedName: string
  ) => {
    setAdditionalFieldValue({
      ...AdditionalFieldValue,
      [normalizedName]: e.target.value,
    });
  };

  useEffect(() => {
    getFormFields();
  }, []);

  return (
    <form onSubmit={handleCompetitionRegist} className="flex flex-col gap-3">
      <label
        htmlFor="teamName"
        className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
      >
        Team Name
      </label>
      <input
        type="text"
        id="teamName"
        required
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        className="rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none"
      />
      <label
        htmlFor="citizenShip"
        className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
      >
        Citizenship
      </label>
      <div className={`px-4 py-2 flex gap-3 rounded-lg  font-bold w-fit`}>
        <input
          name="citizenShip"
          type="radio"
          id="domestic"
          value={CITIZENSHIP.domestic}
          checked={citizenShip === CITIZENSHIP.domestic}
          onChange={(e) => setCitizenShip(1)}
        />
        <label htmlFor="domestic">Domestic</label>
      </div>
      <div className="px-4 py-2 flex gap-3 rounded-lg text-slate-900 font-bold bg-[#D9D9D9] w-fit">
        <input
          name="citizenShip"
          type="radio"
          id="overseas"
          value={CITIZENSHIP.overseas}
          checked={citizenShip === CITIZENSHIP.overseas}
          onChange={(e) => setCitizenShip(2)}
        />
        <label htmlFor="overseas">Overseas</label>
      </div>
      {fieldLoaded &&
        field.map((fieldValue: AdditionalField, id) => (
          <div key={id} className="flex flex-col">
            <label
              htmlFor={fieldValue.normalizedName}
              className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
            >
              {fieldValue.name}
            </label>
            <input
              type="text"
              required={fieldValue.type === 1 ? true : false}
              id={fieldValue.normalizedName}
              value={
                AdditionalFieldValue.hasOwnProperty(fieldValue.normalizedName)
                  ? AdditionalFieldValue[fieldValue.normalizedName]
                  : ""
              }
              onChange={(e) =>
                handleAdditionalField(e, fieldValue.normalizedName)
              }
              className="rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none"
            />
          </div>
        ))}
      <button
        type="submit"
        className="mt-6 bg-[#FFA31D] hover:bg-orange-400 rounded-xl py-2 px-4 font-semibold text-2xl antialiased transition-all duration-300 ease-in-out"
      >
        Register Team
      </button>
    </form>
  );
}

export default RegistCompetitionForm;
