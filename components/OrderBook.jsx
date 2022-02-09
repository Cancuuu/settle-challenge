import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";
import OrderCard from "../components/OrderCard";

const OrderBook = () => {
  const { tradeOrders } = useContext(StateContext);

  return (
    <div className="col-start-1 col-end-4 overflow-y-auto">
      <h2 className="text-bold text-center text-2xl m-4">ORDER BOOK</h2>
      {tradeOrders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
};

export default OrderBook;
