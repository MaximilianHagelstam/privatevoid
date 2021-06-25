import {
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Textarea,
  useDisclosure,
} from '@chakra-ui/react';

export const ComposeButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button rounded={'full'} px={6} colorScheme="purple" onClick={onOpen}>
        Compose
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} colorScheme="whatsapp">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Compose a post</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <Textarea
                placeholder="What's happening?"
                size="lg"
                resize="none"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="purple" mr={3}>
              Publish
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};
