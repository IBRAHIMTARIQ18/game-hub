import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconsList from "./PlatformIconsList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import { IconButton } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { Emoji } from "./Emoji";

interface Props {
  game: Game;
  onClick: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const GameCard = ({ game, onClick, isFavorite, onToggleFavorite }: Props) => {
  return (
    <Box position="relative" onClick={onClick} cursor="pointer">
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
        <CardBody>
          <HStack justifyContent="space-between" marginBottom={2}>
            <PlatformIconsList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize={"2xl"}>
            {game.name}
            <Emoji rating={game.rating_top} />
            <IconButton
              aria-label="favorite"
              icon={<FaHeart />}
              position="absolute"
              top="10px"
              right="10px"
              zIndex={1}
              color={isFavorite ? "red.400" : "white"}
              onClick={(e) => {
                e.stopPropagation(); // prevent modal opening
                onToggleFavorite();
              }}
            />
          </Heading>
        </CardBody>
      </Card>
    </Box>
  );
};

export default GameCard;
