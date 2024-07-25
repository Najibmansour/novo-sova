import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WheatIcon } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center text-background md:h-[50svh]">
      <div className="grid w-full grid-cols-4 border-y-2 border-background text-center md:h-[20svh]">
        <div className="">
          <h5 className="text-xl">Text Big</h5>
          <h6 className="text-lg">test</h6>
          <h6 className="text-lg">test</h6>
          <h6 className="text-lg">test</h6>
        </div>
        <div className="">
          <h5 className="text-xl">Text Big</h5>
          <h6 className="text-lg">test</h6>
          <h6 className="text-lg">test</h6>
          <h6 className="text-lg">test</h6>
        </div>
        <div className="">
          <h5 className="text-xl">Text Big</h5>
          <h6 className="text-lg">test</h6>
          <h6 className="text-lg">test</h6>
          <h6 className="text-lg">test</h6>
        </div>
        <div className="">
          <h5 className="text-xl">Text Big</h5>
          <h6 className="text-lg">test</h6>
          <h6 className="text-lg">test</h6>
          <h6 className="text-lg">test</h6>
        </div>
      </div>
      <div className="flex w-full flex-row items-center justify-evenly bg-green-400 md:h-[20svh]">
        <div>
          <h5>Stay Connected</h5>
          <Input></Input>
        </div>
        <Button variant="secondary" className="space-x-1.5">
          <WheatIcon className="h-4 w-4" />
          <span>Order Now</span>
        </Button>
      </div>
      <div>{/* Follow us links, make it a gridfor it to be responsive */}</div>
    </div>
  );
};

export default Footer;
