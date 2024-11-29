import React, { useEffect } from 'react';
import { useGameContext } from './context/GameContext';
import { Game } from './context/GameContext'; // Import the Game type
import Carousel from './components/carousel';

const App = () => {
  const {
    games,
    setGames,
    favorites,
    setFavorites,
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedProvider,
    setSelectedProvider,
  } = useGameContext();

  useEffect(() => {
    const fetchGames = async () => {
      const mockGames: Game[] = [
        { name: 'Bad Wolf', img: './bad-wolf.webp', category: 'SLOTS', provider: 'GameArt' },
        { name: 'Sugar Rush', img: './sugar-rush.webp', category: 'NEW', provider: 'PragmaticPlay' },
      ];
      setTimeout(() => setGames(mockGames), 3000);
    };

    fetchGames();
  }, [setGames]);

  return (
    <div>
      <h1>Game List</h1>
      <Carousel />  {/* Carousel component */}
      {/* Render games, search, filters, etc. */}
      <div>
        {games.map((game, index) => (
          <div key={index}>
            <h2>{game.name}</h2>
            <img src={game.img} alt={game.name} />
            <p>Category: {game.category}</p>
            <p>Provider: {game.provider}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;


