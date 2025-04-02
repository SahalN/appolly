/** @format */
import Image from "next/image";
import { Link } from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <Image src='' width={24} height={24} />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae. Est tellus vitae, nullam lobortis enim.
        </p>
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
      <div>
        <h1>quick link</h1>
        <ul>
          <li>
            <Link href=''>About</Link>
          </li>
          <li>
            <Link href=''>Features</Link>
          </li>
          <li>
            <Link href=''>Screenshot</Link>
          </li>
          <li>
            <Link href=''>Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <h1>news letter</h1>
        <p>Subscribe our newsletter to get our latest update & news</p>
        {/* Input Button */}
        <div>
          <input type='text' />
          <button></button>
        </div>
      </div>
      <div>
        <div>&copy</div>
        <p>Copyright 2021 .Ojjomedia. All Right Reserved.</p>
      </div>
    </footer>
  );
}
