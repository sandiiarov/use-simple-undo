<h1 align="center">
  <img src="https://svgshare.com/i/9Ff.svg" alt="Use Events" />
</h1>

![npm](https://img.shields.io/npm/dt/use-simple-undo.svg)
![npm](https://img.shields.io/npm/v/use-simple-undo.svg)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/use-simple-undo.svg)
![NpmLicense](https://img.shields.io/npm/l/use-simple-undo.svg)

**Use Simple Undo** - Simple solution to handle undo\redo turned into React Hooks.
Read about [Hooks](https://reactjs.org/docs/hooks-intro.html) feature.

# Documentation

https://sandiiarov.github.io/use-simple-undo

# Install

> Note: React 16.7+ is required for Hooks.

### With npm

```sh
npm i use-simple-undo
```

### Or with yarn

```sh
yarn add use-simple-undo
```

### UMD

```html
<script src="https://unpkg.com/use-events/dist/use-simple-undo.min.js" />
```

exposed as `UseSimpleUndo`

# Usage
```jsx
import useSimpleUndo from 'use-simple-undo';
```

```jsx
const Counter = () => {
  const [state, cursor, setValue, { undo, redo }] = useSimpleUndo(0);

  const value = state[cursor];

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <React.Fragment>
      <div>{value}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
    </React.Fragment>
  );
};
```
