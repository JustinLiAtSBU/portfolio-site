import React, { PureComponent, useState } from 'react';
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
} from "@chakra-ui/react"
import MotionPicturePopover from './motionpicturepopover';

const host = "https://magic-eight-ball-spring.herokuapp.com"
const apiMap = {
  randommovie: "movies/random",
  randomtvshow: "tvshows/random",
  randomanime: "tvshows/random?country=JP&genres=Animation",
  randomanimemovie: "movies/random?country=JP&genres=Animation"
}

export const Commands = ({ color }) => {
  const [commandLoading, setCommandLoading] = useState(false)
  const [selectedCommand, setSelectedCommand] = useState(null)
  const [popoverContent, setPopoverContent] = useState(null)

  const runCommand = async () => {
    setCommandLoading(true)
    const url = `${host}/${apiMap[selectedCommand]}`

    const res = await fetch(url)
    if (res.ok) {
      const data = await res.json()
      console.log(data)
      await sleep(2000);
      setPopoverContent(data)
    }
    setCommandLoading(false)
  }

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  return (
    <Box>
      <Heading as="h2" color={color} size='xl' mt={10}>
        Commands
      </Heading>
      <List fontSize="2xl" mt={5} mb={5}>
        <ListItem p={1}>
          <Code fontSize="3xl" mr={2}>$randommovie</Code>
          Find a random movie
        </ListItem>
        <ListItem p={1}>
          <Code fontSize="3xl" mr={2}>$randomtvshow</Code>
          Find a random TV show
        </ListItem>
        <ListItem p={1}>
          <Code fontSize="3xl" mr={2}>$randomanime</Code>
          Find a random anime
        </ListItem>
        <ListItem p={1}>
          <Code fontSize="3xl" mr={2}>$whoistreaming</Code>
          For those who never stream
        </ListItem>
        <ListItem p={1}>
          <Code fontSize="3xl" mr={2}>$help</Code>
          To see more commands
        </ListItem>
      </List>

      <FormControl
        as='fieldset'
        border='2px'
        borderColor={color}
        borderRadius="6px"
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
    </Box>
  )
}

export default Commands