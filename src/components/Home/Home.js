import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'

import { TodoCard } from 'components'

const Home = () => {
  return (
    <Flex direction='column' align='center' justify='center' h='100vh' w='100%' bg='neutral.500'>
      <Text fontSize='5xl' mb='50px' fontFamily='Monoton'>
        prgrss
      </Text>
      <TodoCard />
    </Flex>
  )
}

export default Home
