import Image from "next/image";

const SectionFive = () => {
  return (
    <div className="px-4 md:px-44 mt-14 ">
      <div className="flex flex-col-reverse items-center space-x-0 lg:flex-row xl:space-x-5">
        <div className="relative w-screen md:w-full h-[30rem] lg:w-[50rem]">
          <Image
            width={140}
            height={140}
            alt="image1"
            src="/images/image1.svg"
            className="h-auto w-auto absolute top-0 right-5"
          />
          <Image
            width={96}
            height={96}
            alt="image2"
            src="/images/image2.svg"
            className="h-auto w-auto absolute left-0 top-20"
          />
          <Image
            width={72}
            height={72}
            alt="image3"
            src="/images/image3.svg"
            className="h-auto w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            width={150}
            height={150}
            alt="image4"
            src="/images/image4.svg"
            className="h-auto w-auto absolute bottom-0 left-2 md:left-8"
          />
          <Image
            width={112}
            height={112}
            alt="image4"
            src="/images/image5.svg"
            className="h-auto w-auto absolute right-0 top-52 md:top-40"
          />
        </div>
        <div className="space-y-4 w-full ">
          <h3 className="text-primary font-semibold text-lg">TESTIMONIALS</h3>
          <p className="font-semibold text-2xl leading-normal md:text-4xl">
            “I used this platform while house-hunting last year, and I must say
            it's really commendable.”
          </p>
          <p className="text-secondary2 text-lg">Amobi Victor Chukwuka</p>
          <div className="flex space-x-3">
            <div className="bg-primary h-4 w-4 rounded-full"></div>
            <div className="bg-secondary2 h-4 w-4 rounded-full"></div>
            <div className="bg-secondary2 h-4 w-4 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
