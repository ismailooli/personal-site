import { Container, Heading, Link,  ListItem, UnorderedList, useColorModeValue} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Paragraph from '../components/paragraph'
import Section from '../components/section'

/**
 * Contains information about my background and some personal interests. 
 */
const AboutMe = () => {
    const linkColor = useColorModeValue('blue.500', 'green.200');

   return( <Layout title="More about me! ">
        <Container>
            {/* <Heading as="h3" fontsize={20} mb={4}>
                About Me
            </Heading> */}
            <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        who am i?
                    </Heading>
                    <Paragraph>I am currently a student at the University of Illinois Urbana-Champaign (UIUC) with a Bachelor of Science in Computer Science + Economics. My interest in computer science stems from my creativeness. Even outside of school, I&apos;ve always like creating
                        things like films with my cats or making graphic design posters for my apartment. This interest in creating things influenced me to take on a major that would give me the tools to create freely. This is why I am especially
                        interested in designing and building my own applications 
                     
                    </Paragraph>

                    <br></br>

                    <Paragraph>While these interests definitely remain intact, through experiences in studying computer science, other fields like data visualization and data science have started to interest me. As with everyone else in the field, I&apos;m also eager to see what 
                            new AI tools are being created to empower developers to go above and beyond.

                    </Paragraph>
             
            </Section>
            
            <Section>
                    <Heading as="h3" variant="section-title">
                        what do i do outside of school?
                    </Heading>
                <Paragraph>
                    <UnorderedList>
                        <ListItem>filming videos with my friends </ListItem>
                        <ListItem>skateboarding</ListItem>
                        <ListItem>reading manga (currently reading <Link href='https://www.viz.com/naoki-urasawa-s-20th-century-boys' target='_blank' color={linkColor}> 
                        <i> 20th Century Boys </i> </Link> )</ListItem>
                        <ListItem>cooking with my roomates -- check out <Link href='https://www.instagram.com/chefsdechampaign/' target='_blank' color={linkColor}>  <i> our insta </i></Link> </ListItem>        
                    </UnorderedList>
                </Paragraph>
            </Section>
        </Container>
    </Layout>

) 
        }
export default AboutMe