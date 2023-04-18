import 'tailwindcss/tailwind.css';
import '@/src/styles/globals.css'
import { ThemeProvider } from 'next-themes';

export default function App({ Component, pageProps }) {
  return (
      <>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </>
  )
}
