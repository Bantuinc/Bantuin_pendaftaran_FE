"use client";
import axios, { AxiosError } from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import {redirect, useRouter} from "next/navigation";
import Swal from "sweetalert2";

import {AlertCircle} from "lucide-react";

interface MemberFormProps {
    competitionId: string;
    teamId:string;
    accessToken:string
}
function DeleteButtonForm({ competitionId,teamId,accessToken }: MemberFormProps) {
    const [editMode, setEditMode] = useState<boolean>(true);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [cookies] = useCookies(["accessToken"]);
    const origin =
        typeof window !== "undefined" && window.location.origin
            ? window.location.origin
            : "";
    const { push } = useRouter();

    const deleteTeamEdit = async () => {
        try {
            Swal.fire({
                title: 'Do you want to delete this member?',
                showCancelButton: true,
                confirmButtonText: 'Yes',
            }).then(async (result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {const {data} = await axios.delete(
                    `${process.env.NEXT_PUBLIC_API_URL}/api/team/${competitionId}/members/${teamId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                    Swal.fire({
                        title: "Success!",
                        text: data.message,
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                    push(`${origin}/groups`)

                } else {
                    throw new Error("Member not deleted")
                }
            })

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


    return (
        <div

            className="max-h-min p-8 flex flex-col gap-3 rounded-xl bg-[#296875] md:max-w-[20rem]"
        >
            <div className="flex flex-col gap-3">
                <div className="flex items-center gap-1 py-1 px-4 text-white font-semibold rounded-full bg-[#1e4a5d] w-fit">
                    <AlertCircle className="w-4 h-4" />
                    <p>Delete Member</p>
                </div>
                <h3 className="text-white text-lg">
                    Deleted member cannot be recovered
                </h3>
                <button
                    onClick={deleteTeamEdit}
                    className="py-3 px-6 enabled:bg-red-500 disabled:bg-gray-300 disabled:cursor-not-allowed enabled:hover:bg-[#1e4a5d] rounded-md text-white shadow-md font-bold text-lg transition-all"
                >
                    <p className="drop-shadow-md">Delete This Member</p>
                </button>
            </div>
        </div>
    );
}

export default DeleteButtonForm;
