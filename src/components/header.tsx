"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";
import menu from "../../public/assets/icons/menu.svg";
import blackMenu from "../../public/assets/icons/black-menu.svg";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";

export default function HeaderComponent() {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [fontColor, setFontColor] = useState("text-white");
  const [menuImage, setMenuImage] = useState<StaticImageData>(menu);
  const router = useRouter();

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-background");
        setFontColor("text-coolblack");
        setMenuImage(blackMenu);
      } else {
        setBgColor("bg-transparent");
        setFontColor("text-white");
        setMenuImage(menu);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const WOW = require("wowjs");
    const wow = new WOW.WOW({
      live: true, // Opsi ini untuk tidak memantau elemen baru yang ditambahkan secara dinamis
    });
    wow.init();
  }, []);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (wordsHeader === "Unhira Agrikultur") {
  //       setWordsHeader("Solusi Bisnis Kuliner Anda");
  //     } else {
  //       setWordsHeader("Unhira Agrikultur");
  //     }
  //   }, 4000);
  // }, [wordsHeader]);
  return (
    <header
      className={`border-none flex justify-between items-center px-6 py-4 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${bgColor}`}
    >
      <div>
        <h1 className="font-bold text-lg text-coolgreen">
          CV Unhira Agrikultur
        </h1>
      </div>
      <div>
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            {/* <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-[13px] transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                >
                  Beranda
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-[13px] transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                >
                  Tentang Kami
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/produk" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-[13px] transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                >
                  Produk
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/#mitra" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-[13px] transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                >
                  Mitra
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`${navigationMenuTriggerStyle()} text-[13px] transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                >
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="lg:hidden hover:bg-transparent active:bg-transparent focus:bg-transparent"
            >
              <Image className="w-7 h-auto" src={menuImage} alt="ikon menu" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col items-start justify-center gap-3 mt-5">
              {/* <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent active:bg-transparent active:text-coolyellow focus:bg-transparent"
                  onClick={() => handleNavigate("#beranda")}
                >
                  Beranda
                </Button>
              </SheetClose> */}
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent active:bg-transparent active:text-coolyellow focus:bg-transparent"
                  onClick={() => handleNavigate("/")}
                >
                  Tentang Kami
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent active:bg-transparent active:text-coolyellow focus:bg-transparent"
                  onClick={() => handleNavigate("/produk")}
                >
                  Produk
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent active:bg-transparent active:text-coolyellow focus:bg-transparent"
                  onClick={() => handleNavigate("/#mitra")}
                >
                  Mitra
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button
                  variant="ghost"
                  className="hover:bg-transparent active:bg-transparent active:text-coolyellow focus:bg-transparent"
                  onClick={() => handleNavigate("#")}
                >
                  Blog
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
