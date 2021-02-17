import React, { useState, useEffect, useCallback } from 'react'
import { Checkbox, Flex, Icon, Input, Progress, Box, Text } from '@chakra-ui/react'
import { AiFillCloseCircle, AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'
import uuid from 'react-uuid'

const TodoCard = () => {
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [checkedCount, setCheckedCount] = useState(0)
  const [progress, setProgress] = useState(0)
  const [goal, setGoal] = useState(1)

  const handleKeyPress = e => {
    e.key === 'Enter' && handleCreate()
  }

  const handleCreate = () => {
    setTodoList([...todoList, { id: uuid(), description: newTodo, checked: false }])
    setNewTodo('')
  }

  const isDone = useCallback(() => progress === 100, [progress])

  useEffect(() => {
    todoList.length > 0 && setGoal(todoList.length)
    setCheckedCount(todoList.filter(e => e.checked).length)
  }, [todoList])

  useEffect(() => {
    setProgress(Math.floor((checkedCount / goal) * 100))
  }, [checkedCount, goal])

  return (
    <Flex
      flexDirection='column'
      w='600px'
      h='600px'
      bg='neutral.0'
      borderRadius='12px'
      p='24px'
      zIndex='2'
    >
      <Input
        variant='flushed'
        placeholder='Your title here'
        fontSize='2xl'
        fontWeight='400'
        mb='16px'
        _focus={{ borderColor: 'brand.500' }}
      />
      <Flex alignItems='center'>
        <Input
          variant='flushed'
          placeholder='Add something to the list'
          fontSize='lg'
          mb='16px'
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          onKeyPress={e => handleKeyPress(e)}
          _focus={{ borderColor: 'brand.500' }}
        />
        <Icon
          as={AiOutlinePlus}
          color='brand.400'
          w='20px'
          h='20px'
          ml='8px'
          cursor='pointer'
          onClick={() => handleCreate()}
        />
      </Flex>
      <Flex flexDirection='column' w='100%' h='100%' overflowY='auto'>
        {todoList.map((todo, index) => (
          <Flex key={todo.id} alignItems='center'>
            <TodoItem todo={todo} itemIndex={index} todoList={todoList} setTodoList={setTodoList} />
          </Flex>
        ))}
      </Flex>
      <Box position='relative'>
        <Progress
          isAnimated
          hasStripe={isDone() ? false : true}
          value={progress}
          height='32px'
          colorScheme={isDone() ? 'green' : 'brand'}
          bg='neutral.600'
          borderRadius='2px'
        />
        <Text
          color='neutral.0'
          position='absolute'
          top='5px'
          left='266px'
          display={isDone() ? 'none' : 'block'}
          fontWeight='600'
        >
          {progress}%
        </Text>
        <Icon
          as={AiOutlineCheck}
          color='neutral.0'
          w={isDone() ? '20px' : '0px'}
          h='20px'
          position='absolute'
          top='5px'
          left='266px'
        />
      </Box>
    </Flex>
  )
}

const TodoItem = ({ todo, itemIndex, todoList, setTodoList }) => {
  const [checked, setChecked] = useState(false)

  const handleDelete = () => {
    setTodoList(todoList.filter(e => e.id !== todo.id))
  }

  const handleCheck = e => {
    setChecked(e.target.checked)

    let newTodoList = [...todoList]

    newTodoList[itemIndex] = {
      ...newTodoList[itemIndex],
      checked: !newTodoList[itemIndex].checked
    }

    setTodoList(newTodoList)
  }

  const handleEdit = description => {
    let newTodoList = [...todoList]

    newTodoList[itemIndex] = {
      ...newTodoList[itemIndex],
      description
    }

    setTodoList(newTodoList)
  }

  return (
    <Flex w='100%' alignItems='center'>
      <Checkbox
        defaultValue={todo.checked || false}
        onChange={e => handleCheck(e)}
        mx='10px'
        colorScheme='green'
      />
      <Input
        defaultValue={todo.description || ''}
        placeholder='List item goes here'
        variant='flushed'
        textDecoration={checked && 'line-through'}
        onBlur={e => handleEdit(e.target.value)}
        _focus={{ borderColor: 'brand.500' }}
      />
      <Icon
        as={AiFillCloseCircle}
        color='brand.400'
        cursor='pointer'
        onClick={() => handleDelete()}
      />
    </Flex>
  )
}

export default TodoCard
