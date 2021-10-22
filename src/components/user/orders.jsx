import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "./navbar";
import Footer from "./footer";
import "../../css/orders.css";


function Orders(props) {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function fetchOrders() {
      const result = await axios.get(
        `${process.env.REACT_APP_ROOT_URL}/api/order`
      );

      setOrders(result.data);
    }
    fetchOrders();
  }, []);

  if (orders?.length === 0) {
    return (
      <React.Fragment>
        <Navbar />
        <h1 style={{ paddingTop: "100px" }}>No Orders are added yet.</h1>
        <Footer />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <h1 className="text-center py-3">Orders</h1>
        <div className="cards__list">
          
          <table class="table table-striped table_style">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Client</th>
                <th scope="col">Hardware</th>
                <th scope="col">Type</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order) => (
                <tr key={order?.id}>
                  <td>{order?.id}</td>
                  <td>{order?.client}</td>
                  <td>{order?.content.name}</td>
                  <td>{order?.content.hardware_type}</td>
                  <td>{order?.content.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default Orders;
