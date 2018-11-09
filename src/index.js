import React from 'react';

const insert = (s, c, v) => [...s.slice(0, c), v, ...s.slice(c + 1)];

export default initialState => {
  const [state, setState] = React.useState([initialState]);
  const [cursor, setCursor] = React.useState(0);

  const undo = () => setCursor(cursor - 1);
  const redo = () => setCursor(cursor + 1);
  const setValue = value => {
    const nextCursor = cursor + 1;
    const nextState = insert(state, nextCursor, value);

    setState(nextState, setCursor(nextCursor));
  };

  return [state, cursor, setValue, { undo, redo }];
};
