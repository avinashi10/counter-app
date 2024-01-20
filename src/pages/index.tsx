// LIBRARY IMPORTS
import Head from "next/head";
import React, { useState, Suspense } from "react";

// LOCAL IMPORTS
import Counter from '../components/Counter.jsx';
import CounterAmountForm from '../components/CounterAmountForm.jsx';

export default function Home() {
  // SET STATES
  const [counterQuantity, setCounterQuantity] = useState(2);

  return (
    <>
      <Head>
        <title>Getting Started</title>
        <meta name="description" content="Getting started" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <React.Suspense fallback="Loading...">
          <CounterAmountForm setCounterQuantity={setCounterQuantity} />
          {Array.from({ length: counterQuantity }, (_, index) => (
            <Counter key={index} />
           ))}
        </React.Suspense>
      </main>
    </>
  );
}
