"use client";
import { hind } from "@/fonts/font";
import { getAdditionalField } from "@/utils/registration";
import { getUserNameId } from "@/utils/userCredentials";
import axios, { AxiosError } from "axios";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import Select, { MultiValue } from "react-select";
import {
  previewParticipantDocumentURL,
  uploadParticipantDocument,
} from "@/lib/bucket";
import { additionalFieldMap } from "@/utils/additionalFieldType";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const CITIZENSHIP = {
  domestic: 1,
  overseas: 2,
};
interface StringObject {
  [key: string]: string;
}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function RegistCompetitionForm({
  competitionId,
  competitionType,
}: {
  competitionId: string;
  competitionType: number;
}) {
  const [teamName, setTeamName] = useState<string>("");
  const [citizenShip, setCitizenShip] = useState<1 | 2>(1);
  const [fieldLoaded, setFieldLoaded] = useState<boolean>(false);
  const [field, setField] = useState<AdditionalField[]>([]);
  const [AdditionalFieldValue, setAdditionalFieldValue] =
    useState<StringObject>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [cookies] = useCookies(["accessToken"]);
  const accessToken = cookies.accessToken! as string;
  const userNameId = getUserNameId(accessToken);

  const handleCompetitionRegist = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

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
        text: `${
          competitionType === 1 ? "Your team has" : "You have"
        } been registered successfully!`,
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
    setIsLoading(false);
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
  ): void => {
    setAdditionalFieldValue({
      ...AdditionalFieldValue,
      [normalizedName]: e.target.value,
    });
  };

  const handleSelect = (
    e: MultiValue<{ value: string; label: string }>,
    normalizedName: string
  ): void => {
    let selectedValue: string[] = [];
    selectedValue = e.map((select) => select.value);
    const selectedValueInString: string = selectedValue.join(",");
    setAdditionalFieldValue({
      ...AdditionalFieldValue,
      [normalizedName]: selectedValueInString,
    });
  };

  const handleAdditionalFile = async (
    e: ChangeEvent<HTMLInputElement>,
    normalizedName: string
  ): Promise<void> => {
    if (!e.target?.files) return;
    const uploadedFile = e.target?.files[0];
    try {
      const res = await uploadParticipantDocument(uploadedFile);
      const previewURL = previewParticipantDocumentURL(res.$id);
      setAdditionalFieldValue({
        ...AdditionalFieldValue,
        [normalizedName]: previewURL,
      });
    } catch (error) {
      if (error instanceof Error)
        Swal.fire({
          title: "Error!",
          text: error?.message,
          icon: "error",
          confirmButtonText: "OK",
        });
      return;
    }
  };

  useEffect(() => {
    getFormFields();
  }, []);

  return (
    <form onSubmit={handleCompetitionRegist} className="flex flex-col gap-3">
      <div className="flex relative">
        <label
          htmlFor="teamName"
          className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
        >
          {competitionType === 1 ? "Team Name" : "Your Full Name"}
        </label>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <span className="absolute top-0 w-4 h-4 flex items-center justify-center p-1 pt-1.5 text-sm rounded-full bg-blue-600 font-bold">
                ?
              </span>
            </TooltipTrigger>
            <TooltipContent>
              <pre>
                *forbidden to choose a team name that has university elements
                <br></br>
                *forbidden to choose a team name that has elements of SARA
              </pre>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
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
      <div className="flex gap-3">
        <div
          className={`px-4 py-2 flex gap-3 rounded-lg text-slate-900 font-bold bg-[#D9D9D9] w-fit`}
        >
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
      </div>
      <TooltipProvider>
        {fieldLoaded &&
          field.map((fieldValue: AdditionalField, id) => (
            <div
              key={id}
              className={`flex flex-col ${
                fieldValue.priority !== 1 ? "hidden" : ""
              }`}
            >
              <div className="flex relative">
                <label
                  htmlFor={fieldValue.normalizedName}
                  className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
                >
                  {fieldValue.name}
                </label>
                <Tooltip>
                  <TooltipTrigger>
                    <span className="absolute top-0 w-4 h-4 flex items-center justify-center p-1 pt-1.5 text-sm rounded-full bg-blue-600 font-bold">
                      ?
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <pre>{fieldValue.description}</pre>
                  </TooltipContent>
                </Tooltip>
              </div>
              {additionalFieldMap.get(fieldValue.type) === "file" ? (
                <input
                  type={additionalFieldMap.get(fieldValue.type)}
                  required
                  id={fieldValue.normalizedName}
                  accept=".pdf"
                  onChange={(e) =>
                    handleAdditionalFile(e, fieldValue.normalizedName)
                  }
                  className="rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none"
                />
              ) : additionalFieldMap.get(fieldValue.type) === "select" ? (
                <Select
                  options={options}
                  required
                  isMulti
                  className="text-slate-900"
                  onChange={(e) => handleSelect(e, fieldValue.normalizedName)}
                />
              ) : (
                <input
                  type={additionalFieldMap.get(fieldValue.type)}
                  required
                  id={fieldValue.normalizedName}
                  value={
                    AdditionalFieldValue.hasOwnProperty(
                      fieldValue.normalizedName
                    )
                      ? AdditionalFieldValue[fieldValue.normalizedName]
                      : ""
                  }
                  onChange={(e) =>
                    handleAdditionalField(e, fieldValue.normalizedName)
                  }
                  className="rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none"
                />
              )}
            </div>
          ))}
      </TooltipProvider>
      <button
        type="submit"
        className="mt-6 bg-[#FFA31D] hover:bg-orange-400 rounded-xl py-2 px-4 font-semibold text-2xl antialiased transition-all duration-300 ease-in-out"
      >
        {isLoading
          ? "Loading..."
          : competitionType === 1
          ? "Register Team"
          : "Register"}
      </button>
    </form>
  );
}

export default RegistCompetitionForm;
