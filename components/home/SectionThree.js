import Image from "next/image";
const sectionContents = [
  {
    title: "Water and energy efficiency",
    description:
      "Energy prices are steadily increasing year by year, and with a growing population, the demand and costs for energy are only set to increase. Incorporating energy efficient systems throughout your home will noticeably cut the price of your bills, and the initial setup cost will soon be earned back through the savings you'll make.",
    image: "london-image",
  },
  {
    title: "Less Maintenance",
    description:
      "Sustainability is key when building an eco home, the aim is to construct a home that lasts and has as little effect on the surrounding environment as possible. Green building materials are often more durable and require much less maintenance over time, helping your home to look newer for longer and saving money on costly repairs.",
    image: "electricalengr-image",
  },
  {
    title: "Lower carbon footprints",
    description:
      "Reducing our carbon footprint is something that we should all be taking into consideration. It’s important that we take steps now and start working to reduce our negative impact and help to sustain the environment for our future generations.",
    image: "carbon-image",
  },
];
const SectionThree = () => {
  return (
    <div className="px-5 space-y-20 mt-20 md:mt-72 xl:px-44">
      <h6 className="text-center font-semibold text-2xl md:text-5xl">
        Reasons you should own an eco-friendly home
      </h6>
      {sectionContents.map((content, index) => {
        const direction = index === 1 ? "md:flex-row-reverse" : "";
        const padding = index === 1 ? "md:pl-5" : "md:pr-5";
        return (
          <div
            key={index}
            className={`flex flex-col flex-col-reverse items-center font-light md:flex-row ${direction}`}
          >
            <div className={`space-y-5 pt-5 pl-0 ${padding} md:pt-0`}>
              <h3 className="text-lg font-semibold text-center md:text-start md:text-3xl">
                {content.title}
              </h3>
              <p className="text-secondary2 text-lg">{content.description}</p>
            </div>
            <Image
              src={`/images/${content.image}.png`}
              className="w-full h-auto lg:w-auto"
              width={387}
              height={352}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SectionThree;
