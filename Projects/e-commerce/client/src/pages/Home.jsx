import React, { useEffect, useState } from "react";
import { getProducts } from "../api/Api";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (err) {
        setError("Failed to fetch products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setIsDetailVisible(true);
  };

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <section className="min-h-screen w-full bg-slate-800">
      <div
        className={`mx-auto flex w-[95%] py-4 transition-all duration-300 ${isDetailVisible ? "lg:flex-row" : "lg:flex-col"}`}
      >
        <div
          className={`all-items-full-view grid-container items-center justify-center overflow-y-auto rounded-lg p-4 transition-all duration-300 ${isDetailVisible ? "w-full lg:w-1/2" : "w-full"}`}
        >
          {products.map((el) => (
            <div
              onClick={() => handleProductClick(el)}
              key={el.id}
              className="grid-item group relative mb-4 cursor-pointer"
            >
              <div className="relative flex h-full flex-col">
                <img
                  src={el.images[1]}
                  alt="product"
                  className="mb-2 h-40 w-full rounded-lg object-cover"
                />

                <div className="absolute bottom-[20px] left-0 right-0 bg-black bg-opacity-50 p-[20px] text-center opacity-0 transition-all duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                  <h2 className="text-[15px]">{el.name}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isDetailVisible && (
          <div
            onClick={() => setIsDetailVisible(false)}
            className="spesific-item-detail w-full rounded-lg p-4 transition-all duration-300 lg:w-1/2"
          >
            <h2 className="mb-4 text-xl font-bold">
              {selectedProduct.name} Details
            </h2>
            <p>{selectedProduct.description}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Home;
