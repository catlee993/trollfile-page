import {ChangeEvent, useState} from 'react';
import {
    Button,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure, useToast,
} from '@chakra-ui/react';

export default function FileUploadModal() {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const {isOpen, onOpen, onClose} = useDisclosure()
    const toast = useToast()

    function handleFileSelect(e: ChangeEvent<HTMLInputElement>) {
        if (e.currentTarget.files?.length) {
            setSelectedFile(e.currentTarget.files[0]);
        }
    }

    async function handleSubmit() {
        if (!selectedFile) {
            toast({
                title: 'missing the file',
                status: 'error',
                isClosable: true,
            })

            return
        }
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await fetch('http://127.0.0.1:8080/junk', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        console.log(data);

        onClose();
    }

    return (
        <>
            <Button onClick={onOpen}>s3 upload</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                    <ModalHeader>add some shit to s3</ModalHeader>
                    <ModalBody>
                        <Input type="file" onChange={handleFileSelect}/>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                            Upload
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}