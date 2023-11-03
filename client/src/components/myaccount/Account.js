import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './account.scss';
import { AuthContext } from '../context/AuthContext';


const Account = () => {
  const [orders, setOrders] = useState([]);
  const [activeLink, setActiveLink] = useState('Information');
  const { logout, user } = useContext(AuthContext);

  useEffect(() => {
    const fetchOrdersFromAPI = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/orders/');
        if (response.ok) {
          const ordersData = await response.json();
          setOrders(ordersData)
          console.log('orders data:', ordersData)
        } else {
          console.error('Failed to fetch user orders');
        }
      } catch (error) {
        console.error('Error fetching orders', error);
      }
    };

    if (activeLink === 'MyOrders') {
      fetchOrdersFromAPI();
    }
  }, [activeLink]);


  const handleLogout = () => {
    logout();
  }

  return (
    <div className="my-account">
      <h1>Hello, {user?.firstname}</h1>
      <div className='account-details'>
      <div className='accountdetails-link'>

            <Link className={activeLink === 'Information' ? 'active-link' : 'link'} onClick={() => setActiveLink('Information')}>
                Account Information
                </Link>

                <Link className={activeLink === 'MyOrders' ? 'active-link' : 'link'} onClick={() => setActiveLink('MyOrders')}>
                My Orders
                </Link>

                <Link className={activeLink === 'Address' ? 'active-link' : 'link'} onClick={() => setActiveLink('Address')}>
                Address Book
                </Link>

                <button onClick={handleLogout}>Logout</button>
        </div>
        <div className='details'>
          {activeLink === 'Information' && (
            <div>
              <h2>Account Information</h2>
              <table>
                <tr>
                  <th>Firstname</th>
                  <td>{user?.firstname}</td>
                </tr>
                <tr>
                  <th>Lastname</th>
                  <td>{user?.lastname}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user?.email}</td>
                </tr>

                {/* <tr>
                  <th>Phone Number</th>
                  <td>{orders.userDetails.phoneNumber}</td>
                </tr> */}
              </table>
            </div>
          )}
{activeLink === 'Address' && (
    <div>
      <h2>Delivery Address</h2>
      <table>
        <tr>
          <th>Address Number</th>
          <td>{orders.shippingDetails?.addressNo}</td>
        </tr>
        <tr>
          <th>Address</th>
          <td>{orders.shippingDetails?.address}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{orders.shippingDetails?.city}</td>
        </tr>
        <tr>
          <th>State</th>
          <td>{orders.shippingDetails?.state}</td>
        </tr>
        <tr>
          <th>Postal Code</th>
          <td>{orders.shippingDetails?.code}</td>
        </tr>
        <tr>
          <th>Landmark</th>
          <td>{orders.shippingDetails?.landmark}</td>
        </tr>
      </table>
    </div>
  )}


{activeLink === 'MyOrders' && (
            <div>
              <h2>Order History</h2>
              <table>
                
                  <tr>
                    <th>Product Purchased</th>
                    <th>Quantity</th>
                    <th>Date Ordered</th>
                    <th>Status</th>
                  </tr>
                
                <tbody>
                  {orders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.productName}</td>
                      <td>{order.quantity}</td>
                      <td>{order.orderDate}</td>
                      <td>{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        </div>
    </div>
  );
};

export default Account;
