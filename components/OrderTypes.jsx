import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";
import Button from "./Button";

const OrderTypes = () => {
  const {
    selectedCoin,
        setSelectedCoin,
        tradeOrders,
        setTradeOrders,
        orderType,
        setOrderType,
        allOrders,
        marketAmount,
        setMarketAmount,
        limitAmountPrice,
        setLimitAmountPrice
  } = useContext(StateContext);

  return (
    <div className="flex justify-around">
      <Button
        buttonText="Limit"
        style={"ml-4 " + (orderType.limit ? "bg-blue-400" : " bg-blue-500")}
        action={() => setOrderType({ limit: true, market: false })}
      />
      <Button
        buttonText="Market"
        style={"ml-4 " + (orderType.market ? "bg-blue-400" : "bg-blue-500")}
        action={() => setOrderType({ limit: false, market: true })}
      />
    </div>
  );
};

export default OrderTypes;
