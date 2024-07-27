import Hero from "@/components/custom_ui/hero/hero";
import React from "react";

import img from "@/assets/contact.png";
import LetsConnect from "@/components/svg_icons/lets_conn";
import { Mail, Phone } from "lucide-react";
import ContactInfoSVG from "@/components/svg_icons/contact_info";
import ContactInfo from "@/components/custom_ui/contact/contactInfo";
import FAQ from "@/components/custom_ui/contact/faq";

const Contact = () => {
  return (
    <main>
      <Hero img={img}>
        <LetsConnect></LetsConnect>
      </Hero>
      <ContactInfo />
      <FAQ></FAQ>
    </main>
  );
};

export default Contact;
