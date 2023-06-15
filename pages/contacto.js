import Image from "next/image";
import localFont from "next/font/local";
import styles from "../styles/contacto.module.css";
import Header from "@/components/header";
// Font files can be colocated inside of `app`
const montse = localFont({
  src: [
    { path: "./fonts/Montserrat-Medium.ttf", weight: "500" },
    { path: "./fonts/Montserrat-SemiBold.ttf", weight: "600" },
    { path: "./fonts/Montserrat-Bold.ttf", weight: "700" },
  ],
  display: "swap",
  variable: "--font-montse",
});
const scratchy = localFont({
  src: "./fonts/Scratchy.ttf",
  weight: "800",
  variable: "--font-scratchy",
});
export default function Contacto() {
  return (
    <main className={montse.className}>
      <Header />
      <div className={`${styles.contenido} row`}>
        <div className={`${styles.title} col-md-8 col-sm-12`}>
          <p>
            <span className={styles.stack}>
              <span className={styles.nuestros}>
                {" "}
                Nos <br />
              </span>
              <span>
                ENCANTARÍA
                <br />
              </span>
              <span className={styles.servicios}>
                {" "}
                <span>SABER MÁS</span>
                <Image
                  width={600}
                  height={500}
                  alt="rayon"
                  className={styles.img}
                  src="/rayon_contacto_saber.svg"
                />{" "}
                <br />{" "}
              </span>
            </span>
            <span>
              DE TI
              <br />
            </span>
          </p>
        </div>
        <form className={`${styles.formulario} col-md-4 col-sm-12`}>
            <div className="row">
            <div className="col-md-6">
                <p>
                    nombre
                </p>
            <input type="text" placeholder="nombre" className={`${styles.text_input} `} />
            </div>
            <div className="col-md-6">
                <p>
                    teléfono/celular
                </p>
            <input type="text" placeholder="telefono" className={`${styles.text_input} col-md-6`} />
            </div>
            </div>
            
            <div className={styles.title_input}>
                <p>
                    correo electrónico
                </p>
            <input type="text" placeholder="correo" className={`${styles.text_input} col-12`} />
            </div>
            <div className={styles.title_input}>
                <p>
                    mensaje
                </p>
            <textarea type="text"  className={`${styles.text_input} col-12`} />
            </div>
            <div className="col-12" style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
            <input type="submit" value="enviar" className={`${styles.submit} `}></input>
            </div> </form>
      </div>
    </main>
  );
}
