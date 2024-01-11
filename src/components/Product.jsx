import { MdAddShoppingCart } from "react-icons/md";
import axios from "axios";
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
      <div className="flex flex-row justify-evenly pt-2">
        <input type="text" className="w-5/6" />
        <button className="bg-red-200 p-2">Search</button>
      </div>
      <div className="mt-2 flex flex-row  flex-wrap">
        {products &&
          products.map((product, index) => {
            return (
              <div
                key={index}
                className="flex flex-col w-32 h-auto bg-red-500 p-2  m-2"
              >
                <img
                  src={`http://localhost:3000/upload/${product.image_url}`}
                  alt=""
                  className="min-h-10 w-48 drop-shadow-lg"
                />
                <h4>{product.name} </h4>

                <p>Rp.{product.price}</p>
                <button className="h-10 w-5 p-1  bg-gray-200">
                  <MdAddShoppingCart />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}
