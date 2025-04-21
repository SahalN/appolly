/** @format */

import Image from "next/image";

export default function Hero({ className }) {
  return (
    <>
      <section
        className={`flex flex-row  items-center mt-20 gap-[12rem] px-[8.5rem] ${className}`}>
        <div className=' py-[2.25rem] px-[2rem] w-[36rem] bg-white rounded-2xl '>
          <div className=''>
            <h1 className='text-[3rem] font-normal mb-4 text-[#5956E9]'>
              A Great App Makes Your Life Better
            </h1>
            <p className='text-[1rem] mb-12 text-[#6C6C72]'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div className='flex flex-col '>
            <p className='text-2xl mb-1.5'>DOWNLOAD APP NOW</p>
            <div className='flex flex-row gap-4'>
              <div>
                <Image src='/google-play.svg' width={149} height={47} />
              </div>
              <div>
                <Image src='/app-store.svg' width={149} height={47} />
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2 pe-20 flex justify-center items-center'>
          <div>
            <Image src='/hero-img.svg' width={341} height={725} />
          </div>
        </div>
      </section>
    </>
  );
}
