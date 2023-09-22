'use client';
import Swal from "sweetalert2";

interface CreateCardProps {
    teamId:string
}

// export const CreateCard = ({teamId} :CreateCardProps) =>{
export const CreateCard = () =>{
    // const link = "/api/team"+teamId+"members"
    const crateOnClick = () => {
        Swal.fire({
            title: 'Submit your details',
            html:
                '<input id="name" class="swal2-input" placeholder="Name">' +
                '<input id="nim" class="swal2-input" placeholder="NIM">' +
                '<input id="email" class="swal2-input" placeholder="Email">' +
                '<input id="phone" class="swal2-input" placeholder="Phone">' +
                '<input id="ktm" class="swal2-input" placeholder="KTM">',
            showCancelButton: true,
            confirmButtonText: 'Look up',
            showLoaderOnConfirm: true,
            // customClass: {
            //     confirmButton: 'bg-[#296875]',
            //     cancelButton: 'btn btn-danger'
            // },
            preConfirm: (login) => {
                return fetch(`//api.github.com/users/${login}`)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(response.statusText)
                        }
                        return response.json()
                    })
                    .catch(error => {
                        Swal.showValidationMessage(
                            `Request failed: ${error}`
                        )
                    })
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: `${result.value.login}'s avatar`,
                    imageUrl: result.value.avatar_url
                })
            }
        })
    }
    return(
        <>
            <div
                onClick={crateOnClick}
                className="group bg-[#296875]/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-[#296875]/40 hover:smooth-hover">
                <a className="bg-[#296875]/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
                   >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                </a>
                <a className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
                   >Add member</a>
            </div>
        </>
    )
}

interface memberCardProps {
    name:string,
    image:string
}

export function memberCard({name,image} :memberCardProps){
    return(
        <>
            <div
                className="relative group bg-[#296875] py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-[#296875]/80 hover:smooth-hover">
                <img className="w-20 h-20 object-cover object-center rounded-full"
                     src={image}
                     alt="cuisine"/>
                <h4 className="text-white text-2xl font-bold capitalize text-center">{name}</h4>
                <p className="text-white/50">members</p>
                <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">Verified <span
                    className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"/>
                </p>
            </div>
        </>
    )
}
