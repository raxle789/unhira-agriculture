import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/header";
import { Footer } from "./tiny-components";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unhira Agrikultur - Supplier sayur dan buah bekasi",
  description:
    "Kami adalah supplier sayur dan buah terpercaya di Bekasi, menyediakan produk berkualitas untuk hotel, restoran, dan kafe. Kami berkomitmen menghadirkan sayur dan buah segar dengan pelayanan terbaik untuk memenuhi kebutuhan bisnis Anda.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Unhira Agrikultur",
    url: "https://www.unhiraagrikultur.com",
    description:
      "Unhira Agrikultur adalah supplier sayur dan buah di Bekasi. Temukan berbagai sayuran dan buah segar berkualitas tinggi dari Unhira Agrikultur. Kami menyediakan Brokoli, Lettuce, Tomat Cherry, Baby Corn, Lemon California, dan masih banyak lagi. Pesan sekarang untuk kebutuhan segar Anda!",
    // "logo": "https://www.domain-anda.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "0897-9246-882",
      contactType: "Customer Service",
      areaServed: "ID",
      availableLanguage: ["Indonesian"],
    },
    location: {
      "@type": "Place",
      name: "Kantor Pusat Unhira Agrikultur",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Jl. Permata Hijau Permai Jl. Mirah No.20 Blok BR, Kaliabang Tengah, Kecamatan Bekasi Utara, Kota Bekasi, Jawa Barat",
        addressLocality: "Bekasi",
        postalCode: "17125",
        addressCountry: "ID",
      },
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "08:00",
        closes: "19:00",
      },
    ],
    // "sameAs": [
    //   "https://www.facebook.com/username",
    //   "https://www.twitter.com/username",
    //   "https://www.instagram.com/username"
    // ]
  };

  const productsSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Aragula Rocket",
      image: "https://www.unhiraagrikultur.com/produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/produk",
        priceValidUntil: "2025-12-30",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Unhira Agrikultur",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Brokoli",
      image: "https://www.unhiraagrikultur.com/produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/produk",
        priceValidUntil: "2025-12-30",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Unhira Agrikultur",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Daun Ketumbar",
      image: "https://www.unhiraagrikultur.com/produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/produk",
        priceValidUntil: "2025-12-30",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Unhira Agrikultur",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Kol Ungu",
      image: "https://www.unhiraagrikultur.com/produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/produk",
        priceValidUntil: "2025-12-30",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Unhira Agrikultur",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Lettuce",
      image: "https://www.unhiraagrikultur.com/produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/produk",
        priceValidUntil: "2025-12-30",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Unhira Agrikultur",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Lolorosa",
      image: "https://www.unhiraagrikultur.com/produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/produk",
        priceValidUntil: "2025-12-30",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Unhira Agrikultur",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Parsley",
      image: "https://www.unhiraagrikultur.com/produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/produk",
        priceValidUntil: "2025-12-30",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Unhira Agrikultur",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Radisio",
      image: "https://www.unhiraagrikultur.com/produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/produk",
        priceValidUntil: "2025-12-30",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Unhira Agrikultur",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Romaine",
      image: "https://www.unhiraagrikultur.com/produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/produk",
        priceValidUntil: "2025-12-30",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Unhira Agrikultur",
        },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Thyme",
      image: "https://www.unhiraagrikultur.com/produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/produk",
        priceValidUntil: "2025-12-30",
        availability: "https://schema.org/InStock",
        itemCondition: "https://schema.org/NewCondition",
        seller: {
          "@type": "Organization",
          name: "Unhira Agrikultur",
        },
      },
    },
    // Tambahkan lebih banyak produk di sini
  ];

  // const partnerSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "Organization",
  //   name: "Nama Mitra",
  //   url: "https://www.mitra.com",
  //   logo: "https://www.mitra.com/logo.png",
  // };

  return (
    <html lang="id" className="scroll-smooth scroll-pt-[70px]">
      <head>
        <meta
          name="keywords"
          content="supplier sayur dan buah bekasi, Brokoli, Lettuce, Tomat Cherry, Tomat Beef, Ceri Kuning, Kol, Selada, Parsley, Sawi, Daun Bawang, Pakcoy, Baby Corn, Lemon California, sayur segar, buah segar, Unhira Agrikultur, supplier bahan baku restoran dan kafe, supplier sayuran segar, supplier sayur murah dan lengkap, penyedia sayur dan buah, supplier sayur berkualitas, supplier bahan makanan restoran dan kafe, jual sayur dan buah segar di bekasi, jual sayur di bekasi, jual buah di bekasi"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.unhiraagrikultur.com/" />
        <link rel="next" href="https://www.unhiraagrikultur.com/produk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
        />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }}
        /> */}
      </head>

      <body className={`${inter.className} antialiased`}>
        <HeaderComponent />
        {children}
        <Footer />
        <Button
          className="fixed bottom-5 right-5 shadow-lg rounded-full p-[22px] z-20 bg-white"
          variant="secondary"
        >
          <Link
            className="flex items-center justify-center gap-2"
            href="https://wa.me/628979246882?text=Halo%20saya%20tertarik%20dengan%20layanan%20Anda"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat Whatsapp <FaWhatsapp className="w-6 h-auto" />
          </Link>
        </Button>

        <Analytics />
      </body>
    </html>
  );
}
