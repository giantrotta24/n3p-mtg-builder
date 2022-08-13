[![TS-Standard - Typescript Standard Style Guide](https://badgen.net/badge/code%20style/ts-standard/blue?icon=typescript)](https://github.com/standard/ts-standard)
[![Dependabot badge](https://badgen.net/github/dependabot/standard/ts-standard?icon=dependabot)](https://dependabot.com/)

<h1 align="center">
  Magic The Gathering - Commander Deck Builder
</h1>

<b>Built with</b>

- [TypeScript](https://www.typescriptlang.org/)
- [tRPC](https://trpc.io/)
- [Tailwindcss](https://tailwindcss.com/)
- [Next.js](https://nextjs.org/)
- [Prisma](https://www.prisma.io/)
- [PlanetScale](https://planetscale.com/)

## Developing Locally

Follow these instructions to get started on your local machine. (Must have permissions to repo and Planetscale org to make contributions)

1. Clone the repository and install dependencies using your terminal inside the app directory.

- `npm install`

2. Create a [PlanetScale](https://planetscale.com/) account.

- To set up a development database locally on your machine follow PS quick start [guide](https://planetscale.com/docs/tutorials/planetscale-quick-start-guide).
- To contribute, request access to my org.

3. Connect to the database by running the pscale command on your terminal.

- `pscale connect {DATABASE_NAME} {BRANCH_NAME}`

4. Run dev command on your terminal while inside the app directory.

- `npm run dev`
