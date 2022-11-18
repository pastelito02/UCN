import Navbar from '../components/Navbar';
import Image from 'next/image';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <footer
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '1rem',
          backgroundColor: '#f5f5f5',
        }}
      >
        <a
          href="https://www.salyfer.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span>Powered by </span>
          <Image src="/img/logo.png" alt="Logo" width={20} height={20} />
        </a>
      </footer>
    </>
  );
}

export default MyApp;
