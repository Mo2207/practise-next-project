
'use client';

import localFont from "next/font/local";
import "./globals.css";
import { useRouter } from "next/navigation";
import metadata from "@/utils/metadata";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
const router = useRouter();

const handleNavClick = (
  // event is a React MouseEvent (click) triggered by an HTMLElement (li)
  event: React.MouseEvent<HTMLElement>) => 
  {
  // page is the currentTarget that was clicked (li) and tells typescript to type it as a HTMLElement
  // then HTMLElement allows acces to dataset properties (dataset.page)
  const page = (event.currentTarget as HTMLElement).dataset.page;
  // console.log(`Clicked ${page}`);
  // navigate to proper page using router
  router.push(`/${page}`);
}

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        
        {/* Menu */}
        <nav className="sticky min-h-[7vh] w-screen bg-orange-600 flex items-center top-0 left-0">
          <ul className="flex space-x-16 font-medium text-white text-2xl px-32">
            <li data-page="/" onClick={handleNavClick} className="cursor-pointer">Home</li>
            <li data-page="booking" onClick={handleNavClick} className="cursor-pointer">Booking</li>
            <li data-page="contact" onClick={handleNavClick} className="cursor-pointer">Contact</li>
          </ul>
        </nav>

        {/* Everything else */}
        <main>
          {children}
        </main>

      </body>
    </html>
  );
}
