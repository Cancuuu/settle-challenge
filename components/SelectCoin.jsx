import React, { useContext } from "react";
import Image from "next/image";
import { StateContext } from "../context/StateProvider";
import Button from "./Button";
import { Autocomplete, Box, TextField } from "@mui/material";
import OrderTypes from "./OrderTypes";
import tokens from "../data/tokens.json";

const SelectCoin = () => {
  const { setSelectedCoin, setTxHistory, txHistory } = useContext(StateContext);

  console.log(tokens);

  return (
    <div className="flex justify-around items-center py-2 px-8 row-start-1 row-end-2">
      <Autocomplete
        disablePortal
        className="w-1/2 rounded-lg"
        options={tokens}
        defaultValue={tokens[0]}
        renderInput={(params) => (
          <Box>
            <TextField {...params} label="Tokens" />
          </Box>
        )}
        onChange={(event, value) => {
          setSelectedCoin(value);
        }}
      />
      <OrderTypes />
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
