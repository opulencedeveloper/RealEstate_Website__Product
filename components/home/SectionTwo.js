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
      <div className=" mt-14 p-10 space-y-12 bg-secondary text-white ">
        <h4 className="text-center font-semibold text-4xl">What we offer</h4>
        <div className="flex space-x-48">
          {sectionContents.map((content, index) => (
            <p key={index} className="text-2xl font-light">
              {content}
            </p>
          ))}
        </div>
      </div>
      <h5 className="text-4xl font-semibold mb-14 mt-24">Available Properties</h5>
      <div className="flex px-3 space-x-40">
        {availableProperties.map((content, index) => (
          <div key={index} className="flex flex-col space-y-3 bg-white py-5 px-3">
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
            <button className="py-4 text-white font-semibold bg-primary rounded-md mx-1">
              See available apartments
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionTwo;
