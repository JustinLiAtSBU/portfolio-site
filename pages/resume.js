import { Box, Heading, Center, Container } from "@chakra-ui/react"
import { useColorModeValue } from '@chakra-ui/react'
import Layout from "../components/layouts/article"
import TextReveal from "../components/layouts/text-reveal"
import ScrollTriggered from "../components/layouts/scroll-triggered"
import Experience from "../components/resume/experience"
import Education from "../components/resume/education"
import Skills from "../components/resume/skills"

const Resume = () => {
  const purple = useColorModeValue('purple', 'purple.200')

  return (
    <Layout>
      <Container maxW='80vh'>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Center>
              <ScrollTriggered>
                <Box h="100vh" mt="30vh">
                  <Heading color={purple} as="h1" fontSize='100px'>
                    Justin Li
                  </Heading>
                  <TextReveal
                    text={"Software Engineer"}
                    fontSize="30px"
                  />
                  <TextReveal
                    text={"Rower, Sailer, Fisher, Cyclist, Weightlifter"}
                    fontSize="20px"
                    stagger={0.045}
                  />
                </Box>
              </ScrollTriggered>
            </Center>
            <Center>
              <ScrollTriggered>
                <Experience color={purple} />
              </ScrollTriggered>
            </Center>
            <Center>
              <ScrollTriggered>
                <Education color={purple} />
              </ScrollTriggered>
            </Center>
            <Center>
              <ScrollTriggered>
                <Skills color={purple} />
              </ScrollTriggered>
            </Center>
          </Box>
        </Box>
      </Container>
    </Layout >
  )
}

export default Resume