declare module "input" {
  interface Input {
    text(label?: string, options?: unknown): Promise<string>;

    password(label?: string, options?: unknown): Promise<string>;
  }

  const input: Input;

  export default input;
}
