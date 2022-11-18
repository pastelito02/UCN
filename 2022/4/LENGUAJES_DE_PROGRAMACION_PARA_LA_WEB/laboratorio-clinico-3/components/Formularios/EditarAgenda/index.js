import Head from 'next/head';

export default function EditarAgenda({
  setOpen,
  open,
  data,
  token,
  setShouldUpdate,
}) {
  const { nombre, correo, celular, servicio, resultados, id } = data;

  const toggle = () => {
    setOpen(!open);
  };

  const clickOutside = (e) => {
    if (e.target.className.includes('modal')) {
      toggle();
    }
  };

  const editarAgenda = (e) => {
    e.preventDefault();

    const newData = new FormData(e.target);

    const name = newData.get('name');
    const mail = newData.get('mail');
    const phone = newData.get('phone');
    const service = newData.get('service');
    const results = newData.get('results');

    const agenda = {
      name,
      mail,
      phone,
      service,
      results,
      id,
    };

    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        token,
      },
      body: JSON.stringify(agenda),
    };

    fetch(`https://test-api-nomina.cuenti.com/edit-laboratorio`, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.result) {
          setShouldUpdate(Date.now());
          alert('Agenda editada con exito');
          toggle();
        } else {
          alert('Fallo al editar la agenda');
        }
      })
      .catch(() => alert('Fallo al editar la agenda'));
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
                <form onSubmit={editarAgenda}>
                  <label for="name">Nombre del paciente</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Ingresa tu nombre..."
                    defaultValue={nombre}
                    required
                  />

                  <label for="mail">Correo electronico</label>
                  <input
                    type="text"
                    id="mail"
                    name="mail"
                    placeholder="Ingresa tu e-mail..."
                    defaultValue={correo}
                    required
                  />

                  <label for="phone">Celular</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    placeholder="Ingresa tu celular..."
                    defaultValue={celular}
                    required
                  />

                  <label for="service">Servicio</label>
                  <select
                    id="service"
                    name="service"
                    defaultValue={servicio}
                    required
                  >
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
                    defaultChecked={resultados === 'whatsapp'}
                    required
                  />
                  <label for="results">WhatsApp</label>
                  <br />
                  <input
                    type="radio"
                    name="results"
                    value="fisico"
                    defaultChecked={resultados === 'fisico'}
                    required
                  />
                  <label for="results">Fisico</label>
                  <div
                    style={{
                      margin: '1rem 0',
                    }}
                  />

                  <input onClick={toggle} type="reset" value="Cancelar" />
                  <input type="submit" value="Enviar" />
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
