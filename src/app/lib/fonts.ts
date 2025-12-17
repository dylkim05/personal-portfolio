import { Caudex, Quintessential } from "next/font/google";

export const quintessential = Quintessential({
  variable: "--font-quintessential",
  weight: ["400"],
  subsets: ["latin"],
});

export const caudex = Caudex({
  variable: "--font-caudex",
  weight: ["400", "700"],
  subsets: ["latin"],
});
