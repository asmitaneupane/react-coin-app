import { useEffect, useState } from 'react';
import './App.css'
import Coin from './Coin';
import axios from 'axios';

function App() {

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('https://rest.coinapi.io/v1/exchangerate/USD?apikey=F7578EF9-4E87-406F-8762-B8CD6704F9E1&invert=true')
      .then(
        res => {
          setCoins(res.data.rates);
          console.log(coins, 'a');
        }
      )
      .catch(error => console.log(error))

  }, [])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = Object.values(coins).filter(coin =>
    coin.asset_id_quote.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='coin-app'>
      <div className="coin-search">
        <h1 className="coin-text">Search your desired coin</h1>
        <form action="">
          <input
            type="text"
            className="coin-input"
            placeholder="Provide the coin name"
            onChange={handleChange} />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.asset_id_quote}
            name={coin.asset_id_quote}
            price={coin.rate}
          />
        )
      })}
    </div>
  );
}

export default App;
