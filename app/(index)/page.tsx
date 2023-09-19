import Faq from "@/components/Faq";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";

function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Timeline />
      <Gallery />
      <Faq />
    </div>
  );
}

export default Page;
