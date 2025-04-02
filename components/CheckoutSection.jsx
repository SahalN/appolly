/** @format */

import Image from "next/image";

export default function CheckoutSection() {
  return (
    <>
      <section>
        <div>
          <h1>Checkout Our App Interface Look</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        {/* Carousel */}
        <div>
          <div>
            <button>Left</button>
          </div>
          <div>{/* iMAGE */}</div>
          <div>
            <button>Right</button>
          </div>
          <div>Status of the image</div>
        </div>
        {/*  Download app*/}
        <div>
          <div>
            <div>
              <h2>Download App Now</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
                nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
                Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
                Ullamcorper risus tempor, ac nunc libero urna, feugiat.
              </p>
            </div>
            <div>
              <button></button>
              <button></button>
            </div>
            <div>
              <div>
                <Image src='' width={24} height={24} />
                <p>59865</p>
                <p>Download</p>
              </div>
              <div>
                <Image src='' width={24} height={24} />
                <p>29852</p>
                <p>LIke</p>
              </div>
              <div>
                <Image src='' width={24} height={24} />
                <p>1500</p>
                <p>5 star rating</p>
              </div>
            </div>
          </div>
          <div>
            <Image src='' width={24} height={24} />
          </div>
        </div>
      </section>
    </>
  );
}
