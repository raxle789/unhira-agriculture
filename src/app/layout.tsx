import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import localFont from "next/font/local";
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

export const metadata: Metadata = {
  title: "Unhira Agrikultur",
  description: "Supplier sayur dan buah bekasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const jsonLd = {
  //   '@context': 'https://schema.org',
  //   '@type': 'Product',
  //   name: product.name,
  //   image: product.image,
  //   description: product.description,
  // }

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
    // "sameAs": [
    //   "https://www.facebook.com/username",
    //   "https://www.twitter.com/username",
    //   "https://www.instagram.com/username"
    // ]
  };

  // const productSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "Product",
  //   name: "Nama Produk",
  //   image: "https://www.domain-anda.com/produk.jpg",
  //   description: "Deskripsi produk.",
  //   sku: "SKU12345",
  //   offers: {
  //     "@type": "Offer",
  //     priceCurrency: "IDR",
  //     price: "500000",
  //     url: "https://www.domain-anda.com/produk",
  //     priceValidUntil: "2024-12-31",
  //     availability: "https://schema.org/InStock",
  //     itemCondition: "https://schema.org/NewCondition",
  //     seller: {
  //       "@type": "Organization",
  //       name: "Nama Perusahaan",
  //     },
  //   },
  // };

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
        <link rel="canonical" href="https://www.unhiraagrikultur.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(partnerSchema) }}
        /> */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
