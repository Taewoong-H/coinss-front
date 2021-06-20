// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import '../styles/globals.css';
import Sidebar from '../components/sidebar/Sidebar';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Login from './login';

const Container = styled.div`
  display: flex;
`;

const PageWrapper = styled.div``;

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <Container>
      {router.pathname === '/login' ? (
        <Login />
      ) : (
        <>
          <Sidebar />
          <PageWrapper>
            <Navbar />
            <Component {...pageProps} />
            <Footer />
          </PageWrapper>
        </>
      )}
    </Container>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;

/**
 * 페이지 전환시 레이아웃을 유지할 수 있습니다
 * 페이지 전환시 상태값을 유지할 수 있습니다
 * componentDidCatch를 이용해서 커스텀 에러 행들링을 할 수 있습니다
 * 추가적인 데이터를 페이지로 주입시켜주는게 가능합니다
 * 글로벌 CSS를 이곳에 선언합니다
 **/
