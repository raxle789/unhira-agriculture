import type { Metadata } from "next";
import ProductCard from "./product-card";

export const metadata: Metadata = {
  title: "Katalog Produk - Unhira Agrikultur",
  description:
    "Kami adalah perusahaan yang bergerak di bidang pengadaan barang berupa sayur, buah, dan groceries untuk kebutuhan hotel, restoran, dan kafe. Perusahaan kami berkomitmen untuk selalu mengedepankan kualitas barang dan pelayanan terbaik.",
};

export default function ProductPage() {
  return <ProductCard />;
}
