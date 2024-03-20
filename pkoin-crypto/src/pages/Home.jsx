import React from 'react';
import { Link } from 'react-router-dom';
import Homestore from '../stores/Homestore';

function Home() {
  const store = Homestore();

  React.useEffect(() => {
    store.fetchCoins()
  }, []);

  return (
    <div>
      <input type="text" value ={store.query} onChange={store.setQuery}/>
      {store.coins.map(coin => (
        <div key={coin.id}> 
          <Link to={`/${coin.id}`}>{coin.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
