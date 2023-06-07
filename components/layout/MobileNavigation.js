import Link from "next/link";
import { useRouter } from "next/router";

import handleWhatsAppClick from "@/helpers/whatsapp";
import Image from "next/image";

const pageContent = [
  {
    link: "/",
    title: "Home",
  },
  {
    link: "",
    title: "About",
  },
  {
    link: "",
    title: "Pricing",
  },
  {
    link: "",
    title: "Blogs",
  },
];

const MobileNavigation = (props) => {
  const router = useRouter();
  const activeLink = router.pathname;
  const { toggleDrawer } = props;

  return (
    <div className="flex flex-col bg-white h-full pt-4 lg:hidden">
      <div className="flex justify-center">
        <Image
          src="/images/logo/logo.svg"
          className="h-logo w-logo"
          alt="logo"
          width={72}
          height={72}
        />
      </div>
      <div className="space-y-5 bg-custom pt-5 w-full">
        {pageContent.map((content, index) => {
          const bgColor =
            activeLink === content.link ? "bg-primary" : "bg-white";
          const textColor =
            activeLink === content.link ? "text-white" : "text-black";
          return (
            <Link
              href={content.link}
              key={index}
              onClick={index === 0 ? toggleDrawer : handleWhatsAppClick}
              className={`${bgColor} border-ash border-b cursor-pointer flex space-x-3 rounded-tr-md rounded-br-md py-3 pl-6`}
            >
              <p className={`font-semibold ${textColor}`}>{content.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;
