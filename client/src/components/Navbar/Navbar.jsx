import { ReactNode } from 'react';
import style from './Navbar.module.css';
import {
  Box,
  Flex,
  Text,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
  styled,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon, AddIcon } from '@chakra-ui/icons';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box   bg={'#23242A'} px={4} py={3} className={style.sticky} zIndex={'100'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
              <Heading>
               <Link to='/'><Text color={'white'}>Logo</Text></Link>
              </Heading>
            </Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
             <Link to='/todo'><Text color={'white'} fontWeight={'bold'}>Todo</Text></Link>
             <Link to='/bmi'><Text color={'white'} fontWeight={'bold'}>Bmi</Text></Link>
             <Link to='/chat'><Text color={'white'} fontWeight={'bold'}>Chat</Text></Link>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              bg={'blue.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}
              mr={'10px'}
             >
              My Account
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList color={'white'} bg={'#23242A'} _hover={{color:'black'}}>
                <MenuItem>Account</MenuItem>
                <MenuItem>Write</MenuItem>
                <MenuDivider />
                <MenuItem>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
             <Link to='/todo'><Text color={'white'}>Todo</Text></Link>
             <Link to='/bmi'><Text color={'white'}>Bmi</Text></Link>
             <Link to='/chat'><Text color={'white'}>Chat</Text></Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}