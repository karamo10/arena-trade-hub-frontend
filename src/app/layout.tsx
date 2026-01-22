import { Roboto, Jost } from "next/font/google";
import "./globals.css";
import Navigation from "@/ui/header/Header";
import Footer from "@/ui/footer/Footer";

const jost = Jost({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} ${jost.variable} antialiased bg-[#fafbfc] min-h-screen flex flex-col`}
      >
        <Navigation />
        <section className="flex-1">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
