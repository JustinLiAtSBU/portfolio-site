import { Box, Heading, List, ListItem } from "@chakra-ui/react"
import { Meta } from "../work"

const Skills = ({ color }) => {
  return (
    <Box h="60vh">
      <Heading color={color} as="h1" fontSize='100px'>
        Skills
      </Heading>
      <Box>
        <List fontSize="xl" p={2}>
          <ListItem p={1}>
            <Meta fontSize="md">Languages</Meta>
            Java, Python, JavaScript, HTML, CSS, C
          </ListItem>
          <ListItem p={1}>
            <Meta fontSize="md">Databases</Meta>
            MongoDB, PostgreSQL
          </ListItem>
          <ListItem p={1}>
            <Meta fontSize="md">Frameworks/Tools</Meta>
            React, Node.js, Vue, Spring, REST API, Docker, Git, Jira, Unix
          </ListItem>
          <ListItem p={1}>
            <Meta fontSize="md">Testing</Meta>
            Jest, Spock
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Skills