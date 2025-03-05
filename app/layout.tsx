import '@/app/ui/global.css';
import { lusitana } from '@/app/ui/fonts';
import { Metadata } from 'next';
import SideNav from '@/app/ui/sidenav';

export const metadata: Metadata = {
  title: {
    template: '%s | Phạm Công Thành',
    default: 'Phạm Công Thành',
  },
  description: 'UI/UX Designer, Graphic Designer & Web Developer',
  metadataBase: new URL('https://phamcongthanh.vercel.app'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`}>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
          <div className="w-full flex-none md:w-64">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
