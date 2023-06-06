import Image from "next/image";

const SectionFour = () => {
  return (
    <form className="relative pt-24 pb-24 mt-40 flex flex-col items-center text-white rounded-2xl bg-primary">
      <Image
        height={631}
        width={1115}
        alt="world map"
        src="/images/worldmap.svg"
        className="absolute top-0 left-0 right-0 bottom-0  h-full w-full"
      />
      <div className="text-3xl md:text-4xl">Speak with us futher</div>
      <div className="text-lg mt-1 font-light text-center">
      One of our agents would respond as soon as possible
      </div>
      <input
        type="email"
        placeholder="Enter email address"
        className="mt-10 text-lg pl-5 w-full h-[56px] rounded-md text-black md:w-[472px]"
      />
      <textarea
        placeholder="Your Message"
        className="mt-5 pl-5 pt-5 rounded-md text-lg text-black resize-none w-full h-[138px] block px-auto md:w-[472px]"
      ></textarea>

      <button
        type="submit"
        className="mt-10 bg-primaryshade rounded-md text-primary py-4 px-7 font-semibold text-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default SectionFour;
