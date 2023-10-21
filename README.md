# Remix Blog

[![CodeQL](https://github.com/milliorn/remix-blog/actions/workflows/github-code-scanning/codeql/badge.svg)](https://github.com/milliorn/remix-blog/actions/workflows/github-code-scanning/codeql)

Remix Blog is a blog application built with Remix, a full-stack JavaScript framework for building modern web applications. It utilizes React for the frontend and Node.js for the backend.

## Getting Started

To get started with Remix Blog, follow these steps:

1. Clone the repository to your local machine.
2. Install the project dependencies by running the following command `npm install`
3. Initialize the Prisma database by running the following command `npx prisma db push`

This will initialize the SQLite database for the blog.

4. Seed the database with initial data by running the following command `node prisma/seed`

This will populate the database with sample blog posts.

5. Start the development server by running the following command `npm run dev`

This will start the development server and open the application in your default browser.

## Available Scripts

In the project directory, you can run the following scripts:

- `npm run build`: Builds the Remix application for production.
- `npm run dev`: Starts the Remix development server.
- `npm start`: Serves the built Remix application using remix-serve.
- `npm run typecheck`: Runs TypeScript type checking.
- `npm run lint`: Runs ESLint to lint the source code.

## Dependencies

The Remix Blog project relies on the following dependencies:

- [Remix](https://remix.run/): Full-stack JavaScript framework for building modern web applications.
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [Node.js](https://nodejs.org/): JavaScript runtime environment.
- [Prisma](https://www.prisma.io/): Modern database toolkit for Node.js and TypeScript.

For a complete list of dependencies, refer to the `package.json` file.

## Documentation

- Remix: [https://remix.run/docs/en/v1](https://remix.run/docs/en/v1)
- Prisma: [https://www.prisma.io/docs](https://www.prisma.io/docs)

## Contributing

Contributions to the Remix Blog project are welcome! If you'd like to contribute, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.
2. Make the necessary changes and commit them.
3. Push your branch to your forked repository.
4. Submit a pull request to the original repository's `main` branch.

Please ensure that your code follows the project's coding style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).

### Github

<https://github.com/remix-run>

<https://github.com/remix-run/remix>

## Prisma

<https://www.npmjs.com/package/prisma>

<https://github.com/prisma/prisma>

<https://www.prisma.io/>

<https://www.prisma.io/docs/concepts/components/prisma-client>

<https://www.prisma.io/docs/getting-started/quickstart>

`npm i prisma @prisma/client`

`npx prisma init --datasource-provider sqlite`

## Prototyping a new schema

<https://www.prisma.io/docs/guides/database/prototyping-schema-db-push#prototyping-a-new-schema>

`npx prisma db push`

### Run seed.js init

`node prisma/seed`

## Prisma Studio

<https://www.prisma.io/docs/concepts/components/prisma-studio>

`npx prisma studio`

<http://localhost:5555/>

## PrismaClient

<https://www.prisma.io/docs/concepts/components/prisma-client>
