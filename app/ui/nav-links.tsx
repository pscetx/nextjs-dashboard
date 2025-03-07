'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
  { name: 'home', href: '/' },
  {
    name: 'work',
    href: '/work',
  },
<<<<<<< HEAD
  { name: 'about', href: '/about' },
=======
  { name: 'resume', href: '/resume' },
>>>>>>> cfff3be8019a308df2bad0ef740267e5347923a7
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
<<<<<<< HEAD
              'relative flex h-10 grow items-center justify-center gap-2 p-3 text-center italic before:absolute before:inset-0 before:m-auto before:h-[50%] before:w-full before:max-w-[150px] before:rounded-full before:bg-amber-500 before:opacity-0 before:blur-md before:transition-opacity before:duration-500 hover:text-amber-800 hover:before:opacity-80 md:flex-none md:p-2 md:px-3',
              {
                'text-black before:opacity-50': pathname === link.href,
=======
              'relative flex h-12 grow items-center justify-center gap-2 p-3 text-center before:absolute before:inset-0 before:m-auto before:h-[30%] before:w-full before:max-w-[180px] before:rounded-full before:bg-amber-500 before:opacity-0 before:blur-md before:transition-opacity before:duration-500 hover:text-amber-800 hover:before:opacity-60 md:flex-none md:p-2 md:px-3',
              {
                'text-black before:opacity-30': pathname === link.href,
>>>>>>> cfff3be8019a308df2bad0ef740267e5347923a7
              },
            )}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
