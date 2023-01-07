import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import Loading from "./Loading";

export default function Products({
  productsLoaded,
  setProductsLoaded,
  products,
  setProducts,
}) {
  // Max pokemon index for this API is 905
  const highestIndex = 400;

  useEffect(() => {
    if (productsLoaded) return;
    (async () => {
      setProducts(await getPokemonsByIds(15));
      setProductsLoaded(true);
    })();
  }, []);

  const getPokemonsByIds = async (num) => {
    const tempProducts = [];
    const seenIndices = [];
    for (let i = 0; i < num; i++) {
      let randIndex = Math.floor(Math.random() * highestIndex) + 1;
      while (seenIndices.includes(randIndex)) {
        randIndex = Math.floor(Math.random() * highestIndex) + 1;
      }
      seenIndices.push(randIndex);
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${randIndex}.png`;
      const id = randIndex;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randIndex}`
      );
      const name = response.data.name;
      const price = Math.floor((Math.random() * 10000) / 100) * 100;
      tempProducts.push({ img, id, name, price });
    }
    return tempProducts;
  };

  return (
    <div id="products">
      {productsLoaded ? (
        products.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })
      ) : (
        <Loading />
      )}
    </div>
  );
}
