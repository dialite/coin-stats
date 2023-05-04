import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoinDetails } from "../redux/coinDetailsSlice";
import "../styles/loader.css";
import "../styles/coinInfo.css";

const CoinInfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const coinsData = useSelector((state) => state.details);
  const { loading, CoinInfo } = coinsData;

  useEffect(() => {
    dispatch(getCoinDetails(params.id));
  }, [dispatch, params.id]);

  if (loading) {
    return <div className="loader" />;
  }

  return (
    <div className="coin-details">
      <div className="hero">
        <img src={CoinInfo.icon} alt="coin-icon" />
        <h2>{CoinInfo.name}</h2>
      </div>
      <div className="details">
        <h2>{CoinInfo.name} Details:</h2>
        <ul>
          <li>
            <span>Name</span>
            <span>{CoinInfo.name}</span>
          </li>
          <li>
            <span>Symbol</span>
            <span>{CoinInfo.symbol}</span>
          </li>
          <li>
            <span>Rank</span>
            <span>{CoinInfo.rank}</span>
          </li>
          <li>
            <span>Price to USD</span>
            <span>
              {" $"}
              {CoinInfo.price < 1000
                ? CoinInfo.price.toFixed(2)
                : (CoinInfo.price / 1000).toFixed(1)}
              {CoinInfo.price > 1000 ? "K" : ""}
            </span>
          </li>
          <li>
            <span>Daily Change</span>
            <span>{CoinInfo.priceChange1d}%</span>
          </li>
          <li>
            <span>Volume</span>
            <span>${(CoinInfo.volume / 1000000000).toFixed(1)}B</span>
          </li>
          <li>
            <span>Market Cap</span>
            <span>${(CoinInfo.marketCap / 1000000000).toFixed(1)}B</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CoinInfo;
