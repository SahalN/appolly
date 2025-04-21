/** @format */
import Image from "next/image";

export default function HighlightsSection({ className }) {
  return (
    <section className={`py-28 ${className} text-white`}>
      <div className='text-center  '>
        {/* First Section */}
        <div>
          <h1 className='text-3xl mb-5 uppercase font-bold'>App features</h1>
          <p className='px-80 mb-14'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        {/* Second Section */}
        <div className='flex flex-col items-center mb-14 gap-y-5'>
          <Image src='/comment.svg' width={50} height={50} alt='comment' />

          <h2 className='text-xl uppercase font-semibold'>Full free chat</h2>

          <p className='px-80'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      {/* Features */}
      <div className='grid grid-cols-3'>
        <div>
          <Image src='/browser.svg' width={50} height={50} alt='browser' />
          <h3>unlimiter features</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className='p-0 m-0'>
          <Image src='/app.svg' width={1024} height={1024} />
        </div>
        <div>
          <Image
            src='/cell-phone.svg'
            width={50}
            height={50}
            alt='cell-phone'
          />
          <h3>iso & androind version</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>
          <Image src='/vector.svg' width={50} height={50} alt='vector.svg' />
          <h3>awsome ui design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>8</div>
        <div>
          <Image
            src='/eye-scanner.svg'
            width={50}
            height={50}
            alt='eye-scanner'
          />
          <h3>retina ready greaphics</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>10</div>
        <div>
          <Image
            src='/male-telemarketer.svg'
            width={50}
            height={50}
            alt='male-telemarketer'
          />
          <h3>24/7 support by real pepole</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>11</div>
      </div>
    </section>
  );
}
