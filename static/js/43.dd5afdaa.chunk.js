"use strict";(self.webpackChunkcrypta_firebase=self.webpackChunkcrypta_firebase||[]).push([[43],{43:function(e,s,a){a.r(s);var t=a(885),l=a(2791),i=a(6871),r=a(4569),d=a.n(r),n=a(3733),c=a(6355),x=a(8703),h=a.n(x),m=a(184);s.default=function(){var e,s,a,r,x,p,j,o,_=(0,l.useState)([]),u=(0,t.Z)(_,2),g=u[0],v=u[1],k=(0,i.UO)().coinId,y="https://api.coingecko.com/api/v3/coins/".concat(k,"?localization=false&sparkline=true");return(0,l.useEffect)((function(){d().get(y).then((function(e){v(e.data)}))}),[y]),(0,m.jsxs)("div",{className:"rounded-div my-12 py-8",children:[(0,m.jsxs)("div",{className:"flex py-8",children:[(0,m.jsx)("img",{className:"w-20 mr-8",src:null===(e=g.image)||void 0===e?void 0:e.large,alt:"img"}),(0,m.jsxs)("div",{children:[(0,m.jsxs)("p",{className:"text-3xl font-bold",children:[null===g||void 0===g?void 0:g.name," price"]}),(0,m.jsxs)("p",{children:[" (",null===(s=g.symbol)||void 0===s?void 0:s.toUpperCase(),"/USD)"]})]})]}),(0,m.jsxs)("div",{className:"grid md:grid-cols-2 gap-8",children:[(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"flex justify-between",children:[null!==(a=g.market_data)&&void 0!==a&&a.current_price?(0,m.jsxs)("p",{className:"text-3xl font-bold",children:["$",g.market_data.current_price.usd.toLocaleString()]}):null,(0,m.jsx)("p",{children:"7 Day"})]}),(0,m.jsx)("div",{children:(0,m.jsx)(n.Sparklines,{data:null===(r=g.market_data)||void 0===r?void 0:r.sparkline_7d.price,children:(0,m.jsx)(n.SparklinesLine,{color:"teal"})})}),(0,m.jsxs)("div",{className:"flex justify-between py-4",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"Market Cap"}),null!==(x=g.market_data)&&void 0!==x&&x.market_cap?(0,m.jsxs)("p",{children:["$",g.market_data.market_cap.usd.toLocaleString()]}):null]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"Volume (24h)"}),null!==(p=g.market_data)&&void 0!==p&&p.market_cap?(0,m.jsxs)("p",{children:["$",g.market_data.total_volume.usd.toLocaleString()]}):null]})]}),(0,m.jsxs)("div",{className:"flex justify-between py-4",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"24h High"}),null!==(j=g.market_data)&&void 0!==j&&j.high_24h?(0,m.jsxs)("p",{children:["$",g.market_data.high_24h.usd.toLocaleString()]}):null]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"24h Low"}),null!==(o=g.market_data)&&void 0!==o&&o.low_24h?(0,m.jsxs)("p",{children:["$",g.market_data.low_24h.usd.toLocaleString()]}):null]})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-xl font-bold",children:"Market Stats"}),(0,m.jsxs)("div",{className:"flex justify-between py-4",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"Market Rank"}),g.market_cap_rank]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"Hashing Algorithm"}),g.hashing_algorithm?(0,m.jsx)("p",{children:g.hashing_algorithm}):null]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:" Trust Score"}),g.tickers?(0,m.jsx)("p",{children:g.liquidity_score.toFixed(2)}):null]})]}),(0,m.jsxs)("div",{className:"flex justify-between py-4",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"Price Change (24h)"}),g.market_data?(0,m.jsxs)("p",{children:[g.market_data.price_change_percentage_24h.toFixed(2),"%"]}):null]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"Price Change (7d)"}),g.market_data?(0,m.jsxs)("p",{children:[g.market_data.price_change_percentage_7d.toFixed(2),"%"]}):null]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"Price Change (14d)"}),g.market_data?(0,m.jsxs)("p",{children:[g.market_data.price_change_percentage_14d.toFixed(2),"%"]}):null]})]}),(0,m.jsxs)("div",{className:"flex justify-between py-4",children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"Price Change (30d)"}),g.market_data?(0,m.jsxs)("p",{children:[g.market_data.price_change_percentage_30d.toFixed(2),"%"]}):null]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"Price Change (60d)"}),g.market_data?(0,m.jsxs)("p",{children:[g.market_data.price_change_percentage_60d.toFixed(2),"%"]}):null]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("p",{className:"text-gray-500 text-sm",children:"Price Change (1y)"}),g.market_data?(0,m.jsxs)("p",{children:[g.market_data.price_change_percentage_1y.toFixed(2),"%"]}):null]})]}),(0,m.jsxs)("div",{className:"flex justify-around p-8 text-accent",children:[(0,m.jsx)(c.fWC,{}),(0,m.jsx)(c.Am9,{}),(0,m.jsx)(c.hrS,{}),(0,m.jsx)(c.hJX,{})]})]})]}),(0,m.jsxs)("div",{className:"py-4",children:[(0,m.jsxs)("p",{className:"text-xl font-bold",children:["About ",g.name]}),(0,m.jsx)("p",{dangerouslySetInnerHTML:{__html:h().sanitize(g.description?g.description.en:"")}})]})]})}}}]);
//# sourceMappingURL=43.dd5afdaa.chunk.js.map