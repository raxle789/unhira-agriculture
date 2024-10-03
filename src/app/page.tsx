"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import bannerImage from "../../public/assets/images/banner.jpg";
import ownerPhoto from "../../public/assets/images/profil.jpg";
import ownerAndFarmer from "../../public/assets/images/foto-dengan-petani.jpg";
import ownerAndFarmer2 from "../../public/assets/images/foto-dengan-petani2.jpg";
import vegetables from "../../public/assets/images/vegetables1.jpg";
import closeUpVegetables from "../../public/assets/images/close-up-vegetables.jpg";
import doksi1 from "../../public/assets/images/doksi1.jpg";
import doksi2 from "../../public/assets/images/doksi2.jpg";
import doksi3 from "../../public/assets/images/doksi3.jpg";
import doksi4 from "../../public/assets/images/doksi4.jpg";
import doksi5 from "../../public/assets/images/doksi5.jpg";
import toa from "../../public/assets/icons/toa.svg";
import box from "../../public/assets/icons/box.svg";
import order from "../../public/assets/icons/order.svg";
import payment from "../../public/assets/icons/payment.svg";
import guarantee from "../../public/assets/icons/guarantee.svg";
import menu from "../../public/assets/icons/menu.svg";
import blackMenu from "../../public/assets/icons/black-menu.svg";
import { StaticImageData } from "next/image";
import { partnerData } from "@/lib/partners";
import { productData } from "@/lib/productData";
import {
  BannerTitle,
  CompanyName,
  CompanyVision,
  AboutCompany1,
  AboutCompany2,
  AboutCompany3,
  BeforeUsing,
  AfterUsing,
  WishWords,
  Footer,
} from "./tiny-components";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [fontColor, setFontColor] = useState("text-white");
  const [menuImage, setMenuImage] = useState<StaticImageData>(menu);
  const [wordsHeader, setWordsHeader] = useState("Unhira Agrikultur");
  const router = useRouter();

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    setTimeout(() => {
      if (wordsHeader === "Unhira Agrikultur") {
        setWordsHeader("CV. Yayang Karunia Usaha");
      } else if (wordsHeader === "CV. Yayang Karunia Usaha") {
        setWordsHeader("Solusi Bisnis Kuliner Anda");
      } else {
        setWordsHeader("Unhira Agrikultur");
      }
    }, 4000);
  }, [wordsHeader]);

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
  return (
    <>
      <header
        className={`border-none flex justify-between items-center px-6 py-4 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${bgColor}`}
      >
        <div>
          <h1
            key={wordsHeader}
            className="font-bold text-lg text-coolgreen wow animate__animated animate__fadeIn"
          >
            {wordsHeader}
          </h1>
        </div>
        <div>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#beranda" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-[13px] transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                  >
                    Beranda
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#tentang-kami" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-[13px] transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                  >
                    Tentang Kami
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#produk" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-[13px] transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                  >
                    Produk
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#mitra" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-[13px] transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                  >
                    Mitra
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#s&k" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} text-[13px] transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                  >
                    S&K
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
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    className="hover:bg-transparent active:bg-transparent active:text-coolyellow focus:bg-transparent"
                    onClick={() => handleNavigate("#beranda")}
                  >
                    Beranda
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    className="hover:bg-transparent active:bg-transparent active:text-coolyellow focus:bg-transparent"
                    onClick={() => handleNavigate("#tentang-kami")}
                  >
                    Tentang Kami
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    className="hover:bg-transparent active:bg-transparent active:text-coolyellow focus:bg-transparent"
                    onClick={() => handleNavigate("#produk")}
                  >
                    Produk
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    className="hover:bg-transparent active:bg-transparent active:text-coolyellow focus:bg-transparent"
                    onClick={() => handleNavigate("#mitra")}
                  >
                    Mitra
                  </Button>
                </SheetClose>
                <SheetClose asChild>
                  <Button
                    variant="ghost"
                    className="hover:bg-transparent active:bg-transparent active:text-coolyellow focus:bg-transparent"
                    onClick={() => handleNavigate("#s&k")}
                  >
                    S&K
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="bg-coolgray-1">
        <div id="beranda" className="relative h-screen">
          <Image
            className="absolute w-full h-full object-left xl:object-center object-cover"
            src={bannerImage}
            alt="Supplier Sayur dan Buah Segar Terbaik Bekasi"
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
            <h1 className="text-[1.6rem] text-center px-3 md:text-4xl lg:text-5xl font-bold uppercase text-coolyellow">
              <BannerTitle />
            </h1>
            <h2 className="text-base p-4 md:px-8 xl:px-0 text-center md:text-xl md:p-0 lg:text-xl mt-2">
              <CompanyVision />
            </h2>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 z-0" />
        </div>

        <div
          id="tentang-kami"
          className="flex flex-col-reverse items-center justify-center gap-9 lg:gap-0 lg:flex-row lg:items-center lg:justify-between pt-20 pb-14"
        >
          <div className="flex items-center justify-center">
            <div className="max-w-[75%] md:max-w-[65%] wow animate__animated animate__fadeIn">
              <h2 className="text-base md:text-lg text-coolgreen font-semibold">
                Tentang Perusahaan
              </h2>
              <h1 className="font-bold text-xl md:text-[1.6rem] leading-[1.7rem] text-coolyellow mb-3">
                <CompanyName />
              </h1>
              <p className="text-[15px] md:text-base text-coolblack mb-2 text-justify">
                <AboutCompany1 />
              </p>
              <p className="text-[15px] md:text-base text-coolblack mb-2 text-justify">
                <AboutCompany2 />
              </p>
              <p className="text-[15px] md:text-base text-coolblack text-justify">
                <AboutCompany3 />
              </p>
            </div>
          </div>
          <Image
            className="w-[300px] lg:w-[400px] h-auto rounded-md lg:rounded-r-none lg:rounded-l-md"
            src={ownerPhoto}
            alt="foto pemilik unhira agrikultur"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-9 lg:items-center lg:justify-between lg:flex-row lg:gap-0 py-14">
          <Image
            className="w-[300px] lg:w-[400px] h-auto rounded-md lg:rounded-l-none lg:rounded-r-md"
            src={ownerAndFarmer}
            alt="foto pemilik unhira agrikultur bersama petani"
          />
          <div className="flex items-center justify-center">
            <div className="max-w-[75%] md:max-w-[65%] wow animate__animated animate__fadeIn">
              <h2 className="text-base md:text-lg text-coolgreen font-semibold">
                Tentang Perusahaan
              </h2>
              <h1 className="font-bold text-xl md:text-[1.6rem] leading-[1.7rem] text-coolyellow mb-3">
                Unhira Agrikultur
              </h1>
              <p className="text-[15px] md:text-base text-coolblack text-justify">
                Pada proses pengadaan barang, kami bermitra dengan petani lokal
                untuk memenuhi kebutuhan sayuran khusus dengan standar kualitas
                barang yang baik. Untuk beberapa jenis sayur seperti selada,
                pakcoy, dan lolorosa juga kami memiliki kebun sendiri yang di
                kelola dengan metode hidroponik untuk menjamin ketersediaan
                barang dengan kualitas terbaik. Langkah ini kami ambil untuk
                mencegah sering terjadinya minimnya ketersediaan sayur
                berkualitas disaat musim hujan.
              </p>
              {/* <p className="text-coolblack text-justify">
                Kami juga bekerjasama dengan banyak pedagang yang saling
                berkomitmen dgn kualitas untuk memenuhi kebutuhan buah dan
                groceries dengan kualitas dan kapasitas yang
                diinginkan pelanggan kami.
              </p> */}
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-center gap-9 lg:items-center lg:justify-between lg:flex-row lg:gap-0 py-14">
          <div className="flex items-center justify-center w-full">
            <div className="max-w-[85%]">
              <h1 className="font-bold text-xl md:text-[1.6rem] text-center text-coolyellow mb-6 wow animate__animated animate__fadeIn">
                Mengapa Harus Memilih Kami?
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="border-none drop-shadow-xl wow animate__animated animate__fadeInUp">
                  <CardContent className="flex items-center gap-2 pt-5 p-5">
                    <Image
                      className="w-9 h-auto"
                      src={toa}
                      alt="respon cepat"
                    />
                    <p className="text-coolblack text-[15px] md:text-base">
                      Respon cepat dan komunikatif
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none drop-shadow-xl wow animate__animated animate__fadeInUp">
                  <CardContent className="flex items-center gap-2 pt-5 p-5">
                    <Image
                      className="w-9 h-auto"
                      src={payment}
                      alt="sistem pembayaran fleksibel"
                    />
                    <p className="text-coolblack text-[15px] md:text-base">
                      Sistem pembayaran fleksibel
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none drop-shadow-xl wow animate__animated animate__fadeInUp">
                  <CardContent className="flex items-center gap-2 pt-5 p-5">
                    <Image
                      className="w-9 h-auto"
                      src={box}
                      alt="tidak ada minimum pesanan"
                    />
                    <p className="text-coolblack text-[15px] md:text-base">
                      Tidak ada minimum pesanan
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none drop-shadow-xl wow animate__animated animate__fadeInUp">
                  <CardContent className="flex items-center gap-2 pt-5 p-5">
                    <Image
                      className="w-9 h-auto"
                      src={order}
                      alt="menerima pesanan di luar list order"
                    />
                    <p className="text-coolblack text-[15px] md:text-base">
                      Menerima pesanan di luar list order
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-none drop-shadow-xl wow animate__animated animate__fadeInUp">
                  <CardContent className="flex items-center gap-2 pt-5 p-5">
                    <Image
                      className="w-9 h-auto"
                      src={guarantee}
                      alt="menerima klaim produk cacat atau tidak sesuai"
                    />
                    <p className="text-coolblack text-[15px] md:text-base">
                      Menerima klaim produk cacat atau tidak sesuai
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          <Image
            className="w-[300px] lg:w-[400px] h-auto rounded-md lg:rounded-r-none lg:rounded-l-md"
            src={ownerAndFarmer2}
            alt="foto pemilik unhira agrikultur bersama petani"
          />
        </div>

        <div className="md:p-4">
          <div className="flex flex-col items-center justify-center py-14 md:rounded-md bg-coolgreen">
            <h1 className="font-bold text-xl md:text-[1.6rem] text-white mb-6 wow animate__animated animate__fadeIn">
              Manfaat Bermitra Dengan Kami
            </h1>
            <div className="flex flex-col items-center justify-center xl:items-stretch xl:flex-row gap-6">
              <Card className="border-none w-[85%] md:w-[90%] lg:w-full xl:w-1/2 p-[13px] md:p-6 rounded-tl-xl rounded-br-xl rounded-tr-[50px] rounded-bl-[50px] drop-shadow-none wow animate__animated animate__fadeInUp">
                <CardHeader>
                  <CardTitle className="text-xl lg:text-2xl text-coolyellow">
                    Sebelum
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <BeforeUsing />
                </CardContent>
              </Card>
              <Card className="border-none w-[85%] md:w-[90%] lg:w-full xl:w-1/2 p-[13px] md:p-6 rounded-tl-xl rounded-br-xl rounded-tr-[50px] rounded-bl-[50px] drop-shadow-none wow animate__animated animate__fadeInUp">
                <CardHeader>
                  <CardTitle className="text-xl lg:text-2xl text-coolyellow">
                    Sesudah
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <AfterUsing />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div
          id="produk"
          className="pt-16 pb-[85px] flex flex-col justify-center items-center gap-8"
        >
          <h1 className="text-xl md:text-[1.6rem] font-bold text-coolyellow wow animate__animated animate__fadeIn">
            Katalog Produk
          </h1>
          <div className="w-[80%]">
            <div className="grid grid-flow-col grid-rows-2 auto-rows-max gap-6 overflow-x-auto scroll-smooth products-container">
              {productData.map((item, index) => (
                <Card
                  key={index}
                  className="border-none w-40 h-40 wow animate__animated animate__fadeIn"
                >
                  <CardContent className="relative aspect-square overflow-hidden group p-0">
                    <Image
                      className="absolute w-full h-full object-cover rounded-lg"
                      src={item.image}
                      alt={item.alt}
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-base text-white">{item.name}</p>
                    </div>
                    <div className="absolute rounded-lg inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity z-5" />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="relative h-80 md:h-60">
          <Image
            className="absolute w-full h-full object-cover object-bottom"
            src={vegetables}
            alt="latar belakang sayur-sayuran"
          />
          <div className="relative z-10 flex flex-col justify-center h-full text-white px-12 md:px-16">
            <h1 className="text-xl md:text-[1.6rem] lg:text-2xl font-bold text-coolyellow">
              Unhira Agrikultur
            </h1>
            <h2 className="text-base mt-2 text-justify">
              <WishWords />
            </h2>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 z-0" />
        </div>

        <div
          id="mitra"
          className="pt-16 pb-[85px] flex flex-col justify-center items-center gap-7"
        >
          <h1 className="text-xl md:text-[1.6rem] font-bold text-coolyellow wow animate__animated animate__fadeIn">
            Mitra Kami
          </h1>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-[70%] lg:max-w-[80%]"
          >
            <CarouselContent>
              {partnerData.map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/5">
                  <div>
                    <Card className="border-none wow animate__animated animate__fadeIn">
                      <CardContent className="relative aspect-square overflow-hidden group p-0">
                        <Image
                          className="absolute w-full h-full object-cover rounded-lg"
                          src={item.image}
                          alt={item.alt}
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                          <p className="text-base text-white">{item.name}</p>
                        </div>
                        <div className="absolute rounded-lg inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity z-5" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-none shadow-md" />
            <CarouselNext className="border-none shadow-md" />
          </Carousel>
        </div>

        <div className="px-8 xl:px-14 pb-24 relative">
          <h1 className="text-center mb-9 text-xl md:text-[1.6rem] font-bold text-coolyellow">
            Dokumentasi Tim
          </h1>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <div id="column1" className="grid gap-4">
              <div>
                <Image
                  className="h-auto md:h-[200px] max-w-full rounded-lg object-cover object-center"
                  src={doksi2}
                  alt="gallery-photo"
                  // width={100}
                  // height={50}
                  // fill={true}
                  // layout="fill"
                />
              </div>
              {/* <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                  alt="gallery-photo"
                  loading="lazy"
                  // width={100}
                  // height={50}
                  // fill={true}
                  // layout="fill"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
                  alt="gallery-photo"
                  loading="lazy"
                  // width={100}
                  // height={50}
                  // fill={true}
                  // layout="fill"
                />
              </div> */}
            </div>
            <div id="column2" className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={doksi5}
                  alt="gallery-photo"
                  // width={100}
                  // height={50}
                  // fill={true}
                  // layout="fill"
                />
              </div>
              {/* <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="gallery-photo"
                  loading="lazy"
                  // width={100}
                  // height={50}
                  // fill={true}
                  // layout="fill"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center "
                  src="https://docs.material-tailwind.com/img/team-3.jpg"
                  alt="gallery-photo"
                  loading="lazy"
                  // width={100}
                  // height={50}
                  // fill={true}
                  // layout="fill"
                />
              </div> */}
            </div>
            <div id="column3" className="grid gap-4">
              <div>
                <Image
                  className="h-auto md:h-[200px] max-w-full rounded-lg object-cover object-center"
                  src={doksi3}
                  alt="gallery-photo"
                  // width={100}
                  // height={50}
                  // fill={true}
                  // layout="fill"
                />
              </div>
              <div>
                <Image
                  className="h-auto md:h-[250px] max-w-full rounded-lg object-cover object-center "
                  src={doksi1}
                  alt="gallery-photo"
                  // width={100}
                  // height={50}
                  // fill={true}
                  // layout="fill"
                />
              </div>
              {/* <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                  alt="gallery-photo"
                  loading="lazy"
                  // width={100}
                  // height={50}
                  // fill={true}
                  // layout="fill"
                />
              </div> */}
            </div>
            <div id="column4" className="grid gap-4">
              <div>
                <Image
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src={doksi4}
                  alt="gallery-photo"
                  // width={100}
                  // height={50}
                  // fill={true}
                  // layout="fill"
                />
              </div>
              {/* <div>
                <img
                  className="h-auto max-w-full rounded-lg object-cover object-center"
                  src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                  alt="gallery-photo"
                  loading="lazy"
                  // width={100}
                  // height={50}
                  // fill={true}
                  // layout="fill"
                />
              </div> */}
            </div>
          </div>
        </div>

        <div id="s&k" className="relative">
          <Image
            className="absolute w-full h-full object-cover"
            src={closeUpVegetables}
            alt="latar belakang satu box sayur-sayuran"
          />
          <div className="relative z-10 flex flex-col justify-center items-center gap-7 h-full pt-12 pb-16">
            <h1 className="text-xl md:text-[1.6rem] font-bold text-white wow animate__animated animate__fadeIn">
              Syarat dan Ketentuan
            </h1>
            <Card className="border-none p-[13px] md:p-6 rounded-tl-xl rounded-br-xl rounded-tr-[50px] rounded-bl-[50px] w-[87%] md:w-[80%] drop-shadow-none">
              <CardContent className="pt-6 text-[15px] md:text-base">
                <p className="text-coolblack wow animate__animated animate__fadeIn">
                  Order dilakukan maksimal H-1 pengiriman.
                </p>
                <Separator className="bg-coolblack wow animate__animated animate__fadeIn my-2" />
                <p className="text-coolblack wow animate__animated animate__fadeIn">
                  Untuk pengorderan buah, sayur lokal dapat dilakukan sebelum
                  Pukul 17.00 WIB (jika ada tambahan dapat disusulkan).
                </p>
                <Separator className="bg-coolblack wow animate__animated animate__fadeIn my-2" />
                <p className="text-coolblack wow animate__animated animate__fadeIn">
                  Pemesanan dapat dilakukan via WhatsApp berdasarkan PO atau
                  market list dari restoran/hotel.
                </p>
                <Separator className="bg-coolblack wow animate__animated animate__fadeIn my-2" />
                <p className="text-coolblack wow animate__animated animate__fadeIn">
                  Payment agar dapat dilakukan untuk barang-barang sayur dengan
                  tempo 7 hari, menyesuaikan dengan barang yang diminta.
                </p>
                <Separator className="bg-coolblack wow animate__animated animate__fadeIn my-2" />
                <p className="text-coolblack wow animate__animated animate__fadeIn">
                  Waktu pengiriman disesuaikan dengan kebutuhan restoran/ hotel.
                </p>
                <Separator className="bg-coolblack wow animate__animated animate__fadeIn my-2" />
                <p className="text-coolblack wow animate__animated animate__fadeIn">
                  Untuk kebutuhan pengadaan barang yang sifatnya mendadak atau
                  tambahan diluar order yang telah dilakukan, kami meminta waktu
                  untuk proses pengadaannya.
                </p>
                <Separator className="bg-coolblack wow animate__animated animate__fadeIn my-2" />
                <p className="text-coolblack wow animate__animated animate__fadeIn">
                  Jika terjadi keterlambatan pembayaran dari pihak restoran,
                  maka mohon dikonfirmasi terlebih dahulu kepada kami. Dan jika
                  keterlambatan pembayaran lebih dari maksimal 7 hari dari
                  tanggal seharusnya, maka kami mohon izin untuk dapat menahan
                  terlebih dahulu pengadaan barang ke restoran.
                </p>
                <Separator className="bg-coolblack wow animate__animated animate__fadeIn my-2" />
                <p className="text-coolblack wow animate__animated animate__fadeIn">
                  Jika terjadi kesalahan pengiriman dari kami, seperti barang
                  yang datang tidak sesuai dengan permintaan atau barang yang
                  diminta tidak datang, maka untuk hal yang demikian kami mohon
                  waktu di hari tersebut untuk menggantinya sesuai dengan
                  permintaan yang tertulis, atau dapat langsung diretur kepada
                  kami.
                </p>
                <Separator className="bg-coolblack wow animate__animated animate__fadeIn my-2" />
                <p className="text-coolblack wow animate__animated animate__fadeIn">
                  Untuk memulai kerja sama, kami berharap agar ada kontrak yang
                  terikat antara dua belah pihak agar masing-masing memiliki
                  keadilan serta hak dan kewajiban agar tercipta hubungan yang
                  baik. Terlepas dari itu, apabila kebijakan mengarahkan pada
                  perjanjian lisan, kami pun menerimanya.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 z-0" />
        </div>
      </main>

      <Footer />
    </>
  );
}
