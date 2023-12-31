"use client";
import { CITIZENSHIP, SUBTHEME_OPTION } from "@/utils/registration";
import axios, { AxiosError } from "axios";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useState,
} from "react";
import { useCookies } from "react-cookie";
import { redirect, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { additionalFieldMap } from "@/utils/additionalFieldType";
import {
  previewParticipantDocumentURL,
  uploadParticipantDocument,
} from "@/lib/bucket";
import Select, { MultiValue } from "react-select";
import { cocogoose, hind } from "@/fonts/font";

interface MemberFormProps {
  team?: Team;
  member: Member;
  additionalField: AdditionalField[] | null;
  isAdd: Boolean | null;
  teamId: string;
}
function MemberForm({
  team,
  member,
  additionalField,
  isAdd,
  teamId,
}: MemberFormProps) {
  const isHackaton = team?.competitionId === "d1cc9eda-7e0b-4446-9762-858c4bef3d4c"
  const [memberName, setmemberName] = useState<string>(member.name);
  const [memberNim, setmemberNim] = useState<string>(
    (member.nim ? member.nim : (isHackaton?"0":"")).toString()
  );
  const [memberEmail, setmemberEmail] = useState<string>(member.email);
  const [memberPhone, setmemberPhone] = useState<string>(member.phone);
  const [memberKtm, setmemberKtm] = useState<string>(member.ktm);

  const [AdditionalFieldValue, setAdditionalFieldValue] =
    useState<StringObject>(member.memberAdditional);
  const [editMode, setEditMode] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cookies] = useCookies(["accessToken"]);
  const router = useRouter();
  const { push } = useRouter();
  const savememberEdit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const body = {
      name: memberName,
      nim: memberNim,
      email: memberEmail,
      phone: memberPhone,
      ktm: memberKtm,
      memberAdditional: AdditionalFieldValue,
    };
    try {
      const { data } = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/team/${teamId}/members/${member.id}`,
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
      }).then(() => {
        push(`${origin}/groups`);
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
      // Swal.fire({
      //   title: "Error!",
      //   text: error,
      //   icon: "error",
      //   confirmButtonText: "OK",
      // });
    }
    setEditMode(false);
    setIsLoading(false);
  };

  const savememberAdd = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    const body = {
      name: memberName,
      nim: memberNim,
      email: memberEmail,
      phone: memberPhone,
      ktm: memberKtm,
      memberAdditional: AdditionalFieldValue,
    };
    console.log(body);
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/team/${teamId}/members`,
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
      }).then(() => {
        push(`${origin}/groups`);
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
      // else {
      //   Swal.fire({
      //     title: "Error!",
      //     text: error,
      //     icon: "error",
      //     confirmButtonText: "OK",
      //   });
      // }
    }
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

  const handleUploadKTM = async (
    e: ChangeEvent<HTMLInputElement>,
    callback: Dispatch<SetStateAction<string>>
  ): Promise<void> => {
    if (!e.target?.files) return;
    setIsLoading(true);
    const uploadedFile = e.target?.files[0];
    try {
      const res = await uploadParticipantDocument(uploadedFile);
      const previewURL = previewParticipantDocumentURL(res.$id);
      callback(previewURL);
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
    <form
      onSubmit={isAdd ? savememberAdd : savememberEdit}
      className={`p-8 flex flex-col gap-3 rounded-xl bg-[#296875] md:w-[30rem] ${hind.className}`}
    >
      <div className="flex flex-col">
        <label
          htmlFor="memberName"
          className={`text-lg text-white font-semibold ${cocogoose.className}`}
        >
          Name
        </label>
        <input
          readOnly={!editMode}
          id="memberName"
          required
          className="text-slate-800 read-only:bg-white/75 text-md py-1 px-3 font-semibold rounded-md focus:outline-none"
          value={isAdd || editMode ? memberName : member.name}
          onChange={(e) => setmemberName(e.target.value)}
        />
      </div>
      {isHackaton?<div/>:
          <div className="flex flex-col">
            <label
                htmlFor="memberNim"
                className={`text-lg text-white font-semibold ${cocogoose.className}`}
            >
              Student&apos;s ID Number
            </label>
            <input
                readOnly={!editMode}
                id="memberNim"
                type="number"
                required
                className="text-slate-800 read-only:bg-white/75 text-md py-1 px-3 font-semibold rounded-md focus:outline-none"
                value={editMode ? memberNim : member.nim}
                onChange={(e) => setmemberNim(e.target.value)}
            />
          </div>
      }

      <div className="flex flex-col">
        <label
          htmlFor="memberName"
          className={`text-lg text-white font-semibold ${cocogoose.className}`}
        >
          Email
        </label>
        <input
          readOnly={!editMode}
          id="memberEmail"
          required
          className="text-slate-800 read-only:bg-white/75 text-md py-1 px-3 font-semibold rounded-md focus:outline-none"
          value={isAdd || editMode ? memberEmail : member.email}
          onChange={(e) => setmemberEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="memberName"
          className={`text-lg text-white font-semibold ${cocogoose.className}`}
        >
          Phone Number
          <br />
          <p className="text-sm text-blue-100">
            *Please include your Whats App registered phone number.
          </p>
        </label>
        <input
          readOnly={!editMode}
          id="memberName"
          required
          className="text-slate-800 read-only:bg-white/75 text-md py-1 px-3 font-semibold rounded-md focus:outline-none"
          value={isAdd || editMode ? memberPhone : member.phone}
          onChange={(e) => setmemberPhone(e.target.value)}
        />
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="memberName"
          className={`text-lg text-white font-semibold ${cocogoose.className}`}
        >
          {isHackaton?"":"Student`s"} ID Card


        </label>
        {isHackaton?(

                <p className="my-2 text-sm text-white font-notmal">

                  {"ID cards, student cards, driving licences, or others similar ID are valid"}
                </p>)
            :
            ""}
        <a
          href={memberKtm}
          target="_blank"
          className="text-blue-100 hover:text-blue-300"
        >
          Preview Uploaded Document
        </a>
        <input
          id="ktm"
          type="file"
          required
          disabled={!editMode}
          style={{ display: editMode ? "block" : "none" }}
          className="text-slate-800 font-semibold bg-white disabled:bg-white/75 text-md py-1 px-3 rounded-md focus:outline-none"
          accept=".pdf,.png,.jpg"
          onChange={(e) => handleUploadKTM(e, setmemberKtm)}
        />
        {isLoading && (
          <>
            <div className="w-4 h-4 rounded-full bg-white/75 animate-bounce mx-auto"></div>
            <p className="text-white text-center">Uploading...</p>
          </>
        )}
      </div>
      {additionalField?.map((fieldValue: AdditionalField, id) => (
        <div key={id} className="flex flex-col">
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
                  AdditionalFieldValue?.hasOwnProperty(
                    fieldValue.normalizedName
                  )
                    ? AdditionalFieldValue[fieldValue.normalizedName]
                    : member?.memberAdditional?.hasOwnProperty(
                        fieldValue.normalizedName
                      )
                    ? member.memberAdditional[fieldValue.normalizedName]
                    : ""
                }
                target="_blank"
                className="text-blue-100 hover:text-blue-300 cursor-pointer"
              >
                Preview Uploaded Document
              </a>
              <input
                id={fieldValue.normalizedName}
                type="file"
                required={AdditionalFieldValue?.hasOwnProperty(
                  fieldValue.normalizedName
                )}
                disabled={!editMode}
                style={{ display: editMode ? "block" : "none" }}
                className="text-slate-800 font-semibold bg-white disabled:bg-white/75 text-md py-1 px-3 rounded-md focus:outline-none"
                accept=".pdf,.png,.jpg"
                onChange={(e) =>
                  handleAdditionalFile(e, fieldValue.normalizedName)
                }
              />
              {isLoading && (
                <>
                  <div className="w-4 h-4 rounded-full bg-white/75 animate-bounce mx-auto"></div>
                  <p className="text-white text-center">Uploading...</p>
                </>
              )}
            </>
          ) : additionalFieldMap.get(fieldValue.type) === "select" ? (
            <Select
              options={SUBTHEME_OPTION}
              // required={!fieldValue.hasOwnProperty(fieldValue.normalizedName)}
              isMulti
              isDisabled={!editMode}
              className="text-slate-900"
              onChange={(e) => handleSelect(e, fieldValue.normalizedName)}
            />
          ) : (
            <input
              id={fieldValue.normalizedName}
              type="text"
              disabled={!editMode}
              className="text-slate-800 font-semibold disabled:bg-white/75 text-md py-1 px-3 rounded-md focus:outline-none"
              value={
                editMode &&
                AdditionalFieldValue?.hasOwnProperty(fieldValue.normalizedName)
                  ? AdditionalFieldValue[fieldValue.normalizedName]
                  : member?.memberAdditional?.hasOwnProperty(
                      fieldValue.normalizedName
                    )
                  ? member.memberAdditional[fieldValue.normalizedName]
                  : ""
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
        onClick={() => setEditMode((value) => !value)}
        className={`${editMode ? "hidden" : ""} ${
          cocogoose.className
        } py-2 px-4 bg-[#FFA31D] text-white drop-shadow-md rounded-lg font-semibold shadow-md hover:bg-[#1e4a5d] transition duration-200`}
      >
        Edit member Information
      </button>
      <div
        className={`${editMode ? "flex" : "hidden"} ${
          cocogoose.className
        } gap-3`}
      >
        {!isAdd ? (
          <button
            type="button"
            onClick={() => (isAdd ? redirect("../") : setEditMode(false))}
            className="py-2 px-4 bg-red-500 text-white drop-shadow-md rounded-lg font-semibold shadow-md hover:bg-[#1e4a5d] transition duration-200"
          >
            Cancel
          </button>
        ) : (
          <div />
        )}
        <button
          type="submit"
          disabled={isLoading}
          className={
            (!isAdd ? "" : "mr-4 ") +
            "flex-1 py-2 px-4 bg-[#FFA31D] disabled:cursor-not-allowed text-white drop-shadow-md rounded-lg font-semibold shadow-md enabled:hover:bg-[#1e4a5d] transition duration-200"
          }
        >
          {isLoading ? "Saving..." : isAdd ? "Add Member" : "Save Edit"}
        </button>
      </div>
    </form>
  );
}

export default MemberForm;
