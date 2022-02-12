import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const OrderCard = ({ order }) => {
  const [remove, setRemove] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRemove(!remove);
    }, 60000);
  }, []);

  return (
    <>
      {remove ? (
        <div
          id={order.id}
          key={order.id}
          className="rounded drop-shadow-lg flex justify-center items-center flex-col m-8 p-4 rounded bg-slate-50	"
        >
          <div className="">
            {order.operation === "buy" ? (
              <p className="text-green-500 text-xl">{order.type.toUpperCase()}</p>
            ) : (
              <p className="text-red-500 text-xl">{order.type.toUpperCase()}</p>
            )}
          </div>
          <p className="text-center text-lg">
            {order.amount + " " + order.coin + " " + "-" +  " " + order.price.toUpperCase()}
          </p>
          <p className="text-center">{order.time}</p>
        </div>
      ) : null}
    </>
  );
};

export default OrderCard;
