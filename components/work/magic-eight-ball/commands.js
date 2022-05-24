import React, { useState } from 'react'
import {
  Box,
  Heading,
  Code,
  List,
  ListItem,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Stack,
  Center,
} from "@chakra-ui/react"
import MotionPicturePopover from './motion-picture-popover'
import ScrollTriggered from '../../layouts/scroll-triggered'
import TextReveal from '../../layouts/text-reveal'

const host = "https://magic-eight-ball-spring.herokuapp.com"
const apiMap = {
  randommovie: "movies/random",
  randomtvshow: "tvshows/random",
  randomanime: "tvshows/random?country=JP&genres=Animation",
  randomanimemovie: "movies/random?country=JP&genres=Animation"
}
const streamers = [
  "The one who's always late",
  "The one with bad connection",
  "The one whose dog is always barking",
  "The one who sleeps mid-movie",
  "The one who never wants to stream",
]

export const Commands = ({ color }) => {
  const [commandLoading, setCommandLoading] = useState(false)
  const [selectedCommand, setSelectedCommand] = useState(null)
  const [popoverContent, setPopoverContent] = useState(null)

  const runCommand = async () => {
    setCommandLoading(true)
    const content = {}
    if (selectedCommand === 'whoisstreaming') {
      content = {
        title: streamers[Math.floor(Math.random() * streamers.length)]
      }
    } else {
      const url = `${host}/${apiMap[selectedCommand]}`
      const res = await fetch(url)
      if (res.ok) {
        content = await res.json()
      }
    }
    setPopoverContent(content);
    setCommandLoading(false)
  }

  return (
    <ScrollTriggered>
      <Box height="100vh">
        <Heading as="h2" color={color} size='4xl'>
          Commands
        </Heading>
        <List fontSize="2xl" mt={5} mb={5}>
          <ListItem p={1}>
            <Code fontSize="3xl" mr={2}>$randommovie</Code>
            <TextReveal text={"For when you can't decide on a movie"} />
          </ListItem>
          <ListItem p={1}>
            <Code fontSize="3xl" mr={2}>$randomtvshow</Code>
            <TextReveal text={"For when you need a new TV show to binge"} />
          </ListItem>
          <ListItem p={1}>
            <Code fontSize="3xl" mr={2}>$randomanime</Code>
            <TextReveal text={"For the weebs that need to watch another anime"} />
          </ListItem>
          <ListItem p={1}>
            <Code fontSize="3xl" mr={2}>$whoistreaming</Code>
            <TextReveal text={"For those who never stream"} />
          </ListItem>
          <ListItem p={1}>
            <Code fontSize="3xl" mr={2}>$help</Code>
            <TextReveal text={"To see more commands"} />
          </ListItem>
        </List>
        <Center>
          <FormControl
            as='fieldset'
            border='2px'
            borderColor={color}
            borderRadius="6px"
            w="40vw"
            p={3}
          >
            <FormLabel as='legend' fontSize="2xl">
              Run a command
            </FormLabel>
            <RadioGroup onChange={setSelectedCommand} value={selectedCommand}>
              <Stack spacing='12px'>
                <Radio value='randommovie'>
                  <Code>$randommovie</Code>
                </Radio>
                <Radio value='randomtvshow'>
                  <Code>$randomtvshow</Code>
                </Radio>
                <Radio value='randomanime'>
                  <Code>$randomanime</Code>
                </Radio>
                <Radio value='randomanimemovie'>
                  <Code>$randomanimemovie</Code>
                </Radio>
                <Radio value='whoisstreaming'>
                  <Code>$whoisstreaming</Code>
                </Radio>
              </Stack>
            </RadioGroup>
            <MotionPicturePopover
              commandLoading={commandLoading}
              selectedCommand={selectedCommand}
              runCommand={runCommand}
              content={popoverContent}
              color={color}
            />
          </FormControl>
        </Center>
      </Box>
    </ScrollTriggered>
  )
}

export default Commands