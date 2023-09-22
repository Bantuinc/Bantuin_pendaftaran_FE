export default function Team(){
    return(
        <>
            {/* Content */}
            <div className="flex-1 px-2 sm:px-0">
                <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-extralight text-white/50">Payment</h3>
                    <div className="inline-flex items-center space-x-2">
                        <a className="bg-[#296875] text-white/50 p-2 rounded-md hover:text-white smooth-hover"
                           href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
                            </svg>
                        </a>
                        <a className="bg-[#296875] text-white/50 p-2 rounded-md hover:text-white smooth-hover"
                           href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M4 6h16M4 10h16M4 14h16M4 18h16"/>
                            </svg>
                        </a>
                    </div>
                </div>
                    <div className="flex justify-center items-center h-22">
                        <div className="my-20">
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Tata Cara Pembayaran</h2>
                                <div
                                    className="flex items-center justify-center bg-gradient-to-br from-purple-400 to-[#296875] rounded-lg p-8">
                                    <div className="text-center">
                                        <h3 className="text-xl font-semibold mb-4 text-white">Metode Pembayaran:</h3>
                                        <p className="text-xl font-bold text-white">BCA</p>
                                        <p className="text-xl font-bold text-white">7772867339</p>
                                        <p className="text-xl font-bold text-white">Zaizafun Zahra</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}
