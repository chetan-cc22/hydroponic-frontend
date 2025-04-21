// import React, { useEffect, useState } from "react";
// import Layout from "../layout/Layout";
// import axios from "axios";
// import ProductCard from "../components/ProductCard";

// const Hero = () => {
//   const [products, setProducts] = useState([]);
//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios(
//         "https://ecommerce-backend-new.vercel.app/api/products"
//       );
//       setProducts(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getAllProducts();
//   }, []);
//   return (
//     <Layout>
//       <section className="grid py-10 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
//         {products?.map((item, id) => (
//           <ProductCard item={item} key={id} />
//         ))}
//       </section>
//     </Layout>
//   );
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../layout/Layout";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div className="w-full h-screen flex items-center justify-center">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="w-full h-screen flex items-center justify-center">
          <p className="text-xl text-red-500 font-semibold">{error}</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="border border-gray-200 rounded-lg p-4 shadow hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => navigate(`/detail/${product._id}`)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <h3 className="mt-4 text-lg font-bold">{product.name}</h3>
              <p className="text-gray-700 mt-1">${product.price}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Hero;
