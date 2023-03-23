import { globalStyles, styled } from '@styles/stiches.config';
import type { AppProps } from 'next/app'
import { Wotfard } from 'assets/fonts';


const Main = styled("div", {
  position: "relative"
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Main>
      <style jsx global>{`
        html {
          font-family: ${Wotfard.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </Main>
  )
}