import '../styles/globals.css'
/** @type {import('tailwindcss').Config} */
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
