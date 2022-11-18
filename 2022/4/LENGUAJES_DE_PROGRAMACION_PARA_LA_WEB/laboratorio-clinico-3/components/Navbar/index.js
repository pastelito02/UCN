import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <navbar>
      <div className="logo-section">
        <Link href="/">
          <button>
            <Image src="/img/logo.png" alt="logo" width={40} height={40} />
            <h2>Laboratorio clinico Slayfer</h2>
          </button>
        </Link>
      </div>
      <ul>
        <Link href="/">
          <li>
            <button>Inicio</button>
          </li>
        </Link>
        <Link href="/about">
          <li>
            <button>Quienes somos</button>
          </li>
        </Link>
        <Link href="/services">
          <li>
            <button>Servicios</button>
          </li>
        </Link>
        <Link href="/contact">
          <li>
            <button>Contactenos</button>
          </li>
        </Link>
        <Link href="/agenda">
          <li>
            <button>Agenda</button>
          </li>
        </Link>
      </ul>
    </navbar>
  );
}
