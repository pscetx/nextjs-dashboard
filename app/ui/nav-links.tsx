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
  { name: 'about', href: '/about' },
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
              'relative flex h-10 grow items-center justify-center gap-2 p-3 text-center italic before:absolute before:inset-0 before:m-auto before:h-[50%] before:w-full before:max-w-[150px] before:rounded-full before:bg-amber-500 before:opacity-0 before:blur-md before:transition-opacity before:duration-500 hover:text-amber-800 hover:before:opacity-80 md:flex-none md:p-2 md:px-3',
              {
                'text-black before:opacity-50': pathname === link.href,
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
