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
  { name: 'resume', href: '/resume' },
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
              'relative flex h-12 grow items-center justify-center gap-2 p-3 text-center text-sm before:absolute before:inset-0 before:m-auto before:h-[30%] before:w-full before:max-w-[180px] before:rounded-full before:bg-amber-400 before:opacity-0 before:blur-md before:transition-opacity before:duration-500 hover:text-amber-600 hover:before:opacity-40 md:flex-none md:p-2 md:px-3',
              {
                'text-black before:opacity-40': pathname === link.href,
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
