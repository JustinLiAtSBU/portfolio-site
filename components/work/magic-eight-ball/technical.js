import {
  Box,
  Heading,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react"
import { Meta } from "../../work"
import ScrollTriggered from "../../layouts/scroll-triggered"

export const Technical = ({ color }) => {
  return (
    <ScrollTriggered>
      <Box height="60vh">
        <Heading as="h2" color={color} size='4xl'>
          Technical
        </Heading>
        <List ml={4} my={4} fontSize="2xl">
          <ListItem>
            <Meta>Stack</Meta>
            Java, Spring, MongoDB, Python
          </ListItem>
          <ListItem>
            <Meta>Deployment</Meta>
            Heroku
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link
              target="_blank"
              href="https://github.com/JustinLiAtSBU/magic-eight-ball-spring"
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
            >
              Backend,
            </Link>
            <Link
              target="_blank"
              href="https://github.com/JustinLiAtSBU/magic-eight-ball-bot"
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
            >
              Bot
            </Link>
          </ListItem>
        </List>
      </Box>
    </ScrollTriggered>
  )
}

export default Technical