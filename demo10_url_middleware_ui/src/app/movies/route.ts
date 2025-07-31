// export async function GET() {
//   return new Response("Hello World");
// }

import { NextRequest } from "next/server";
import { movies } from "./db";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query") || "";

  const filteredMovies = movies.filter((movie) =>
    movie.name.toLowerCase().includes(query.toLowerCase())
  );

  return new Response(JSON.stringify(filteredMovies));
}

// export async function POST(req: Request) {
//   let movie = await req.json();
//   console.log("req .............", req);
//   console.log("..........", movie);
//   const newMovie = { ...movie };
//   movies.push(newMovie);
//   return new Response(JSON.stringify(newMovie));
// }
