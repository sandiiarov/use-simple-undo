import React from 'react';
import insert from './insert';

const useSimpleUndo = <T>(
  initialState: T
): [
  T[],
  number,
  (value: T) => void,
  { undo: () => void; redo: () => void }
] => {
  const [state, setState] = React.useState([initialState]);
  const [cursor, setCursor] = React.useState(0);

  const undo = () => setCursor(cursor - 1);
  const redo = () => setCursor(cursor + 1);
  const setValue = (value: T) => {
    const nextCursor = cursor + 1;
    const nextState = insert(state, nextCursor, value);

    setState(nextState);
    setCursor(nextCursor);
  };

  return [state, cursor, setValue, { undo, redo }];
};

export default useSimpleUndo;
