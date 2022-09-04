import React, { useState, useEffect, lazy, Suspense } from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { AuthContextProvider } from "./context/AuthContext";

const Home = lazy(() => import("./routes/Home"));
const Signin = lazy(() => import("./routes/Signin"));
const Signup = lazy(() => import("./routes/Signup"));
const Account = lazy(() => import("./routes/Account"));
const CoinPage = lazy(() => import("./routes/CoinPage"));

function App() {
  const [coins, setCoins] = useState([]);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true`;
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data);
    });
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={
              <Suspense>
                <Home coins={coins} />
              </Suspense>
            }
          />

          <Route
            path="/signin"
            element={
              <Suspense>
                <Signin />
              </Suspense>
            }
          />

          <Route
            path="/signup"
            element={
              <Suspense>
                <Signup />
              </Suspense>
            }
          />
          <Route
            path="/account"
            element={
              <Suspense>
                <Account />
              </Suspense>
            }
          />

          <Route
            path="/coin/:coinId"
            element={
              <Suspense>
                <CoinPage />
              </Suspense>
            }
          />
          <Route path=":coinId" />
        </Routes>

        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
