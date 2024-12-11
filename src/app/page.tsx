import Analytics from '@/assets/svgs/analytics.svg';
import Clerk from '@/assets/svgs/clerk.svg';
import Commitlint from '@/assets/svgs/commitlint.svg';
import Eslint from '@/assets/svgs/eslint.svg';
import Form from '@/assets/svgs/form.svg';
import Husky from '@/assets/svgs/husky.svg';
import Lucide from '@/assets/svgs/lucide.svg';
import Next from '@/assets/svgs/next.svg';
import Prettier from '@/assets/svgs/prettier.svg';
import Radix from '@/assets/svgs/radix.svg';
import Storybook from '@/assets/svgs/storybook.svg';
import Tailwind from '@/assets/svgs/tailwind.svg';
import Typescript from '@/assets/svgs/typescript.svg';
import Valorant from '@/assets/svgs/valorant.svg';
import Zod from '@/assets/svgs/zod.svg';
import { Header } from '@/components/organisms/Header';
import { Button } from '@/components/ui/Button';

export default function Home() {
  const libs = [
    {
      icon: Next,
      title: 'NextJs',
      description: 'Next.js is a React framework that enables server-side rendering and generating static websites for React based web applications.',
    },
    {
      icon: Tailwind,
      title: 'TailwindCSS',
      description: 'Tailwind CSS is a utility-first CSS framework for quickly building custom designs without ever leaving your HTML.',
    },
    {
      icon: Typescript,
      title: 'TypeScript',
      description: 'TypeScript is a superset of JavaScript that adds static types to the language, making it easier to catch errors early.',
    },
    {
      icon:
        Eslint,
      title: 'ESLint',
      description: 'ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code.',
    },
    {
      icon: Prettier,
      title: 'Prettier',
      description: 'Prettier is an opinionated code formatter that ensures consistency in your codebase.',
    },
    {
      icon: Analytics,
      title: 'Bundle analyzer plugin',
      description: 'Visualize the size of webpack output files with an interactive zoomable treemap.',
    },
    {
      icon: Storybook,
      title: 'Storybook',
      description: 'Storybook is an open-source tool for developing UI components in isolation for React, Vue, and Angular.',
    },
    {
      icon: Radix,
      title: 'Radix UI',
      description: 'Radix UI is a collection of low-level UI components and hooks for building high-quality design systems and web apps.',
    },
    {
      icon: Valorant,
      title: 'CVA',
      description: 'CVA is a collection of low-level UI components and hooks for building high-quality design systems and web apps.',
    },
    {
      icon: Form,
      title: 'React Hook Form',
      description: 'React Hook Form is a performant, flexible, and extensible forms library for React that reduces the amount of code you need to write.',
    },
    {
      icon: Lucide,
      title: 'Lucide Icon',
      description: 'Lucide is a simply beautiful open-source icon set that is designed to be used in web projects.',
    },
    {
      icon: Clerk,
      title: 'clerk',
      description: 'Clerk is a developer-first authentication and user management service that provides a secure and seamless login experience for your users.',
    },
    {
      icon: Commitlint,
      title: 'commitlint',
      description: 'commitlint is a tool to lint your commit messages to ensure they follow a conventional pattern.',
    },
    {
      icon: Zod,
      title: 'Zod',
      description: 'Zod is a TypeScript-first schema declaration and validation library that is designed to be easy to use and performant.',
    },
    {
      icon: Husky,
      title: 'Husky',
      description: 'Husky is a tool that makes it easy to use git hooks as part of your development workflow.',
    },
  ];

  return (
    <main>
      <Header />
      <div className="flex flex-col justify-center px-3 py-16 tablet:px-10 tablet:py-60">
        <h1 className="text-center text-6xl font-bold">
          Welcome to
          {' '}
          <span className="bg-gradient-to-r from-violet-700 via-purple-500 to-pink-500 bg-clip-text text-transparent">NextJs Boilerplate</span>
        </h1>
        <p className="mx-auto mt-5 max-w-screen-laptop text-center text-xl text-muted-foreground">
          Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate! Experience rapid UI development, and an extensive suite of tools for a smooth and enjoyable development process.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 tablet:flex-row">
          <a href="https://github.com/LiamPham98/boilerplate-nextjs" target="_blank" rel="noreferrer noopener">
            <Button variant="default" size="lg">
              Get Started
            </Button>
          </a>
          <a href="https://github.com/LiamPham98/boilerplate-nextjs" target="_blank" rel="noreferrer noopener">
            <Button variant="outline" size="lg">
              Star on GitHub (~0,01k)
            </Button>
          </a>
        </div>
      </div>
      <div className="mx-auto mb-20 grid max-w-screen-desktop grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3">
        {libs.map(({ title, description, icon: Icon }) => (
          <div key={title} className="flex flex-col items-center justify-start gap-4 px-4 py-6">
            <div className="rounded-full bg-black p-4">
              <Icon className="size-12 invert" />
            </div>
            <h2 className="text-xl font-bold ">{title}</h2>
            <p className="text-center font-light text-muted-foreground">{description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
