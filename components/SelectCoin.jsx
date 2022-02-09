import React, { useContext } from "react";
import { StateContext } from "../context/StateProvider";
import Button from "./Button";
import { Autocomplete, TextField } from "@mui/material";

const SelectCoin = () => {
  const { setSelectedCoin, setTxHistory, txHistory } = useContext(StateContext);

  const tokens = [
    {
      label: "Bitcoin",
      symbol: "BTC",
    },
    {
      label: "Ethereum",
      symbol: "ETH",
    },
    {
      label: "USDC",
      symbol: "USDC",
    },
  ];

  return (
    <div className="flex justify-around items-center py-2 px-8 row-start-1 row-end-2">
        <Autocomplete
          disablePortal
          className="w-1/2 rounded-lg"  
          options={tokens}
          renderInput={(params) => <TextField {...params} label="Tokens" />}
          onChange={(event, value) => {
            console.log(value.symbol);
          }}
        />
      <div>
        <Button
          buttonText="Txs History"
          style="bg-blue-500 transition duration-300 ease-in-out"
          action={() => setTxHistory(true)}
        />
      </div>
    </div>
  );
};

export default SelectCoin;
