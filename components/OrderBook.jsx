import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { StateContext } from "../context/StateProvider";
import OrderCard from "../components/OrderCard";

const OrderBook = () => {
  const { tradeOrders } = useContext(StateContext);

  const [buyOrders, setBuyOrders] = useState([]);
  const [sellOrders, setSellOrders] = useState([]);

  useEffect(() => {
    tradeOrders.map((order) => {
      order.operation === "buy"
        ? setBuyOrders([...buyOrders, order])
        : setSellOrders([...sellOrders, order]);
    });
  }, [tradeOrders]);

  return (
    <div className="col-start-1 col-end-4 grid grid-rows-2 h-screen">
      <div className="overflow-auto">
        <h3 className="text-bold text-center text-2xl m-4">BUY</h3>
        {buyOrders.map((order) => (
          <OrderCard order={order} key={order.id} />
        ))}
      </div>
      <div className="overflow-auto">
        <h3 className="text-bold text-center text-2xl m-4">SELL</h3>
        {sellOrders.map((order) => (
          <OrderCard order={order} key={order.id} />
        ))}
      </div>
    </div>
  );
};

export default OrderBook;

// {tradeOrders.map((order) => {
//   if (order.operation === "buy") {
//     return <OrderCard order={order} key={order.id} />;
//   }
//   return null;
// })}
// {tradeOrders.map((order) => {
//   if (order.operation === "sell") {
//     return <OrderCard order={order} key={order.id} />;
//   }
//   return null;
// })}
