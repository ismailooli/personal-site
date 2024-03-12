import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'


/**
 * Page where users can find information about personal projects I have done. 
 * @returns a page showing links to personal projects I have done
 */
const Works = () => (
    <Layout title="Projects">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                UX Projects
            </Heading>

            <Section delay={0.2}>
                <Divider my={8} />
                <Heading as="h3" fontSize={20} mb={4}>
                    Other Stuff I Have Made
                </Heading>
            </Section>

            <SimpleGrid columns={[1, 1, 3]} gap={6}>
                <Section delay={0.3}>
                    {/* <WorkGridItem id="kayak" title="Kayak" thumbnail={kayakImg}>
                        This project involved examining the usability of Kayak, a travel booking platform. Travelers of varying expeirence levels were interviewed. 
                    </WorkGridItem> */}
                </Section>
                <Section delay={0.3}>
                    {/* <WorkGridItem id="coursera" title="Coursera" thumbnail={courseraImg}>
                        An analysis of the level of adherence to usability principles of the Coursera Discussion Forum using heuristic evaluation. 
                    </WorkGridItem> */}
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works