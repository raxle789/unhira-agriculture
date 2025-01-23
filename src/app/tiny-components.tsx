import Image from "next/image";
import call from "../../public/assets/icons/call.png";
import mail from "../../public/assets/icons/mail.png";

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
