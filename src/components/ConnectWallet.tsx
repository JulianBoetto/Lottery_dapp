import { useWeb3React } from "@web3-react/core";
import React from "react";
import { injected } from "../utils/connectors";

const ConnectWallet: React.FC = () => {
  const web3 = useWeb3React();

  return (
    <div className="m-3">
      <button
       type="button"
        className="btn btn-light"
        onClick={() => (!web3.account ? web3.activate(injected) : null)}
        >
        {!web3.account ? "Connect Wallet" : web3.account}
      </button>
    </div>
  );
};

export default ConnectWallet;