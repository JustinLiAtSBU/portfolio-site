import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
} from "@chakra-ui/react"
import { Meta } from "../work"

const Experience = ({ color }) => {
  return (
    <Box h="150vh">
      <Heading color={color} as="h1" fontSize='100px'>
        Experience
      </Heading>
      <Box>
        <Text fontSize="5xl">Rightpoint</Text>
        <Text fontSize="2xl">New York, New York</Text>
        <Text fontSize="2xl">2021 - Present</Text>
        <List fontSize="xl" p={2}>
          <ListItem p={1}>
            <Meta fontSize="md">Stack</Meta>
            React, NextJS, TypeScript, Python, MongoDB
          </ListItem>
          <ListItem p={1}>
            <Meta fontSize="md">React</Meta>
            <Meta fontSize="md">TypeScript</Meta>
            <Meta fontSize="md">NextJS</Meta>
            Website that served 1.5 million active monthly users in over 16 countries
          </ListItem>
          <ListItem p={1}>
            <Meta fontSize="md">Python</Meta>
            TypeScript file parser that displayed complex
            relationship between components and Optimizely toggles as trees
          </ListItem>
          <ListItem p={1}>
            <Meta fontSize="md">Python</Meta>
            Site scraper using BeautifulSoup and Selenium to match HTML
            elements to their translation keys
          </ListItem>
          <ListItem p={1}>
            <Meta fontSize="md">React</Meta>
            Modular NPM package that posts API and response data health
            to presentable Confluence document
          </ListItem>
        </List>
      </Box>
      <Box>
        <Text fontSize="5xl">WebMD</Text>
        <Text fontSize="2xl">New York, New York</Text>
        <Text fontSize="2xl">Jun 2020 - Aug 2020</Text>
        <List fontSize="xl" p={2}>
          <ListItem p={1}>
            <Meta fontSize="md">Stack</Meta>
            Java, VueJS, Spring, PostgreSQL
          </ListItem>
          <ListItem p={1}>
            <Meta fontSize="md">Java</Meta>
            <Meta fontSize="md">VueJS</Meta>
            <Meta fontSize="md">Spring</Meta>
            <Meta fontSize="md">PostgreSQL</Meta>
            Frontend application with backend for displaying product development
            information to company engineers and business executives
          </ListItem>
          <ListItem p={1}>
            <Meta fontSize="md">Spring Cloud</Meta>
            <Meta fontSize="md">VueJS</Meta>
            UI for launching Spring Cloud tasks
          </ListItem>
          <ListItem p={1}>
            <Meta fontSize="md">Groovy</Meta>
            <Meta fontSize="md">Spock</Meta>
            Backend component tests
          </ListItem>

        </List>
      </Box>
    </Box>
  )
}

export default Experience