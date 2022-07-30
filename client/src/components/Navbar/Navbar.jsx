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
import { useDispatch } from 'react-redux/es/exports';
import {useNavigate,useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import { outTodosLoading, outTodosSuccess } from '../../redux/Auth/action';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = useSelector((state)=>state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLog = ()=>{
    if(token){
      dispatch(outTodosSuccess('token_'))
    }
    else{
      navigate('/login');
    }
  }
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
               <Link to='/'><Text color={'white'}>ProGym</Text></Link>
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
              <Link to='/login'><Text>My Account</Text></Link>
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
                    'data:image/png;base64,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'
                  }
                />
              </MenuButton>
              <MenuList color={'white'} bg={'#23242A'} _hover={{color:'black'}}>
                <MenuItem>Account</MenuItem>
                <MenuItem>Write</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLog}>{token!=""?"Logout":"Login"}</MenuItem>
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