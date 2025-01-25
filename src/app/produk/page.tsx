import type { Metadata } from "next";
import ProductCard from "./product-card";

export const metadata: Metadata = {
  title: "Katalog Produk | Unhira Agrikultur - Supplier sayur dan buah bekasi",
  description:
    "Temukan berbagai sayuran dan buah segar berkualitas tinggi dari Unhira Agrikultur. Kami menyediakan Brokoli, Lettuce, Tomat Cherry, Baby Corn, Lemon California, dan masih banyak lagi. Pesan sekarang untuk kebutuhan segar Anda!",
};

export default function ProductPage() {
  return <ProductCard />;
}
