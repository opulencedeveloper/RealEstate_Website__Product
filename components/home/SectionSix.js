import Image from "next/image";
import { useState } from "react";

const sectionContents = [
  {
    id: 0,
    title: "How do I get started",
    description:
      "Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack. Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack.",
  },
  {
    id: 2,
    title: "How do I get started",
    description:
      "Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack. Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack.",
  },
  {
    id: 3,
    title: "How do I get started",
    description:
      "Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack. Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack.",
  },
  {
    id: 4,
    title: "How do I get started",
    description:
      "Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack. Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack.",
  },
  {
    id: 5,
    title: "How do I get started",
    description:
      "Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack. Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack.",
  },
  {
    id: 6,
    title: "How do I get started",
    description:
      "Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack. Lörem ipsum autorad geoblockering olig än pov. Umibelt dotorobelt. Beninas ultrack.",
  },
];
const SectionSix = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="px-5 flex flex-col mt-40 mb-32 space-x-0 md:px-44 xl:flex-row xl:space-x-20">
      <div className="space-y-5">
        <p className="text-3xl font-medium leading-normal md:text-5xl">Frequently Asked Questions</p>
        <button className="flex items-center space-x-2">
          <p className="text-primary font-semibold">See more</p>
          <Image
            height={10.8}
            width={12}
            className="h-auto w-auto"
            src="/images/icon/arrowright-icon.svg"
          />
        </button>
      </div>

      <div className="w-full h-max md:w-1/2">
        <div>
          {sectionContents.map((content, index) => (
            <div key={index}>
              <button
                className="flex items-center justify-between w-full py-2 transition duration-300 ease-in-out"
                onClick={() => handleToggle(index)}
              >
                <span className="text-xl font-medium">{content.title}</span>
                <Image
                  className={`h-auto w-auto ml-1 transform ${
                    activeIndex === index ? "rotate-180" : ""
                  } transition duration-300 ease-in-out`}
                  src="/images/icon/dropdownhide-icon.svg"
                  width={11.31}
                  height={7.54}
                />
              </button>
              {activeIndex === index && (
                <div className="px-7 py-2 text-secondary2">{content.description}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
