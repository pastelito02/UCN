import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  return (
    <div>
      <Head>
        <title>Laboratorio Slayfer</title>
        <meta name="description" content="Laboratorio slayfer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="grid">
          <div className="card">
            <h1>Toma de laboratorios clinicos</h1>
            <p>
              Si desea agendar una cita para la toma de laboratorios clinicos
              puede hacerlo dando click en el boton de abajo.
            </p>
            <div className="agenda">
              <Link href={'/agenda'}>
                <button type="button">Agendar cita</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <h1>Citologia</h1>
            <p>
              Si desea agendar una cita para citoologia puede hacerlo dando
              click en el boton que encontrara abajo.
            </p>
            <div className="agenda">
              <Link href={'/agenda'}>
                <button type="button">Agendar cita</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <h1>Pruebas COVID</h1>
            <p>
              Si tiene sintomas de COVID-19 y desea hacerse la prueba puede
              agendar una cita dando click en el boton de abajo.
            </p>
            <div className="agenda">
              <Link href={'/agenda'}>
                <button type="button">Agendar cita</button>
              </Link>
            </div>
          </div>
          <div className="card">
            <h1>Examenes especializados</h1>
            <p>
              Si tiene algun examen especializado que desea hacerse puede
              agendar una cita dando click en el boton de abajo.
            </p>
            <div className="agenda">
              <Link href={'/agenda'}>
                <button type="button">Agendar cita</button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
