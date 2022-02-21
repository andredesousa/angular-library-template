# Angular Library Template

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13 and [Node.js](https://nodejs.org/en/about/releases) version 14.
It has a complete development environment configured, including build, test, and publish scripts as examples.

## Table of Contents

- [Available npm scripts](#available-npm-scripts)
- [Developing components in isolation](#developing-components-in-isolation)
- [Linting and formatting code](#linting-and-formatting-code)
- [Running unit tests](#running-unit-tests)
- [Commit messages convention](#commit-messages-convention)
- [Publishing](#publishing)
- [Reference documentation](#reference-documentation)

## Available npm scripts

The scripts in [package.json](package.json) file were built with simplicity in mind to automate as much repetitive tasks as possible and help developers focus on what really matters.

The next scripts should be executed in a console inside the root directory:

- `start` - Runs Storybook in watch mode.
- `check` - Runs all checks.
- `lint` - Runs several static code analysis.
- `lint:fix` - Applies lint rules to source code.
- `test` - Runs the unit tests.
- `test:watch` - Runs the unit tests in watch mode.
- `docs` - Generates the documentation for the source code.
- `clean` - Deletes the build directory.
- `changelog` - Generates a changelog from GIT repository.
- `build` - Transpile the source code to JavaScript.
- `build:watch` - Transpile the source code in watch mode.
- `publish` - Publishes the package.

For more details, read the [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts) documentation.

## Developing components in isolation

This project includes [Storybook](https://storybook.js.org/) for Angular.
You can use Storybook to build small atomic components and complex pages for your web application.
This way, everyone in your team can view and review different states of UI components.
In the `lib` folder, you can find examples of UI components and stories.

You can serve Storybook running `npm run start`.
You can also deploy Storybook as a static app running `npm run build:storybook`.

## Linting and formatting code

Linters are also excellent tools for finding certain classes of bugs, such as those related to variable scope.
[ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [stylelint](https://stylelint.io/) help maintain the code quality.

It's recommended to use them in your projects because:

- They keep everybody on the same page, following the same rules.
- They save time in code reviews, because you can safely ignore all style issues, and focus on things that matter, like the structure and semantics of your code.
- They catch errors. Prettier, not so much, but TSLint catches a lot of syntax errors and simple forms of type errors, such as undefined variables.
- Setting these things up is a one-time cost, but the time-saving benefits compound over time.

Run `npm run lint` to analyze your code. Many problems can be automatically fixed with `npm run lint:fix`.
Depending on your editor, you may want to add an editor extension to lint and format your code while you type or on-save.

## Running unit tests

Unit tests are responsible for testing of individual methods or classes by supplying input and making sure the output is as expected.

Run `npm run test` to execute the unit tests via [Jest](https://jestjs.io/).
Run `npm run test:watch` to keep executing unit tests in real time while watching for file changes in the background.

If you want to exclude a specific test, simply use `xit()` or `xdescribe()`.
If you want to run a specific test, use `fit()` or `fdescribe()`.
The `x` means exclude and the `f` stands for focused.

You can see the HTML coverage report opening the [index.html](build/coverage/lcov-report/index.html) file in your web browser.
Code coverage measures and reports the number of executed code lines covered by automated tests.

## Commit messages convention

In order to have a consistent git history every commit must follow a specific template. Here's the template:

```bash
<type>(<ITEM ID>?): <subject>
```

### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (example scopes: gulp, npm)
- **ci**: Changes to our CI configuration files and scripts (example scopes: Jenkins, Travis, Circle, SauceLabs)
- **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a feature
- **revert**: A commit that reverts a previous one
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
- **test**: Adding missing tests or correcting existing tests

### ITEM ID

The related **issue** or **user story** or even **defect**.

- For **user stories**, you shoud use `US-` as prefix. Example: `feat(US-4321): ...`
- For **no related issues** or **defects** you should leave it blank. Example: `feat: ...`

### Subject

The subject contains a succinct description of the change.

## Publishing

Publishes a package to the registry so that it can be installed by name.
By default npm will publish to the public registry but it can be overridden by specifying a different default registry.
npm is configured to use the npm public registry at <https://registry.npmjs.org>.

To publish your first package to npm, you need to go through these steps:

- First, you need to have an npm account.
- Second, you need to login to your npm account through the command line.
- The final step is to publish your package with the `npm run publish` command.

This project follows conventional commits and semantic versioning.

In `ci` folder you can find scripts for your [Jenkins](https://www.jenkins.io/) CI/CD pipeline.
Also, you can run `npm run build` to build the project. The build artifacts will be stored in the `dist` directory.
You can use `npm run changelog` to generate the project changelog and `npm run docs` to generate the project documentation.

## Reference documentation

For further reference, please consider the following articles:

- [npm scripts](https://docs.npmjs.com/cli/v8/using-npm/scripts)
- [Angular - Creating libraries](https://angular.io/guide/creating-libraries)
- [Introduction to Storybook for Angular](https://storybook.js.org/docs/angular/get-started/introduction)
- [Getting Started - Jest](https://jestjs.io/docs/getting-started)
- [Semantic Versioning](https://semver.org/)
