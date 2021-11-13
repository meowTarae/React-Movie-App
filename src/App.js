import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [valueOfBTC, setValueOfBTC] = useState([]);

  function getPriceOfBTC(p) {
    setValueOfBTC((currentArray) => [...currentArray, p]);
  }

  const [myMoney, setMyMoney] = useState();
  const onChange = (e) => setMyMoney(e.target.value);
  function onClick() {
    // 내 돈이랑, btc들 값이랑 비교해서 내가 살 수 있는 것만 나열하면 되.
    // 일단 전체 btc들 값을 얻어보자..
    // 얻기위해선 반복문 돌리면 되는거 아냐..?
    // 횟수는 coins.length, [...setMyMoney, new]이렇게말야
  }

  function dollarToWon(money) {
    const won = Math.floor(money * 1179);
    return won.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // 3자리마다 ,를 넣어줌
  }
  // console.log(valueOfBTC[0]);
  return (
    <div>
      <h1>Coin Tracker</h1>
      <h4>how much money do you have?</h4>
      <input
        value={myMoney}
        onChange={onChange}
        placeholder="단위 : 원"
        type="number"
      />
      <button onClick={onClick}>Click</button>

      <hr />

      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map(
          (coin, value) => (
            getPriceOfBTC(coin.quotes.USD.price),
            (
              <li key={value}>
                {coin.name}({coin.symbol}) ={" "}
                {dollarToWon(coin.quotes.USD.price)}원
              </li>
            )
          )
        )}
      </ul>
    </div>
  );
}

export default App;

// coin tracker
// how much money do you have?
// ㅁ
// you can buy this coins.. (total : 35coins)
// li
