import { Button, Center,  Heading, HStack, Input, InputGroup, InputRightElement, Switch, VStack, } from '@chakra-ui/react'
import Head from 'next/head'
import  Router  from 'next/router'
import { useState, useContext } from "react";
export default function Signup(){
    const [show, setShow] = useState(false);
    const [dark, setDark] = useState(false);
    return(
        <>
        <Head>
            <title>Signup</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <VStack
      color = {dark ? 'white':'black'} 
      bgImg= {dark? "/DarkMode.jpg": "/LightMode.jpg"}
      bgSize="100%"
      width="100%"
      height="100vh"
      >
      <HStack 
      justifyContent={"space-between"}
      spacing="1000" 
      mt="10" 
      >
        <HStack justifyContent={'flex-start'}
      >
          <Button
          colorScheme="DarkCyan"
          onClick={() => Router.push({ pathname: "/" })}
        >
          Home
        </Button>

        <Switch
                  paddingTop={"1"}
                  colorScheme={"teal"}
                  size={"md"}
                  onChange={() => setDark(!dark)}
                />
        
        </HStack>
        <HStack 
      justifyContent={"space-between"} 
      mt="3" 
      mr="5" >
        
        <HStack justifyContent="flex-end" spacing="5">

        <Button 
        colorScheme="darkcyan"
        onClick={() => Router.push({ pathname: "/signin" })}>
          Sign-in
          </Button>

        <Button
          colorScheme="DarkCyan"
          onClick={() => Router.push({ pathname: "/signup" })}>
          Sign-up
        </Button>
          </HStack>
        </HStack>
      </HStack>

    <Heading><Center>Register</Center></Heading> 

    <Center>
        <VStack paddingTop='50'>
            <Input placeholder='Username' />
            <InputGroup size='md'>
            <Input
              pr='4.5rem'
              type={show ? 'text' : 'password'}
              placeholder='Enter password'
              />
      <InputRightElement width='4.5rem'>
      <Switch
        paddingTop={"1"}
        colorScheme={"teal"}
        size={"md"}
        onChange={() => setShow(!show)}
        
      />
      </InputRightElement>
      </InputGroup>
            <Input placeholder='Email Address' />
            <Input
                placeholder="Select Date and Time"
                size="md"
                type="date"/>
        </VStack>
    </Center>
    </VStack>
    </>
    );
}