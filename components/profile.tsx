import {Divider, Flex, Link, ListItem, UnorderedList, VStack} from "@chakra-ui/react";
import React from "react";

export function Profile() {
    return (
        <VStack alignSelf={'center'} divider={<Divider borderColor='purple.700' borderWidth={1}/>}>
            <Flex>
                <UnorderedList color={'purple.100'}>
                    <ListItem>i&apos;m a nerd that does software
                        for <b>money</b> and <b>fun</b></ListItem>
                    <ListItem>used to get <b>paid</b> for mechanical & controls
                        engineering.</ListItem>
                    <ListItem>work xp in aerospace, tech, and <b>worldly wisdom</b>.</ListItem>
                    <ListItem>my favorite number is <b>69</b> because if you rotate it the entire
                        way of 180°, it is still <b>69</b></ListItem>
                    <ListItem>i like to use <b>69</b> in unit tests because it is a versatile number
                        and is odd, and goes well with <b>420</b> which is even and cool</ListItem>
                    <ListItem>people think i am in my <b>teens</b> or <b>early 20s</b>, which is
                        cool because i am in my <b>mid 30s</b></ListItem>
                    <ListItem><Link title={'timecube'} href={'https://timecube.2enp.com'}><u>religious
                        views</u></Link></ListItem>
                </UnorderedList>
            </Flex>
        </VStack>
    )
}