import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import algorithm from "../assets/library/Algorithm";
import UMLS from "../assets/components/UML";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

export default function Home() {
  const [text_data, set_text_data] = useState("");
  useEffect(() => {});
  const Editor = dynamic(() => import("../assets/components/Editor.jsx"), {
    ssr: false,
  });
  return (
    <div className={styles.container}>
      <Head>
        <title>UML Generator</title>
        <meta
          name="description"
          content="Convert your C++ code into UML Diagrams!"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header>
        <h1>UML Generator</h1>
      </header>
      <main className={styles.main}>
        {text_data ? <UMLS data={text_data} /> : null}
        <h2>Paste your header code here:</h2>
        <div id="editor" style={{ height: "20vw", width: "20vw" }}></div>
        <p>Make sure it compiles first!</p>
        <Editor set_text_data={set_text_data} />
      </main>
    </div>
  );
}
