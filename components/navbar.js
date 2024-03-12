import Logo from './logo'
import NextLink from 'next/link'
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { IoLogoGithub, IoLogoLinkedin} from "react-icons/io5";
import ThemeToggleButton from './theme-toggle-button';

/**
 * Static navigation bar at the top of the website that lets the user navigate to a variety of bits of information about me
 * @returns the navigation bar to be displayed at the top of the page 
 */
const LinkItem = ({ href, path, _target, children, ...props }) => {
    const active = path === href
    const inactiveColour = useColorModeValue('gray200', 'whiteAlpha.900')
    return(
        <NextLink href={href} passHref>
            <Link
                p={2}
                bg={active ? 'pinkyPink' : undefined}
                color={active ? inactiveColour : inactiveColour}
                fontWeight={active ? 'bold' : 'normal'}
                _target={_target}
                {...props}
            >
                {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const {path} = props

    return(
        <Box
            position="fixed"
            as="nav"    
            w="100%"
            bg={useColorModeValue('#fffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing={'tighter'}>
                        <Logo/>
                    </Heading>
                </Flex>
                <Stack
                
                    direction={{base: 'column', md: 'row'}}
                    display={{base: 'none', md: 'flex'}}
                    width={{base: 'full', md: 'auto'}}
                    alignItems="center"
                    flexGrow={1}
                    mt={{base: 4, md: 0}}
                >

                    <LinkItem 
                        href="/about"  
                        path={path}>
                        {/* <IoPersonRemoveOutline/> */}
                        about me
                    </LinkItem>


                    <LinkItem href="/projects" path={path}>
                        {/* </IoBookOutline> */}
                        projects
                    </LinkItem>

                    <LinkItem href='https://drive.google.com/file/d/1UvYjSf20MGIBIpkY3Xe8FQtcgaJpAdiJ/view?usp=sharing' target='_blank' path={path}>
                        {/* <IoBookOutline/> */}
                        resumé
                        
                    </LinkItem>

                    <LinkItem 
                        target="_blank"
                        href="https://github.com/ismailooli" 
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4}}
                        pl={2}
                    >
                        <IoLogoGithub/>
                        github
                    </LinkItem>
                  
                    <LinkItem 
                        target="_blank"
                        href="https://www.linkedin.com/in/ismoha4/" 
                        path={path}
                        display="inline-flex"
                        alignItems="center"
                        style={{ gap: 4}}
                        pl={2}
                    >
                        <IoLogoLinkedin/>
                        linkedIn
                    </LinkItem>
                </Stack>

                <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/about" passHref>
                  <MenuItem as={Link}>about me</MenuItem>
                </NextLink>
                <NextLink href="/research" passHref>
                  <MenuItem as={Link}>research</MenuItem>
                </NextLink>
                <NextLink href="/projects" passHref>
                  <MenuItem as={Link}>projects</MenuItem>
                </NextLink>
                <NextLink href="https://drive.google.com/file/d/1cAUcYLSET9oTVi57cWeootpquQ7zJqYj/view?usp=sharing" target="_blank" path={path} passHref>
                  <MenuItem as={Link}>cv</MenuItem>
                </NextLink>
                <NextLink href="https://drive.google.com/file/d/1SLNPY8m6YRH22bDSagzfqtUcuEt29Mim/view?usp=sharing" target="_blank" path={path} passHref>
                  <MenuItem as={Link}>resumé</MenuItem>
                </NextLink>
                <MenuItem as={Link} href="https://github.com/omark807" target="_blank">
                  github
                </MenuItem>
                <MenuItem as={Link} href="https://www.linkedin.com/in/omark807" target="_blank">
                  linkedIn
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar