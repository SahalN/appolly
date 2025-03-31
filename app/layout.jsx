/** @format */

import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Appolly",
  description: "I dont know how this app",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <header>
          <nav>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/'>Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
        <footer></footer>
      </body>
    </html>
  );
}
