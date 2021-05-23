import { AppProps } from 'next/app';
import { GlobalStyles } from '../utils/GlobalStyles';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
