import Head from 'next/head';
import { useEffect, useState } from 'react';
import CrearAgenda from '../../components/Formularios/CrearAgenda';
import EditarAgenda from '../../components/Formularios/EditarAgenda';

export default function Agenda() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState({});
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);

  const [shouldUpdate, setShouldUpdate] = useState(Date.now());

  const [token, setToken] = useState('');

  useEffect(() => {
    cookieStore.getAll().then((cookies) => {
      const tokenLaboratorio = cookies.find(
        (cookie) => cookie.name === 'tokenLaboratorio'
      );

      if (!tokenLaboratorio) {
        location.replace('/login');
      } else {
        setToken(tokenLaboratorio.value);
        setLoading(false);
      }

      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/json',
          token: tokenLaboratorio.value,
        },
      };

      fetch(
        'https://test-api-nomina.cuenti.com/get-laboratorio',
        requestOptions
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.result) {
            setData(data.data);
          } else {
            location.replace('/login');
          }
        })
        .catch(() => location.replace('/login'));
    });
  }, [shouldUpdate]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <Head>
        <title>Laboratorio Slayfer</title>
        <meta name="description" content="Laboratorio slayfer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <CrearAgenda
        setOpen={setOpenCreateModal}
        open={openCreateModal}
        token={token}
        setShouldUpdate={setShouldUpdate}
      />
      <EditarAgenda
        setOpen={setOpenEditModal}
        open={openEditModal}
        data={editData}
        token={token}
        setShouldUpdate={setShouldUpdate}
      />

      <main className="container">
        <section
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
              height: '100%',
            }}
          >
            <div>
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
                    gap: '1rem',
                  }}
                >
                  <h1>Agenda</h1>
                  <div>
                    <button
                      onClick={() => {
                        cookieStore.delete('tokenLaboratorio');
                        location.replace('/login');
                      }}
                      style={{
                        backgroundColor: '#f22',
                        color: '#fff',
                      }}
                    >
                      Cerrar sesion
                    </button>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(6, minmax(6.5rem, 15rem))',
                      gap: '1rem',
                    }}
                  >
                    <h1>Nombre</h1>
                    <h1>Correo</h1>
                    <h1>Celular</h1>
                    <h1>Servicio</h1>
                    <h1>Resultados</h1>
                    <h1>Acciones</h1>
                  </div>
                  {data.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(6, minmax(6.5rem, 15rem))',
                        gap: '1rem',
                      }}
                    >
                      <h1>{item.nombre}</h1>
                      <h1>{item.correo}</h1>
                      <h1>{item.celular}</h1>
                      <h1>{item.servicio}</h1>
                      <h1>{item.resultados}</h1>
                      <div>
                        <button
                          onClick={() => {
                            setEditData(item);
                            setOpenEditModal(true);
                          }}
                          style={{
                            backgroundColor: '#22f',
                            color: '#fff',
                            borderTopRightRadius: '0rem',
                            borderBottomRightRadius: '0rem',
                          }}
                        >
                          Editar
                        </button>
                        <button
                          onClick={() => {
                            const requestOptions = {
                              method: 'POST',
                              redirect: 'follow',
                              headers: {
                                'Content-Type': 'application/json',
                                token,
                              },
                              body: JSON.stringify({ id: item.id }),
                            };

                            fetch(
                              `https://test-api-nomina.cuenti.com/delete-laboratorio`,
                              requestOptions
                            )
                              .then((res) => res.json())
                              .then((data) => {
                                if (data.result) {
                                  setShouldUpdate(Date.now());
                                  alert('Agenda eliminada con exito');
                                } else {
                                  alert('Fallo al eliminar la agenda');
                                }
                              })
                              .catch(() =>
                                alert('Fallo al eliminar la agenda')
                              );
                          }}
                          style={{
                            backgroundColor: '#f22',
                            color: '#fff',
                            borderTopLeftRadius: '0rem',
                            borderBottomLeftRadius: '0rem',
                          }}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <br />
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <button
                      onClick={() => setOpenCreateModal(true)}
                      style={{
                        color: '#fff',
                        borderTopRightRadius: '0rem',
                        borderBottomRightRadius: '0rem',
                      }}
                    >
                      Agregar agenda
                    </button>
                    <button
                      onClick={() => {
                        const requestOptions = {
                          method: 'POST',
                          redirect: 'follow',
                          headers: {
                            'Content-Type': 'application/json',
                            token,
                          },
                        };

                        fetch(
                          `https://test-api-nomina.cuenti.com/clean-laboratorio`,
                          requestOptions
                        )
                          .then((res) => res.json())
                          .then((data) => {
                            if (data.result) {
                              setShouldUpdate(Date.now());
                              alert('Agenda eliminada con exito');
                            } else {
                              alert('Fallo al eliminar la agenda');
                            }
                          })
                          .catch(() => alert('Fallo al eliminar la agenda'));
                      }}
                      style={{
                        backgroundColor: '#f22',
                        color: '#fff',
                        borderTopLeftRadius: '0rem',
                        borderBottomLeftRadius: '0rem',
                      }}
                    >
                      Eliminar agenda
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
