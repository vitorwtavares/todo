import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

import { Todo } from 'components'

const Home = () => {
  return (
    <Flex align='center' justify='center' h='100vh' w='100%'>
      <Todo />
    </Flex>
  )
}

export default Home
