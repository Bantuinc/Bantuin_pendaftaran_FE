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
import {
  ADDITIONAL_FIELD_PRIORITY,
  additionalFieldMap,
} from "@/utils/additionalFieldType";
import { MINING_TALKS_OPTIONS } from "@/utils/option";
import { SUBTHEME_OPTION } from "@/utils/registration";
import axios, { AxiosError } from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import Select, { MultiValue } from "react-select";
import Swal from "sweetalert2";

function RegistEventForm({
  competitionId,
  competitionType,
  additionalFields,
}: {
  competitionId: string;
  competitionType: number;
  additionalFields: AdditionalField[];
}) {
  const [email, setEmail] = useState<string>("");
  const [teamName, setTeamName] = useState<string>("");
  const [proofOfPayments, setProofOfPayments] = useState<string>("");
  const [AdditionalFieldValue, setAdditionalFieldValue] =
    useState<StringObject>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleCompetitionRegist = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const requestBody = {
      teamName,
      proofOfPayment: proofOfPayments,
      createdBy: email,
      teamAdditional: {
        ...AdditionalFieldValue,
      },
    };

    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/competition/${competitionId}/event`,
        requestBody
      );
      const alert = await Swal.fire({
        title: "Success!",
        text: `Congratulations ${teamName}! You're officially registered as one of our Participants. Please Look forward to this event and keep your excitement!. Please check your email, we have sent you a confirmation email`,
        icon: "success",
        confirmButtonText: "OK",
      });
      if (alert.isConfirmed) {
        router.push("/");
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

  const handleProofOfPayments = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (!e.target?.files) return;
    setIsLoading(true);
    const uploadedFile = e.target?.files[0];
    try {
      const res = await uploadParticipantDocument(uploadedFile);
      const previewURL = previewParticipantDocumentURL(res.$id);
      setProofOfPayments(previewURL);
      Swal.fire({
        title: "File Uploaded!",
        text: "Proof Of Payment has been uploaded successfully!",
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

  const copyContent = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Content copied to clipboard");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <form onSubmit={handleCompetitionRegist} className=" flex flex-col gap-3">
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
        <p className="font-bold drop-shadow-md">
          *Please fill your name according to your ID Card
        </p>
      </div>
      <label
        htmlFor="email"
        className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
      >
        Email
      </label>
      <input
        type="email"
        id="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none"
      />

      {additionalFields?.map((fieldValue: AdditionalField, id) => (
        <div
          key={id}
          className={`flex flex-col mt-2 ${
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
            <TooltipProvider>
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
            </TooltipProvider>
          </div>
          <div className=" drop-shadow-sm">
            {fieldValue.description2 ? (
              <div>
                <p>Please Check this document </p>
                <div
                  className="text-orange-100 hover:text-blue-100 font-bold "
                  dangerouslySetInnerHTML={{ __html: fieldValue.description2 }}
                />
              </div>
            ) : (
              <div />
            )}
          </div>

          {additionalFieldMap.get(fieldValue.type) === "file" ? (
            <input
              type={additionalFieldMap.get(fieldValue.type)}
              required={fieldValue.priority === 1}
              id={fieldValue.normalizedName}
              accept=".pdf,.png,.jpg"
              onChange={(e) =>
                handleAdditionalFile(e, fieldValue.normalizedName)
              }
              className={`${
                fieldValue.priority !== 1 ? "hidden" : ""
              } rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none`}
            />
          ) : additionalFieldMap.get(fieldValue.type) === "select" ? (
            <Select
              options={SUBTHEME_OPTION}
              required={
                fieldValue.priority === ADDITIONAL_FIELD_PRIORITY.FurtherData ||
                fieldValue.priority === ADDITIONAL_FIELD_PRIORITY.First
              }
              isMulti
              menuPortalTarget={document.body}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
              className={`${
                fieldValue.priority !== 1 ? "hidden" : ""
              }z-20 text-lg text-slate-800  shadow-md ring-1 ring-white/50 outline-none`}
              onChange={(e) => handleSelect(e, fieldValue.normalizedName)}
            />
          ) : additionalFieldMap.get(fieldValue.type) === "textarea" ? (
            <>
              <textarea
                required={fieldValue.priority === 1}
                value={
                  AdditionalFieldValue.hasOwnProperty(fieldValue.normalizedName)
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
            </>
          ) : additionalFieldMap.get(fieldValue.type) === "option" ? (
            <div className="flex gap-3">
              {MINING_TALKS_OPTIONS.map((option: string, id: number) => (
                <div
                  key={id}
                  className={`px-4 py-2 flex gap-3 rounded-lg text-slate-900 font-bold bg-[#D9D9D9] w-fit`}
                >
                  <input
                    type="radio"
                    id={option}
                    value={option}
                    checked={
                      AdditionalFieldValue.hasOwnProperty(
                        fieldValue.normalizedName
                      )
                        ? AdditionalFieldValue[fieldValue.normalizedName] ===
                          option
                        : false
                    }
                    onChange={(e) =>
                      handleAdditionalField(
                        e.target.value,
                        fieldValue.normalizedName
                      )
                    }
                  />
                  <label htmlFor={option}>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </label>
                </div>
              ))}
            </div>
          ) : (
            <>
              <input
                type={additionalFieldMap.get(fieldValue.type)}
                required={fieldValue.priority === 1}
                id={fieldValue.normalizedName}
                value={
                  AdditionalFieldValue.hasOwnProperty(fieldValue.normalizedName)
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
              {/* {fieldValue.normalizedName === "university_name" ? (
                  <div className="mt-3">
                    <b className="drop-shadow-md">
                      *Please don{""}t shorten your university name.
                    </b>
                  </div>
                ) : null} */}
            </>
          )}
        </div>
      ))}

      <label
        htmlFor="payment"
        className={`${hind.className} text-2xl font-semibold drop-shadow-md`}
      >
        Proof Of Payment
      </label>
      <input
        type="file"
        required
        id="proof_of_payment"
        accept=".png,.jpg"
        onChange={(e) => handleProofOfPayments(e)}
        className={` rounded-lg py-2 px-4 bg-[#D9D9D9] text-lg text-slate-800 font-semibold shadow-md ring-1 ring-white/50 outline-none`}
      />
      <div>
        <div className="drop-shadow-md text-lg">
          *Payment to BCA{" "}
          <div
            className="bg-slate-700 py-1 px-3 flex items-center w-fit gap-6 justify-between rounded-md tracking-widest cursor-pointer"
            onClick={(e) => copyContent("7772867339")}
          >
            <p>7772867399</p>{" "}
            <Image
              src="/copy-icon.svg"
              width={16}
              height={16}
              alt="copy"
              className="invert w-auto h-4"
            />
          </div>{" "}
          <p>Zaizafafun Zahra</p>
          {AdditionalFieldValue.hasOwnProperty("option") ? (
            <p>
              Amount : Rp.
              {AdditionalFieldValue["option"] === "student"
                ? "40.000"
                : "60.000"}
            </p>
          ) : null}
        </div>
      </div>
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

export default RegistEventForm;
