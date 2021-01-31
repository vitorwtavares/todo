import React, { useState } from 'react'
import { Checkbox, Text, Flex, Button, Icon, Input } from '@chakra-ui/react'
import { FiPlusCircle } from 'react-icons/fi'

const Todo = ({ ...props }) => {
  return (
    <Flex flexDirection='column' w='500px' h='500px' bg='neutral.300' borderRadius='12px' p='24px'>
      <Text fontSize='3xl' mb='16px'>
        Title
      </Text>
      <TodoItem />
      <Button
        colorScheme='neutral'
        leftIcon={<Icon as={FiPlusCircle} h='20px' w='20px' />}
        variant='outline'
        _hover={{ bg: 'none' }}
        mt='16px'
      >
        Add new item
      </Button>
    </Flex>
  )
}

const TodoItem = () => (
  <Flex>
    <Checkbox mr='12px' />
    <Input placeholder='todo item' />
  </Flex>
)

export default Todo
