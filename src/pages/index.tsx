import Image from "next/image";
import Header from "@/components/Header";
import GSTConsultants from "@/components/GSTConsultants";
import Practice from "@/components/Practice";
import Testimonial from "@/components/Testimonial";
import ContactUs from "@/components/ContactUs";
import Count from "@/components/Count";
import Footer from "@/components/Footer";
import Carousal from "@/components/Carousal";

export default function Home() {
  return (
    <main>
      <div>
        <Carousal/>
        <GSTConsultants />
        <Practice />
        <Testimonial/>
        <ContactUs/>
        <Count/>
      </div>
    </main>
  );
}
