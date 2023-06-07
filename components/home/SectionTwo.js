import Image from "next/image";

const sectionContents = [
  "We ensure that you get exactly what you paid for and all your expectations are met",
  "We ensure that you get exactly what you paid for and all your expectations are met",
  "We ensure that you get exactly what you paid for and all your expectations are met",
];

const availableProperties = [
  {
    image: "duplex-image",
    title: "Duplex",
    description:
      "Explore the beauty of eco-friendly homes in some of our beautiful, elegant and well furnished duplex",
  },
  {
    image: "bungalow-image",
    title: "Bungalow",
    description:
      "Explore the beauty of eco-friendly homes in some of our beautiful, elegant and well furnished bungalow",
  },
  {
    image: "sharedrooms-image",
    title: "Shared rooms",
    description:
      "Explore the beauty of eco-friendly homes in some of our beautiful, elegant and well furnished shared rooms",
  },
];

const SectionTwo = () => {
  return (
    <div className="mx-5 md:mx-14">
      <div className=" mt-14 px-5 py-12 space-y-14 bg-secondary text-white md:px-12">
        <h4 className="text-center font-semibold text-xl md:text-4xl">What we offer</h4>
        <div className="flex flex-col space-y-10 justify-between xl:flex-row xl:space-y-0">
          {sectionContents.map((content, index) => (
            <p key={index} className="font-light w-full md:text-xl md:text-2xl xl:max-w-xs">
              {content}
            </p>
          ))}
        </div>
      </div>
      <h5 className="text-xl font-semibold mb-7 mt-28 md:mb-12 md:text-4xl">Available Properties</h5>
      <div className="flex flex-wrap w-full">
        {availableProperties.map((content, index) => (
          <div key={index} className="w-full flex flex-col space-y-3 max-w-full mb-5 bg-white py-5 px-3 mr-0 md:max-w-sm md:mr-5">
            <Image
              src={`/images/${content.image}.svg`}
              alt={content.title}
              height={194}
              width={352}
              className="w-auto h-auto"
            />
            <div className="font-semibold text-xl">{content.title}</div>
            <p className="text-secondary2 font-light">
             {content.description}
            </p>
            <button className="py-4 text-white font-semibold bg-primary rounded-md w-max px-5 md:w-full ">
              See available apartments
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
