import handleWhatsAppClick from "@/helpers/whatsapp";
import Image from "next/image";

const sectionContents = [
  "Adequate security",
  "Lower energy cost",
  "Smaller carbon footprints",
];
const SectionOne = () => {
  return (
    <div className="flex flex-col pl-5 pr-5 mt-3 space-y-8 pt-16 md:pt-0 md:mt-3 md:pl-14 md:pr-14 xl:pr-0 xl:flex-row xl:space-y-0 xl:items-start 2xl:items-center">
      <div className="fixed top-0 right-5 text-xs">
        Site developed by opulencedeveloper
      </div>
      <div className="flex-col justify-center space-y-3 md:space-y-8">
        <h2 className="text-3xl font-semibold md:text-6xl">
          Explore <span className="text-primary">eco-friendly</span> homes for
          healthier living
        </h2>
        <h3 className="text-secondary2 text-lg md:text-xl">
          Experience the best and safest environments with basic amenities near
          you.
        </h3>

        <button
        onClick={handleWhatsAppClick}
         className="text-white text-base font-semibold bg-primary px-8 py-4 rounded-md w-max md:text-lg md:py-5">
          Find your dream home
        </button>

        <Image
        src="/images/hero-image.svg"
        className="h-auto w-full flex pt-5 xl:hidden"
        priority
        loading="eager"
        width={722}
        height={619}
      />

        <div className="space-y-5">
          <div className="font-semibold text-xl text-secondary pt-3">Benifits</div>
          {sectionContents.map((content, index) => (
            <div key={index} className="flex space-x-3 items-center">
              <Image
                src="images/icon/checkmark-icon.svg"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
              <div className="font-medium">{content}</div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/images/hero-image.svg"
        className="h-auto w-2/3 hidden xl:block"
        priority
        loading="eager"
        width={722}
        height={619}
      />
    </div>
  );
};

export default SectionOne;
