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
