[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@dalgu/react-toast.svg)](https://www.npmjs.com/package/@dalgu/react-toast)
[![npm](https://img.shields.io/npm/dm/@dalgu/react-toast.svg)](https://www.npmjs.com/package/@dalgu/react-toast)

# react-toast

A built-in global-state-management toast notification library for React web application

<br/>

✅ Built-in global-state-management

✅ Easy to use

✅ Available in both JavaScript and TypeScript

✅ Available on desktop, tablet, mobile

✅ Minimal design

✅ Ready for iOS safe area

✅ New features to upadate every weekend!

<br/>

## Motivation ✨

I'm designing & developing the React product system for React web applications these days.

<br/>

## Installation

If you use npm:

```
npm i @dalgu/react-toast
```

If you use yarn:

```
yarn add @dalgu/react-toast
```

<br/>

## Usage

#### API

`ToastProvider`

react-toast includes a `<ToastProvider />` component, which makes the toast available everywhere of your app when you need notification for user.

```jsx
import { ToastProvider } from '@dalgu/react-toast';

ReactDOM.render(
  <ToastProvider>
    <App />
  </ToastProvider>,
  document.getElementById('root')
);
```

<br/>

#### Hooks

`useToast`

react-toast provides custom React hooks `useToast` that allow the toast notification to show to the user.

```jsx
import { useToast } from '@dalgu/react-toast';

const App = () => {
  const { showToast } = useToast();

  return (
    <>
      <button onClick={() => showToast("I'm React Toast!")}>showToast</button>
    </>
  );
};
```

<br/>

## Options as props

<br/>

## New features scheduled to update 💡

- [ ] customizable style
- [ ] customizable motion
- [ ] customizable position
- [ ] multiple toast notifications
- [ ] advanced reponsive design
- [ ] add test
- [ ] ...more new feature!

<br/>

## Demo

Coming soon!

<br/>

## Thanks to 🙏

- [ReactJS](https://reactjs.org/)

- [NextJS](https://nextjs.org/)

- [Styled-Components](https://github.com/styled-components/styled-components)

- [Framer-Motion](https://github.com/framer/motion)

- [Typescript](https://www.typescriptlang.org/)

<br/>

## License

[MIT](https://github.com/dalgudot/react-toast/blob/main/LICENSE)
