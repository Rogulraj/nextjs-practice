type Todo = {}[];

export async function GET() {
  const DATA_SOURCE = "https://jsonplaceholder.typicode.com/todos";

  const res = await fetch(DATA_SOURCE);
  const todos: Todo = await res.json();
  return Response.json(todos);
}
