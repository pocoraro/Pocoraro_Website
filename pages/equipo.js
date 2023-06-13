import Image from "next/image";
import styles from "../styles/equipo.module.css";
import localFont from "next/font/local";
const scratchy = localFont({
  src: "./fonts/Scratchy.ttf",
  weight: "800",
  variable: "--font-scratchy",
});

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
export default function equipo() {
  return (
    <main className={montse.className}>
      
      <div className={styles.title}>
      
        <div className={`${styles.nuestros} `}>
        <div className={`${styles.date} ${scratchy.className}`}>
        <div className={styles.date_text}>2023</div>
        <img
                src="/circulo_equipo_fecha.png"
                width={1000}
                className={styles.span_img_underline}
              ></img>
      </div>
          EQUIPO
          <Image
            className={styles.estrella}
            alt="estrella"
            src="/equipo_estrella.png"
            height={50}
            width={50}
          /><div className={styles.date_symetric}>
          2023
        </div>
        </div>
        
        <Image className={styles.Image} src="logo.svg" alt="logo" width={400} height={400} />
      </div>
      <div className={styles.equipo_container}>
        <div className={styles.pestana}></div>
        <div
        className={`${styles.contenido} row`}>
        {/* Informacion de Alexandra */}
        <div className={`${"col-md-6 col-sm-12"} ${styles.info}`}>
          <Image
          src='/equipo/alexa.jpg'
          alt="alexa"
          width={200}
          height={600}
          />
          <h2 className={`${styles.textName} ${styles.normalText} `}>Alexandra Cuevas</h2>
          <p className={styles.normalText}><span className={styles.bold}>Especialidad:</span>{' '}Photoshop</p>
          <p className={`${styles.contacto} ${styles.normalText}`}>
            <span className={styles.bold}>Contacto:</span><br/>
            Instagram: @alexandra.c.pardo<br/>
            gmail: alexandra.c.pardo@gmail.com<br/>
            número: +54 443 469 9847
          </p>
        </div>
        {/* informacion de ruben Vargas  */}
        <div className={`${"col-md-6 col-sm-12"} ${styles.info}`}>
          <Image
          src='/equipo/ruben.jpg'
          alt="ruben"
          width={200}
          height={600}
          />
            <h2 className={`${styles.textName} ${styles.normalText} `}>Ruben Vargas</h2>
          <p className={styles.normalText}><span className={styles.bold}>Especialidad:</span>{' '}Fotografía</p>
          <p className={`${styles.contacto} ${styles.normalText}`}>
            <span className={styles.bold}>Contacto:</span><br/>
            Instagram: @ruben.sagrav<br/>
            gmail: ruben.sagrav@gmail.com<br/>
            número: +54 477 671 6277
          </p>
        </div>
        {/* informacion de sofayo */}
        <div className={`${"col-md-6 col-sm-12"} ${styles.info}`}>
          <Image
          src='/equipo/sofia.jpg'
          alt="sofia"
          width={200}
          height={600}
          />
          <h2 className={`${styles.textName} ${styles.normalText} `}>Sofayo</h2>
          <p className={styles.normalText}><span className={styles.bold}>Especialidad:</span>{' '}Ilustración</p>
          <p className={`${styles.contacto} ${styles.normalText}`}>
            <span className={styles.bold}>Contacto:</span><br/>
            Instagram: @uxusofiauxu<br/>
            gmail: sofia.calvilloxs@gmail.com<br/>
            número: +54 477 112 8897
          </p>
        </div>
        {/* informacion de Melissa  */}
        <div className={`${"col-md-6 col-sm-12"} ${styles.info}`}>
          <Image
          src='/equipo/melisa.jpg'
          alt="alexa"
          width={200}
          height={600}
          />
          <h2 className={`${styles.textName} ${styles.normalText} `}>Melissanthophilia</h2>
          <p className={styles.normalText}><span className={styles.bold}>Especialidad:</span>{' '}Ilustración</p>
          <p className={`${styles.contacto} ${styles.normalText}`}>
            <span className={styles.bold}>Contacto:</span><br/>
            Instagram: @melissanthophilia<br/>
            gmail: melissapt2@gmail.com<br/>
            número: +54 477 845 4622
          </p>
        </div>
               {/*información debora  */}
        <div className={`${"col-12"} ${styles.info}`}>
          <Image
          src='/equipo/debora.jpg'
          alt="alexa"
          width={200}
          height={600}
          />
          <h2 className={`${styles.textName} ${styles.normalText} `}>Débora González</h2>
          <p className={styles.normalText}><span className={styles.bold}>Especialidad:</span>{' '}Ilustración</p>
          <p className={`${styles.contacto} ${styles.normalText}`}>
            <span className={styles.bold}>Contacto:</span><br/>
            Instagram: @deborag2000<br/>
            gmail: deborag2000@gmail.com<br/>
            número: +54 477 724 8701
          </p>
        </div>

        
        
        </div>
      </div>
    </main>
  );
}
