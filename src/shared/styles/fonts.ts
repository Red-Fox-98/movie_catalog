import localFont from "next/font/local";

export const drukWideCy = localFont({
  variable: "--font-drukCyr",
  src: [
    {
      path: "../../../public/fonts/DrukWideCy/DrukWideCyBoldRegular.ttf",
      weight: "700",
      style: "normal"
    }
  ]
});

export const tTNormsPro = localFont({
  variable: "--font-tTNormsPro",
  src: [
    {
      path: "../../../public/fonts/TTNormsPro/TTNormsPro.ttf",
      weight: "400",
      style: "normal"
    }
  ]
});
