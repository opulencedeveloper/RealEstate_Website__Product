import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import Portal from "../UI/Portal";
import MobileNavigation from "./MobileNavigation";
import handleWhatsAppClick from "@/helpers/whatsapp";

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
      <Portal>
        <div
          className={`fixed inset-y-0 -left-64 z-50 w-64 shadow-lg transform ${
            isOpen ? "translate-x-full" : "translate-x-0"
          } transition-transform duration-300 ease-in-out`}
        >
          <MobileNavigation toggleDrawer={toggleDrawer} />
        </div>
      </Portal>
      <div className="flex justify-between items-center w-max lg:w-9/12">
        <Image
          src="/images/logo/logo.svg"
          className="h-logo w-logo"
          alt="logo"
          width={72}
          height={72}
        />
        <div className=" hidden lg:flex space-x-20">
          {" "}
          {linkContent.map((content, index) => (
            <Link
              key={index}
              className="text-secondary2 text-xl"
              onClick={handleWhatsAppClick}
              href={content.link}
            >
              {content.title}
            </Link>
          ))}{" "}
        </div>{" "}
      </div>
     <div className="flex items-center space-x-5"> <Link
        href={""}
        className="bg-primaryshade rounded-md py-4 px-4 text-primary font-bold text-xs md:px-8 md:text-base"
      >
        Book Consultation
      </Link>
      <button
        className={`${navAnimationClass} flex hamburger focus:outline-none lg:hidden`}
        type="button"
        onClick={toggleDrawer}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button> </div>
    </nav>
  );
};

export default MainNavigation;
