import aragulaRocket from "../../public/assets/images/aragula-rocket.jpg";
import brokoli from "../../public/assets/images/brokoli.jpg";
import daunKetumbar from "../../public/assets/images/daun-ketumbar.jpg";
import kolUngu from "../../public/assets/images/kol-ungu.jpg";
import lolorosa from "../../public/assets/images/lolorosa.jpg";
import lettuce from "../../public/assets/images/lettuce.jpg";
import parsley from "../../public/assets/images/parsley.jpg";
import radisio from "../../public/assets/images/radisio.jpg";
import romaine from "../../public/assets/images/romaine.jpg";
import thyme from "../../public/assets/images/thyme.jpg";
import { StaticImageData } from "next/image";

type TProduct = {
  image: StaticImageData;
  name: string;
  alt: string;
};

export const productData: TProduct[] = [
  {
    image: aragulaRocket,
    name: "Aragula Rocket",
    alt: "menyediakan Aragula Rocket",
  },
  {
    image: brokoli,
    name: "Brokoli",
    alt: "menyediakan Brokoli",
  },
  {
    image: daunKetumbar,
    name: "Daun Ketumbar",
    alt: "menyediakan Daun Ketumbar",
  },
  {
    image: kolUngu,
    name: "Kol Ungu",
    alt: "menyediakan Kol Ungu",
  },
  {
    image: lettuce,
    name: "Lettuce",
    alt: "menyediakan Lettuce",
  },
  {
    image: lolorosa,
    name: "Lolorosa",
    alt: "menyediakan Lolorosa",
  },
  {
    image: parsley,
    name: "Parsley",
    alt: "menyediakan Parsley",
  },
  {
    image: radisio,
    name: "Radisio",
    alt: "menyediakan Radisio",
  },
  {
    image: romaine,
    name: "Romaine",
    alt: "menyediakan Romaine",
  },
  {
    image: thyme,
    name: "Thyme",
    alt: "menyediakan Thyme",
  },
];
