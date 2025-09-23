// import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div>
      header
      <div className="relative w-40 h-50 bg-red-500">
        {/* <Image
          src="/Slice-5_4.avif"
          alt="logo"
          fill
          className="object-cover"
          sizes="auto"
          priority
        /> */}
      </div>

      <ul className="flex py-4 justify-center items-center gap-4 px-4">
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
        <li>
          <Link href="/form">form</Link>
        </li>
    
    
      </ul>
    </div>
  );
}
export default Header;
