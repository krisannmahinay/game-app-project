export const fetchGames = async () => {
  const games = [
    { name: 'Bad Wolf', img: './bad-wolf.webp', category: 'SLOTS', provider: 'GameArt' },
    { name: 'Sugar Rush', img: './sugar-rush.webp', category: 'NEW', provider: 'PragmaticPlay' },
    // Add more games as needed
  ];

  return new Promise<{ name: string; img: string; category: string; provider: string }[]>((resolve) =>
    setTimeout(() => resolve(games), 3000)
  );
};
