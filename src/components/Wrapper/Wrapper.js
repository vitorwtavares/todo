import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    500: '#716040',
    400: '#8c7851'
  },
  neutral: {
    900: '#000',
    800: '#222',
    700: '#2a2a2a',
    600: '#C5C2BE',
    500: '#f9f4ef',
    300: '#ccc',
    200: '#eee',
    0: '#fffffe'
  }
}

const styles = {
  global: {
    body: {
      color: 'brand.500'
    }
  }
}

const theme = extendTheme({
  colors,
  styles
})

const Wrapper = ({ children }) => <ChakraProvider theme={theme}>{children}</ChakraProvider>

export default Wrapper
