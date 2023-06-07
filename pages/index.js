import SectionFive from "@/components/home/SectionFive";
import SectionFour from "@/components/home/SectionFour";
import SectionOne from "@/components/home/SectionOne";
import SectionSix from "@/components/home/SectionSix";
import SectionThree from "@/components/home/SectionThree";
import SectionTwo from "@/components/home/SectionTwo";
import Image from "next/image";
import handleWhatsAppClick from "@/helpers/whatsapp";

export default function Home() {
  return (
    <>
      <Image
        src="/images/for-sale.png"
        alt="for sale"
        width={200}
        height={200}
        onClick={handleWhatsAppClick}
        className="h-auto w-auto fixed bottom-0 right-10 z-20 cursor-pointer"
      />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </>
  );
}
