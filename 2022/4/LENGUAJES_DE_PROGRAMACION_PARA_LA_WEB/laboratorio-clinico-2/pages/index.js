import Head from 'next/head';
import Examenes from '../components/Examenes';
import Presentacion from '../components/Presentacion';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Laboratorio Slayfer</title>
        <meta name="description" content="Laboratorio slayfer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'banner'}></div>
      <div className={'divider'}>
        <h1>Laboratorio clinico</h1>
        <a href="mailto:hola@slayfer.dev">
          <button>Contactar</button>
        </a>
      </div>
      <main className={'container'}>
        <Presentacion />
        <Examenes />
      </main>
    </div>
  );
}
