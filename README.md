# Gitstars

The top 100 most starred repos on Github along with commits from the last 24 hrs

[Production Vercel domain](https://gitstars.vercel.app/)

## Architecture

### Front-end

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
  - Snapshot testing, in this specific project

### Back-end

- [Next.js](https://nextjs.org/)
  - simplified front and back-end implementation path
  - shortcuts for some app configuration steps
- [Adapter for Github API](https://github.com/octokit/request.js)
  - built in authentication handling
  - simplifies calls to apis while not locking in to one specific format (can use GraphQL and REST, for instance)

### CI/CD/Logging Services

- [Vercel](https://vercel.com) - comes with tight integration with the next.js front-end/back-end dynamic as well as server-side rendering where sensible

## Getting Started

- Checkout repo
- `cp example.env.local .env.local`
- Update `.env.local` based on directions in the comments from `example.env.local`
- `yarn`
- `yarn dev`

## Contributing

- Review open issues
- Create issue if none exists
- Create branch from `develop`
- Commit changes
- Create PR referencing issue
