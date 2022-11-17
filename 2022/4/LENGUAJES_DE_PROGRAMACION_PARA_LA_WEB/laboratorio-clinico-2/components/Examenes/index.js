import Hematologia from './Hematologia';
import Hormonas from './Hormonas';
import Microbiologia from './Microbiologia';
import Microscopia from './Microscopia';
import Quimica from './Quimica';

export default function Examenes() {
  return (
    <section>
      <h3>estos son algunos de nuestros servicios</h3>
      <ul>
        <li>
          Exámenes de laboratorio clínico nivel I, II y III nivel de
          complejidad.
        </li>
        <li>Servicio de referencia.</li>
        <li>Servicio de domicilio.</li>
        <li>Entrega de resultados el mismo día vía Internet.</li>
      </ul>
      <div className={'services-grid p-6'}>
        <div className="card pl-6">
          <Hormonas />
        </div>
        <div className="card pl-6">
          <Quimica />
        </div>
        <div className="card pl-6">
          <Hematologia />
        </div>
        <div className="card pl-6">
          <Microbiologia />
        </div>
        <div className="card pl-6">
          <Microscopia />
        </div>
      </div>
    </section>
  );
}
