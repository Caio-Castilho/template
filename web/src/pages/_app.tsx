import { AppProps } from "next/app";
import Head from "next/head";
import { Widget } from "../components/Widget";
import "../global.css";
import "../styles/styles.scss";


export default function MyApp({Component, pageProps} : AppProps<any>){
    return (
    <>
        <Head>
            <meta name="theme-color" content="#FFFFFF"/>
            <meta name="description" content="Informaçoes profissionais" />
            <link rel="shortcut icon" href="/imagem/c.png" />
            <title>☺☻☺☻☺☻☺☻☺☻☺☻☺☻</title>
        </Head>
            
        <Component {...pageProps}/> 
            <Widget/>
    </>
    )
}