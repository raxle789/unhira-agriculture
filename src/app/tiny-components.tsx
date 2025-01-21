import Image from "next/image";
import call from "../../public/assets/icons/call.png";
import mail from "../../public/assets/icons/mail.png";
import { Separator } from "@/components/ui/separator";

export const BannerTitle = () => {
  return (
    <span>Supplier Sayur dan Buah Bekasi - Solusi Bisnis Kuliner Anda</span>
  );
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
    </span>
  );
};

export const AboutCompany2 = () => {
  return (
    <span>
      Perusahaan kami berkomitmen untuk selalu mengedepankan kualitas barang dan
      pelayanan terbaik untuk mencapai visi kami, yaitu menjadi perusahaan
      supplier terbaik yang selalu dapat diandalkan dengan mengutamakan kepuasan
      pelanggan.
    </span>
  );
};

export const AboutCompany3 = () => {
  return (
    <span>
      Kami juga bekerjasama dengan banyak pedagang yang saling berkomitmen
      dengan kualitas untuk memenuhi kebutuhan buah dan groceries dengan
      kualitas dan kapasitas yang diinginkan pelanggan kami.
    </span>
  );
};

export const AboutCompany4 = () => {
  return (
    <span>
      Pada proses pengadaan barang, kami bermitra dengan petani lokal untuk
      memenuhi kebutuhan sayuran khusus dengan standar kualitas barang yang
      baik. Untuk beberapa jenis sayur seperti selada, pakcoy, dan lolorosa juga
      kami memiliki kebun sendiri yang di kelola dengan metode hidroponik untuk
      menjamin ketersediaan barang dengan kualitas terbaik. Langkah ini kami
      ambil untuk mencegah sering terjadinya minimnya ketersediaan sayur
      berkualitas disaat musim hujan.
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
        CV Unhira Agrikultur
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2044.1535555570154!2d107.00346221285781!3d-6.204197557551619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e698bfda1e161d5%3A0x81273243fc003929!2sJl.%20Permata%20Hijau%20Permai%20Jl.%20Mirah%20No.20%2C%20Kaliabang%20Tengah%2C%20Kec.%20Bekasi%20Utara%2C%20Kota%20Bks%2C%20Jawa%20Barat%2017125!5e0!3m2!1sid!2sid!4v1737426328734!5m2!1sid!2sid"
          className="w-full"
          height="200"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <p className="text-white mt-1">
          Jl. Permata Hijau Permai Jl. Mirah No.20 Blok BR, Kaliabang Tengah,
          Kec. Bekasi Utara, Kota Bekasi, Jawa Barat 17125
        </p>
      </div>
    </footer>
  );
};
