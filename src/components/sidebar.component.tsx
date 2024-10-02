"use client";

import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const SidebarContainer = () => {
  const pathname = usePathname();

  const routes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Profile",
      path: "/profile",
    },
    {
      name: "Login",
      path: "/login",
    },
  ];

  return (
    <div className="sidebar xs:w-20 min-h-full bg-white py-10 pl-4 pr-0 shadow-md lg:w-80">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <nav className="mt-32 flex flex-col gap-3">
        {routes.map((route) => {
          const isActive =
            pathname === route.path || pathname.startsWith(`${route.path}/`);

          return (
            <Link
              key={route.name}
              href={route.path}
              className={cn(buttonVariants({ variant: "outline" }), {
                "bg-gray-200": isActive,
              })}
            >
              {route.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export { SidebarContainer };
