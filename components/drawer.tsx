import {useDisclosure} from "@chakra-ui/hooks";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input, LinkBox, Link, Divider,
} from '@chakra-ui/react'
import React, {useRef} from "react";
import {HamburgerIcon} from "@chakra-ui/icons";

export function TheDrawer() {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const btnRef = useRef<HTMLButtonElement>(null);

    return (
        <>
            <Button ref={btnRef} colorScheme='whiteAlpha' onClick={onOpen}>
                <HamburgerIcon color={'purple.500'}/>
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay/>
                <DrawerContent>
                    <DrawerCloseButton/>
                    <DrawerHeader><u>Miscellaneous</u></DrawerHeader>

                    <DrawerBody>

                        <Link href={'https://github.com/catlee993'} color={'purple.300'}>My Github</Link>

                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}