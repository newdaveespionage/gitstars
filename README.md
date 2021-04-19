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
- Create branch
- Commit changes
- Create PR
- Review on [Vercel](https://vercel.com)
- Promote to production on Vercel when ready
- Review logs

## Contributing

See the issues section for any outstanding tasks