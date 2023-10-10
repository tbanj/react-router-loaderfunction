export async function LoaderFunction() {
  /* "http://localhost:3004/file" */
  const response = await fetch("http://localhost:3000/data.json");
  if (!response.ok) throw new Error("Failed to fetch item");
  const item = await response.json();
  console.warn("item", item);
  return item;
}
