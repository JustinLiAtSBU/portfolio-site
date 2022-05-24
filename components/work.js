import { Badge } from "@chakra-ui/react"

export const Meta = ({ fontSize, children }) => (
  <Badge colorScheme="green" mr={2} fontSize={fontSize}>
    {children}
  </Badge>
)