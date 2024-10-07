import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard/GameCard";
// import GameCard from "../GameCard/GameCard";
function GameGrid() {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {isLoading && <Text>Loading games...</Text>}
      {error && <Text color="red.500">{error}</Text>}
      {!error && !isLoading && games && (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} padding={10} spacing={10}>
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
}

export default GameGrid;
