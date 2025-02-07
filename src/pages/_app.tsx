import { geistMono, geistSans, poppinsLocal } from '@/styles/fonts';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`app-wrapper ${geistSans.variable} ${geistMono.variable} ${poppinsLocal.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
