import Image from 'next/image'
import styles from '../styles/index.module.css'
import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const montse = localFont({
  src: [{path:'./fonts/Montserrat-Medium.ttf',weight:'500'},{path:'./fonts/Montserrat-SemiBold.ttf',weight:'600'},{path:'./fonts/Montserrat-Bold.ttf',weight:'700'}],
  display: 'swap',
  variable: '--font-montse'
})
const scratchy = localFont({
  src: './fonts/Scratchy.ttf',
  weight: '800',
  variable: '--font-scratchy'
})
export default function index   () {
  return (
    <main>
      <div className={styles.contenedor_estrella}>
       <Image
              src="/green_star.svg"
              alt="star Logo"
              className={styles.image}
              width={100}
              height={24}
              priority
              color='#F4E6D2'
            />
        <div className={`${styles.texto} ${montse.variable}`}>
        <h1 className={styles.h1}>
        SOMOS
        </h1>
        <Image 
          src="/logo_blanco.png"
          alt="logo"
          className={`${styles.logo} `}
          width={2000}
          height={2000}
          priority
        />
        <h1>
          ESTUDIO
        </h1>
        </div>
        <h1>

        </h1>
      </div>
    </main>
  )
}
