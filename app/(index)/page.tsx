import dynamic from "next/dynamic";
const Faq = dynamic(() => import("@/components/Faq"), {
  loading: () => <div>Loading...</div>,
});
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <div>Loading...</div>,
});
const Timeline = dynamic(() => import("@/components/Timeline"), {
  loading: () => <div>Loading...</div>,
});
const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <div>Loading...</div>,
});

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
