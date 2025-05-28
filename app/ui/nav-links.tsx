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
              'relative flex h-10 grow items-center rounded-full justify-center gap-2 p-4 tracking-widest before:absolute before:inset-0 before:m-auto before:h-[10%] before:w-full before:max-w-[60px] before:bg-amber-500 before:opacity-0 before:blur-sm before:transition-opacity before:duration-500 hover:text-amber-800 hover:before:opacity-100',
              {
                'text-gray-800 before:opacity-50': pathname === link.href,
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
