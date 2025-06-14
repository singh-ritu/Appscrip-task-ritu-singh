import { Products } from "./products";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("failed to fetch products");
  return res.json();
}

export default async function ProductsContainer() {
  const products = await getProducts();
  return <Products initialProducts={products} />;
}
