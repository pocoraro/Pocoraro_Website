import Image from "next/image";
import logo from "../public/logo.svg";
import Link from "next/link";
import styles from "../styles/header.module.css";
export default function Header() {
  return (
    <header>
      <div className={`contenedor ${"header_style"}`}>
        <Image src={logo.src} width={300} height={100} alt="imagen logo" />
        <div className={"navbar"}>
          <Link href="/conocenos">
            <div>
              <h2 className={"hl2"}>Conócenos</h2>
            </div>
          </Link>
          <Link href="/servicios">
            <div>
              <h2 className={"hl2"}>Nuestros servicios</h2>
            </div>
          </Link>
          <Link href="/equipo">
            <div>
              <h2 className={"hl2"}>Equipo pocoraro</h2>
            </div>
          </Link>
          <Link href="/contacto">
            <div>
              <h2 className={"hl2"}>Contacto</h2>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
