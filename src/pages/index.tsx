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
  // State for the details of each counter. Each counter has 'count' and 'incrementValue' values.
  const [counterValues, setCounterValues] = useState([]);
  const [sumAllCounters, setSumAllCounters] = useState(0);

  // HOOKS
  // useEffect to initialize state from localStorage when the component mounts.
  useEffect(() => {
    // Retrieve data from localStorage.
    const storedCounterQuantity = localStorage.getItem('counterQuantity');
    const storedCounterValues = localStorage.getItem('counterValues');
    const storedSumAll = localStorage.getItem('sumAllCounters');
    console.log('stored count array: ', storedCounterValues);

    // If values are found in localStorage, update the respective states. Otherwise, set defaults in localStorage.
    if (storedCounterQuantity) {
      setCounterQuantity(parseInt(storedCounterQuantity));
    } else {
      localStorage.setItem('counterQuantity', '1');
    }

    if (storedCounterValues) {
      setCounterValues(JSON.parse(storedCounterValues));
    } else {
      const defaultCounterValues = Array.from({ length: counterQuantity }, () => ({
        count: 0,
        incrementValue: 1
      }));
      setCounterValues(defaultCounterValues);
    }

    if (storedSumAll) {
      setSumAllCounters(storedSumAll);
    } else {
      localStorage.setItem('sumAllCounters', (sumAllCounters(calculateSumCounters(counterValues))).toString);
    }
  }, []);

  // useEffect to update the number of counters when 'counterQuantity' changes to ensure that the number of counters in state matches 'counterQuantity'.
  useEffect(() => {
    setCounterValues(prevState => {
      if (counterQuantity > prevState.length) {
        // If the quantity increases, add new counters with default values
        return [
          ...prevState,
          ...Array.from({ length: counterQuantity - prevState.length }, () => ({ count: 0, incrementValue: 1 })),
        ];
      } else if (counterQuantity < prevState.length) {
        // If the quantity decreases, remove extra counters
        return prevState.slice(0, counterQuantity);
      } else {
        // If there's no change in quantity, return previous state
        return prevState;
      }
    });
  }, [counterQuantity]);

  // useEffect to update grand total and localStorage whenever countersCount changes
  useEffect(() => {
    const newSum = calculateSumCounters(counterValues);
    setSumAllCounters(newSum);
    localStorage.setItem('sumAllCounters', newSum.toString());
  }, [counterValues]);

  // EVENT HANDLERS
  // This function handle updates to individual counters (both total count and increment value), updates the 'countersCount' state, and synchronizes changes to localStorage.
  const handleCountersUpdate = (index, newCount, newIncrementValue) => {
    setCounterValues((prevState) => {
      const updatedCounters = prevState.map((counter, i) => {
        if (i === index) {
          // Update the specific counter's total count or increment value
          return {
            ...counter,
            count: newCount !== undefined ? newCount : counter.count,
            incrementValue: newIncrementValue !== undefined ? newIncrementValue : counter.incrementValue,
          };
        }
        return counter;
      });
      localStorage.setItem('counterValues', JSON.stringify(updatedCounters));
      return updatedCounters;
    });
  };

  return (
    <>
      <Head>
        <title>Counter App</title>
        <meta name="description" content="A simple counter application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-teal-50 to-teal-200">
        <h1 className="text-4xl font-bold text-teal-800 pt-8 text-center">Counter App</h1>
        <div className="flex flex-col md:flex-row justify-between items-center px-10 py-4">
          <CounterAmountForm setCounterQuantity={setCounterQuantity} />
          <p className="text-3xl text-teal-800 mt-4 md:mt-0">Grand Total: {sumAllCounters}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
          {Array.from({ length: counterQuantity }, (_, index) => (
            <Counter
              key={index}
              count={counterValues[index]?.count || 0}
              incrementValue={counterValues[index]?.incrementValue || 1}
              setCount={(newCount) => handleCountersUpdate(index, newCount, undefined)}
              setIncrementValue={(newIncrementValue) => handleCountersUpdate(index, undefined, newIncrementValue)}
            />
          ))}
        </div>
      </main>
    </>
  );
}
