"use client";

import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { usePathname } from "next/navigation";
import { cn } from "../lib/utils";

const HeaderContainer = () => {
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
    <section className="header w-full bg-zinc-400">
      <header>
        {routes.map((route) => {
          const isActive =
            pathname === route.path || pathname.startsWith(`${route.path}/`);

          return (
            <Link
              key={route.name}
              href={route.path}
              className={cn(buttonVariants({ variant: "outline" }), {
                "bg-slate-600": isActive,
              })}
            >
              {route.name}
            </Link>
          );
        })}
      </header>
    </section>
  );
};

export { HeaderContainer };
