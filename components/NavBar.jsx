/** @format */

import Link from "next/link";
import Image from "next/image";

export default function NavBar() {
  return (
    <>
      {/* Navbar */}
      <nav className='w-full flex flex-row items-center px-[3.25rem] py-[1rem]'>
        {/* Kiri */}
        <div className='flex flex-1 flex-row gap-2.5 uppercase text-xl items-center justify-between pe-[7.25rem]'>
          <Link href='/' className='underline underline-offset-3'>
            Home
          </Link>
          <Link href='/about'>About</Link>
          <Link href='/'>Features</Link>
        </div>

        {/* Logo Tengah */}
        <div className='p-4 w-[12rem]'>
          <Link href='/'>
            <Image
              src='/logo-appolly.svg'
              alt='Logo Appolly'
              width={250}
              height={110}
            />
          </Link>
        </div>

        {/* Kanan */}
        <div className='flex flex-1 flex-row gap-2.5 uppercase text-xl items-center justify-between ps-[7.25rem]'>
          <Link href='/screenshot'>Screenshots</Link>
          <Link href='/blog'>Blog</Link>
          <button>Download</button>
        </div>
      </nav>
    </>
  );
}
