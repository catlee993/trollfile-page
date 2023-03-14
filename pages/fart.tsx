import {Box, Button, Flex, Heading, VStack} from "@chakra-ui/react";
import React, {useEffect, useState} from "react";

export default function Fart() {
    return (
        <Box>
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <VStack>
                    <Heading>another page</Heading>
                    <Button title={"push me"} onClick={
                        function () {
                            location.href = 'https://www.youtube.com/watch?v=QDia3e12czc&ab_channel=Everythingistroll'
                        }
                    }>this is a rick roll</Button>
                </VStack>
            </Flex>
        </Box>
    );
}