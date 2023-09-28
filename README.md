# Bun Starter

You can run this applicaton with NPM or Bun.

To install Bun, run

```shell
curl -fsSL https://bun.sh/install | bash
```

or

```
brew tap oven-sh/bun
brew install bun
```

Restart your shell if necessary.

## Running the application

First, set up the `.env` file:

`cp .env.example .env`

Next, install dependencies, push the schema to the SQLite database, and start the dev server

```shell
bun install
bun db:push
bun dev
```

or

```shell
npm install
npm run db:push
npm run dev
```

## Prompt

Welcome to our pair programming challenge!

Before we begin, let's go through some guidelines and reminders:

- This is a collaborative session, think of this as a normal day-at-work kind of scenario.
- Express your thought process as you code; our main focus here is to assess your ability to analyze problems, communicate, and work in a pair programming environment.
- Feel free to look up things online. Nobody remembers everything, and we appreciate a developer who knows how to find reliable information.
- Tools, languages, or libraries that you are not familiar with? It's okay to ask for help. Collaboration is key in such settings.
- Don't worry too much about finishing everything. What matters most is the journey and how we get to the solution.

We will be creating a progressively complex counter application in React. The structure of our session will be as follows: we will start with a base requirement, and in intervals, I will introduce new requirements that we need to implement.

Let's work together to solve these problems, and most importantly, let's enjoy the process!

At the end of the session, you will also have the opportunity to ask questions about the work we do, or any other queries you may have about our development process. Let's get coding!
