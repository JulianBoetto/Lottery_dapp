import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import Web3 from "web3";
import { abi } from "../abi/Lottery.json";
import { AbiItem } from "web3-utils";
import * as dotenv from 'dotenv';
dotenv.config();

const contract_address = process.env.REACT_APP_CONTRACT_ADDRESS;

export const useLottery = () => {
  const web3 = useWeb3React<Web3>();

  const contract = useMemo(() => {
    if (web3.account) {
      return new web3.library!.eth.Contract(
        abi as AbiItem[],
        contract_address
      );
    }

    return null;
  }, [web3.library, web3.account]);

  return contract;
};