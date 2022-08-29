import React from "react";
import { AiOutlineStar } from "react-icons/ai";

const coinSearch = ({ coins }) => {
  console.log(coins);
  return (
    <div>
      <div>
        <h1>Search Crypto</h1>
        <form action="">
          <input type="text" placeholder="Search a coin" />
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>#</th>
            <th>Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th>24h volume</th>
            <th>Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => {
            return (
              <tr key={coin.id}>
                <th>
                  <AiOutlineStar />
                </th>
                <th>{coin.market_cap_rank}</th>
                <th>
                  <div>
                    <img src={coin.image} alt="img" />
                    <p>{coin.name}</p>
                  </div>
                </th>
                <th>{coin.symbol}</th>
                <th>{coin.current_price}</th>
                <th>{coin.price_change_percentage_24h}</th>
                <th>{coin.total_volume}</th>
                <th>{coin.market_cap}</th>
                <th>{coin.sparkline_in_7d.price}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default coinSearch;
