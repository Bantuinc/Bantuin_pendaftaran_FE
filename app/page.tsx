import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";

function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Gallery />
      <Faq />
    </div>
  );
}

export default Page;
