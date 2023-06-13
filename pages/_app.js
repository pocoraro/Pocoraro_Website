import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
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
// const scratchy = localFont({
//   src: './fonts/Scratchy.ttf',
//   weight: '800',
//   variable: '--font-scratchy'
// })

export default function RootLayout({Component, children }) {
  return (
        <Component className={`${montse.className} ${montse.variable} ${scratchy.variable}`} {...children}/>
  )
}
