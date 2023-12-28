export function define(name: string, f: Function) {
  exports[name] = f;
}