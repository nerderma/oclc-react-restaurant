import { NewFood } from "../Admin";
import { Food } from "../types/food";

export async function getFoods() {
  const resp = await fetch("http://localhost:3001/foods");
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json() as Promise<Food[]>;
}

export async function addFood(food: NewFood) {
  const resp = await fetch("http://localhost:3001/foods", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(food),
  });
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return resp.json() as Promise<Food>;
}

export async function deleteFood(id: number) {
  const resp = await fetch("http://localhost:3001/foods/" + id, {
    method: "DELETE",
  });
  if (!resp.ok) {
    throw new Error(resp.statusText);
  }
  return;
}
