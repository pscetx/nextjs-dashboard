import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
import Image from 'next/image';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-start justify-start p-4 md:h-60"
        href="/"
      >
        <Image src="/logo.png" width={40} height={10} alt="logo" />
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow md:block"></div>
      </div>
    </div>
  );
}
