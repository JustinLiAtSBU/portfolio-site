import {
  Box,
  Heading,
  Text,
  Link,
  Center,
  Image
} from "@chakra-ui/react"
import { useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import Layout from "../../components/layouts/article"
import Commands from "../../components/work/magic-eight-ball/commands"
import Statistics from "../../components/work/magic-eight-ball/statistics"
import Technical from "../../components/work/magic-eight-ball/technical"
import { IoLogoDiscord } from "react-icons/io5"
import ScrollTriggered from "../../components/layouts/scroll-triggered"
import { motion, useViewportScroll, useTransform } from 'framer-motion'


const MagicEightBall = () => {
  const purple = useColorModeValue('purple', 'purple.200')
  const { scrollYProgress } = useViewportScroll()
  const discordIconYValue = useTransform(scrollYProgress, [0, 1], [0, 100 * -10])
  const eightBallIconYValue = useTransform(scrollYProgress, [0, 1], [0, 100 * -40])

  return (
    <Layout>
      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Center>
            <Box h="100vh" mt="30vh">
              <Heading color={purple} as="h1" fontSize='100px'>
                Magic Eight Ball
                <motion.div style={{ y: discordIconYValue }} >
                  <IoLogoDiscord />
                </motion.div>
              </Heading>
            </Box>
            <motion.div style={{ y: eightBallIconYValue }} >
              <Image
                maxWidth="100px"
                src='/images/magic-eight-ball-logo.png'
                alt='Magic Eight Ball Image'
              />
            </motion.div>
          </Center>


          <Box h="60vh">
            <Center>
              <ScrollTriggered>
                <Heading as="h1" size='4xl'>
                  Never have this conversation again.
                </Heading>
              </ScrollTriggered>
            </Center>
          </Box>
          <Center>
            <Box p={5} h="250vh">
              <ScrollTriggered>
                <Text mb="50vh" fontSize='5xl'>&quot;What do you want to watch?&quot;</Text>
              </ScrollTriggered>
              <ScrollTriggered>
                <Text mb="50vh" fontSize='5xl'>&quot;Up to you&quot;</Text>
              </ScrollTriggered>
              <ScrollTriggered>
                <Text mb="50vh" fontSize='5xl'>&quot;I&apos;m good with anything&quot;</Text>
              </ScrollTriggered>
              <ScrollTriggered>
                <Text mb="50vh" fontSize='5xl'>&quot;Let&apos;s wait for the rest of them to get here&quot;</Text>
              </ScrollTriggered>
            </Box>
          </Center>

          <Center>
            <Commands color={purple} />
          </Center>
          <Center>
            <Statistics color={purple} />
          </Center>
          <Center>
            <Technical color={purple} />
          </Center>
          <Center>
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
          </Center>
        </Box>
      </Box>
    </Layout>
  )
}

export default MagicEightBall