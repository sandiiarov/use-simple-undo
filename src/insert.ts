export default <T>(arr: T[], cursor: number, value: T) => [
  ...arr.slice(0, cursor),
  value,
  ...arr.slice(cursor + 1),
];
