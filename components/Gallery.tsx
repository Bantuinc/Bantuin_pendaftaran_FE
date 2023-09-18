import { roboto } from "@/fonts/font";
import GalleryImage from "./GalleryImage";
import Underline from "./Underline";

function Gallery() {
  return (
    <section
      className="md:p-16 px-4 py-16 min-h-screen flex flex-col justify-center items-center object-cover"
      style={{
        background: "linear-gradient(#f8d09eaa, #f8d09eaa),url('/texture.png')",
      }}
    >
      <div className="w-fit">
        <h1
          className={`text-[#2A6876] text-6xl font-bold text-center ${roboto.className}`}
        >
          Let’s take a look at our content!
        </h1>
        <Underline />
      </div>
      <div className="md:p-24 px-4 py-8 flex flex-col justify-center w-full ring-2 ring-slate-100 rounded-[25px] bg-gradient-radial from-[#fff6] to-[#FFFFFF03] backdrop-blur-[8px]">
        <GalleryImage />
      </div>
    </section>
  );
}

export default Gallery;
