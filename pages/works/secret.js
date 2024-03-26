import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Secret Sharer <Badge>2023</Badge>
            </Title>
            <WorkImage
                src="/images/works/secret.png"
                alt="Secret Sharer Logo"
            />
            <P>
My close friend has trouble navigating social cues when we are in large groups of people. This has lead to times where he would unknowingly spill secrets of others to people who he shouldn’t have. To help him tackle this problem, I decided to create a program that would help he decided to tell someone a secret or not.            </P>


            <br>
            </br>

                    <P>
            The frontend was HTML, and CSS. The back end was done with Python and Flask file that used a sentiment analysis model. I used the Hugging Face API to access a basic sentiment analysis model. Depending on what sentiment model feels,  The user inputs a description of the person they want to talk to and the sentiment analysis model 
                    </P>
            <List>
                <ListItem>
                    <Meta>Repo Link</Meta>
                    <Link target="_blank" href="https://github.com/ismailooli/secret-sharer">
                        Github
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
   
            </List>
            <br/>
        </Container>
    </Layout>
)

export default Project
