[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/@dalgu/react-toast.svg)](https://www.npmjs.com/package/@dalgu/react-toast)
[![npm](https://img.shields.io/npm/dm/@dalgu/react-toast.svg)](https://www.npmjs.com/package/@dalgu/react-toast)

# react-toast `BETA`

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

As a product designer, I think the toast notification is essential for interaction with users in a digital product. The toast is a good way to send feedback to user's actions. In other words, the toast is a good way to interact with a user. So I frequently use the toast in my product for interaction with users.

But the toast is challenging to develop. The primary reason is global-state-management. Global-state-management is needed because the toast should be used anywhere in a digital product. It is also necessary to continuously show the toast even if the page changes for building a modern web application, just like a mobile native app.

`react-toast` is the result of thinking. With `react-toast`, you don't have to worry about state management of the toast notification. **Just write the message, show the toast!**

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

### API

`react-toast` includes a `<ToastProvider />` component, which makes the toast available everywhere of your app when you need notification for user.

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

### Hooks

`react-toast` provides a custom React hooks `useToast` that allow the toast notification to show to the user.

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

| prop       | type      | default | description                        |
| ---------- | --------- | ------- | ---------------------------------- |
| `duration` | `number?` | 2       | Time showing the toast `in second` |
| `zIndex`   | `number?` | 100000  | Set the CSS property `z-index`     |

<br/>
<br/>

You can use the `Options as props` like the below example. All `Options as props` are optional props. I will add more props `Options as props` in the future.

```jsx
import { ToastProvider } from '@dalgu/react-toast';

ReactDOM.render(
  <ToastProvider duration={3} zIndex={100}>
    <App />
  </ToastProvider>,
  document.getElementById('root')
);
```

<br/>

## New features scheduled to update 💡

✔️ Customizable style

✔️ Customizable motion

✔️ Customizable position

✔️ Multiple toast notifications

✔️ Advanced reponsive design

✔️ Remove dependency `styled-components`

✔️ Remove dependency `framer-motion`

✔️ add test

✔️ ...more new features!

<br/>

## Demo

Coming soon!

<br/>

## Thanks to 🙏

[styled-components](https://github.com/styled-components/styled-components)

[framer-motion](https://github.com/framer/motion)

<br/>

## Contact

[dalgudot@gmail.com](mailto:dalgudot@gmail.com)

<br/>

## License

[MIT](https://github.com/dalgudot/react-toast/blob/main/LICENSE)
