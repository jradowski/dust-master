import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/globals.css";
import Dropdown from "../app/components/Dropdown";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stable Assistant",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>

      <div className="w-full columns-3">

          <div className="items-center font-bold p-12 mt-10">
              <div className="columns-2 pl-5  rounded-xl gap-5 font-sans justify-center w-500 border-b border-gray-500 border-opacity-50 bg-gradient-to-b from-gray-400  dark:border-blue-900 dark:bg-gradient-to-b dark:from-blue-600 dark:to-blue-950 pb-6 pt-8 ">
                  <div className="columns-2 w-1/2 ">
                  <Image
                      src="/profile.jpg"
                      alt="avatar"
                      className="rounded-full w-full "
                      width={300}
                      height={300}
                  />
                  Kamil Ślimak&nbsp;
                  </div>
                  <Dropdown/>
              </div>

          </div>

          <div className="flex justify-center ">
              <Image
                  className="h-fit "
                  src="/SAlogo.svg"
                  alt="Satble Assisant Logo"
                  width={200}
                  height={200}
                  priority
              />
          </div>

          <div className="items-center mt-10 p-12">

          </div>

      </div>

      {children}
      </body>
      </html>
  );
}
