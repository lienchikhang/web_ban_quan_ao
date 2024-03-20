import React from 'react'
import headerConstants from '../constants/header.constrants'
import { Box, Container, Image, Link, Nav, NavItem, Wrapper } from './UIComponents'
import HeaderNav from './HeaderNav'


const Header: React.FC = () => {
    return (
        <Container>
            <Wrapper $flex $between>
                <Box $spread>
                    <Nav>
                        <NavItem x='10' y='10'>
                            <Image src={headerConstants.logoSecondUrl} width={98} height={18} />
                        </NavItem>
                    </Nav>
                </Box>
                <Box $hidden width='500'>
                    <Nav>
                        {headerConstants.navSecondList.map((item, index) => (
                            <NavItem key={index}>
                                <Link $primary bold="medium">{item}</Link>
                            </NavItem>
                        ))}
                        <a href="" className='w-'></a>
                    </Nav>
                </Box>
            </Wrapper>
            <Wrapper $flex $center bg='linear-gradient(271.1deg, #FFFFFF -53.05%, #0085ED 11.67%, #273CCD 58.27%, #000000 119.54%)'>
                <Link bold='medium' x='6' y='8'>{headerConstants.navigate}</Link>
            </Wrapper>
            <Wrapper $flex bg='#231F20' className='relative'>
                <Image src={headerConstants.logoPrimaryUrl} width={76} height={50} />
                <HeaderNav />

            </Wrapper>
        </Container>
    )
}

export default Header