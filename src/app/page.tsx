import Image from "next/image";
import bannerImage from "../../public/assets/images/banner.jpg";
import ownerPhoto from "../../public/assets/images/profil.jpeg";
import ownerAndFarmer from "../../public/assets/images/foto-dengan-petani.jpg";
import profileTeam from "../../public/assets/images/profile-team.jpg";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import order from "../../public/assets/icons/order.svg";
import guarantee from "../../public/assets/icons/guarantee.svg";
import topQuality from "../../public/assets/icons/top-quality.svg";
import delivery from "../../public/assets/icons/delivery-time.svg";
import { productData } from "@/lib/productData";
import closeUpVegetables from "../../public/assets/images/close-up-vegetables_11zon.jpg";
import doksi1 from "../../public/assets/images/doksi1.jpg";
import doksi2 from "../../public/assets/images/doksi2.jpg";
import doksi3 from "../../public/assets/images/doksi3.jpg";
import doksi4 from "../../public/assets/images/doksi4.jpg";
import doksi5 from "../../public/assets/images/doksi5.jpg";
import { partnerData } from "@/lib/partners";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import vegetables from "../../public/assets/images/vegetables1.jpg";

export default function Home() {
  return (
    <main className="bg-coolgray-1">
      <div id="beranda" className="relative h-screen">
        <Image
          className="absolute w-full h-full object-left xl:object-center object-cover"
          src={bannerImage}
          alt="Supplier Sayur dan Buah Segar Terbaik Bekasi"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-[1.6rem] text-center px-3 xl:px-4 md:text-4xl lg:text-5xl font-bold uppercase text-coolyellow">
            Supplier Sayur dan Buah Bekasi - Solusi Bisnis Kuliner Anda
          </h1>
          <h2 className="text-base p-4 md:px-8 xl:px-14 text-center md:text-xl md:p-0 lg:text-xl mt-2">
            Butuh sayur, buah dan bahan baku lain untuk bisnis kuliner anda? Yuk
            kenalan dengan unhira. Kami hadir sebagai solusi bisnis kuliner
            anda!
          </h2>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0" />
      </div>

      <div
        id="produk"
        className="py-20 flex flex-col justify-center items-center gap-8"
      >
        <h1 className="text-xl md:text-[1.6rem] font-bold text-coolyellow">
          Produk Utama Kami
        </h1>
        <div className="w-[80%]">
          <div className="grid grid-flow-col grid-rows-2 auto-rows-max gap-6 overflow-x-auto scroll-smooth products-container">
            {productData.slice(0, 10).map((item, index) => (
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
        <div className="flex items-center justify-center">
          <Button
            className="shadow-lg bg-white rounded-full"
            variant="secondary"
          >
            <Link href="/produk">Lihat Produk Lainnya</Link>
          </Button>
        </div>
      </div>

      <div className="md:p-4">
        <div className="flex flex-col items-center justify-center py-14 md:rounded-md bg-coolgreen">
          <h1 className="font-bold text-xl md:text-[1.6rem] text-white mb-6 wow animate__animated animate__fadeIn">
            Manfaat Bermitra Dengan Kami
          </h1>
          <div className="flex items-center justify-center">
            <Card className="border-none max-w-[88%] p-[13px] md:p-6 rounded-tl-xl rounded-br-xl rounded-tr-[50px] rounded-bl-[50px] drop-shadow-none wow animate__animated animate__fadeInUp">
              <CardContent>
                <div className="text-[15px] md:text-base">
                  <p className="text-coolblack mt-2">
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
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div
        id="mitra"
        className="pt-[70px] pb-20 flex flex-col justify-center items-center gap-7"
      >
        <h1 className="text-xl md:text-[1.6rem] font-bold text-coolyellow">
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

      <div
        id="tentang-kami"
        className="flex flex-col-reverse items-center justify-center gap-9 lg:gap-0 lg:flex-row lg:items-center lg:justify-between pt-10 pb-14"
      >
        <div className="flex items-center justify-center">
          <div className="max-w-[75%] md:max-w-[65%] wow animate__animated animate__fadeIn">
            <h2 className="text-base md:text-lg text-coolgreen font-semibold">
              Tentang Perusahaan
            </h2>
            <h1 className="font-bold text-xl md:text-[1.6rem] leading-[1.7rem] text-coolyellow mb-3">
              Unhira Agrikultur
            </h1>
            <p className="text-[15px] md:text-base text-coolblack mb-2 text-justify">
              Selain sayur dan buah, kami adalah supplier yg dapat memenuhi
              segala kebutuhan bahan baku bisnis kuliner anda. Karena begitu
              banyak para pebisnis kuliner yang kesulitan mencari semua bahan
              baku pada 1 perusahaan, maka kami hadir untuk dapat memenuhi itu.
              Meskipun pada nyata nya di lapangan, kami tentu memerlukan
              beberapa waktu adaptasi untuk menyesuaikan barang yg diinginkan
              sesuai spesifikasi pelanggan kami.
            </p>
            <p className="text-[15px] md:text-base text-coolblack mb-2 text-justify">
              Kami memiliki tim yang berkomitmen terhadap kualitas produk, dan
              pelayanan yg baik untuk pelanggan kami. Dan yang terpenting, lebih
              dari sekedar jasa, kami juga selalu ingin menjadi teman baik untuk
              anda.
            </p>
          </div>
        </div>
        <Image
          className="w-[300px] lg:w-[400px] h-auto rounded-md lg:rounded-r-none lg:rounded-l-md"
          src={profileTeam}
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
              kelola dengan metode hidroponik untuk menjamin ketersediaan barang
              dengan kualitas terbaik. Langkah ini kami ambil untuk mencegah
              sering terjadinya minimnya ketersediaan sayur berkualitas disaat
              musim hujan.
            </p>
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
                    src={topQuality}
                    alt="bahan baku berkualitas untuk usaha kuliner"
                  />
                  <p className="text-coolblack text-[15px] md:text-base">
                    Menjamin bahan baku berkualitas
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none drop-shadow-xl wow animate__animated animate__fadeInUp">
                <CardContent className="flex items-center gap-2 pt-5 p-5">
                  <Image
                    className="w-9 h-auto"
                    src={delivery}
                    alt="pengiriman tepat waktu"
                  />
                  <p className="text-coolblack text-[15px] md:text-base">
                    Pengiriman tepat waktu
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none drop-shadow-xl wow animate__animated animate__fadeInUp">
                <CardContent className="flex items-center gap-2 pt-5 p-5">
                  <Image
                    className="w-9 h-auto"
                    src={order}
                    alt="bisa melayani tambahan order"
                  />
                  <p className="text-coolblack text-[15px] md:text-base">
                    Bisa memenuhi yg tambahan pesanan jika kekurangan barang
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
                    Pengembalian barang di hari yg sama jika terdapat kerusakan
                    atau ketidaksesuaian
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <Image
          className="w-[300px] lg:w-[400px] h-auto rounded-md lg:rounded-r-none lg:rounded-l-md"
          src={ownerPhoto}
          alt="foto pemilik unhira agrikultur bersama petani"
        />
      </div>

      <div className="relative h-80 md:h-60 mt-12 mb-9">
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
            Kami sangat terbuka jika calon pelanggan ingin berkunjung ke tempat
            kami, dengan sambutan penuh kesederhanaan, kami selalu ingin
            membahagiakan setiap tamu dengan mencoba hidangan khas dari kami.
          </h2>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0" />
      </div>

      <div className="px-8 xl:px-14 pb-28 relative pt-12">
        <h1 className="text-center mb-9 text-xl md:text-[1.6rem] font-bold text-coolyellow">
          Dokumentasi Tim
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div id="column1" className="grid gap-4">
            <div className="wow animate__animated animate__fadeIn">
              <Image
                className="h-auto md:h-[200px] max-w-full rounded-lg object-cover object-center"
                src={doksi2}
                alt="gallery-photo"
              />
            </div>
          </div>
          <div id="column2" className="grid gap-4">
            <div className="wow animate__animated animate__fadeIn">
              <Image
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={doksi5}
                alt="gallery-photo"
              />
            </div>
          </div>
          <div id="column3" className="grid gap-4">
            <div className="wow animate__animated animate__fadeIn">
              <Image
                className="h-auto md:h-[200px] max-w-full rounded-lg object-cover object-center"
                src={doksi3}
                alt="gallery-photo"
              />
            </div>
            <div className="wow animate__animated animate__fadeIn">
              <Image
                className="h-auto md:h-[250px] max-w-full rounded-lg object-cover object-center "
                src={doksi1}
                alt="gallery-photo"
              />
            </div>
          </div>
          <div id="column4" className="grid gap-4">
            <div className="wow animate__animated animate__fadeIn">
              <Image
                className="h-auto max-w-full rounded-lg object-cover object-center"
                src={doksi4}
                alt="gallery-photo"
              />
            </div>
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
                Jika terjadi keterlambatan pembayaran dari pihak restoran, maka
                mohon dikonfirmasi terlebih dahulu kepada kami. Dan jika
                keterlambatan pembayaran lebih dari maksimal 7 hari dari tanggal
                seharusnya, maka kami mohon izin untuk dapat menahan terlebih
                dahulu pengadaan barang ke restoran.
              </p>
              <Separator className="bg-coolblack wow animate__animated animate__fadeIn my-2" />
              <p className="text-coolblack wow animate__animated animate__fadeIn">
                Jika terjadi kesalahan pengiriman dari kami, seperti barang yang
                datang tidak sesuai dengan permintaan atau barang yang diminta
                tidak datang, maka untuk hal yang demikian kami mohon waktu di
                hari tersebut untuk menggantinya sesuai dengan permintaan yang
                tertulis, atau dapat langsung diretur kepada kami.
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
  );
}
