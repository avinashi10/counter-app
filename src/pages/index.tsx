// LIBRARY IMPORTS
import Head from "next/head";
import React, { useEffect, useState, Suspense } from "react";

// LOCAL IMPORTS
import Counter from '../components/Counter.jsx';
import CounterAmountForm from '../components/CounterAmountForm.jsx';
import { calculateSumCounters } from '../utils/calculateTotal.js';

export default function Home() {
  // SET STATES
  const [counterQuantity, setCounterQuantity] = useState(1);
  const [countersCount, setCountersCount] = useState([]);

  let sumAllCounters = calculateSumCounters(countersCount);

  // HOOKS
  useEffect(() => {
    const storedCounterQuantity = localStorage.getItem('counterQuantity');
    const storedCountersCount = localStorage.getItem('countersCount');
    console.log('stored count array: ', storedCountersCount);

    if (storedCounterQuantity) {
      setCounterQuantity(parseInt(storedCounterQuantity));
    } else {
      localStorage.setItem('counterQuantity', '1');
    }

    if (storedCountersCount) {
      setCountersCount(JSON.parse(storedCountersCount));
    } else {
      const defaultCountersCount = Array.from({ length: counterQuantity }, () => ({
        count: 0,
        incrementValue: 1
      }));
      setCountersCount(defaultCountersCount);
      localStorage.setItem('countersCount', JSON.stringify(defaultCountersCount));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('countersCount', JSON.stringify(countersCount));
  }, [countersCount]);

  useEffect(() => {
    setCountersCount(Array(counterQuantity).fill(0));
    // localStorage.setItem('countersCount', JSON.stringify(Array(counterQuantity).fill(0)))
    // localStorage.setItem('counterQuantity', counterQuantity.toString());
  }, [counterQuantity]);

  // EVENT HANDLERS
  const handleCountersUpdate = (index, newCount, newIncrementValue) => {
    setCountersCount((prevState) => {
      const updatedCounters = prevState.map((counter, i) => {
        if (i === index) {
          return {
            ...counter,
            count: newCount !== undefined ? newCount : counter.count,
            incrementValue: newIncrementValue !== undefined ? newIncrementValue : counter.incrementValue,
          };
        }
        return counter;
      });
      localStorage.setItem('countersCount', JSON.stringify(updatedCounters));
      return updatedCounters;
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
          <Counter
            key={index}
            count={countersCount[index]?.count || 0}
            incrementValue={countersCount[index]?.incrementValue || 1}
            setCount={(newCount) => handleCountersUpdate(index, newCount)}
            setIncrementValue={(newIncrementValue) => handleCountersUpdate(index, undefined, newIncrementValue)}
          />
          ))}
          <p className="text-3xl text-white">Grand Total: {sumAllCounters}!</p>
        </React.Suspense>
      </main>
    </>
  );
}
