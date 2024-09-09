import pakboySteak from "../../public/assets/images/pakboy-steak.jpg";
import baraApiSteak from "../../public/assets/images/bara-api-steak.jpg";
import doubleUSteak from "../../public/assets/images/double-u-steak.jpg";
import shukagrillBekasi from "../../public/assets/images/shukagrill-bekasi.jpg";
import { StaticImageData } from "next/image";

type TPartner = {
  image: StaticImageData;
  name: string;
  alt: string;
};

export const partnerData: TPartner[] = [
  {
    image: pakboySteak,
    name: "Pakboy Steak",
    alt: "bermitra dengan Pakboy Steak",
  },
  {
    image: baraApiSteak,
    name: "Bara Api Steak",
    alt: "bermitra dengan Bara Api Steak",
  },
  {
    image: doubleUSteak,
    name: "Double U Steak",
    alt: "bermitra dengan Double U Steak",
  },
  {
    image: shukagrillBekasi,
    name: "Shukagrill Bekasi",
    alt: "bermitra dengan Shukagrill Bekasi",
  },
];
