import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import ProductsContainer from './ProductsContainer';

export default function Products({
  productsLoaded,
  setProductsLoaded,
  products,
  setProducts,
  cart,
  setCart,
}) {
  /* ----- Max pokemon index for this API is 905 ----- */
  const HIGHEST_INDEX = 905;
  const NUM_POKEMON = 12;

  useEffect(() => {
    if (productsLoaded) return;
    (async () => {
      setProducts(await getPokemonsByIds(NUM_POKEMON));
      setProductsLoaded(true);
    })();
  }, []);

  const getPokemonsByIds = async (num) => {
    const tempProducts = [];
    const seenIndices = [];
    for (let i = 0; i < num; i++) {
      let randIndex = Math.floor(Math.random() * HIGHEST_INDEX) + 1;
      while (seenIndices.includes(randIndex)) {
        randIndex = Math.floor(Math.random() * HIGHEST_INDEX) + 1;
      }
      seenIndices.push(randIndex);
      const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${randIndex}.png`;
      const id = randIndex;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${randIndex}`
      );
      const name = response.data.name;
      const price = Math.floor((Math.random() * 10000) / 100) * 100 + 100;
      tempProducts.push({ img, id, name, price });
    }
    return tempProducts;
  };

  return (
    <>
      {productsLoaded ? (
        <ProductsContainer products={products} cart={cart} setCart={setCart} />
      ) : (
        <Loading />
      )}
    </>
  );
}
