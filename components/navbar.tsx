'use client'

import { useRouter } from "next/navigation";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";


export const Navbar = () => {
  const router = useRouter();

  

  return (
    <HeroUINavbar maxWidth="xl" position="sticky"
    classNames={{
      base: "bg-white/70 dark:bg-black/70 backdrop-blur-lg   rounded-b-2xl mt-3",
      wrapper: [
        "h-14", 
        "max-w-fit", 
        "px-6", 
        "gap-4",
        "rounded-full", 
        "border-1", 
        "border-white/20", 
        "shadow-xl",
        "bg-white/70",           
        "dark:bg-black/70",       
        "backdrop-blur-md",       
        "backdrop-saturate-150",  
      ],
    }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            
            <p className="font-bold text-inherit capitalize text-3xl">gtop</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                 
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-3 ml-5">
          <Button 
            onClickCapture={e => router.push('/')}
            color='primary' 
            variant="shadow"
            className="rounded-md capitalize"
          >
            contact us
          </Button>

          <Button 
            onClickCapture={e => router.push('/login')}
            variant="shadow"
            className="text-black bg-white rounded-full"
          >
            sign in
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
       
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
