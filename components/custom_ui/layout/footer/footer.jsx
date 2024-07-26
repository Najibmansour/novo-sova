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
      { title_p: "FAQ", href: "/" },
      { title_p: "Feedback", href: "/" },
    ],
  },
  {
    title: "Policy",
    links: [],
  },
];

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-background md:h-[28svh]">
      <div className="grid w-full grid-cols-1 gap-10 md:h-[20svh] md:grid-cols-4 md:text-center">
        {navigation.map(({ title, links }) => (
          <div key={title}>
            <h5 className="text-3xl">{title}</h5>
            {links.map(({ title_p }) => (
              <p className="text-lg" key={title_p}>
                {title_p}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex w-full flex-row items-center justify-evenly border-t-2 border-background md:h-[8vh]">
        <div className="flex flex-row gap-5">
          <LuInstagram className="h-6 w-6" />
          <LuTwitter className="h-6 w-6" />
          <LuFacebook className="h-6 w-6" />
        </div>
      </div>
      <div>{/* Follow us links, make it a gridfor it to be responsive */}</div>
    </div>
  );
};

export default Footer;
