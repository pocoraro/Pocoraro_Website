import { Html, Head, Main, NextScript } from "next/document";
// import Header from '../components/header'
import React from 'react';
import HeaderV2 from "../components/headerV2";
import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Document() {
  return (
    <Html>
      <Head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"/>
        {/* <Header/> */}
        {/* <HeaderV2 /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
      </body>
      <Footer></Footer>
    </Html>
  );
}
