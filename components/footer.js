import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="columnas_footer">
          <div className="columna_footer">
            <h1>Redes Sociales</h1>
            <a href="https://www.instagram.com/pocoraro.estudio/">
              <div className="red_social">
                <Image src="/instagram.png" width={30} height={30} priority />
                <h3>pocoraro.estudio</h3>
              </div>
            </a>
            <a href="https://www.pinterest.com.mx/pocoraroestuido/">
              <div className="red_social">
                <Image src="/pinterest.png" width={30} height={30} priority />
                <h3>pocoraroestudio</h3>
              </div>
            </a>
          </div>
          <div className="columna_footer">
            <h1>Contacto</h1>
            <h3>pocoraro.estudio@gmail.com</h3>
            <h3>4776716277</h3>
          </div>
        </div>
        <h1>
            Aviso de Privacidad
        </h1>
      </div>
    </footer>
  );
}
