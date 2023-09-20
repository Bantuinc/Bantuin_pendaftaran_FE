
import Sidebar from "@/components/dashboard/sidebar";
import Home from "@/components/dashboard/home";
function Page() {
  return (
    <div className="lg:flex">
        <Sidebar active={"home"}/>
        <Home/>
    </div>
  );
}

export default Page;
