import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './layout.scss'
const AdminLayout = () => {
  const { user } = useContext(AuthContext);
  // const handleLogout = () => {
  //   logout();
  // }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch('http://localhost:4000/api/products')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.products);
        } else {
          console.error('API response does not indicate success');
        }
      })
      .catch((error) => console.error('Error fetching products', error));
  };

  return (
    <div className='container-fluid'>

      <div className="admin-welcome">
        {user ? (
          <h2>Welcome, {user.firstname} (Admin) </h2>
        ) : (
          <h2>Welcome, Admin</h2>
        )}
            {/* <button onClick={logout} className='signout-btn'>
            <Link className="link" to='/' onClick={() => {handleLogout()}}>
              Sign Out
            </Link>
            </button> */}
            <Link to='/admin/add-product' className='active'>
              Create Product
            </Link>
        </div>

      <div className="product-table">
        <h3>Available Products</h3>
        <table className='product-list'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Brand</th>
              <th>Stock Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.stock_quantity}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
    </div>
  );
};

export default AdminLayout;