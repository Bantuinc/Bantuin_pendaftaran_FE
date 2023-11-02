"use client";
import { cocogoose, hind } from "@/fonts/font";
import {
  previewParticipantDocumentURL,
  uploadParticipantDocument,
} from "@/lib/bucket";
import {
  ADDITIONAL_FIELD_PRIORITY,
  additionalFieldMap,
} from "@/utils/additionalFieldType";
import { SUBTHEME_OPTION } from "@/utils/registration";
import { TEAM_STATUS } from "@/utils/teamStatusType";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import Select, { MultiValue } from "react-select";
import Swal from "sweetalert2";

interface TeamFormProps {
  team: Team;
  additionalField: AdditionalField[];
}
function PaymentForm({ team, additionalField }: TeamFormProps) {
  const [proofOfPayment, setProofOfPayment] = useState<string | null>(
    team.proofOfPayment
  );
  const [AdditionalFieldValue, setAdditionalFieldValue] =
    useState<StringObject>(team.teamAdditional);
  const [editMode, setEditMode] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [idUpload, setIdUpload] = useState<string>("");
  const [cookies] = useCookies(["accessToken"]);
  const router = useRouter();

  const saveTeamEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const body = {
      teamName: team.teamName,
      proofOfPayment: proofOfPayment,
      citizenship: team.citizenship,
      teamAdditional: AdditionalFieldValue,
    };
    try {
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/competition/${team.competitionId}/teams/${team.id}`,
        body,
        {
          headers: {
            Authorization: `Bearer ${cookies.accessToken}`,
          },
        }
      );
      const { data: response }: { data: APIResponse } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/competition/${team.competitionId}/teams/${team.id}/submit`,
        null,
        { headers: { Authorization: `Bearer ${cookies.accessToken}` } }
      );
      Swal.fire({
        title: "Success!",
        text: data.message,
        icon: "success",
        confirmButtonText: "OK",
      });
      router.push(`/dashboard/team/${team.id}`);
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
    setEditMode(false);
    setIsLoading(false);
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
    setIsUploading(true);
    setIdUpload(normalizedName);
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
    setIsUploading(false);
  };
  const handleUploadProofOfPayment = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    if (!e.target?.files) return;
    setIsUploading(true);
    setIdUpload("proof_of_payment");
    const uploadedFile = e.target?.files[0];
    try {
      const res = await uploadParticipantDocument(uploadedFile);
      const previewURL = previewParticipantDocumentURL(res.$id);
      setProofOfPayment(previewURL);
      Swal.fire({
        title: "Uploaded!",
        text: "Payment Proof uploaded successfully!",
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
    setIsUploading(false);
  };

  const setSelectDefaultValue = (selected: string) => {
    const selectedValue = selected?.split(",") || [selected];
    const data: { label: string; value: string }[] = [];
    selectedValue?.map((value) => {
      const selected = SUBTHEME_OPTION.find((option) => option.value === value);
      if (selected) data.push(selected);
    });
    return data as MultiValue<{ label: string; value: string }>;
  };

  return (
    <form
      onSubmit={saveTeamEdit}
      className={`p-8 flex flex-col gap-3 rounded-xl bg-[#296875] md:max-w-[20rem] ${hind.className}`}
    >
      <div className="flex flex-col">
        <label
          htmlFor="proof_of_payment"
          className={`text-lg text-white font-semibold ${cocogoose.className}`}
        >
          Proof Of Payment
        </label>
        <a
          href={proofOfPayment !== null ? proofOfPayment : team.proofOfPayment}
          target="_blank"
          className={`text-blue-100 ${
            proofOfPayment !== null
              ? "hover:text-blue-300"
              : "cursor-not-allowed"
          }`}
        >
          Preview Uploaded Document
        </a>
        <input
          id="proof_of_payment"
          type="file"
          required={team.proofOfPayment === null}
          disabled={!editMode}
          style={{ display: editMode ? "block" : "none" }}
          className="text-slate-800 font-semibold bg-white disabled:bg-white/75 text-md py-1 px-3 rounded-md focus:outline-none"
          accept=".pdf"
          onChange={(e) => handleUploadProofOfPayment(e)}
        />
        {isUploading && idUpload === "proof_of_payment" && (
          <>
            <div className="w-4 h-4 rounded-full bg-white/75 animate-bounce mx-auto"></div>
            <p className="text-white text-center">Uploading...</p>
          </>
        )}
      </div>
      {additionalField.map((fieldValue: AdditionalField, id) => (
        <div
          key={id}
          className={`flex flex-col ${
            fieldValue.priority === ADDITIONAL_FIELD_PRIORITY.Last &&
            team.status === TEAM_STATUS.NeedPayment
              ? "block"
              : team.status === TEAM_STATUS.Accepted &&
                fieldValue.priority === ADDITIONAL_FIELD_PRIORITY.Last
              ? "block"
              : "hidden"
          }`}
        >
          <label
            htmlFor={fieldValue.normalizedName}
            className={`text-lg text-white font-semibold ${cocogoose.className}`}
          >
            {fieldValue.name}
          </label>
          {/* {fieldValue.normalizedName === "statement_of_participant" && (
            <a
              href="https://bit.ly/StatementofParticipants"
              target="_blank"
              className="mb-2 px-3 py-1 rounded-md bg-sky-600 w-fit text-white/80 font-semibold hover:text-white hover:bg-sky-700 cursor-pointer"
            >
              Example Document
            </a>
          )} */}
          {additionalFieldMap.get(fieldValue.type) === "file" ? (
            <>
              <a
                href={
                  AdditionalFieldValue.hasOwnProperty(fieldValue.normalizedName)
                    ? AdditionalFieldValue[fieldValue.normalizedName]
                    : team?.teamAdditional[fieldValue.normalizedName]
                }
                target="_blank"
                className={`text-blue-100 ${hind.className} ${
                  AdditionalFieldValue.hasOwnProperty(fieldValue.normalizedName)
                    ? "hover:text-blue-300"
                    : "cursor-not-allowed"
                }`}
              >
                Preview Uploaded Document
              </a>
              <input
                id={fieldValue.normalizedName}
                type="file"
                required={
                  !AdditionalFieldValue.hasOwnProperty(
                    fieldValue.normalizedName
                  )
                }
                disabled={!editMode}
                style={{ display: editMode ? "block" : "none" }}
                className="text-slate-800 font-semibold bg-white disabled:bg-white/75 text-md py-1 px-3 rounded-md focus:outline-none"
                accept=".pdf,.png,.jpg"
                onChange={(e) =>
                  handleAdditionalFile(e, fieldValue.normalizedName)
                }
              />
              {isUploading && idUpload === fieldValue.normalizedName && (
                <>
                  <div className="w-4 h-4 rounded-full bg-white/75 animate-bounce mx-auto"></div>
                  <p className="text-white text-center">Uploading...</p>
                </>
              )}
            </>
          ) : additionalFieldMap.get(fieldValue.type) === "select" ? (
            <Select
              options={SUBTHEME_OPTION}
              required={
                fieldValue.priority === ADDITIONAL_FIELD_PRIORITY.FurtherData &&
                team.status === TEAM_STATUS.NeedFurtherData
                  ? true
                  : fieldValue.priority === ADDITIONAL_FIELD_PRIORITY.First
              }
              isMulti
              isDisabled={!editMode}
              className="text-slate-900"
              onChange={(e) => handleSelect(e, fieldValue.normalizedName)}
              defaultValue={setSelectDefaultValue(
                AdditionalFieldValue[fieldValue.normalizedName]
              )}
            />
          ) : (
            <input
              id={fieldValue.normalizedName}
              type="text"
              disabled={!editMode}
              className="text-slate-800 font-semibold disabled:bg-white/75 text-md py-1 px-3 rounded-md focus:outline-none"
              value={
                editMode &&
                AdditionalFieldValue.hasOwnProperty(fieldValue.normalizedName)
                  ? AdditionalFieldValue[fieldValue.normalizedName]
                  : team?.teamAdditional[fieldValue.normalizedName]
              }
              onChange={(e) =>
                setAdditionalFieldValue((value) => ({
                  ...value,
                  [fieldValue.normalizedName]: e.target.value,
                }))
              }
            />
          )}
          <div className="mt-3 font-bold text-white drop-shadow-sm">
            {fieldValue?.description2 !== "<br>" &&
            fieldValue.description2 !== "" ? (
              <RawHTML className="mb-2 px-3 py-1 rounded-md bg-sky-600 w-fit text-white/80 font-semibold hover:text-white cursor-pointer">
                {fieldValue.description2 as string}
              </RawHTML>
            ) : null}
          </div>
        </div>
      ))}
      <button
        type="button"
        disabled={team.status === TEAM_STATUS.Accepted}
        onClick={() => setEditMode((value) => !value)}
        className={`${
          editMode ? "hidden" : ""
        } py-2 px-4 disabled:cursor-not-allowed bg-[#FFA31D] text-white drop-shadow-md rounded-lg font-semibold shadow-md active:hover:bg-[#1e4a5d] transition duration-200`}
      >
        Edit Data
      </button>
      <div className={`${editMode ? "flex" : "hidden"} gap-3`}>
        <button
          type="button"
          onClick={() => setEditMode(false)}
          className="py-2 px-4 bg-red-500 text-white drop-shadow-md rounded-lg font-semibold shadow-md hover:bg-[#1e4a5d] transition duration-200"
        >
          Preview
        </button>
        <button
          type="submit"
          disabled={team.status === TEAM_STATUS.Accepted || isLoading}
          className="flex-1 py-2 px-4 bg-[#FFA31D] disabled:cursor-not-allowed text-white drop-shadow-md rounded-lg font-semibold shadow-md enabled:hover:bg-[#1e4a5d] transition duration-200"
        >
          {isLoading ? "Saving..." : "Submit Data"}
        </button>
      </div>
    </form>
  );
}

const RawHTML = ({
  children,
  className = "",
}: {
  children: string;
  className: string;
}) => {
  if (CleanHTML(children) === "") return null;
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: CleanHTML(children) }}
    />
  );
};

const CleanHTML = (html: string | undefined) => {
  if (!html) return "";
  html?.replace("<br>", "");
  return html as string;
};

export default PaymentForm;
