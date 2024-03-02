import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import { Poppins } from 'next/font/google';
const poppins = Poppins({
  weight: ["400", "900"],   
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export default function App({ Component, pageProps }: AppProps) {
  return <div className={poppins.className}>
  <Component {...pageProps} />
</div>
}
