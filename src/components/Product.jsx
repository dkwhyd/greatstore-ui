import axios, { Axios } from "axios";
import { useState, useEffect } from "react";

export default function Product() {
  const [products, setProducts] = useState();
  useEffect(() => {
    const getProduct = async () => {
      const result = await axios.get("http://localhost:3000/api/products");
      const { count, data } = result.data;
      if (result.statusText === "OK") {
        setProducts(data);
      }
      console.log(products);
    };

    getProduct();
  }, []);

  return (
    <div className="">
      <h3> menu</h3>
      <div className="mt-2">
        {products &&
          products.map((product, index) => {
            return (
              <div key={index}>
                <h4>{product.name}</h4>
                <img src="" alt="" />
                <p>Rp.{product.price}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
