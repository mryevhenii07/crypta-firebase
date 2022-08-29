import React from "react";

import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinItem = ({ coin }) => {
  return (
    <tr>
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

      <th>
        <Sparklines data={coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </th>
    </tr>
  );
};

export default CoinItem;
