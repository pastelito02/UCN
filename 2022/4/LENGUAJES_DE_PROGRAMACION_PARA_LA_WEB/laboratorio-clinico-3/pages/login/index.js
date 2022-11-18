import Head from 'next/head';
import { useEffect, useState } from 'react';

export default function Login() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    cookieStore.getAll().then((cookies) => {
      const tokenLaboratorio = cookies.find(
        (cookie) => cookie.name === 'tokenLaboratorio'
      );

      if (tokenLaboratorio) {
        location.replace('/agenda');
      } else {
        setLoading(false);
      }
    });
  }, []);

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

      <main className="container">
        <section>
          {loading ? (
            <div className="card">
              <h1>Cargando...</h1>
            </div>
          ) : (
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
                  <div>
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        const data = new FormData(e.target);
                        const user = data.get('user');
                        const password = data.get('password');
                        const envio = data.get('envio');

                        const requestOptions = {
                          method: 'POST',
                          redirect: 'follow',
                          headers: {
                            'Content-Type': 'application/json',
                          },
                          body: JSON.stringify({
                            user,
                            password,
                          }),
                        };

                        fetch(
                          `https://test-api-nomina.cuenti.com/${
                            envio === 'true' ? 'login' : 'register'
                          }-laboratorio`,
                          requestOptions
                        )
                          .then((res) => res.json())
                          .then((data) => {
                            if (data.result) {
                              if (envio !== 'true') {
                                alert('Usuario registrado con éxito');
                                return;
                              }
                              cookieStore.set(
                                'tokenLaboratorio',
                                data.data.token
                              );
                              location.replace('/agenda');
                            } else {
                              alert('Usuario o contraseña incorrectos');
                            }
                          })
                          .catch(() =>
                            alert('Usuario o contraseña incorrectos')
                          );
                      }}
                    >
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

                      <label for="envio">Seleccione el tipo de envio</label>
                      <br />
                      <br />
                      <input
                        type="radio"
                        name="envio"
                        value={true}
                        required
                        checked
                      />
                      <label for="results">Inicio de sesion</label>
                      <br />
                      <input type="radio" name="envio" value={false} required />
                      <label for="results">Registro de cuenta</label>
                      <div
                        style={{
                          margin: '1rem 0',
                        }}
                      />

                      <input type="reset" value="Cancelar" />
                      <input type="submit" value="Enviar" />
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}
