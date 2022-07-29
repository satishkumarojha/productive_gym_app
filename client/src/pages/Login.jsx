import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import { useState,useEffect } from 'react'; 
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import {useNavigate,useLocation} from "react-router-dom";
import { useSelector } from 'react-redux';
import { authTodosFailure, authTodosLoading, authTodosSuccess } from '../redux/Auth/action';
  export default function Login() {
    const loading = useSelector((state)=>state.auth.isLoading);
    const token = useSelector((state)=>state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const[info,setInfo] = useState({
        email:"",
        password:""
    })
    const handleChange = (e)=>{
        let{name,value} = e.target;
        setInfo({...info,[name]:value});
    }
    const handleLogin = ()=>{
        dispatch(authTodosLoading());
        axios.post("http://localhost:3001/login",{
            email:info.email,
            password:info.password
        }).then((r)=>{
            console.log(r.data)
            dispatch(authTodosSuccess(r.data))
            navigate("/")
        })
        .catch((e)=>dispatch(authTodosFailure(e)));
    }
    useEffect(() => {
        if (token) {
          navigate(location.state.pathname || "/", { replace: true });
        }
      }, [navigate, token]);
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email'value={info.email} onChange={handleChange} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' value={info.password} onChange={handleChange}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  onClick={handleLogin}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }