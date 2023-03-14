import { extendTheme } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config = {
    initialColorMode: 'system',
    useSystemColorMode: true,
}

const theme = extendTheme({ config })

export default theme