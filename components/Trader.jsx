import React, { useContext, useState, useEffect } from "react";
import Input from "./Input";
import Button from "./Button";
import { StateContext } from "../context/StateProvider";
import {
  BuyMarketOrder,
  SellMarketOrder,
  BuyLimitOrder,
  SellLimitOrder,
} from "../models/Orders";

const Trader = () => {
  const {
    selectedCoin,
    tradeOrders,
    setTradeOrders,
    orderType,
    allOrders,
    setAllOrders,
  } = useContext(StateContext);

  const [buyAmount, setBuyAmount] = useState("");
  const [buyPrice, setBuyPrice] = useState("");

  const [sellAmount, setSellAmount] = useState("");
  const [sellPrice, setSellPrice] = useState("");

  const handleOrder = (operation) => {
    if (orderType.market) {
      if (operation === "buy") {
        let newOrder = new BuyMarketOrder(
          allOrders + 1,
          selectedCoin,
          buyAmount,
          "fixed price",
          "pending",
          new Date().getTime()
        );
        setAllOrders([...allOrders, newOrder]);
        setBuyAmount("");
      }

      if (operation === "sell") {
        let newOrder = new SellMarketOrder(
          allOrders + 1,
          selectedCoin,
          sellAmount,
          "fixed price",
          "pending",
          new Date().getTime()
        );
        setAllOrders([...allOrders, newOrder]);
        setSellAmount("");
      }
    }

    if (orderType.limit) {
      if (operation === "buy") {
        let newOrder = new BuyLimitOrder(
          allOrders + 1,
          selectedCoin,
          buyAmount,
          buyPrice,
          "pending",
          new Date().getTime()
        );
        setTradeOrders([...tradeOrders, newOrder]);
        setAllOrders([...allOrders, newOrder]);
        setBuyAmount("");
        setBuyPrice("");
      }

      if (operation === "sell") {
        let newOrder = new SellLimitOrder(
          allOrders + 1,
          selectedCoin,
          sellAmount,
          sellPrice,
          "pending",
          new Date().getTime()
        );
        setTradeOrders([...tradeOrders, newOrder]);
        setAllOrders([...allOrders, newOrder]);
        setSellAmount("");
        setSellPrice("");
      }
    }
  };

  return (
    <div className="flex justify-between items-center w-full mt-8">
      <div className="flex flex-col justify-around items-center h-full w-full m-8">
        <Input
          disabled={!orderType.limit}
          placeholder={orderType.limit ? "Price" : "Market Price"}
          onAction={(price) => setBuyPrice(price)}
          value={buyPrice}
        />
        <Input
          disabled={false}
          placeholder="Amount"
          onAction={(amount) => setBuyAmount(amount)}
          value={buyAmount}
        />
        <Button
          buttonText="Buy"
          action={() => handleOrder("buy")}
          style="bg-blue-500 transition duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-col justify-around items-center h-full w-full m-8">
        <Input
          disabled={!orderType.limit}
          placeholder={orderType.limit ? "Price" : "Market Price"}
          onAction={(price) => setSellPrice(price)}
          value={sellPrice}
        />
        <Input
          disabled={false}
          placeholder="Amount"
          onAction={(amount) => setSellAmount(amount)}
          value={sellAmount}
        />
        <Button
          buttonText="Sell"
          action={() => handleOrder("sell")}
          style="bg-blue-500 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
};

export default Trader;