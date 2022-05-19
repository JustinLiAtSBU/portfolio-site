import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item";
import thumbEightBall from '../public/images/magic-eight-ball-logo.png'
import Layout from "../components/layouts/article";

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="magiceightball"
              title={"Magic Eight Ball"}
              thumbnail={thumbEightBall}
            >
              A Discord bot for the times when you and your friends can&apos;t make a decision
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works