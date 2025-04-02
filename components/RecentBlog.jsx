/** @format */
import { Link } from "next/link";

export default function RecentBlog() {
  return (
    <section>
      <div>
        <h1>Our recent blog</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus
          amet etiam tincidunt rhoncus, ullamcorper velit. Ullamcorper risus
          tempor, ac nunc libero urna, feugiat.
        </p>
      </div>
      {/* Card section */}
      <div>
        <div>
          <Image src='' width={24} height={24} />
          <div>
            <h3>The Snap Pixel: How It Works and How to Install </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <Link href='' className='underline underline-offset-2'>
              Read more
            </Link>
          </div>
        </div>
        <div>
          <Image src='' width={24} height={24} />
          <div>
            <h3>The Snap Pixel: How It Works and How to Install </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <Link href='' className='underline underline-offset-2'>
              Read more
            </Link>
          </div>
        </div>
        <div>
          <Image src='' width={24} height={24} />
          <div>
            <h3>The Snap Pixel: How It Works and How to Install </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra
              nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.
            </p>
            <Link href='' className='underline underline-offset-2'>
              Read more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
