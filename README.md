# Carbee

Carbee is a web application built with Next.js 13.2, utilizing the new app directory logic.

It incorporates components from [Mantine.dev](https://mantine.dev/) for a modern and polished user interface.

The project also includes authentication functionality powered by [NextAuth.js](https://next-auth.js.org/), and it integrates with a backend service using Next.js rewrites and a middleware to pass authentication tokens obtained during login.

## Features

- **Next.js 13.2**: Utilizing the latest version of Next.js for a powerful and performant web application.

- **Mantine Components**: Incorporating Mantine.dev components to create a visually appealing and responsive user interface.

- **Authentication**: Implementing user authentication using NextAuth.js for a secure and seamless user experience.

- **Integration with Backend**: Leveraging Next.js [rewrites](https://nextjs.org/docs/pages/api-reference/next-config-js/rewrites) and a [middleware](https://nextjs.org/docs/pages/building-your-application/routing/middleware) to seamlessly connect with backend services.

- **Linting and Formatting**: Enforcing code quality and consistency with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/), coupled together.

- **Husky Precommit Hook**: A precommit hook is set up using [Husky](https://typicode.github.io/husky/) to automatically run ESLint before each commit. It helps maintain code quality throughout the development process.

## Installation

To set up the Carbee project, follow these steps:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/carbee.git
cd carbee
```

2. Install the project dependencies using Yarn:

```bash
yarn install
```

## Usage

After installation, you can use the following scripts to work with the project:

#### Development Mode:

```bash
yarn dev
```

Run the development server with hot-reloading. Open http://localhost:3000 in your browser to view the application as you make changes.

#### Production Build:

```bash
yarn build
```

Build the production-ready version of the application.

#### Start Production Server:

```bash
yarn start
```

Start the production server to serve the built application.

#### Linting:

```bash
yarn lint
```

Run ESLint to check and fix code formatting issues.

## Configuration

Make sure to configure your authentication settings, backend service endpoints, and any other environment-specific variables as needed. These configurations can typically be found in the project's environment variables or configuration files.
