import { Poltawski_Nowy } from 'next/font/google';
import { Metadata } from 'next';
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css"

const poltawskiNowy = Poltawski_Nowy({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poltawski',
});

export const metadata: Metadata = {
  title: "Bibleway",
  description: "Your favorite Bible App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poltawskiNowy.variable}>
      <body>{children}</body>
    </html>
  );
}
