import ContactInfoSVG from "@/components/svg_icons/contact_info";
import { Mail, Phone } from "lucide-react";
import React from "react";

const ContactInfo = () => {
  return (
    <div className="space-y flex w-full items-center justify-center space-x-5 py-10 text-secondary">
      <ContactInfoSVG className="w-8" />
      <div className="w-[60%] space-y-10">
        <div className="space-y-2">
          <h3 className="flex flex-row items-center space-x-1.5 text-3xl">
            <Phone className="h-6 w-6" />
            <span>Phone Number:</span>
          </h3>
          <div className="rounded-lg border-2 border-secondary bg-secondary/20 px-3 py-4">
            <p>+961 000 000</p>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="flex flex-row items-center space-x-1.5 text-3xl">
            <Mail className="h-6 w-6" />
            <span>Phone Number:</span>
          </h3>
          <div className="rounded-lg border-2 border-secondary bg-secondary/20 px-3 py-4">
            <p>+961 000 000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
