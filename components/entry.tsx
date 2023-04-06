import {
    Accordion,
    AccordionButton,
    AccordionItem,
    AccordionPanel, Box, Button, Divider,
    Flex,
    Heading,
    Image, Img, Text,
    Tooltip,
    VStack, Wrap
} from "@chakra-ui/react";
import {Profile} from "@/components/profile";
import {FartButton} from "@/components/fartButton";
import {SchwarzeneggerButton} from "@/components/schwarzeneggerButton";
import {MusicButton} from "@/components/musicButton";
import React, {useState} from "react";
import {TheDrawer} from "@/components/drawer";
import FileUploadModal from "@/components/fileUploadModal";

export function Entry() {
    const [urls, setUrls] = useState<String[]>([]);

    async function handleClick() {
        await fetch('http://127.0.0.1:8080/junk', {
            method: 'GET',
        }).then((response) => response.json())
        .then((data) => {
            console.log(data)
            const urls: String[] = [];
            for (const url of data.urls) {
                urls.push(url)
            }
            setUrls(urls)
        })
    }

    return (
        <>
            <TheDrawer/>
            <Flex alignItems="center" alignContent='center' justifyContent="center" paddingTop={'30'}>
                <VStack alignItems="center" justifyContent="center">
                    <Tooltip
                        label={'my favorite scene from the sound of music when julie andrews dances away without looking at the explosion from the hydrogen bomb she just dropped on fucking nazis'}>
                        <Image
                            src={'julie-andrews-the-badass.png'}
                            boxSize={'350px'}
                            borderRadius={'full'}
                            className={'skill'}
                        />
                    </Tooltip>
                    <Accordion allowToggle borderColor={'purple.700'} maxWidth={420}>
                        <AccordionItem>
                            <AccordionButton justifyContent={'center'}>
                                <Heading alignSelf={'center'}>about</Heading>
                            </AccordionButton>
                            <AccordionPanel>
                                <Heading size='md' textAlign={'center'}>she/her</Heading>
                                <Divider borderColor={'purple.700'} borderWidth={1}/>
                                <Profile/>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton justifyContent={'center'}>
                                <Heading alignSelf={'center'}>buttons</Heading>
                            </AccordionButton>
                            <AccordionPanel justifyItems={'center'} alignItems={'center'} justifyContent={'center'}
                                            alignContent={'center'}>
                                <Wrap spacing='15px' justify={'center'}>
                                    <Wrap>
                                        <FartButton/>
                                    </Wrap>
                                    <Wrap>
                                        <SchwarzeneggerButton/>
                                    </Wrap>
                                    <Wrap>
                                        <MusicButton/>
                                    </Wrap>
                                </Wrap>
                            </AccordionPanel>
                        </AccordionItem>
                        <AccordionItem>
                            <AccordionButton justifyContent={'center'}>
                                <Heading alignSelf={'center'}>api backed controls</Heading>
                            </AccordionButton>
                            <AccordionPanel>
                                <VStack>
                                    <Text color={'purple.100'}>obviously i&apos;m limiting traffic for this stuff.</Text>
                                    <FileUploadModal/>
                                    <Button onClick={handleClick}>here&apos;s stuff button</Button>
                                    <Box>
                                    <>
                                        {urls.length > 0 && urls.map(k => (
                                            <Img key={'whatever'+k.toString()}
                                                 maxWidth={'300px'}
                                                 maxHeight={'300px'}
                                                 src={k.toString()}
                                            />
                                        ))}
                                    </>
                                    </Box>
                                </VStack>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </VStack>
            </Flex>
        </>
    )
}