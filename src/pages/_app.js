import 'tailwindcss/tailwind.css';
import '@/src/styles/globals.css'
import { ThemeProvider } from 'next-themes';
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
      <>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HT3FZFQV5E"/>
        <Script>
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-HT3FZFQV5E');
            `}
        </Script>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </>
  )
}
