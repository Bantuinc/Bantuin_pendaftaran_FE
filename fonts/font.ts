import { Inter, Hind, Roboto, Ubuntu } from "next/font/google";
import localFont from 'next/font/local'

export const inter = Inter({ subsets: ["latin"] });
export const hind = Hind({ weight: ["400", "600", "700"], subsets: ["latin"] });
export const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
export const ubuntu = Ubuntu({ weight: ["400", "700"], subsets: ["latin"] });
export const cocogoose = localFont({
    src: [
      {
        path: './cocogoose/Cocogoose Pro Light.ttf',
        weight: '400',
        style: 'normal',
      },
      {
        path: './cocogoose/Cocogoose Pro Semilight.ttf',
        weight: '600',
        style: 'normal',
      },
      {
        path: './cocogoose/Cocogoose Pro.ttf',
        weight: '700',
        style: 'normal',
      },
    ],
  })