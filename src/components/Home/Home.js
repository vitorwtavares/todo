import React from 'react'
import { Flex, Text, Box } from '@chakra-ui/react'

import { Todo } from 'components'

const Home = () => {
  return (
    <Flex direction='column' align='center' justify='center' h='100vh' w='100%'>
      <Background />
      <Todo />
    </Flex>
  )
}

const Background = () => {
  const name = [
    'instalist',
    'instalist',
    'instalist',
    'instalist',
    'instalist',
    'instalist',
    'instalist',
    'instalist',
    'instalist'
  ]
  return (
    <Flex zIndex='0'>
      <Text
        position='absolute'
        top={0}
        left='15px'
        opacity='0.1'
        fontSize='6xl'
        fontWeight='600'
        color='brand.700'
        mb='22px'
        letterSpacing='13rem'
        textAlign='center'
      >
        instalis
        <Box as='span' letterSpacing='0px'>
          t
        </Box>
      </Text>
      {name.map((e, index) => (
        <Text
          position='absolute'
          top={`${(index + 1) * 10}%`}
          left='15px'
          opacity='0.1'
          fontSize='6xl'
          fontWeight='600'
          color='brand.700'
          mb='22px'
          letterSpacing='13rem'
          textAlign='center'
        >
          instalis
          <Box as='span' letterSpacing='0px'>
            t
          </Box>
        </Text>
      ))}
    </Flex>
  )
}

export default Home
