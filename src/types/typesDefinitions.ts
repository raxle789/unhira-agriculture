import { StaticImageData } from "next/image";

export type TProduct = {
  image: StaticImageData;
  name: string;
  alt: string;
};

export type TProductTable = {
  category: string;
  items: {
    id: number;
    name: string;
    unit: string;
    price: number;
  }[];
};

export type TProductCategory = {
  id: number;
  name: string;
  unit: string;
  price: number;
};

export type TPartner = {
  image: StaticImageData;
  name: string;
  alt: string;
};
