import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './layout.scss'
const AdminLayout = () => {
  const { logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout();
}
  return (
    <div className='container-fluid'>

      <div className="admin-welcome">
            <h2>Welcome, Admin </h2> {/* Display the admin's name */}
            <button onClick={logout} className='signout-btn'>
            <Link className="link" to='/' onClick={() => {handleLogout()}}>
              Sign Out
            </Link>
            </button>
        </div>
      <div className='row'>
        <ul className='sidebar-submenu'>
          <li>
            <Link to='all-products' className='active'>
              All Products
            </Link>
          </li>
          <li>
            <Link to='/admin/add-product' className='active'>
              Create Product
            </Link>
          </li>
        </ul>
        {/* <div className='col-md-10 admin-content'>
          <Outlet />
        </div> */}

        
      </div>
    </div>
  );
};

export default AdminLayout;