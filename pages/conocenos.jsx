import Image from 'next/image'
import React from 'react';
import styles from '../styles/conocenos.module.css'
import localFont from 'next/font/local'
import Header from '@/components/header';

  
// Font files can be colocated inside of `app`
const montse = localFont({
  src: [{path:'./fonts/Montserrat-Medium.ttf',weight:'500'},{path:'./fonts/Montserrat-SemiBold.ttf',weight:'600'},{path:'./fonts/Montserrat-Bold.ttf',weight:'700'}],
  display: 'swap',
  variable: '--font-montse'
})
export default function conocenos() {
  const [width, setWidth] = React.useState(0.0);
  const [bannerRoute,setBanner] = React.useState("/banners/web.svg");

  const handleResize = ()=>{ 
    console.log(width);
    if(width<601){
      setBanner("/banners/phone.svg")
    }else if(width<960){
      setBanner("/banners/tablet.svg")
    }else{
      setBanner("/banners/web.svg")
    }
    return setWidth(window.innerWidth)};
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);
  return (
    <main className={montse.className}>
     <Header/>
     <Image className={styles.banner}
     src={bannerRoute}
     width={5000}
     height={5000}
     alt='banner'
     /> 
     <div className={styles.conocenos_container}>
      <Image
      className={styles.image}
      src='estrella_feliz.svg'
      alt='estrella_feli'
      height={300}
      width={300}
      priority
      />
      <p className={styles.texto}>
        <span className={styles.textinterno}>
        nos apasiona
        </span>
         {' '}crear, transformar, hacer y deshacer.{' '}
        <span className={styles.textinterno}>
        <span className={styles.span_stack}>
          
          Siempre  
          <img src='/rayon_conocenos_simpre.svg' width={1000} className={styles.span_img_underline}></img>
        </span>
           buscando algo especial, extraordinario, honesto, efectivo, sin temerle <span className={styles.span_stack}>
          
          nunca  
          <img src='/rayon_conocenos_nunca.svg' width={1000} className={styles.span_img_underline}></img>
        </span> a lo {`(un)`}
        </span>
        <span className={`${styles.span_stack } ${styles.textinterno}`}>
          
          pocoraro.
          <img src='/circulo_conocenos.svg' width={1000} className={styles.span_img_circulo}></img>
        </span>
      </p>
     </div>
    </main>
  )
}
