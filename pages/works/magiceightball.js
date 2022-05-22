import {
  Container,
  Box,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react"
import { useColorModeValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from "../../components/layouts/article";
import Commands from "../../components/work/magiceightball/commands";
import Statistics from "../../components/work/magiceightball/statistics";
import Technical from "../../components/work/magiceightball/technical";

const MagicEightBall = () => {
  const purple = useColorModeValue('purple', 'purple.200')

  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading color={purple} as="h1" variant="page-title" size='4xl'>
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

            <Commands color={purple} />
            <Statistics color={purple} />
            <Technical color={purple} />

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
    </Layout >
  )
}

export default MagicEightBall