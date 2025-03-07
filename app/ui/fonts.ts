import { Montserrat } from 'next/font/google';
import { Lusitana } from 'next/font/google';
 
export const montserrat = Montserrat({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '900'], 
  style: ['normal', 'italic',]
});
export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});