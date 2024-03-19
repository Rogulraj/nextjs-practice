export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const bodyObj = Object.fromEntries(searchParams.entries());
  return Response.json({ ...bodyObj });
}
