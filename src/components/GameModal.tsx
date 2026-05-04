import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
interface Props {
  isOpen: boolean;
  onClose: () => void;
  game: any;
}

const GameModal = ({ isOpen, onClose, game }: Props) => {
  if (!game) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
      <ModalOverlay borderRadius={60} />
      <ModalContent
        bg="gray.800"
        color="white"
        fontSize={"large"}
        borderRadius={25}
        as={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <ModalHeader fontSize={"x-large"} textAlign={"center"}>
          {game.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image src={game.background_image} borderRadius="10px" />
          <Text mt={3} textAlign={"center"}>
            ⭐ Rating: {game.rating}
          </Text>
          <Text mt={3} mb={3} textAlign={"center"}>
            📅 Released: {game.released}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GameModal;
