import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Laboratorio Slayfer</title>
        <meta name="description" content="Laboratorio slayfer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={'container'}>
        <section
          className="grid"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div className="card">
            <h1>Contactenos</h1>
            <p>
              Si desea contactarnos a continuacion se encuentran los datos de
              contacto de todos los medios que tenemos disponibles.
            </p>
            <div className="meta">
              <p>Whatsapp:</p>
              <a href="https://wa.me/573003000000">300 300 0000</a>
            </div>
            <div className="meta">
              <p>PBX:</p>
              <a href="tel:3003000000">300 300 0000</a>
            </div>
            <div className="meta">
              <p>Direccion:</p>
              <a href="https://goo.gl/maps/3J9Z9Z9Z9Z9Z9Z9Z9">
                Calle 1 # 2 - 3
              </a>
            </div>
            <br />
            <div>
              <iframe
                className="iframe"
                src="https://maps.google.com/?ll=23.135249,-82.359685&z=14&t=m&output=embed"
                height="300px"
                width="100%"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
