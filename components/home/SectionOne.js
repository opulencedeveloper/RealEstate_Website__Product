import Image from "next/image";

const sectionContents = [
  "Adequate security",
  "Lower energy cost",
  "Smaller carbon footprints",
];
const SectionOne = () => {
  return (
    <div className="flex space-x-5 pl-5 mt-3 pr-5 md:pl-14 md:pr-0 xl:items-start 2xl:items-center">
      <div className="flex flex-col justify-center space-y-5">
        <h2 className="text-6xl font-semibold leading-normal">
          Explore <span className="text-primary">eco-friendly</span> homes for
          healthier living
        </h2>
        <h3 className="text-secondary2 text-xl">
          Experience the best and safest environments with basic amenities near
          you.
        </h3>

        <button className="text-white text-lg font-semibold bg-primary px-8 py-4 rounded-md w-max">
          Find your dream home
        </button>
        <div className="space-y-5">
          <div className="font-semibold text-lg text-secondary">Benifits</div>
          {sectionContents.map((content, index) => (
            <div key={index} className="flex space-x-3 items-center">
              <Image
                src="images/icon/checkmark-icon.svg"
                height={20}
                width={20}
                className="h-auto w-auto"
              />
              <div>{content}</div>
            </div>
          ))}
        </div>
      </div>
      <Image
        src="/images/hero-image.svg"
        className="w-2/3 h-auto"
        priority
        loading="eager"
        width={722}
        height={619}
      />
    </div>
  );
};

export default SectionOne;
