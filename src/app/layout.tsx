import { Jost } from "next/font/google";
import "./globals.css";
import Header from "@/ui/Header/Header";
import Footer from "@/ui/footer/Footer";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jost.variable} antialiased bg-[#fff] min-h-screen flex flex-col`}
      >
        <Header />
        <section className="flex-1">
          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
