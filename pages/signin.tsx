import { Img, Button, HStack, Switch, Text, VStack, useDisclosure, Modal, ModalCloseButton, ModalContent, ModalOverlay, Center, Input, InputGroup, InputRightElement, useToast, } from '@chakra-ui/react'
import { query, collection, where, getDocs } from 'firebase/firestore';
import Head from 'next/head'
import  Router  from 'next/router'
import { useEffect, useState } from 'react';
import { db } from '../firebase/config'

export default function Profile(){
    const [show, setShow] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [dark, setDark] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const toast = useToast();

    let logo = '/projectUNO.png'
   
    useEffect(() => {
    
    }, []);

    async function getData(){
      const verify_ref = query(
        collection(db, "user"),
        where("username", "==", username)
      );
    }

    async function login(){
      const verify_ref = query(
        collection(db, "user"),
        where("username", "==", username)
      );
      const verification = await getDocs(verify_ref);
      verification.docs.map((doc) => {
        // doc.data() is never undefined for query doc snapshots
        if (doc.data().length != 0 && doc.data().password == password) {
          toast({
            title: "Log in successful",
            description: "Loading dashboard...",
            status: "success",
            duration: 2500,
            isClosable: true,
            position: "bottom-right",
          });
         console.log(doc.data())

          Router.push({ pathname: "/dashboard" })

        } else {
          toast({
            title: "Log in failed",
            description: "invalid input",
            status: "error",
            duration: 2500,
            isClosable: true,
            position: "bottom-right",
          });
          console.log(doc.data())
        }
      });
      setUsername("");
      setPassword("");
    }


    return(
        <><Head>
            <title>Profile</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        {/* BODY */}
      <VStack 
      color = {dark ? 'white':'black'}
      bgImg= {dark? "/DarkMode.jpg": "/LightMode.jpg"}
      bgSize="100%"
      width= "100%"
      height= "100vh"
      overflow = 'hidden'
      >
      <HStack 
      mt='8'
      justifyContent={"space-between"}
      spacing="1100"
      >
        {/* LEFT SIDE */}
        <HStack justifyContent={'flex-start'}
        >
         <Img    
          h='50'
          w='15vh'
          src = {logo}/>
        <Switch
                  paddingTop={"1"}
                  colorScheme={"teal"}
                  size={"md"}
                  onChange={() => setDark(!dark)}
                />
                <Button
          colorScheme="DarkCyan"
          onClick={() => Router.push({ pathname: "/" })}
        >
            Home
        </Button>


        </HStack>
        {/* RIGHT SIDE */}
        <HStack 
       
        justifyContent="flex-end" 
        spacing="5">
        <Text 
        _hover={{cursor:'pointer',color:'darkblue', transform:'scale(1.2)', transitionDuration:'.2s'}}
        onClick={() => Router.push({ pathname: "https://www.facebook.com/Mikmikey24/" })}
        as='b'>
        </Text>

        <Button
          colorScheme="DarkCyan"
          onClick={() => Router.push({ pathname: "/signup" })}>
          Sign up
        </Button>
        </HStack>
      </HStack>

      <Center>
        <VStack 
        paddingTop='50'>
            <Input 
            onChange={(value) => setUsername(value.target.value)}
            placeholder='Username' />
            <InputGroup size='md'>
            <Input
            onChange={(value) => setPassword(value.target.value)}
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

        <Button
          colorScheme="DarkCyan"
          onClick={() => {
            login();
          }}>
          Log in
        </Button>

        </VStack>
        </Center>
        </VStack>
        </>
  );
}