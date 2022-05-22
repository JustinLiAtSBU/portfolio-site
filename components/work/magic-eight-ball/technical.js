import {
  Box,
  Heading,
  List,
  ListItem,
  Link,
} from "@chakra-ui/react"
import { Meta } from "../../work"

export const Technical = ({ color }) => {
  return (
    <Box>
      <Heading as="h2" color={color} size='xl' mt={10}>
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
          <Meta>Movies in Database</Meta>
          9026
        </ListItem>
        <ListItem>
          <Meta>TV Shows in Database</Meta>
          1450
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
  )
}

export default Technical