import {
    Container,
    Heading,
    //Image,
    //Link,
    Box
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'

/**
 * The main landing page for the website, containing a short intro and some quick bits about my interests. 
 * @returns the home page for the website
 */
const Page = () => {
    return(
        <Layout>
            <Container>
                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Ismail Mohammad 
                        </Heading>                        
                    </Box>
                </Box>
                <br/>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Salam!
                    </Heading>
                    <Paragraph>I am a third year student studying Computer Science and Economics at the University of
                        Urbana-Champaign (UIUC). My interests lie broadly in human-computer interaction (HCI), product management, and anything related to user interfaces. <b>I am actively seeking internships for summer and fall 2024!</b>
                        
                       
                    </Paragraph>
                </Section>
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        products im trying to make currently... 
                    </Heading>
                    <BioSection>
                        <BioYear> LinkedIn AutoConnect</BioYear>
                        i&apos;ve spent way too much time sitting on linkedin trying to find people to connect with at a company so i decided to create something that automates that 
                        process for me 
                    </BioSection>
                  
                </Section>  
            </Container>
        </Layout>
    )
}
export default Page