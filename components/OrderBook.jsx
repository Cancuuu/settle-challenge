import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { StateContext } from "../context/StateProvider";
import OrderCard from "../components/OrderCard";

const OrderBook = () => {
  const { tradeOrders } = useContext(StateContext);


  return (
    <div className="col-start-1 col-end-4 grid grid-rows-2 h-screen">
      <div className="overflow-auto">
        <h3 className="text-bold text-center text-2xl m-4">BUY</h3>
        {tradeOrders.map((order) => {
          if (order.operation === "buy") {
            return <OrderCard order={order} key={order.id} />;
          }
          return null;
        })}
      </div>
      <div className="overflow-auto">
        <h3 className="text-bold text-center text-2xl m-4">SELL</h3>
        {tradeOrders.map((order) => {
          if (order.operation === "sell") {
            return <OrderCard order={order} key={order.id} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default OrderBook;
