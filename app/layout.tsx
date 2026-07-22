import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fonteslex.com"),
  title: "Fonteslex | Lic. Eleazar Fontes Acuña — Abogado Corporativo y Litigante",
  description:
    "Despacho jurídico en Hermosillo, Sonora. Asesoría corporativa a empresas nacionales y extranjeras del sector minero, litigio civil, mercantil, laboral, administrativo y familiar.",
  keywords: [
    "abogado Hermosillo",
    "derecho corporativo Sonora",
    "derecho minero México",
    "litigio civil mercantil",
    "juicio de amparo",
    "Fonteslex",
    "Eleazar Fontes",
  ],
  openGraph: {
    title: "Fonteslex | Lic. Eleazar Fontes Acuña",
    description:
      "Asesoría legal corporativa y litigio en Hermosillo, Sonora. Más de 25 años de experiencia al servicio de empresas nacionales y extranjeras.",
    url: "https://fonteslex.com",
    siteName: "Fonteslex",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
