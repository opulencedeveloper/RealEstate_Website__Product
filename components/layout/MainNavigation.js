import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//import Portal from "../UI/Portal";
// import MobileNavigation from "./MobileNavigation";
// import handleWhatsAppClick from "@/helpers/whatsapp";

const linkContent = [
  { title: "Solution", link: "/" },
  { title: "Resources", link: "" },
  { title: "Pricing", link: "" },
  { title: "Blogs", link: "" },
];
let navAnimationClass = "";

const MainNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const activeLink = router.pathname;

  const toggleDrawer = () => {
    if (isOpen) {
      navAnimationClass = "";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    } else {
      navAnimationClass = "open";
      setIsOpen((prevExpenses) => {
        return !prevExpenses;
      });
    }
  };
  return (
    <nav className="w-full flex items-center mt-2 justify-between px-5 md:px-14">
      <Image
        src="/images/logo/logo.svg"
        className="h-logo w-logo"
        width={72}
        height={72}
      />
      <div className="space-x-32  w-max flex justify-between items-center">
        <div className="flex space-x-20">
          {" "}
          {linkContent.map((content, index) => (
            <Link
              key={index}
              className="text-secondary2 text-xl"
              href={content.link}
            >
              {content.title}
            </Link>
          ))}{" "}
        </div>
        <Link
          href={""}
          className="bg-primaryshade rounded-md py-4 px-8 text-primary font-bold"
        >
          Book Consultation
        </Link>
      </div>
    </nav>
  );
};

export default MainNavigation;
