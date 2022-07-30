import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
  Box,
} from '@chakra-ui/react';
import Blog from '../Blog/Blog';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <>
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1580086319619-3ed498161c77?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGd5bXxlbnwwfHwwfHw%3D&w=1000&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Do something today that your future self will thank you for
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              size={'md'}
              _hover={{ bg: 'blue.500' }}>
             <Link to='/login'><Text>Login</Text></Link>
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              <Link to='/signup'><Text>Sign up</Text></Link>
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
    <Blog/>
    </>
  );
}