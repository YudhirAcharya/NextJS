// export async function GET() {
//   return new Response("Hello World");
// }

import { movies } from "./db";

export async function GET() {
  return Response.json(movies);
}

export async function POST(req: Request) {
  let movie = await req.json();
  console.log("req .............", req);
  console.log("..........", movie);
  const newMovie = { ...movie };
  movies.push(newMovie);
  return new Response(JSON.stringify(newMovie));
}
