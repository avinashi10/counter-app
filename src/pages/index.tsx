import Head from "next/head";
import Link from "next/link";
import React, { Suspense } from "react";

import { api } from "~/utils/api";

export default function Home() {
  const { mutate, data } = api.user.create.useMutation();
  const [name, setName] = React.useState("");

  return (
    <>
      <Head>
        <title>Getting Started</title>
        <meta name="description" content="Getting started" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <React.Suspense fallback="Loading...">
          {data ? (
            <p className="text-2xl text-white">Hello {data.name}!</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                mutate({ name });
              }}
            >
              <input
                type="text"
                id="name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                type="submit"
                className="mb-2 mr-2 rounded-lg bg-blue-700 px-5 py-2.5 pt-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </form>
          )}
        </React.Suspense>
      </main>
    </>
  );
}
