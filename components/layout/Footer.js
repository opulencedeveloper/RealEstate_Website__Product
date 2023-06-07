import Image from "next/image";
const icons = [
  "facebook-icon",
  "instagram-icon",
  "twitter-icon",
  "linkedin-icon",
];
const Footer = () => {
  return (
    <footer className="bg-secondary px-5 text-white font-light pb-10 pt-20 text-xl md:px-10">
      <div className="flex justify-between flex-col space-y-8 xl:flex-row md:space-y-0">
        {" "}
            <div className="max-w-lg mb-10">This platform enables individuals to locate eco-friendly apartments around them</div>
             
        <div className="flex justify-between w-full space-x-0 md:w-max md:space-x-12">  <div className="space-y-4">
            <div>Services</div>
            <div>Carrer</div>
            <div>FAQs</div>
          </div>

          <div className="space-y-4">
            <div>About</div>
            <div>Blog</div>
            <div>Registration</div>
          </div> </div>
       
        <div className="flex flex-col items-start space-y-4 md:items-end">
          <div>Follow us on Social media</div>
          <div className="flex space-x-8">
            {icons.map((icon, index) => (
              <Image
                key={index}
                className="w-auto h-auto"
                alt={icon}
                height={30.72}
                width={30.72}
                src={`images/icon/${icon}.svg`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-500 mt-20 text-sm font-normal text-lg text-center pt-5">
        Property of <span className="font-bold">opulencedeveloper.com</span>{" "}
        2023, All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
