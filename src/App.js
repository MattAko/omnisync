import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/Card/Card'
import FavoriteCard from './components/FavoriteCard/FavoriteCard'

function App() {
  const [favorites, setFavorites] = useState([]);
  const [cards, setCards] = useState([]);


  // Hook passed to Card, in order to add to favorites state
  function addToFavorites(cardData, id){
    setFavorites([...favorites, cardData]);
    cards.splice(id, 1);
    setCards(cards);
  }

  // Hook passed to FavoriteCard, in order to add to cards state
  function removeFromFavorites(cardData, id){
    setCards([...cards, cardData])
    favorites.splice(id, 1);
    setFavorites(favorites);
  }

  function exportFavorites(){
    fetch('http://localhost:3001/post', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(favorites)
    })
    .then((res) => {
      alert(res.body);
    })
  }

  useEffect(() => {
    fetch('http://localhost:3001/fetch')
    .then(res => res.json())
    .then((result) => {
      setCards(result);
    })
  }, [])

  return (
    <div className="App">
      

      <h1 className="top center-text">
        Favorites
        <span><a onClick={exportFavorites} href='#'>Export Favorites to JSON</a></span>
      </h1>
      <div className="container">
        {favorites.map((card, index) => {
          return <FavoriteCard id={index} onClick={removeFromFavorites} key={index} data={card}></FavoriteCard>
        })}
      </div>
      <h1 className="center-text">Articles</h1>
      <div className="container">
        {cards.map((card, index) => {
          return <Card id={index} onClick={addToFavorites} key={index} data={card}></Card>
        })}
      </div>
    </div>
  );
}

export default App;
