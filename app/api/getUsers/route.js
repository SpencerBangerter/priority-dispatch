export async function GET() {
  // This API call fetches 30 random users from the Random User Generator API,
  // restricted to users from the US, using a fixed seed, which isn't necessary but is interesting
  try {
    const response = await fetch(
      "https://randomuser.me/api/?results=30&nat=us&seed=prioritydispatch"
    );
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to fetch users" }), {
        status: 500,
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data.results), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
