import NextLink from 'next/link'
import { Container, Box, Heading, Image, Link, Text, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Justin Li
            </Heading>
            <Text fontSize="2xl">Software Engineer</Text>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center">
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src='/images/profile_picture.png'
              alt='Profile Image'
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">Work</Heading>
          <Paragraph>I am currently working on a Discord bot made to solve a minor inconvenience called {' '}
            <NextLink href="/works/magic-eight-ball">
              <Link>Magic Eight Ball</Link>
            </NextLink>
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>
              2020
            </BioYear>
            Joined WebMD as a full-stack software engineer intern
          </BioSection>
          <BioSection>
            <BioYear>
              2021
            </BioYear>
            Completed B.S. in computer science from
            Stony Brook University
          </BioSection>
          <BioSection>
            <BioYear>
              2021
            </BioYear>
            Started first full time job at Rightpoint as a software engineer
          </BioSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Hobbies
          </Heading>
          <Paragraph>
            Weightlifting, lockpicking, canoeing, cycling, and going fishing but coming back with nothing
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page