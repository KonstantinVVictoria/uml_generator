import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import algorithm from "../assets/library/Algorithm";
import UMLS from "../assets/components/UML";
import { useState } from "react";
export default function Home() {
  const [text_data, set_text_data] = useState("");
  return (
    <div className={styles.container}>
      <Head>
        <title>UML Generator</title>
        <meta
          name="description"
          content="Convert your C++ code into UML Diagrams!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>UML Generator</h1>
      </header>
      <main className={styles.main}>
        {text_data ? <UMLS data={text_data} /> : null}
        <h2>Paste your header code here:</h2>
        <textarea
          id="text"
          style={{
            borderRadius: "20px 0px 0px 20px",
            overflow: "auto",
            color: " #FFFFFF",
            background: "#232323",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            height: "15vw",
            width: "15vw",
          }}
        />
        <p>Make sure it compiles first!</p>
        <button
          id="generate"
          style={{
            borderRadius: "50px",
            border: "1px solid black",
            margin: "10px",
            fontSize: "1.2rem",
            userSelect: "none",
            cursor: "pointer",
          }}
          onClick={async () => {
            const text = document.getElementById("text");
            let formatted_text = await fetch("/api/format", {
              method: "POST",
              body: text.value,
            }).then((response) => {
              return response.json();
            });
            set_text_data(algorithm(formatted_text.data));
          }}
        >
          Generate
        </button>
      </main>
    </div>
  );
}
