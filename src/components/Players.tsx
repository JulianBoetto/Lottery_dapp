
import React, { useEffect, useState } from "react";
import { useLottery } from "../hooks/useLottery";

const Players: React.FC = () => {
  const contract = useLottery();
  const [players, setPlayers] = useState([]);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (contract) {
      contract.methods.getPlayers().call((err: any, res: any) => {
        if (err) {
          console.error(err);
        } else {
          setPlayers(res);
          setShowCard(true);
        }
      });
    }
  }, [contract]);

  return (
    <div className="card text-bg-dark mb-3 m-3">
      {showCard ? (
        <>
          <div className="card-header">Wallet Address</div>
          {players?.map((p, index) => (
            <div key={index} className="card-body">
              <div className="container text-center">
                <div className="row">
                  <div className="col">
                    <p>{p}</p>
                  </div>
                  <div className="col">
                      <a
                      type="button"
                      className="btn btn-primary"
                        href={`https://testnet.bscscan.com/address/${p}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <i className="bi bi-eye" />
                      </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <>
        </>
      )}
    </div>

  );
};

export default Players;