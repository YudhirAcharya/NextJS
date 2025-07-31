import { movies } from "../db";
interface Info {
  id: string;
}
export async function GET(_req: Request, { params }: { params: Info }) {
  // we get data but dont use: _req
  const { id } = await params;

  const movie = movies.find((m) => m.id === Number(id));
  return movie
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", { status: 404 });
}

export async function PATCH(req: Request, { params }: { params: Info }) {
  const { id } = params;
  const movieId = Number(id);

  ///check
  const movie = movies.find((m) => m.id === movieId);

  if (!movie) {
    return new Response(JSON.stringify({ error: "movie not found " }), {
      status: 404,
    });
  }
  try {
    const updatedMovie = await req.json();
    const index = movies.findIndex((m) => m.id === movieId);
    if (!movie) {
      return new Response(JSON.stringify({ error: "movie not found " }), {
        status: 404,
      });
    }
    //update the movie
    movies[index] = { ...movie, ...updatedMovie };
    return new Response(JSON.stringify(movies[index]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to parde JSON" }));
  }
}

export async function DELETE(req: Request, { params }: { params: Info }) {
  const { id } = params;
  const movieId = Number(id);

  //find movie index
  const index = movies.findIndex((m) => m.id === movieId);

  if (index === -1) {
    return new Response(JSON.stringify({ error: "movie not found " }), {
      status: 404,
    });
  }
  movies.splice(index, 1);
  return new Response(
    JSON.stringify({ message: "Movie deleted successfully" }),
    {
      status: 200,
    }
  );
}
