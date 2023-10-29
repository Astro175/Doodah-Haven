import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const ProductsByPriceRange = () => {
  const { minPrice, maxPrice } = useParams();
  const [productsInPriceRange, setProductsInPriceRange] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Construct the URL with query parameters for minPrice and maxPrice
    const apiUrl = `http://localhost:4000/api/products?price[gte]=${minPrice}&price[lte]=${maxPrice}`;

    setIsLoading(true);

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Filtered products can be accessed from data
        const filteredProducts = data.products;
        setProductsInPriceRange(filteredProducts);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products', error);
      });
  }, [minPrice, maxPrice]);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && productsInPriceRange.length === 0 && (
        <div>
          <h2>No products available within this price range.</h2>
        </div>
      )}
      {!isLoading && productsInPriceRange.length > 0 && (
        <div>
          {/* Display the products within the price range */}
          <h1>Products in the Price Range: #{minPrice} - #{maxPrice}</h1>
          <div>
            {productsInPriceRange.map((product) => (
              <div key={product._id}>
                <p>Name: {product.name} </p>
                <p>Price: #{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}


