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
    <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
      <ModalOverlay bg="blackAlpha.700" />

      <ModalContent
        mx={{ base: 4, sm: 6 }} // ✅ side spacing on mobile
        my={{ base: 10, md: 0 }} // ✅ vertical breathing space
        maxW={{ base: "95%", sm: "90%", md: "600px" }} // ✅ responsive width
        bg="gray.800"
        color="white"
        borderRadius={{ base: "16px", md: "25px" }}
        p={{ base: 2, md: 4 }}
        as={motion.div}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <ModalHeader
          fontSize={{ base: "md", md: "xl" }} // ✅ responsive text
          textAlign="center"
        >
          {game.name}
        </ModalHeader>

        <ModalCloseButton />

        <ModalBody>
          <Image
            src={game.background_image}
            borderRadius="10px"
            width="100%"
            maxH={{ base: "200px", md: "300px" }} // ✅ prevent overflow
            objectFit="cover"
          />

          <Text mt={3} textAlign="center" fontSize={{ base: "sm", md: "md" }}>
            ⭐ Rating: {game.rating}
          </Text>

          <Text
            mt={2}
            mb={3}
            textAlign="center"
            fontSize={{ base: "sm", md: "md" }}
          >
            📅 Released: {game.released}
          </Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default GameModal;
