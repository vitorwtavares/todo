import React, { useState } from 'react'
import { Checkbox, Flex, Button, Icon, Input } from '@chakra-ui/react'
import { AiFillCloseCircle, AiOutlinePlus } from 'react-icons/ai'

const Todo = () => {
  const [todoList, setTodoList] = useState([])

  return (
    <Flex flexDirection='column' w='500px' h='500px' bg='neutral.200' borderRadius='12px' p='24px'>
      <Input
        variant='flushed'
        placeholder='Your title here'
        fontSize='2xl'
        fontWeight='600'
        mb='16px'
      />
      <Flex alignItems='center'>
        <Input variant='flushed' placeholder='Add something to the list' fontSize='lg' mb='16px' />
        <Icon
          as={AiOutlinePlus}
          color='brand.700'
          w='20px'
          h='20px'
          ml='8px'
          cursor='pointer'
          onClick={() =>
            setTodoList([
              ...todoList,
              { index: todoList.length + 1, description: '', checked: false }
            ])
          }
        />
      </Flex>
      <Flex flexDirection='column' w='100%' h='100%' overflowY='auto'>
        {todoList.map((todo, index) => (
          <Flex key={index} alignItems='center'>
            <TodoItem todo={todo} />
            <Icon
              as={AiFillCloseCircle}
              color='brand.700'
              cursor='pointer'
              onClick={() => setTodoList(todoList.filter(e => e.index !== todo.index))}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}

const TodoItem = ({ todo }) => {
  const [description, setDescription] = useState('')
  const [checked, setChecked] = useState(false)

  return (
    <Flex w='100%'>
      <Checkbox
        defaultValue={todo.checked || false}
        onChange={e => setChecked(e.target.checked)}
        mx='10px'
        colorScheme='blue'
      />
      <Input
        defaultValue={todo.description || ''}
        onChange={e => setDescription(e.target.value)}
        placeholder='List item goes here'
        variant='flushed'
      />
    </Flex>
  )
}

export default Todo
