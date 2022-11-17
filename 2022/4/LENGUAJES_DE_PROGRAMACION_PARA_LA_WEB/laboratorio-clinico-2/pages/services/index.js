import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Services() {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const clickOutside = (e) => {
    if (e.target.className.includes('modal')) {
      toggle();
    }
  };

  return (
    <div>
      <Head>
        <title>Laboratorio Slayfer</title>
        <meta name="description" content="Laboratorio slayfer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {open && (
        <div
          className="modal"
          onClick={clickOutside}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              maxWidth: 'fit-content',
              maxHeight: 'fit-content',
            }}
          >
            <div
              style={{
                backgroundColor: '#f5f5f5',
                padding: '1rem',
                borderRadius: '1rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1rem 0',
                }}
              >
                <h2
                  style={{
                    color: '#000',
                    margin: '0',
                  }}
                >
                  Agenda con nosotros
                </h2>
                <button
                  type="button"
                  onClick={toggle}
                  style={{
                    borderRadius: '10rem',
                    backgroundColor: '#ff3322',
                    color: 'white',
                    width: '2rem',
                    height: '2rem',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  X
                </button>
              </div>
              <div
                style={{
                  border: '1px solid #000000',
                  margin: '0rem 0rem 1rem 0rem',
                }}
              />
              <div>
                <form action="/api/form" method="post" target="_blank">
                  <label for="name">Nombre del paciente</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingresa tu nombre..."
                    required
                  />

                  <label for="mail">Correo electronico</label>
                  <input
                    type="text"
                    id="mail"
                    name="mail"
                    placeholder="Ingresa tu e-mail..."
                    required
                  />

                  <label for="phone">Celular</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Ingresa tu celular..."
                    required
                  />

                  <label for="service">Servicio</label>
                  <select id="service" name="service" required>
                    <option value="laboratorio">
                      Toma de laboratorio clinico
                    </option>
                    <option value="citologia">Citologia</option>
                    <option value="covid">Pruebas COVID</option>
                    <option value="especializado">
                      Examenes especializados
                    </option>
                  </select>

                  <label for="results">Entrega de resultados</label>
                  <br />
                  <br />
                  <input
                    type="radio"
                    name="results"
                    value="whatsapp"
                    required
                  />
                  <label for="results">WhatsApp</label>
                  <br />
                  <input type="radio" name="results" value="fisico" required />
                  <label for="results">Fisico</label>
                  <div
                    style={{
                      margin: '1rem 0',
                    }}
                  />

                  <label for="user">Usuario</label>
                  <input
                    type="text"
                    id="user"
                    name="user"
                    placeholder="Ingresa tu usuario..."
                    required
                  />

                  <label for="password">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Ingresa tu contraseña..."
                    required
                  />

                  <input onClick={toggle} type="reset" value="Cancelar" />
                  <input type="submit" value="Enviar" />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      <main>
        <section className="grid">
          <div className="card">
            <h1>Toma de laboratorios clinicos</h1>
            <p>
              Si desea agendar una cita para la toma de laboratorios clinicos
              puede hacerlo dando click en el boton de abajo.
            </p>
            <div className="agenda">
              <div>
                <button type="button" onClick={toggle}>
                  Agendar cita
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <h1>Citologia</h1>
            <p>
              Si desea agendar una cita para citoologia puede hacerlo dando
              click en el boton que encontrara abajo.
            </p>
            <div className="agenda">
              <div>
                <button type="button" onClick={toggle}>
                  Agendar cita
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <h1>Pruebas COVID</h1>
            <p>
              Si tiene sintomas de COVID-19 y desea hacerse la prueba puede
              agendar una cita dando click en el boton de abajo.
            </p>
            <div className="agenda">
              <div>
                <button type="button" onClick={toggle}>
                  Agendar cita
                </button>
              </div>
            </div>
          </div>
          <div className="card">
            <h1>Examenes especializados</h1>
            <p>
              Si tiene algun examen especializado que desea hacerse puede
              agendar una cita dando click en el boton de abajo.
            </p>
            <div className="agenda">
              <div>
                <button type="button" onClick={toggle}>
                  Agendar cita
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
