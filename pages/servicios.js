import Image from "next/image";
import localFont from "next/font/local";
import styles from "../styles/servicios.module.css"
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
export default function Servicios() {
  return (
    <main className={montse.className}>
      <div className={styles.title}>
        <p>
          <span className={styles.stack}>
            <span className={styles.nuestros}>
              {" "}
              NUESTROS <br />
            </span>
            <span className={styles.servicios}> SERVICIOS </span>
            <img src="/rayon_servicios_servicios.svg" />
          </span>
        </p>
      </div>
      <div className={styles.servicios_container}>
        <p className={styles.texto}>
          <span className={styles.textinterno}>
            Somos in equipo{" "}
            <span className={styles.span_stack}>
              apasionado
              <img
                src="/rayon_servicios_apasionado.svg"
                width={1000}
                className={styles.span_img_underline}
              ></img>
            </span>{" "}
            por el diseño.
          </span>{" "}
          Branding, fotografía creación de contenido, ilustracion y animación.{" "}
          <span className={styles.textinterno}>
            Son apenas{" "}
            <span
              className={`${scratchy.className} ${styles.span_stack} ${styles.scratchy_text}`}
            >
              algunas{" "}
              <img
                src="/circulo_servicios.svg"
                width={1000}
                className={styles.span_img_circulo}
              ></img>
            </span>
            de nuestras áreas fuertes.
          </span>
        </p>
        <div className={styles.seccion_servicio}>
          <Image 
          className={styles.image_servicio}
            src='/chedddar.jpg'
            alt="chedddar"
            width={600}
            height={1920}
          />
          <div className={styles.text_section}>
            <div className={styles.title_section}>
              <span className={styles.span_stack}>Chadddar Co.
              <img src="/rayon_servicios_servicios.svg" className={styles.span_img_underline}/>

              </span>
              <h2>Fotografía</h2>
              
            </div>
            <div className={styles.contenido_seccion}>
                Se realizó una sesión de fotografía de productos, con el objetivo
                de capturar
                imágenes atractivas y de alta calidad de sus productos para su uso en materiales de parketing y publicidad.
              </div>
          </div>
        </div>
        <div className={styles.seccion_servicio}>
        <div className={`${styles.text_section} ${styles.text_section_left}`}>
            <div className={styles.title_section}>
              <span className={styles.span_stack}>Chadddar Co.
              <img src="/rayon_servicios_servicios.svg" className={styles.span_img_underline}/>

              </span>
              <h2>Fotografía</h2>
              
            </div>
            <div className={styles.contenido_seccion}>
                Se realizó una sesión de fotografía de productos, con el objetivo
                de capturar
                imágenes atractivas y de alta calidad de sus productos para su uso en materiales de parketing y publicidad.
              </div>
          </div>
          <Image 
          className={styles.image_servicio}
            src='/moon_river.jpg'
            alt="moon"
            width={600}
            height={1920}
          />
          
        </div>
        <div className={styles.seccion_servicio}>
          <Image 
          className={styles.image_servicio}
            src='/ateli.jpg'
            alt="ateli"
            width={600}
            height={1920}
          />
          <div className={styles.text_section}>
            <div className={styles.title_section}>
              <span className={styles.span_stack}>Atelí Bakery.
              <img src="/rayon_servicios_servicios.svg" className={styles.span_img_underline}/>

              </span>
              <h2>Branding</h2>
              
            </div>
            <div className={styles.contenido_seccion}>
                Se desarrolló un logotipo que refleja la esencia y personalidad,
                además de una apleta de colores y tipografía adecuadas para transmitir la reposteria casera.
              </div>
          </div>
        </div>
      </div>
    </main>
  );
}
