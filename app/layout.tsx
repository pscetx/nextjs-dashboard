import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import SideNav from '@/app/ui/side-nav';
import PageWrapper from '@/app/ui/page-animation';
import ElegantCursor from '@/app/ui/cursor';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: {
    template: '%s | Phạm Công Thành',
    default: 'Phạm Công Thành - UX Designer',
  },
  description: 'UX Designer / Web Developer',
  metadataBase: new URL('https://phamcongthanh.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${lusitana.className} min-h-screen bg-fixed bg-no-repeat antialiased`}
      >
        <ElegantCursor />
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-60">
            <SideNav />
          </div>
          <div className="flex min-h-screen flex-grow flex-col justify-between p-6 md:overflow-y-auto md:py-6 md:pl-0">
            <PageWrapper>{children}</PageWrapper>
            <div className="mt-8 flex items-center justify-between">
              <p className="text-xl tracking-wide text-gray-800">
                Let's chat! Reach me at <strong>pscetxvn@gmail.com</strong>
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/pscetx/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/linkedin.png"
                    width={30}
                    height={30}
                    alt="logo"
                    priority
                  />
                </Link>
                <Link
                  href="https://www.behance.net/thnhphm118"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/behance.png"
                    width={60}
                    height={60}
                    alt="logo"
                    priority
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
