import React, { useState, createContext, useEffect } from "react";

export const StateContext = createContext();

const StateProvider = (props) => {
  // state para el token seleccionado
  const [selectedCoin, setSelectedCoin] = useState({
    label: "Bitcoin",
    symbol: "BTC",
  });

  // state para las tradeOrders
  const [tradeOrders, setTradeOrders] = useState([]);

  // state para el tipo de orden si limit o market
  const [orderType, setOrderType] = useState({
    limit: true,
    market: false,
  });

  // array con todas las ordenes
  const [allOrders, setAllOrders] = useState([]);

  const [txHistory, setTxHistory] = useState(false);

  const [txStatus, setTxStatus] = useState(true);

  return (
    <StateContext.Provider
      value={{
        selectedCoin,
        setSelectedCoin,
        tradeOrders,
        setTradeOrders,
        orderType,
        setOrderType,
        allOrders,
        setAllOrders,
        txHistory,
        setTxHistory,
        txStatus,
        setTxStatus,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateProvider;
