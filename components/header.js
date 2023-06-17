import Image from "next/image";
import Logo from "../public/logo.svg";
import Menu from "../public/Menu.png";
import Exit from "../public/exit.png";
import Link from "next/link";
import React, { useState, useEffect } from "react";
export default function Header() {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
  };

  const menuHandler = (e) => {
    console.log("press");
    setShow(true);
  };

  useEffect(() => {
    console.log("hola");
  }, [show]);
  return (
    <div style={{overflow: "hidden"}}>
      <div
        style={{
          visibility: show ? "visible" : "hidden",
          opacity: show ? "1" : "0",
          zIndex: "8",
        }}
      >
        <div className="card_menu cursor-pointer">
          <div className="close_menu">
            <Image
              onClick={closeHandler}
              className="exit"
              src={Exit.src}
              width={50}
              height={50}
              alt="exit"
            />
          </div>
          <div className="card-menu-links">
            <Link href="/conocenos">
              <div className="navbar_vertical">
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
      </div>

      <div className={`contenedor ${"header_style"} row`}>
        <Link href="/" className="col-md-3 col-sm-6 col-6">
          <Image
            className="logo_nav"
            src={Logo.src}
            width={300}
            height={100}
            alt="imagen logo"
          />
        </Link>
        <div className={"sandwich col-sm-6 col-6"}>
          <div>
            <Image
              onClick={menuHandler}
              className="snack cursor-pointer"
              src={Menu.src}
              width={50}
              height={50}
              alt="imagen logo"
            />
          </div>
        </div>
        <div className={"navbar-cust col-md-9 col-sm-12 col-12"}>
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
    </div>
  );
}
