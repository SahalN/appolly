/** @format */

import Image from "next/image";

export default function TeamSection() {
  return (
    <section>
      <div>
        <h1>how to use the app perfectly</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
        <video src=''></video>
      </div>
      {/* Team */}
      <div>
        <h2>Our reative team</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      {/* Photo Card*/}
      <div>
        <div>
          <div>
            <Image src='' width={24} height={24} />
          </div>
          <div>
            <h3>Carla Press</h3>
            <h4>App Developer</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae.
            </p>
          </div>
          <div>
            {/* Social Media */}
            <ul>
              <li>
                <Image src='' width={24} height={24} />
              </li>
              <li>
                <Image src='' width={24} height={24} />
              </li>
              <li>
                <Image src='' width={24} height={24} />
              </li>
              <li>
                <Image src='' width={24} height={24} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
