import React from 'react'
import { Box,Text,Heading,Input,HStack,Button, Divider, VStack } from '@chakra-ui/react'
import axios from 'axios';
import  { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import {Link} from 'react-router-dom';
import { postTodosFailure, postTodosLoading, postTodosSuccess } from '../redux/Todo/action';
import { getTodosFailure, getTodosLoading, getTodosSuccess, removeTodosFailure, removeTodosLoading, removeTodosSuccess, toggleTodosFailure, toggleTodosLoading, toggleTodosSuccess } from '../redux/Todo/action';

export const Exercise = () => {
  const todos = useSelector((state)=>state.todos.todo);
  const dispatch = useDispatch();
  const[task,setTask] = useState("");
  const handleChange = (e)=>{
    setTask(e.target.value);
    
  }
  const handleClick = ()=>{
    dispatch(postTodosLoading());
    axios.post("https://gym-chat-app-live.herokuapp.com/product",{
      Exercise_list:task,
    })
    .then((r)=>dispatch(postTodosSuccess(r.data)))
    .catch((e)=>dispatch(postTodosFailure()))
    setTask("");
  }
  const getTodos = ()=>{
    dispatch(getTodosLoading());
    axios.get("https://gym-chat-app-live.herokuapp.com/product")
    .then((r)=>dispatch(getTodosSuccess(r.data)))
    .catch((e)=>dispatch(getTodosFailure()));
  }
  const handleRemove = (id)=>{
    console.log(id);
    dispatch(removeTodosLoading());
    axios.delete(`https://gym-chat-app-live.herokuapp.com/product/${id}`)
    .then((r)=>{dispatch(removeTodosSuccess(id))
    })
    .catch((e)=>dispatch(removeTodosFailure()));
  }
  useEffect(()=>{
    getTodos();
  },[todos]);
  return (
    <>
    <Heading><Text textAlign={'center'}>Exercises</Text></Heading>
    <Box w={'100%'} h={"100vh"} display={'flex'} justifyContent={'center'} mt={'50px'}>
      <Box h={"400px"} w={'350px'} >
      <HStack py={4} px={4}>
      <Input placeholder='Exercise'  size={'md'} value={task} onChange={handleChange}/>
      <Button bg={'blue.300'} size='md' color={'white'} onClick={handleClick}>+</Button>
      </HStack>
      {todos?.map((ele)=>{
        return (
          <VStack key={ele._id} align={'left'}>
          <HStack my={3}>
            <Text mr={"auto"} ml={4}>{ele.Exercise_list}</Text>
            <Button onClick={()=>handleRemove(ele._id)}>Delete</Button>
          </HStack>
          <Divider />
          </VStack>
        )
      })}
      </Box>
    </Box>
    </>
  )
}
