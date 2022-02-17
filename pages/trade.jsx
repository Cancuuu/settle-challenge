import React, { useEffect, useState, useContext } from "react";
import { StateContext } from "../context/StateProvider";
import OrderBook from "../components/OrderBook";
import SelectCoin from "../components/SelectCoin";
import Trader from "../components/Trader";
import OrderTypes from "../components/OrderTypes";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";
import OrderCard from "../components/OrderCard";

const trade = () => {
  const { txHistory, setTxHistory, allOrders, txStatus, setTxStatus } = useContext(StateContext);

  const Backdrop = styled("div")`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    -webkit-tap-highlight-color: transparent;
  `;


  return (
    <>
      <div className="griddie h-screen w-screen">
        <OrderBook />
        <div className="col-start-4 col-end-13 grid grid-rows-6 w-full">
          <SelectCoin />
          <div className="row-start-2 row-end-4"></div>
          <div className="row-start-4 row-end-7 p-8 flex flex-col justify-center items-center">
            <Trader />
          </div>
        </div>
      </div>
      <ModalUnstyled
        className="fixed z-50	flex flex-col justify-center items-center rounded-lg right-0 top-0 bottom-0 left-0"
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={txHistory}
        onClose={() => setTxHistory(false)}
        BackdropComponent={Backdrop}
      >
        <div className="flex flex-col justify-center items-center rounded-lg bg-white p-8 max-h-96 w-auto">
          {allOrders.length === 0 ? (
            <div className="text-center">
              <h1 className="text-2xl font-bold">No orders</h1>
            </div>
          ) : (
            <h2 className="text-2xl font-bold">Transaction History</h2>
          )}
          <div className="grid grid-cols-3 gap-2 overflow-y-auto">
            {allOrders.map((order) => {
              return <OrderCard key={order.id} order={order} />;
            })}
          </div>
        </div>
      </ModalUnstyled>
    </>
  );
};

export default trade;
