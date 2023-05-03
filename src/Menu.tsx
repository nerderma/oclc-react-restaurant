import { useEffect, useState } from "react";
import { Card } from "./shared/Card";
import { Food } from "./types/food";
import { getFoods } from "./services/foods.service";
import { CircularProgress } from "@mui/material";

export function Menu() {
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState<Food[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    async function fetchFoods() {
      const foods = await getFoods();
      setFoods(foods);
      setIsFetching(false);
    }
    fetchFoods();
  }, []);

  const matchingFoods = foods.filter((f) =>
    f.name.toLowerCase().includes(search)
  );

  //foods.filter((food) => food.tags.includes("Appetizer"));
  function renderSection() {
    return matchingFoods.map((food) => (
      <Card className="m-4" key={food.id}>
        <div className="flex">
          <div>
            <h3 className="text-lg font-bold">{food.name}</h3>
            <p>{food.description}</p>
            <p className="mb-4 mt-4">
              <span className="font-bold">Tags:</span> {food.tags.join(", ")}
            </p>
            <p className="font-bold">${food.price}</p>
          </div>
          <img src={food.image} alt={food.name} className="h-32 ml-4" />
        </div>
      </Card>
    ));
  }

  return (
    <>
      <h1>Menu</h1>
      <form>
        <label htmlFor="search">Search</label>{" "}
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="search"
          className="border p-1 border-x-gray-400"
          type="search"
        />
      </form>
      <h2>Appetizers</h2>

      <section className="flex flex-wrap">
        {isFetching ? <CircularProgress /> : renderSection()}
      </section>
    </>
  );
}
