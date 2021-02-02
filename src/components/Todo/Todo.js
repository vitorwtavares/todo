import React, { useState, useEffect } from 'react'
import { Checkbox, Flex, Icon, Input } from '@chakra-ui/react'
import { AiFillCloseCircle, AiOutlinePlus } from 'react-icons/ai'
import uuid from 'react-uuid'

const Todo = () => {
  const [todoList, setTodoList] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleKeyPress = e => {
    e.key === 'Enter' && handleCreate()
  }

  const handleCreate = () => {
    setTodoList([...todoList, { id: uuid(), description: newTodo, checked: false }])
    setNewTodo('')
  }

  useEffect(() => {
    console.log('effect', todoList)
  }, [todoList])

  return (
    <Flex
      flexDirection='column'
      w='500px'
      h='500px'
      bg='neutral.200'
      borderRadius='12px'
      p='24px'
      zIndex='1'
    >
      <Input
        variant='flushed'
        placeholder='Your title here'
        fontSize='2xl'
        fontWeight='600'
        mb='16px'
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
        />
        <Icon
          as={AiOutlinePlus}
          color='brand.700'
          w='20px'
          h='20px'
          ml='8px'
          cursor='pointer'
          onClick={() => handleCreate()}
        />
      </Flex>
      <Flex flexDirection='column' w='100%' h='100%' overflowY='auto'>
        {todoList.map(todo => (
          <Flex key={todo.id} alignItems='center'>
            <TodoItem todo={todo} todoList={todoList} setTodoList={setTodoList} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

const TodoItem = ({ todo, todoList, setTodoList }) => {
  const [checked, setChecked] = useState(false)

  const handleDelete = () => {
    setTodoList(todoList.filter(e => e.id !== todo.id))
  }

  return (
    <Flex w='100%' alignItems='center'>
      <Checkbox
        defaultValue={todo.checked || false}
        onChange={e => setChecked(e.target.checked)}
        mx='10px'
        colorScheme='blue'
      />
      <Input
        defaultValue={todo.description || ''}
        placeholder='List item goes here'
        variant='flushed'
        textDecoration={checked && 'line-through'}
      />
      <Icon
        as={AiFillCloseCircle}
        color='brand.700'
        cursor='pointer'
        onClick={() => handleDelete()}
      />
    </Flex>
  )
}

export default Todo
