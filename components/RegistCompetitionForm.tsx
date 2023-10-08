"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { hind } from "@/fonts/font";
import {
  previewParticipantDocumentURL,
  uploadParticipantDocument,
} from "@/lib/bucket";
import { additionalFieldMap } from "@/utils/additionalFieldType";
import { CITIZENSHIP } from "@/utils/registration";
import { getUserNameId } from "@/utils/userCredentials";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { MultiValue } from "react-select";
import Swal from "sweetalert2";

function RegistCompetitionForm({
  competitionId,
  competitionType,
  additionalFields,
}: {
  competitionId: string;
  competitionType: number;
  additionalFields: AdditionalField[];
}) {
  const [teamName, setTeamName] = useState<string>("");
  const [citizenShip, setCitizenShip] = useState<number>(1);
  const [AdditionalFieldValue, setAdditionalFieldValue] =
    useState<StringObject>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [cookies] = useCookies(["accessToken"]);
  const accessToken = cookies.accessToken! as string;
  const userNameId = getUserNameId(accessToken);
  const router = useRouter();

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
      const alert = await Swal.fire({
        title: "Success!",
        text: `${
          competitionType === 1 ? "Your team has" : "You have"
        } been registered successfully!`,
        icon: "success",
        confirmButtonText: "OK",
      });
      if (alert.isConfirmed) {
        router.push("/dashboard");
      }
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

  const handleAdditionalField = (
    value: string,
    normalizedName: string
  ): void => {
    setAdditionalFieldValue({
      ...AdditionalFieldValue,
      [normalizedName]: value,
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
    setIsLoading(true);
    const uploadedFile = e.target?.files[0];
    try {
      const res = await uploadParticipantDocument(uploadedFile);
      const previewURL = previewParticipantDocumentURL(res.$id);
      setAdditionalFieldValue({
        ...AdditionalFieldValue,
        [normalizedName]: previewURL,
      });
      Swal.fire({
        title: "File Uploaded!",
        text: "File uploaded successfully!",
        icon: "success",
        confirmButtonText: "OK",
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
    setIsLoading(false);
  };

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
      <div>
        <p className="drop-shadow-md">
          *Your team name shouldn{"'"}t be included with the university
          name/acronym and shouldn{"'"}t contain bad words or offend any
          ethnicity, religion, race, or inter-group relations.
        </p>
      </div>
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
        <div
          className={`px-4 py-2 flex gap-3 rounded-lg text-slate-900 font-bold bg-[#D9D9D9] w-fit ${
            competitionId !== "4136c5a5-d92d-4117-b283-ca87bc738b67"
              ? "hidden"
              : "block"
          }`}
        >
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
        {additionalFields?.map((fieldValue: AdditionalField, id) => (
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
            <div className="flex">
              {fieldValue.description2?
                  <div dangerouslySetInnerHTML={{__html: fieldValue.description2}}/>
                  :
                  <div/>}
            </div>
            {additionalFieldMap.get(fieldValue.type) === "file" ? (
              <input
                type={additionalFieldMap.get(fieldValue.type)}
                required={fieldValue.priority === 1}
                id={fieldValue.normalizedName}
                accept=".pdf"
                onChange={(e) =>
                  handleAdditionalFile(e, fieldValue.normalizedName)
                }
                className={`${
                  fieldValue.priority !== 1 ? "hidden" : ""
                } rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none`}
              />
            ) : additionalFieldMap.get(fieldValue.type) === "textarea" ? (
              <>
                <textarea
                  required={fieldValue.priority === 1}
                  value={
                    AdditionalFieldValue.hasOwnProperty(
                      fieldValue.normalizedName
                    )
                      ? AdditionalFieldValue[fieldValue.normalizedName]
                      : ""
                  }
                  id={fieldValue.normalizedName}
                  onChange={(e) =>
                    handleAdditionalField(
                      e.target.value,
                      fieldValue.normalizedName
                    )
                  }
                  className={`${
                    fieldValue.priority !== 1 ? "hidden" : ""
                  } rounded-lg h-32 py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-non`}
                  cols={5}
                  rows={10}
                />
                {fieldValue.normalizedName === "university_address" ? (
                  <div className="mt-3">
                    <b>*Please fill your complete university address.</b>
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <input
                  type={additionalFieldMap.get(fieldValue.type)}
                  required={fieldValue.priority === 1}
                  id={fieldValue.normalizedName}
                  value={
                    AdditionalFieldValue.hasOwnProperty(
                      fieldValue.normalizedName
                    )
                      ? AdditionalFieldValue[fieldValue.normalizedName]
                      : ""
                  }
                  onChange={(e) =>
                    handleAdditionalField(
                      e.target.value,
                      fieldValue.normalizedName
                    )
                  }
                  className={`${
                    fieldValue.priority !== 1 ? "hidden" : ""
                  } rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-non`}
                />
                {fieldValue.normalizedName === "university_name" ? (
                  <div className="mt-3">
                    <b className="drop-shadow-md">
                      *Please don{""}t shorten your university name.
                    </b>
                  </div>
                ) : null}
              </>
            )}
          </div>
        ))}
      </TooltipProvider>
      <button
        type="submit"
        className="mt-6 bg-[#FFA31D] enabled:hover:bg-orange-400 disabled:cursor-not-allowed rounded-xl py-2 px-4 font-semibold text-2xl antialiased transition-all duration-300 ease-in-out"
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
