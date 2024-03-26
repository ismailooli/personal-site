import { Container, Heading, SimpleGrid, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import weatherImg from '../public/images/works/weather.png'
import secretImg from '../public/images/works/secret.png'

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
                   <WorkGridItem id="secret" title="Secret Sharer" thumbnail={secretImg}>
                        This project was created as a way to help my friend stop spilling secrets to people outside of our apartment. 
                    </WorkGridItem>
                </Section>
                <Section delay={0.3}>
                    <WorkGridItem id="weather" title="Weather Extension" thumbnail={weatherImg}>
                        Creating an extension that displayed the weather and reccomends clothes I should wear depending on the wear 
                    </WorkGridItem> 
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
