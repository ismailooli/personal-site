import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Project = () => (
    <Layout>
        <Container>
            <Title>
                Weather <Badge>2023</Badge>
            </Title>
            <WorkImage
                src="/images/works/weather.png"
                alt="Weather App Logo"
            />
            <P>
I often don’t know what to wear depending on the weather is so I created a extension that would give me recommendations with 

            <br>
            </br>

                    <P>
The entire project was created using HTML and Javascript with a bunch of CSS for styling. The application is set to a default location of Champaign but once you press the search bar, it will prompt you to enter your own location. It would fetch the weather data using the OpenWeather API and display it on the left side. Using the temperature data from OpenWeather, it would figure out what types of clothes are most suitable for the weather. It would display the recommendation as well as an image embed that leads to an Amazon link for the recommended product.                    </P>
            <List>
                <ListItem>
                    <Meta>Repo Link</Meta>
                    <Link target="_blank" href="https://github.com/ismailooli/-scarf">
                        Github
                    </Link> <ExternalLinkIcon></ExternalLinkIcon>
                </ListItem>
   
            </List>
            <br/>
        </Container>
    </Layout>
)

export default Project
