import Image from "next/image";

const SectionFour = () => {
  return (
    <form className="relative pt-24 pb-24 mt-40 px-5 flex flex-col items-center text-white rounded-2xl bg-primary md:px-0">
      <Image
        height={631}
        width={1115}
        alt="world map"
        src="/images/worldmap.svg"
        className="absolute top-0 left-0 right-0 bottom-0  h-full w-full"
      />
      <div className="text-2xl md:text-4xl">Speak with us futher</div>
      <div className="text-lg mt-1 font-light text-center">
      One of our agents would respond as soon as possible
      </div>
      <input
        type="email"
        placeholder="Enter email address"
        className="mt-10 text-lg pl-5 w-full h-[56px] rounded-lg text-black max-w-2xl"
      />
      <textarea
        placeholder="Your Message"
        className="mt-5 pl-5 pt-5 rounded-lg max-w-2xl text-lg text-black resize-none w-full h-[138px] block px-auto"
      ></textarea>

      <button
        type="submit"
        className="mt-10 bg-primaryshade rounded-lg text-primary py-4 px-7 font-semibold text-lg"
      >
        Send Message
      </button>
    </form>
  );
};

export default SectionFour;
