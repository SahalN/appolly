/** @format */
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section className='my-28'>
        <div className='text-center mb-14 px-64'>
          <h1 className='text-3xl font-semibold mb-4'>About Our App</h1>
          <p className='text-[#6C6C72]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <div className='flex flex-row'>
          <div className='w-1/2 flex items-center justify-center'>
            <Image
              src='/android-smartphone.svg'
              width={386}
              height={526}
              alt='Image'
            />
          </div>
          <div className='w-1/2 flex flex-col gap-y-10'>
            <div className='flex flex-col p-7'>
              <div className='flex flex-row  '>
                <Image src='/check.svg' width={24} height={24} />
                <h2 className='text-xl font-semibold uppercase'>
                  Creative design
                </h2>
              </div>
              <div className='ml-6 w-full'>
                <p className='text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                  ullamcorper velit.
                </p>
              </div>
            </div>
            <div className='flex flex-col p-7'>
              <div className='flex flex-row m-0 '>
                <Image src='/check.svg' width={24} height={24} />
                <h2 className='text-xl font-semibold uppercase'>easy to use</h2>
              </div>
              <div className='ml-6 w-full'>
                <p className='text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                  ullamcorper velit.
                </p>
              </div>
            </div>
            <div className='flex flex-col p-7'>
              <div className='flex flex-row m-0 '>
                <Image src='/check.svg' width={24} height={24} />
                <h2 className='text-xl font-semibold uppercase'>
                  Best user experince
                </h2>
              </div>
              <div className='ml-6 w-full'>
                <p className='text-left'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                  ullamcorper velit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
