import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  // check ci
  return (
    <div className={styles.container}>
      <Head>
        <title>Minotour</title>
      </Head>
      <main>
        <div className="text-primary">Minotaur</div>
      </main>
    </div>
  );
}
