import { Jost } from "next/font/google";
import "./globals.css";

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
        className={`${jost.variable} antialiased bg-[#ffffff] min-h-screen flex flex-col`}
      >
        <section className="flex-1">
          {children}
        </section>
      </body>
    </html>
  );
}
