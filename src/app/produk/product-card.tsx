import { Suspense } from "react";
import Image from "next/image";
import bannerImg from "../../../public/assets/images/blog-cover.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { productData } from "@/lib/productData";
import dynamic from "next/dynamic";

const ProductTableComponent = dynamic(() => import("./product-table"), {
  suspense: true,
});

export default function ProductCard() {
  return (
    <div>
      <div className="relative w-full h-96">
        <Image
          className="absolute w-full h-full object-cover"
          src={bannerImg}
          alt="banner untuk produk"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-white">
          <h1 className="text-[1.6rem] text-center px-3 md:text-4xl lg:text-5xl font-bold uppercase text-coolyellow">
            Katalog Produk
          </h1>
        </div>
        <div className="absolute inset-0 bg-black opacity-50 z-0" />
      </div>

      <div className="py-[85px] flex flex-col justify-center items-center gap-8">
        <div className="w-4/5">
          <h1 className="text-xl md:text-[1.6rem] font-bold text-coolyellow mb-7">
            Produk Utama
          </h1>
          <div className="grid grid-flow-col grid-rows-3 auto-rows-max gap-6 overflow-x-auto scroll-smooth products-container">
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

      <Suspense fallback={<p>loading...</p>}>
        <ProductTableComponent />
      </Suspense>
    </div>
  );
}
