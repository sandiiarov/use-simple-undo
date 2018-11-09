import React from 'react';
import useSimpleUndo from '../dist/use-simple-undo.esm';

const Item = ({ value, current }) => (
  <span style={{ fontWeight: current ? 900 : 100 }}>{value}</span>
);

export default () => {
  const [state, cursor, setValue, { undo, redo }] = useSimpleUndo(0);

  const value = state[cursor];

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return (
    <React.Fragment>
      <div>value: {value}</div>
      <div>
        {state.map((v, i) => (
          <Item key={i} value={v} current={i === cursor} />
        ))}
      </div>
      <div>cursor: {cursor}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
    </React.Fragment>
  );
};
