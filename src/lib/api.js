export const API_BASE = "https://bmdub-server.onrender.com"; 

export async function fetchParts() {
  const r = await fetch(`${API_BASE}/parts`);
  if (!r.ok) throw new Error("Failed to load parts");
  const data = await r.json();         // { items: [...] }
  return data.items || [];
}

export async function fetchBuilds() {
  const r = await fetch(`${API_BASE}/builds`);
  if (!r.ok) throw new Error("Failed to load builds");
  return r.json();                      // array of builds
}
