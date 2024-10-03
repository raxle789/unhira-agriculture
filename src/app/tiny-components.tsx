import Image from "next/image";
import call from "../../public/assets/icons/call.png";
import mail from "../../public/assets/icons/mail.png";
import { Separator } from "@/components/ui/separator";

export const BannerTitle = () => {
  return <span>Supplier Sayur dan Buah di Bekasi</span>;
};

export const CompanyName = () => {
  return <span>Unhira Agrikultur</span>;
};

export const CompanyVision = () => {
  return (
    <span>
      Visi kami menjadi supplier terbaik yang selalu dapat diandalkan dengan
      mengutamakan kepuasan pelanggan
    </span>
  );
};

export const AboutCompany1 = () => {
  return (
    <span>
      Kami adalah perusahaan yang bergerak di bidang pengadaan barang berupa
      sayur, buah, dan groceries untuk kebutuhan hotel, restoran, dan kafe.
      Perusahaan kami berkomitmen untuk selalu mengedepankan kualitas barang dan
      pelayanan terbaik untuk mencapai visi kami, yaitu menjadi perusahaan
      supplier terbaik yang selalu dapat diandalkan dengan mengutamakan kepuasan
      pelanggan.
    </span>
  );
};

export const AboutCompany2 = () => {
  return (
    <span>
      Kami juga bekerjasama dengan banyak pedagang yang saling berkomitmen dgn
      kualitas untuk memenuhi kebutuhan buah dan groceries dengan kualitas dan
      kapasitas yang diinginkan pelanggan kami.
    </span>
  );
};

export const BeforeUsing = () => {
  return (
    <div className="text-[15px] md:text-base">
      <p className="text-coolblack">
        Jumlah barang yang di dapat tidak sesuai kebutuhan
      </p>
      <Separator className="bg-coolblack my-2" />
      <p className="text-coolblack">Kualitas barang yang didapat tidak bagus</p>
      <Separator className="bg-coolblack my-2" />
      <p className="text-coolblack">Harga barang yang di dapat sangat tinggi</p>
      <Separator className="bg-coolblack my-2" />
      <p className="text-coolblack">Tidak bisa mengklaim barang yang rusak</p>
      <Separator className="bg-coolblack my-2" />
      <p className="text-coolblack">Pelayanan yang buruk</p>
      <Separator className="bg-coolblack my-2" />
      <p className="text-coolblack">Kebutuhan mendadak tidak dapat dipenuhi</p>
    </div>
  );
};

export const AfterUsing = () => {
  return (
    <div className="text-[15px] md:text-base">
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
      <p className="text-coolblack">Dapat melayani kebutuhan mendadak</p>
      <Separator className="bg-coolblack my-2" />
      <p className="text-coolblack">
        Bisa mengklaim jika terdapat barang yang rusak
      </p>
      <Separator className="bg-coolblack my-2" />
      <p className="text-coolblack">
        Pelayanan yang baik dan bersedia menerima kritik saran dari pelanggan
      </p>
    </div>
  );
};

export const WishWords = () => {
  return (
    <span>
      Besar harapan kami untuk pihak restoran atau hotel dapat mempergunakan
      jasa yang telah kami tawarkan agar dapat membantu menjamin ketersediaan
      dan kualitas bahan makanan kepada para tamu sehingga meningkatkan brand
      image hotel sebagai hotel terbaik pilihan masyarakat.
    </span>
  );
};

export const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 bg-coolblack py-12 px-8 gap-7 md:gap-0">
      <h1 className="text-xl md:text-[1.4rem] font-bold text-coolgreen">
        Unhira Agrikultur
      </h1>
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
          Kec. Bekasi Utara, Kota Bekasi, Jawa Barat 17125
        </p>
      </div>
    </footer>
  );
};
