import Head from 'next/head';

export default function About() {
  return (
    <div>
      <Head>
        <title>Laboratorio Slayfer | Sobre nosotros</title>
        <meta name="description" content="Laboratorio slayfer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={'container'}
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <section className="grid">
          <div className="card">
            <h1>Quienes somos</h1>
            <p>
              Somos un laboratorio clinico que se dedica a la realizacion de
              analisis clinicos de todo tipo, nacimos en el año 1972 y desde
              entonces hemos estado trabajando para ofrecerle a nuestros
              clientes los mejores servicios.
            </p>
          </div>
          <div className="card">
            <h1>Mision</h1>
            <p>
              Nuestra mision es ofrecerle a nuestros clientes los mejores
              servicios de analisis clinicos, para que puedan tener un mejor
              control de su salud.
            </p>
          </div>
          <div className="card">
            <h1>Vision</h1>
            <p>
              Nuestra vision es ser el laboratorio clinico mas grande de la
              region, para poder ofrecerle a nuestros clientes los mejores
              servicios.
            </p>
          </div>
          <div className="card">
            <h1>Equipo de trabajo</h1>
            <p>
              Nuestro equipo de trabajo esta compuesto por profesionales de la
              salud que se dedican a la realizacion de analisis clinicos, para
              poder ofrecerle a nuestros clientes los mejores servicios.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
