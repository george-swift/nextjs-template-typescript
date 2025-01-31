# Next.js TypeScript Template

A production-ready Next.js 15 template with TypeScript, Tailwind CSS v4, and essential tools pre-configured to streamline development.

## Features

- **Next.js 15** – Latest Next.js framework with App Router.
- **TypeScript** – Strongly typed development for reliability.
- **Tailwind CSS** – Utility-first styling with `tailwind-merge`.
- **ESLint & Prettier** – Code linting and formatting with import sorting.
- **Husky & Lint-Staged** – Git hooks for pre-commit linting.
- **React 19** – Latest React features and improvements.
- **Zod & React Hook Form** – Schema validation and form handling.
- **NextAuth.js (Beta)** – Authentication boilerplate.
- **Dark Mode Support** – Integrated via `next-themes`.
- **Vercel Analytics** – Included for Vercel deployments.

## Installation

Clone the repository and install dependencies:

```sh
npx degit george-swift/nextjs-template-typescript my-new-project
cd my-new-project
npm install
```

## Usage

Run the development server:

```sh
npm run dev
```

Build for production:

```sh
npm run build
```

Start the production server:

```sh
npm start
```

## Project Structure

```
.
├── README.md
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── env.ts
│   └── styles
│       └── globals.css  # In tailwind v4, theming and custom css goes here
└── tsconfig.json
```

## Customization

- **Environment Variables**: Use `@t3-oss/env-nextjs` for environment validation.
- **Icons**: Uses `@remixicon/react` for scalable icons.
- **Validation**: Includes `Zod` for schema validation.
- **Components**: You may use [Tremor](https://tremor.so/docs/getting-started/installation/next) or [ShadCn](https://ui.shadcn.com/docs/installation)

## Contributing

1. Fork the repository.
2. Create a branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.
