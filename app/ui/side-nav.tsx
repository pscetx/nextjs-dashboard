import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col justify-between px-2 py-4">
      <Link
        className="flex h-20 items-start justify-center"
        href="/"
      >
        <Image src="/logo.png" width={50} height={50} alt="logo" priority />
      </Link>
      <div className="flex flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
      <div className="hidden h-20 w-full md:block"></div>
    </div>
  );
}
