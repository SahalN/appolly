/** @format */
import Image from "next/image";

export default function AboutSection() {
  return (
    <>
      <section className=''>
        <div className='text-center'>
          <h1 className=''>About Our App</h1>
          <p className=''>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        <div className='flex flex-row'>
          <div className='w-1/2 flex items-center justify-center'>
            <Image src='' width={24} height={24} alt='Image' />
          </div>
          <div className='w-1/2 flex flex-col'>
            <div className='flex flex-row items-start justify-center '>
              <div>
                <Image src='' width={24} height={24} />
              </div>
              <div>
                <h2>Creative design</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Viverra nunc ante velit vitae. Est tellus vitae, nullam
                  lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                  ullamcorper velit.
                </p>
              </div>
            </div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </section>
    </>
  );
}
