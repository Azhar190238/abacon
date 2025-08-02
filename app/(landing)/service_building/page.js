
import Free_Consultation from "@/app/components/landing/home/free_initial";
import CommonHeader from "../../components/common/common_section";


export default function Service() {
  return (
    <main className="">
      <CommonHeader heading="Services" subheading={"Building Design Plans"}/>
      <Free_Consultation/>
    </main>
  );
}
