// src/lib/api.js
export const API_BASE = "https://bmdub-server.onrender.com";

const abs = (url) => {
  if (!url) return url;
  if (url.startsWith("images/")) url = "/" + url;
  if (url.startsWith("/images/")) return `${API_BASE}${url}`;
  return url;
};

export async function fetchParts() {
  const r = await fetch(`${API_BASE}/parts`);
  if (!r.ok) throw new Error("Failed to load parts");
  const data = await r.json();
  const items = data.items || [];
  return items.map((p) => ({ ...p, image: abs(p.image) }));
}

export async function fetchBuilds() {
  const r = await fetch(`${API_BASE}/builds`);
  if (!r.ok) throw new Error("Failed to load builds");
  const list = await r.json(); // array
  return list.map((b) => ({
    ...b,
    bg: abs(b.bg),
    images: Array.isArray(b.images)
      ? b.images.map((img) => ({ ...img, src: abs(img.src) }))
      : [],
  }));
}

export async function createPart(part) {
  const res = await fetch(`${API_BASE}/parts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(part),
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    // ignore JSON parse error
  }

  if (!res.ok || data.ok === false) {
    const error = new Error("Failed to create part");
    error.validationErrors = data.errors || [];
    throw error;
  }

  const raw = data.item || data;

  return {
    ...raw,
    image: abs(raw.image),
  };
}

export async function createBuild(build) {
  const res = await fetch(`${API_BASE}/builds`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(build),
  });

  let data = {};
  try {
    data = await res.json();
  } catch {
    // ignore JSON parse error
  }

  if (!res.ok || data.ok === false) {
    const error = new Error("Failed to create build");
    error.validationErrors = data.errors || [];
    throw error;
  }

  const raw = data.item || data;

  return {
    ...raw,
    bg: abs(raw.bg),
    images: Array.isArray(raw.images)
      ? raw.images.map((img) => ({ ...img, src: abs(img.src) }))
      : [],
  };
}

