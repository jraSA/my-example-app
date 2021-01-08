# core-example-library

![CI/CD](https://github.com/jraSA/my-example-app/workflows/my-example-app%20pipeline/badge.svg)
![License](https://img.shields.io/github/license/dyarleniber/react-workflow-gh-actions)
## Table of Contents

- [About](#about)
- [Running tests](#running_test)
- [Publishing](#publishing)
- [Running](#running)

## About <a name = "about"></a>
A very simple **hello world** app that could work as an example of how to decouple logic and ui, as a very basic pattern for a  **Design System**. 

The idea behind this is to have two separated modules, **UI** and **Core**. The **Core** module will be on charge of all the logic and the **UI** module will be on charge of the components, which are completely agnostic of the logic.

**UI**: https://github.com/jraSA/ui-example-library

**Core**: https://github.com/jraSA/core-example-library 

### UI
The **UI** module provides two things, a basic set of **components** and a **BaseTheme** based on <a href="https://system-ui.com/">System UI</a> with an utility function to simplify the use of the theme inside of the **Styled Components**. 

The idea behind that **BaseTheme** is to stablish a common **Design Language** across all the components which is a basic thing in order to build a **Design System**. The **BaseTheme** is also the base for the app theme, obtaining in that way a consistent design across the **app** and **components**.

Another point to have in mind is that the components use **TypeScript generic types**, in that way you can have a consistent use of the types without knowing what is going to be returned by the core.

### CORE
The **core** is very simple trying to don't distract from the objective of this exercise. it just provides a "hello world" function and list of "friends".

### About the modules

Both modules are quite simple but are built to be consistent enough in order to be used as a boilerplate for more complex projects. Both are based in typescript, have UT with full coverage and have CI/CD using github actions.

## Running tests  <a name = "running_test"></a>
```
npm run test
```
## Publishing <a name = "publishing"></a>
```
npm run deploy
```
## Running locally <a name = "running"></a>
```
npm run start
```
