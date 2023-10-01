"use client";
import { CITIZENSHIP, SUBTHEME_OPTION } from "@/utils/registration";
import axios, { AxiosError } from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import {
  ADDITIONAL_FIELD_PRIORITY,
  additionalFieldMap,
} from "@/utils/additionalFieldType";
import {
  previewParticipantDocumentURL,
  uploadParticipantDocument,
} from "@/lib/bucket";
import Select, { MultiValue } from "react-select";
import { cocogoose } from "@/fonts/font";
import { TEAM_STATUS } from "@/utils/teamStatusType";

interface TeamFormProps {
  team: Team;
  additionalField: AdditionalField[];
}
function TeamForm({ team, additionalField }: TeamFormProps) {
  const [teamName, setTeamName] = useState<string>(team.teamName);
  const [citizenShip, setCitizenShip] = useState<number>(
    Number(team.citizenship)
  );
  const [AdditionalFieldValue, setAdditionalFieldValue] =
    useState<StringObject>(team.teamAdditional);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [idUpload, setIdUpload] = useState<string>("");
  const [cookies] = useCookies(["accessToken"]);
  const router = useRouter();

  const saveTeamEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const body = {
      teamName,
      proofOfPayment: null,
      citizenship: citizenShip,
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
      Swal.fire({
        title: "Success!",
        text: data.message,
        icon: "success",
        confirmButtonText: "OK",
      });
      router.refresh();
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
      className="p-8 flex flex-col gap-3 rounded-xl bg-[#296875] md:max-w-[20rem]"
    >
      <div className="flex flex-col">
        <label
          htmlFor="teamName"
          className={`text-lg text-white font-semibold ${cocogoose.className}`}
        >
          Team Name
        </label>
        <input
          readOnly={!editMode}
          id="teamName"
          required
          className="text-slate-800 read-only:bg-white/75 text-md py-1 px-3 font-semibold rounded-md focus:outline-none"
          value={editMode ? teamName : team.teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="teamName"
          className={`text-lg text-white font-semibold ${cocogoose.className}`}
        >
          Citizenship
        </label>
        <div className="flex gap-3">
          <div
            className={`px-4 py-2 flex gap-3 rounded-lg text-slate-900 font-bold bg-white/75 w-fit`}
          >
            <input
              name="citizenShip"
              type="radio"
              id="domestic"
              disabled={!editMode}
              value={CITIZENSHIP.domestic}
              checked={citizenShip === CITIZENSHIP.domestic}
              onChange={(e) => setCitizenShip(Number(e.target.value))}
            />
            <label htmlFor="domestic">Domestic</label>
          </div>
          <div
            className={`px-4 py-2 flex gap-3 rounded-lg text-slate-900 font-bold bg-white/75 w-fit ${
              team.competitionId !== "4136c5a5-d92d-4117-b283-ca87bc738b67"
                ? "hidden"
                : "block"
            }`}
          >
            <input
              name="citizenShip"
              type="radio"
              id="overseas"
              disabled={!editMode}
              value={CITIZENSHIP.overseas}
              checked={citizenShip === CITIZENSHIP.overseas}
              onChange={(e) => setCitizenShip(Number(e.target.value))}
            />
            <label htmlFor="overseas">Overseas</label>
          </div>
        </div>
      </div>
      {additionalField.map((fieldValue: AdditionalField, id) => (
        <div
          key={id}
          className={`flex flex-col ${
            fieldValue.priority === ADDITIONAL_FIELD_PRIORITY.FurtherData ||
            fieldValue.priority === ADDITIONAL_FIELD_PRIORITY.First
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
          {additionalFieldMap.get(fieldValue.type) === "file" ? (
            <>
              <a
                href={
                  AdditionalFieldValue.hasOwnProperty(fieldValue.normalizedName)
                    ? AdditionalFieldValue[fieldValue.normalizedName]
                    : team?.teamAdditional[fieldValue.normalizedName]
                }
                target="_blank"
                className="text-blue-100 hover:text-blue-300"
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
                accept=".pdf"
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
                fieldValue.priority === ADDITIONAL_FIELD_PRIORITY.FurtherData ||
                fieldValue.priority === ADDITIONAL_FIELD_PRIORITY.First
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
        </div>
      ))}
      <button
        type="button"
        disabled={
          team.status === TEAM_STATUS.OnReview ||
          team.status === TEAM_STATUS.SelectionProcess ||
          team.status === TEAM_STATUS.NeedPayment ||
          team.status === TEAM_STATUS.Accepted
        }
        onClick={() => setEditMode((value) => !value)}
        className={`${
          editMode ? "hidden" : ""
        } py-2 px-4 disabled:cursor-not-allowed bg-[#FFA31D] text-white drop-shadow-md rounded-lg font-semibold shadow-md active:hover:bg-[#1e4a5d] transition duration-200`}
      >
        Edit Team Information
      </button>
      <div className={`${editMode ? "flex" : "hidden"} gap-3`}>
        <button
          type="button"
          onClick={() => setEditMode(false)}
          className="py-2 px-4 bg-red-500 text-white drop-shadow-md rounded-lg font-semibold shadow-md hover:bg-[#1e4a5d] transition duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 py-2 px-4 bg-[#FFA31D] disabled:cursor-not-allowed text-white drop-shadow-md rounded-lg font-semibold shadow-md enabled:hover:bg-[#1e4a5d] transition duration-200"
        >
          {isLoading ? "Saving..." : "Save Edit"}
        </button>
      </div>
    </form>
  );
}

export default TeamForm;
