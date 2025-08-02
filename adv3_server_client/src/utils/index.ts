// This code suppose to run inisde the server component and not inside the client componrnt
import "server-only";

export const add = (a: number, b: number) => a + b;
export const subtract = (a: number, b: number) => a - b;
