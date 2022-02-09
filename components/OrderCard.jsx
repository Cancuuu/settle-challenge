import React from "react";

const OrderCard = ({ order }) => {
  return (
    <div
      key={order.id}
      className="rounded drop-shadow-lg flex justify-center items-center flex-col m-8 p-4 rounded bg-slate-50	"
    >
      <p>{order.status}</p>
      <div className="grid grid-cols-3 gap-2">
        <div className="flex">
          {order.type === "buy" ? (
            <p className="text-green-500">{order.type.toUpperCase()}</p>
          ) : (
            <p className="text-red-500">{order.type.toUpperCase()}</p>
          )}
          <p>{order.coin}</p>
        </div>
        <p className="text-center">{order.amount}</p>
        <p className="text-center">{order.price}</p>
      </div>
    </div>
  );
};

export default OrderCard;
