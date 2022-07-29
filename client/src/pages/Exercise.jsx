import React from 'react'
import { Box,Text,Heading,Input,HStack,Button, Divider, VStack } from '@chakra-ui/react'
export const Exercise = () => {
  return (
    <>
    <Heading><Text textAlign={'center'}>Exercises</Text></Heading>
    <Box w={'100%'} h={"100vh"} display={'flex'} justifyContent={'center'} mt={'50px'}>
      <Box h={"400px"} w={'350px'} >
      <HStack py={4} px={4}>
      <Input placeholder='medium size'  size={'md'} />
      <Button colorScheme='teal' size='md'>+</Button>
      </HStack>
      <Divider/>
      <HStack mb={'20px'}>
        <Text mr={'auto'}>Chest</Text>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </HStack>
      <Divider/>
      <HStack mb={'20px'}>
        <Text mr={'auto'}>Biceps</Text>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </HStack>
      <Divider/>
      <HStack mb={'20px'}>
        <Text mr={'auto'}>Legs</Text>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </HStack>
      <Divider/>
      </Box>
    </Box>
    </>
  )
}
