/** @format */

import "./globals.css";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

export const metadata = {
  title: "Appolly",
  description: "I dont know how this app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='container flex flex-col m-0 p-0 max-w-full '>
        <header className='flex flex-col px-[8.5rem] bg-[url(/bg-feature.svg)] bg-no-repeat bg-center bg-cover py-[4.62rem] text-white'>
          {/* CTA */}
          <div className='flex flex-row w-full'>
            <div className='flex flex-row gap-2'>
              <div className='flex flex-row gap-4'>
                <div>
                  <Image
                    src='/mail-fill.svg'
                    alt='Mail Icon'
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p>Info@youremail.com</p>
                </div>
              </div>
              <div className='flex flex-row gap-4'>
                <div>
                  <Image
                    src='/phone-fill.svg'
                    alt='Mail Icon'
                    width={24}
                    height={24}
                  />
                </div>
                <div>
                  <p>(480) 555-0103</p>
                </div>
              </div>
            </div>
            <div className='flex ml-auto'>
              <div className='flex flex-row gap-4'>
                <Image
                  src='/facebook-fill.svg'
                  alt='Facebook Icon'
                  width={24}
                  height={24}
                />
                <Image
                  src='/instagram-fill.svg'
                  alt='Instagram Icon'
                  width={24}
                  height={24}
                />
                <Image
                  src='/twitter-fill.svg'
                  alt='Twitter Icon'
                  width={24}
                  height={24}
                />
                <Image
                  src='/youtube-fill.svg'
                  alt='Youtube Icon'
                  width={24}
                  height={24}
                />
              </div>
            </div>
          </div>
          <NavBar />
          <Hero />
        </header>
        <main className='grow '> {children}</main>
        <footer className='px-[8.5rem] '>
          <p>&copy Hello</p>
        </footer>
      </body>
    </html>
  );
}
