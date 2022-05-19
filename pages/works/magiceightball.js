import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Heading,
  Text,
  Code,
  Link,
  List,
  ListItem,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Divider
} from "@chakra-ui/react"
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Meta } from "../../components/work"
import Layout from "../../components/layouts/article";

const MagicEightBall = () => {
  const [channels, setChannels] = useState(0)
  const [timestamp, setTimestamp] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://magic-eight-ball-spring.herokuapp.com/channels/all"
      const res = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      setChannels(data.length)
    }

    fetchData()
    var currentDate = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    var datetime = `As of ${currentDate.toLocaleDateString('en-US', options)}`
    setTimestamp(datetime)
  }, []);

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading color="purple.200" as="h1" variant="page-title" size='4xl'>
              Magic Eight Ball
            </Heading>
            <Heading as="h1" size='3xl' mt={10}>
              Never have this conversation again.
            </Heading>
            <Box p={1} mt={10}>
              <Text fontSize='3xl'>&quot;What do you want to watch?&quot;</Text>
              <Text fontSize='3xl'>&quot;Up to you&quot;</Text>
              <Text fontSize='3xl'>&quot;I&apos;m good with anything&quot;</Text>
              <Text fontSize='3xl'>&quot;Let&apos;s wait for the rest of them to get here&quot;</Text>
            </Box>

            <Heading as="h2" color="purple.200" size='xl' mt={10}>
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

            <Heading as="h2" color="purple.200" size='xl' mt={10}>
              Statistics
            </Heading>
            <Stat
              p={2}
              border='2px'
              borderColor='purple.200'
              borderRadius="6px"
              mt={3}
            >
              <StatLabel fontSize="2xl">Channels using Magic Eight Ball</StatLabel>
              <StatNumber>{channels}</StatNumber>
              <StatHelpText fontSize="m">{timestamp}</StatHelpText>
            </Stat>

            <Heading as="h2" color="purple.200" size='xl' mt={10}>
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

            <Link
              target="_blank"
              href="https://discord.com/api/oauth2/authorize?client_id=958940527359827971&amp;permissions=8&amp;scope=bot"
              display="inline-flex"
              alignItems="center"
              style={{ gap: 4 }}
              pl={2}
              mt={5}
            >
              Add this bot to your Discord server <ExternalLinkIcon mx="2px" />
            </Link>
          </Box>
        </Box>
      </Container >
    </Layout>
  )
}

export default MagicEightBall