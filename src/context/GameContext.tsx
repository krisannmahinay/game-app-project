// context/GameContext.tsx

import React, { createContext, useState, useContext } from 'react';

// Define the Game type
export type Game = {
  name: string;
  img: string;
  category: string;
  provider: string;
};

// Define the GameContextType
export type GameContextType = {
  games: Game[];
  setGames: React.Dispatch<React.SetStateAction<Game[]>>;
  favorites: Game[];
  setFavorites: React.Dispatch<React.SetStateAction<Game[]>>;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
  selectedProvider: string;
  setSelectedProvider: React.Dispatch<React.SetStateAction<string>>;
};

// Create the context with the GameContextType or null as the default value
const GameContext = createContext<GameContextType | null>(null);

// GameProvider component to manage state
export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [games, setGames] = useState<Game[]>([]);
  const [favorites, setFavorites] = useState<Game[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedProvider, setSelectedProvider] = useState<string>('');

  return (
    <GameContext.Provider
      value={{
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

// Custom hook to use the context
export const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGameContext must be used within a GameProvider');
  }
  return context;
};
