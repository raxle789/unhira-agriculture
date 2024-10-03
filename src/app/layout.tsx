import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Unhira Agrikultur - Supplier sayur dan buah di bekasi",
  description:
    "Kami adalah perusahaan yang bergerak di bidang pengadaan sayur, buah, dan groceries. Kami bermitra dengan petani lokal untuk memenuhi kebutuhan sayuran khusus dengan standar kualitas terbaik. Bekerjasama dengan banyak pedagang UMKM untuk memenuhi kebutuhan buah dan groceries dengan kualitas dan kapasitas yang diinginkan pelanggan kami.",
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
          "Jl. Permata Hijau Permai Jl. Mirah No.20 Blok BR, Kaliabang Tengah, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat",
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
      image: "https://www.unhiraagrikultur.com/#produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/#produk",
        priceValidUntil: "2025-06-30",
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
      image: "https://www.unhiraagrikultur.com/#produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/#produk",
        priceValidUntil: "2025-06-30",
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
      image: "https://www.unhiraagrikultur.com/#produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/#produk",
        priceValidUntil: "2025-06-30",
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
      image: "https://www.unhiraagrikultur.com/#produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/#produk",
        priceValidUntil: "2025-06-30",
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
      image: "https://www.unhiraagrikultur.com/#produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/#produk",
        priceValidUntil: "2025-06-30",
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
      image: "https://www.unhiraagrikultur.com/#produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/#produk",
        priceValidUntil: "2025-06-30",
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
      image: "https://www.unhiraagrikultur.com/#produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/#produk",
        priceValidUntil: "2025-06-30",
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
      image: "https://www.unhiraagrikultur.com/#produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/#produk",
        priceValidUntil: "2025-06-30",
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
      image: "https://www.unhiraagrikultur.com/#produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/#produk",
        priceValidUntil: "2025-06-30",
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
      image: "https://www.unhiraagrikultur.com/#produk",
      // description: "Deskripsi produk pertama.",
      // sku: "SKU12345",
      offers: {
        "@type": "Offer",
        priceCurrency: "IDR",
        price: "50000",
        url: "https://www.unhiraagrikultur.com/#produk",
        priceValidUntil: "2025-06-30",
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
    <html lang="en" className="scroll-smooth scroll-pt-[70px]">
      <head>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.unhiraagrikultur.com/" />
        <link
          rel="next"
          href="https://www.unhiraagrikultur.com/#tentang-kami"
        />
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
