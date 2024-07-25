import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Label } from "@radix-ui/react-label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const navigation = [
  { title: "Home", href: "" },
  { title: "About", href: "/about" },
  { title: "Categories", href: "/products" },
  { title: "Let's Connect", href: "/contact" },
  { title: "Policy", href: "/policy" },
];

const NavMenu = () => {
  return (
    <div>
      <div className="hidden flex-row gap-10 text-xl tracking-wide text-background md:flex">
        {navigation.map(({ title, href }) => (
          <Link href={href} key={title}>
            {title}
          </Link>
        ))}
      </div>

      <Sheet className="md:hidden">
        <SheetTrigger asChild>test</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Edit profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here.
            </SheetDescription>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
          </div>
          <SheetFooter>
            <SheetClose asChild></SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMenu;
