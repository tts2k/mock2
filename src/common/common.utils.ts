export const exclude = <T, Key extends keyof T>(
  input: T,
  keys: Key[]
): Omit<T, Key> => {
  for (let key of keys) {
    delete input[key]
  }

  return input;
}
