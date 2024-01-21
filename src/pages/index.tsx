// LIBRARY IMPORTS
import Head from "next/head";
import React, { useEffect, useState, Suspense } from "react";

// LOCAL IMPORTS
import Counter from '../components/Counter.jsx';
import CounterAmountForm from '../components/CounterAmountForm.jsx';
import { calculateSumCounters } from '../utils/calculateTotal.js';

export default function Home() {
  // SET STATES
  const [counterQuantity, setCounterQuantity] = useState(localStorage.getItem('counterQuantity') || 1);
  const [countersCount, setCountersCount] = useState(JSON.parse(localStorage.getItem('countersCount')) || Array(counterQuantity).fill(0));

  let sumAllCounters = calculateSumCounters(countersCount);

  // HOOKS
  useEffect(() => {
    setCountersCount(Array(counterQuantity).fill(0));
    localStorage.setItem('countersCount', JSON.stringify(Array(counterQuantity).fill(0)))
  }, [counterQuantity]);

  // EVENT HANDLERS
  const handleCountersUpdate = (index, newCount) => {
    setCountersCount((prevState) => {
      const updatedCounts = prevState.map((count, i) => (i === index ? newCount : count));
      localStorage.setItem('countersCount', JSON.stringify(updatedCounts));
      return updatedCounts;
    });
  };

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
          <Counter key={index} count={countersCount[index]} setCount={(newCount) => handleCountersUpdate(index, newCount)} />
          ))}
          <p className="text-3xl text-white">Grand Total: {sumAllCounters}!</p>
        </React.Suspense>
      </main>
    </>
  );
}
