"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
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
import bannerImage from "../../public/assets/images/banner.jpg";
import ownerPhoto from "../../public/assets/images/profil.jpg";
import ownerAndFarmer from "../../public/assets/images/foto-dengan-petani.jpg";
import vegetables from "../../public/assets/images/vegetables.jpg";
import closeUpVegetables from "../../public/assets/images/close-up-vegetables.jpg";
import toa from "../../public/assets/icons/toa.svg";
import box from "../../public/assets/icons/box.svg";
import order from "../../public/assets/icons/order.svg";
import payment from "../../public/assets/icons/payment.svg";
import guarantee from "../../public/assets/icons/guarantee.svg";
import call from "../../public/assets/icons/call.svg";
import mail from "../../public/assets/icons/mail.svg";
import { partnerData } from "@/lib/partners";
import { productData } from "@/lib/productData";
// import "animate.css/animate.min.css";
// import WOW from "wowjs";

export default function Home() {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const [fontColor, setFontColor] = useState("text-white");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBgColor("bg-background");
        setFontColor("text-coolblack");
      } else {
        setBgColor("bg-transparent");
        setFontColor("text-white");
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
      live: false, // Opsi ini untuk tidak memantau elemen baru yang ditambahkan secara dinamis
    });
    wow.init();
  }, []);
  return (
    <>
      <header
        className={`flex justify-between items-center px-6 py-4 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${bgColor}`}
      >
        <div>
          <h1 className="font-bold text-xl text-coolgreen">
            Unhira Agrikultur
          </h1>
        </div>
        <div>
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="#beranda" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                  >
                    Beranda
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#tentang-kami" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                  >
                    Tentang Kami
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#produk" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                  >
                    Produk
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#mitra" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                  >
                    Mitra
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="#s&k" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} transition-colors duration-200 ${fontColor} bg-transparent font-semibold hover:bg-transparent hover:text-coolyellow uppercase active:bg-transparent focus:bg-transparent focus:text-coolyellow ml-6`}
                  >
                    S&K
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button variant="outline" className="md:hidden">
            Button
          </Button>
        </div>
      </header>

      <main className="bg-coolgray-1">
        <div id="beranda" className="relative h-screen">
          <Image
            className="absolute w-full h-full object-cover"
            src={bannerImage}
            alt="banner image"
          />
          <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
            <h1 className="text-5xl font-bold uppercase text-coolyellow wow animate__animated animate__fadeIn">
              Supplier Sayur dan Buah
            </h1>
            <h2 className="text-xl mt-2 wow animate__animated animate__fadeIn">
              Visi kami menjadi supplier terbaik yang selalu dapat diandalkan
              dengan mengutamakan kepuasan pelanggan.
            </h2>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 z-0" />
        </div>

        <div
          id="tentang-kami"
          className="flex items-center justify-between pt-20 pb-14"
        >
          <div className="flex items-center justify-center">
            <div className="max-w-[65%] wow animate__animated animate__fadeIn">
              <h2 className="text-lg text-coolgreen font-semibold">
                Tentang Perusahaan
              </h2>
              <h1 className="font-bold text-[1.6rem] leading-[1.7rem] text-coolyellow mb-3">
                Unhira Agrikultur
              </h1>
              <p className="text-coolblack mb-1 text-justify">
                Kami adalah perusahaan yang bergerak di bidang pengadaan barang
                berupa sayur, buah, dan groceries. Pada proses pengadaan barang,
                kami bermitra dengan petani lokal untuk memenuhi kebutuhan
                sayuran khusus dengan standar kualitas barang yang baik.
                Bekerjasama dengan banyak pedagang UMKM untuk memenuhi kebutuhan
                buah dan groceries dengan kualitas dan kapasitas yang diinginkan
                pelanggan kami.
              </p>
              <p className="text-coolblack text-justify">
                Perusahaan kami bersifat B2B karena hanya menjadi mitra usaha
                kuliner dan pariwisata yang menjamin ketersediaan bahan baku
                yang dibutuhkan pelanggan- pelanggan kami.
              </p>
            </div>
          </div>
          <Image
            className="w-[400px] h-auto rounded-l-md"
            src={ownerPhoto}
            alt="foto pemilik unhira agrikultur"
          />
        </div>

        <div className="flex items-center justify-between py-14">
          <Image
            className="w-[400px] h-auto rounded-r-md"
            src={ownerAndFarmer}
            alt="foto pemilik unhira agrikultur bersama petani"
          />
          <div className="flex items-center justify-center">
            <div className="max-w-[85%]">
              <h1 className="font-bold text-[1.6rem] text-center text-coolyellow mb-6 wow animate__animated animate__fadeIn">
                Mengapa Harus Memilih Kami?
              </h1>
              <div className="grid grid-cols-2 gap-4">
                <Card className="border-none drop-shadow-xl wow animate__animated animate__fadeInUp">
                  <CardContent className="flex items-center gap-2 pt-5 p-5">
                    <Image
                      className="w-9 h-auto"
                      src={toa}
                      alt="respon cepat"
                    />
                    <p className="text-coolblack">
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
                    <p className="text-coolblack">
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
                    <p className="text-coolblack">Tidak ada minimum pesanan</p>
                  </CardContent>
                </Card>
                <Card className="border-none drop-shadow-xl wow animate__animated animate__fadeInUp">
                  <CardContent className="flex items-center gap-2 pt-5 p-5">
                    <Image
                      className="w-9 h-auto"
                      src={order}
                      alt="menerima pesanan di luar list order"
                    />
                    <p className="text-coolblack">
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
                    <p className="text-coolblack">
                      Menerima klaim produk cacat atau tidak sesuai
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col items-center justify-center py-14 rounded-md bg-coolgreen">
            <h1 className="font-bold text-[1.6rem] text-white mb-6 wow animate__animated animate__fadeIn">
              Manfaat Bermitra Dengan Kami
            </h1>
            <div className="flex justify-center gap-6">
              <Card className="border-none p-6 rounded-tl-xl rounded-br-xl rounded-tr-[50px] rounded-bl-[50px] w-1/2 drop-shadow-none wow animate__animated animate__fadeInUp">
                <CardHeader>
                  <CardTitle className="text-coolyellow">Sebelum</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-coolblack">
                    Jumlah barang yang di dapat tidak sesuai kebutuhan
                  </p>
                  <Separator className="bg-coolblack my-2" />
                  <p className="text-coolblack">
                    Kualitas barang yang didapat tidak bagus
                  </p>
                  <Separator className="bg-coolblack my-2" />
                  <p className="text-coolblack">
                    Harga barang yang di dapat sangat tinggi
                  </p>
                  <Separator className="bg-coolblack my-2" />
                  <p className="text-coolblack">
                    Tidak bisa mengklaim barang yang rusak
                  </p>
                  <Separator className="bg-coolblack my-2" />
                  <p className="text-coolblack">Pelayanan yang buruk</p>
                  <Separator className="bg-coolblack my-2" />
                  <p className="text-coolblack">
                    Kebutuhan mendadak tidak dapat dipenuhi
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none p-6 rounded-tl-xl rounded-br-xl rounded-tr-[50px] rounded-bl-[50px] w-1/2 wow animate__animated animate__fadeInUp">
                <CardHeader>
                  <CardTitle className="text-coolyellow">Sesudah</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-coolblack">
                    Barang yang dikirim sesuai pesanan dan kebutuhan
                  </p>
                  <Separator className="bg-coolblack my-2" />
                  <p className="text-coolblack">
                    Kualitas barang bagus dan pengiriman tepat waktu
                  </p>
                  <Separator className="bg-coolblack my-2" />
                  <p className="text-coolblack">Harga sangat bersaing</p>
                  <Separator className="bg-coolblack my-2" />
                  <p className="text-coolblack">
                    Dapat melayani kebutuhan mendadak
                  </p>
                  <Separator className="bg-coolblack my-2" />
                  <p className="text-coolblack">
                    Bisa mengklaim jika terdapat barang yang rusak
                  </p>
                  <Separator className="bg-coolblack my-2" />
                  <p className="text-coolblack">
                    Pelayanan yang baik dan bersedia menerima kritik saran dari
                    pelanggan
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div
          id="produk"
          className="mt-16 mb-[85px] flex flex-col justify-center items-center gap-8"
        >
          <h1 className="text-[1.6rem] font-bold text-coolyellow wow animate__animated animate__fadeIn">
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

        <div className="relative h-60">
          <Image
            className="absolute w-full h-full object-cover"
            src={vegetables}
            alt="latar belakang sayur-sayuran"
          />
          <div className="relative z-10 flex flex-col justify-center h-full text-white px-16">
            <h1 className="text-2xl font-bold text-coolyellow">
              Unhira Agrikultur
            </h1>
            <h2 className="text-lg mt-2 text-justify">
              Besar harapan kami untuk pihak restoran atau hotel dapat
              mempergunakan jasa yang telah kami tawarkan agar dapat membantu
              menjamin ketersediaan dan kualitas bahan makanan kepada para tamu
              sehingga meningkatkan brand image hotel sebagai hotel terbaik
              pilihan masyarakat.
            </h2>
          </div>
          <div className="absolute inset-0 bg-black opacity-50 z-0" />
        </div>

        <div
          id="mitra"
          className="mt-16 mb-[85px] flex flex-col justify-center items-center gap-7"
        >
          <h1 className="text-[1.6rem] font-bold text-coolyellow wow animate__animated animate__fadeIn">
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

        <div id="s&k" className="relative">
          <Image
            className="absolute w-full h-full object-cover"
            src={closeUpVegetables}
            alt="latar belakang satu box sayur-sayuran"
          />
          <div className="relative z-10 flex flex-col justify-center items-center gap-7 h-full pt-12 pb-16">
            <h1 className="text-[1.6rem] font-bold text-white wow animate__animated animate__fadeIn">
              Syarat dan Ketentuan
            </h1>
            <Card className="border-none p-6 rounded-tl-xl rounded-br-xl rounded-tr-[50px] rounded-bl-[50px] w-[80%] drop-shadow-none">
              <CardContent className="pt-6">
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

      <footer className="grid grid-cols-3 bg-coolblack py-12 px-8">
        <h1 className="text-2xl font-bold text-coolgreen">Unhira Agrikultur</h1>
        <div>
          <h3 className="text-coolyellow font-semibold mb-3">Hubungi Kami</h3>
          <div className="flex items-center gap-2">
            <Image className="w-5 h-auto" src={call} alt="ikon telepon" />
            <p className="text-white">0897 9246 882</p>
          </div>
          <div className="flex items-center gap-2">
            <Image className="w-5 h-auto" src={mail} alt="ikon email" />
            <p className="text-white">unhiraagrikultur@gmail.com</p>
          </div>
        </div>
        <div>
          <h3 className="text-coolyellow font-semibold mb-3">Alamat</h3>
          <p className="text-white">
            Jl. Permata Hijau Permai Jl. Mirah No.20 Blok BR, Kaliabang Tengah,
            Kec. Bekasi Utara, Kota Bks, Jawa Barat 17125
          </p>
        </div>
      </footer>
    </>
  );
}
