/** @format */
import Image from "next/image";

export default function HighlightsSection() {
  return (
    <>
      <div>
        {/* First Section */}
        <div>
          <h1>App features</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
            nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            Faucibus amet etiam tincidunt rhoncus, ullamcorper velit.
            Ullamcorper risus tempor, ac nunc libero urna, feugiat.
          </p>
        </div>
        {/* Second Section */}
        <div>
          <Image src='' width={24} height={24} />
        </div>
        <div>
          <h2>Full free chat</h2>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      {/* Features */}
      <div>
        <div>
          <Image src='' width={24} height={24} />
          <h3>unlimiter features</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
          <Image src='' width={24} height={24} />
        </div>
        <div>
          <Image src='' width={24} height={24} />
          <h3>iso & androind version</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>
          <Image src='' width={24} height={24} />
          <h3>awsome ui design</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>8</div>
        <div>
          <Image src='' width={24} height={24} />
          <h3>retina ready greaphics</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>10</div>
        <div>
          <Image src='' width={24} height={24} />
          <h3>24/7 support by real pepole</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>11</div>
      </div>
    </>
  );
}
