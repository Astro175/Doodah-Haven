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
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products/');
        if (!response.ok) {
          console.error('API response does not indicate success');
          return;
        }
  
        const data = await response.json();
  
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products', error);
      }
    };
  
    fetchData();
  }, []);

  const truncateName = (name) => {
    const words = name.split(' ');
    if (words.length > 4) {
        return words.slice(0, 3).join(' ') + '...';
    }
    return name;
  }

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
                <td>{truncateName(product.name)}</td>
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