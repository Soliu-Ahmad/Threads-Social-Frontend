import { AddIcon } from "@chakra-ui/icons";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	useDisclosure,
	FormControl,
	Textarea,
	Text,
	Input
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import usePreviewImg from "../hooks/usePreviewImg"
import {BsFillImageFill} from "react-icons/bs"


const CreatePosts = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const [postText, setPostText] = useState("")
	const imageRef = useRef(null);
	const {handleImageChange, imgUrl} = usePreviewImg()

	const handleTextChange = () => {

	}
	return (
		<>
			<Button
				pos={"fixed"}
				bottom={10}
				right={10}
				leftIcon={<AddIcon />}
				bg={"gray"}
                onClick={onOpen}
			>	
				Post
			</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create post</ModalHeader>
					<ModalCloseButton />
					<ModalBody  pd={6}>
                            <FormControl>
								<Textarea
									placeholder="Post Content goes here"
									onChange={handleTextChange}
									value={postText}
								/>
								<Text fontSize="xs" fontWeight="bold" textAlign={"right"} m={"1"} color={"gray.800 "}>
									500/500
								</Text>
								<Input type="file" hidden ref={imageRef} onChange={handleImageChange}/>

								<BsFillImageFill 
									style={{marginLeft: "5px", cursor: "pointer"}}
									size={16}
									onClick={() => imageRef.current.click()}
								/>
							</FormControl>

							
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default CreatePosts;
