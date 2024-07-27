import { LuInstagram, LuTwitter, LuFacebook } from "react-icons/lu";
import React from "react";
import { Title } from "@radix-ui/react-dialog";

const navigation = [
  {
    title: "About us",
    links: [
      { title_p: "Our Story", href: "/" },
      { title_p: "History", href: "/" },
      { title_p: "Styles", href: "/" },
    ],
  },
  {
    title: "Categories",
    links: [
      { title_p: "Accessories", href: "/" },

      { title_p: "Women", href: "/" },
      { title_p: "Men", href: "/" },
    ],
  },
  {
    title: "Let's Connect",
    links: [
      { title_p: "Contact", href: "/" },
      { title_p: "FAQ", href: "/#faq" },
      { title_p: "Feedback", href: "/" },
    ],
  },
  {
    title: "Policy",
    links: [{ title_p: "Return's Policy", href: "/policy" }],
  },
];

const Footer = () => {
  return (
    <div className="mb-7 grid w-full grid-cols-5 grid-rows-1 px-5 text-background md:mb-0 md:h-[28svh] md:grid-cols-1 md:grid-rows-1 md:flex-col">
      <div className="col-span-4 grid grid-cols-1 gap-5 md:grid-cols-4 md:gap-10 md:text-center">
        {navigation.map(({ title, links }) => (
          <div key={title}>
            <h5 className="text-3xl">{title}</h5>
            {links.map(({ title_p }) => (
              <p
                className="text-lg transition-all hover:text-secondary"
                key={title_p}
              >
                {title_p}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex w-full flex-row items-center justify-center border-l-2 border-background md:h-[8svh] md:border-l-0 md:border-t-2">
        <div className="flex flex-col gap-5 md:flex-row">
          <LuInstagram className="h-6 w-6 hover:text-secondary" />
          <LuTwitter className="h-6 w-6 hover:text-secondary" />
          <LuFacebook className="h-6 w-6 hover:text-secondary" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
