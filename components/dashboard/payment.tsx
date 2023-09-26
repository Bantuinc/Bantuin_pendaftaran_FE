import { hind } from "@/fonts/font";

export default function Payment() {
  return (
    <>
      <div className="flex-1 px-2 sm:px-0">
        <div className="flex justify-between items-center"></div>
        <div className="flex justify-center items-center h-22">
          <div className="my-20">
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4 text-center text-slate-200">
                Please do the payment, as soon as possible to,
              </h2>
              <div className="flex items-center justify-center bg-gradient-to-br from-purple-400 to-[#296875] rounded-lg p-8">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">BCA</p>
                  <p
                    className={`text-xl font-bold text-white tracking-wide ${hind.className}`}
                  >
                    7772867339
                  </p>
                  <p className="text-xl font-bold text-white">Zaizafun Zahra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
