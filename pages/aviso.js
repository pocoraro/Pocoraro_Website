import Image from "next/image";
import localFont from "next/font/local";
import styles from "../styles/aviso.module.css"
import Header from "@/components/header";
// Font files can be colocated inside of `app`
const montse = localFont({
  src: [{path:'./fonts/Montserrat-Medium.ttf',weight:'500'},{path:'./fonts/Montserrat-SemiBold.ttf',weight:'600'},{path:'./fonts/Montserrat-Bold.ttf',weight:'700'}],
  display: 'swap',
  variable: '--font-montse'
})
const scratchy = localFont({
  src: "./fonts/Scratchy.ttf",
  weight: "800",
  variable: "--font-scratchy",
});
export default function Aviso() {
  return (
    <main className={montse.className}>
      <Header/>
      <div className={styles.title}>
        <p>
          <span className={styles.stack}>
            <span className={styles.nuestros}>
              {" "}
              AVISO DE <br />
            </span>
            <span className={styles.servicios}> PRIVACIDAD </span>
          </span>
        </p>
      </div>
      <div className={styles.servicios_container}>
      <p>En cumplimiento con lo dispuesto por la Ley de Protecci&oacute;n de Datos Personales, se informa a los usuarios que los datos personales proporcionados ser&aacute;n incorporados a un archivo automatizado, el cual ser&aacute; utilizado con la finalidad de estar en contacto con la persona.</p>

<p>La persona titular de los datos podr&aacute; ejercer sus derechos de acceso, rectificaci&oacute;n, cancelaci&oacute;n y oposici&oacute;n enviando un correo electr&oacute;nico a pocoraro.estudio@gmail.com indicando el motivo de su solicitud.</p>

<p>Se informa que los datos personales proporcionados no ser&aacute;n cedidos a terceros sin el consentimiento expreso de la persona titular de los mismos, salvo en aquellos casos en que exista una obligaci&oacute;n legal para hacerlo.</p>

<p>La utilizaci&oacute;n del sitio web implica la aceptaci&oacute;n de este Aviso de Privacidad. Si no est&aacute; de acuerdo con el mismo, por favor abst&eacute;ngase de proporcionar sus datos personales a trav&eacute;s del sitio web.</p>

<p>Atentamente, Pocoraro</p>
      </div>
    </main>
  );
}
