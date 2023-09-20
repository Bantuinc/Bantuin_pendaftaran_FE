import { hind } from "@/fonts/font";

export default function Team(){
    return(
        <>
            {/* Content */}
            <div className={`${hind.className} flex-1 px-2 sm:px-0`}>
                <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-extralight text-white/50">Groups</h3>
                    <div className="inline-flex items-center space-x-2">
                        <a className="bg-[#296875] text-white/50 p-2 rounded-md hover:text-white smooth-hover"
                           href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                            </svg>
                        </a>
                        <a className="bg-[#296875] text-white/50 p-2 rounded-md hover:text-white smooth-hover"
                           href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div
                    className="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    <div
                        className="group bg-[#296875]/30 py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-[#296875]/40 hover:smooth-hover">
                        <a className="bg-[#296875]/70 text-white/50 group-hover:text-white group-hover:smooth-hover flex w-20 h-20 rounded-full items-center justify-center"
                           href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                            </svg>
                        </a>
                        <a className="text-white/50 group-hover:text-white group-hover:smooth-hover text-center"
                           href="#">Add member</a>
                    </div>
                    <div
                        className="relative group bg-[#296875] py-10 sm:py-20 px-4 flex flex-col space-y-2 items-center cursor-pointer rounded-md hover:bg-[#296875]/80 hover:smooth-hover">
                        <img className="w-20 h-20 object-cover object-center rounded-full"
                             src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
                             alt="cuisine"/>
                        <h4 className="text-white text-2xl font-bold capitalize text-center">Agil Fuad Gumelar</h4>
                        <p className="text-white/50">members</p>
                        <p className="absolute top-2 text-white/20 inline-flex items-center text-xs">Verified <span
                                className="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"/>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}
