import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <ul className='sidebar-submenu'>
          <li>
            <Link to='all-products' className='active'>
              All Products
            </Link>
          </li>
          <li>
            <Link to='add-product' className='active'>
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