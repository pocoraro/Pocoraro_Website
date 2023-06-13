import {Html, Head, Main, NextScript} from 'next/document'
import Header from '@/components/header'
import Footer from "@/components/footer"
export default function Document() {
    return(
        <Html>
            <Head>
            <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
                <Header/>

            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
            <Footer>
                
            </Footer>
        </Html>
    )
}