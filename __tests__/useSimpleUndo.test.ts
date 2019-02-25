import { act, cleanup, renderHook } from 'react-hooks-testing-library';
import useSimpleUndo from '../src';

afterEach(cleanup);

test('state filled properly', () => {
  let state, setValue;

  renderHook(() => ([state, , setValue] = useSimpleUndo(0)));

  expect(state).toEqual([0]);
  act(() => setValue(1));
  expect(state).toEqual([0, 1]);
});

test('cursor point properly', () => {
  let state, сursor, setValue;

  renderHook(() => ([state, сursor, setValue] = useSimpleUndo('foo')));

  expect(state[сursor]).toEqual('foo');
  act(() => setValue('baz'));
  expect(state[сursor]).toEqual('baz');
});

test('undo works properly', () => {
  let state, сursor, setValue, undo;

  renderHook(() => ([state, сursor, setValue, { undo }] = useSimpleUndo(0)));

  act(() => setValue(1));
  act(() => setValue(2));
  expect(state[сursor]).toEqual(2);
  act(undo);
  expect(state[сursor]).toEqual(1);
  act(undo);
  expect(state[сursor]).toEqual(0);
});

test('redo works properly', () => {
  let state, сursor, setValue, undo, redo;

  renderHook(
    () => ([state, сursor, setValue, { undo, redo }] = useSimpleUndo(0))
  );

  act(() => setValue(1));
  act(() => setValue(2));
  expect(state[сursor]).toEqual(2);
  act(undo);
  act(undo);
  expect(state[сursor]).toEqual(0);
  act(redo);
  expect(state[сursor]).toEqual(1);
  act(redo);
  expect(state[сursor]).toEqual(2);
});
