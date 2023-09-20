
import Payment from "@/components/dashboard/payment";
import Sidebar from "@/components/dashboard/sidebar";
function Page() {
  return (
    <div className="lg:flex">
        <Sidebar active={"payment"}/>
        <Payment/>
    </div>
  );
}

export default Page;
