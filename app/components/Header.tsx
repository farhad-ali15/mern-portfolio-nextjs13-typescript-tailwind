import Image from "next/image";
import Link from "next/link";
import React from "react";

type HeaderProps = {
  name: string;
  pages: {
    id: number;
    label: string;
    link: string;
  }[];
};

const Header = ({ name, pages }: HeaderProps) => {
  return (
    <header className="flex flex-col relative bg-linear-557AFF w-full h-48">
      <div className="flex flex-col justify-around h-full sm:px-6 px:1 bg-header z-10">
        <nav className="text-right flex flex-row sm:gap-6 self-end gap-1">
          {pages.map((page) => (
            <Link
              href={page.link}
              key={page.id}
              aria-label={page.label}
              className="px-6 py-2 min-w-100 hover:bg-blue-light hover:text-blue font-display uppercase tracking-wide sm:bg-none
								bg-white"
            >
              {page.label}
            </Link>
          ))}
        </nav>
        <h1 className="text-white uppercase pl-2 sm:pl-0">{name}</h1>
      </div>
      <Image
        priority
        height={400}
        width={2000}
        src="/images/jeshoots-com-pUAM5hPaCRI-unsplash.jpg"
        alt={`image of ${name}`}
        aria-label={`image of ${name}`}
        className="w-full h-48 object-cover object-top absolute mb-6"
      />
    </header>
  );
};

export default Header;
