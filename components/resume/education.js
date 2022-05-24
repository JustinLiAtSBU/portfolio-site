import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react"
import { Meta } from "../work"

const Education = ({ color }) => {
  return (
    <Box h="100vh">
      <Heading color={color} as="h1" fontSize='100px'>
        Education
      </Heading>
      <Box>
        <Text fontSize="5xl">Stony Brook University</Text>
        <Text fontSize="2xl">Stony Brook, New York</Text>
        <Text fontSize="2xl">2017 - 2021</Text>
        <List fontSize="xl" p={2}>
          <ListItem p={1}>
            <Meta fontSize="md">Degree</Meta>
            B.S. in Computer Science
          </ListItem>
          <ListItem p={1}>
            <Meta fontSize="md">GPA</Meta>
            3.7/4.0
          </ListItem>
        </List>
      </Box>

      <Box>
        <Text fontSize="5xl">Bronx High School of Science</Text>
        <Text fontSize="2xl">Bronx, New York</Text>
        <Text fontSize="2xl">2013 - 2017</Text>
      </Box>
    </Box>
  )
}

export default Education