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

✅ Ready for iOS safe area

✅ New features to upadate every weekend!

<br/>

## Motivation

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

#### API `ToastProvider`

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

#### Hook `useToast`

```jsx
import { useToast } from '@dalgu/react-toast';

const App = () => {
  const { showToast } = useToast();

  return (
    <>
      <button onClick={() => showToast("I'm react-toast!")}>showToast</button>
    </>
  );
};

export default App;
```

<br/>

## Options as props

<br/>

## New features scheduled to update

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

## License

[MIT](https://github.com/dalgudot/react-toast/blob/main/LICENSE)
