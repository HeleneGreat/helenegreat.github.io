import { NavLink, Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { ReactComponent as MenuBurger } from '../../assets/menu-burger.svg'
import { breakpoints } from '../../utils/css-breakpoints'
import fonts from '../../utils/fonts'

const StyledHeader = styled('header')`
    padding: 7px 0;
    background-color: ${colors.primary};
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999999999999;
`
const StyledContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and ${breakpoints.tablet} {
    }
`
const StyledNav = styled('nav')`
    @media screen and (max-width: 768px) {
        background-color: ${colors.primary};
        transition: all 0.3s ease-in;
        opacity: 0;
        visibility: hidden;
        width: 0;
        position: absolute;
        top: 110px;
        right: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100vh - 110px);
        &.nav-active {
            width: 70%;
            opacity: 1;
            visibility: visible;
        }
    }
`
const StyledMenuBurger = styled(MenuBurger)`
    flex-grow: 1;
    transform: scaleX(-1);
    path {
        stroke: #fff;
    }
`
const StyledMenuICon = styled('div')`
    cursor: pointer;
    flex-grow: 1;
    text-align: right;
    @media screen and ${breakpoints.tablet} {
        display: none;
    }
`
const afterLinkStyle = `
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7px;
    background-color: ${colors.tertiary};
`
const StyledLink = styled(NavLink)`
    @media screen and (max-width: 768px) {
        width: fit-content;
        margin-bottom: 20px;
    }
    padding: 15px;
    margin: 0 10px;
    font-size: 25px;
    font-family: ${fonts.colombo};
    color: ${colors.white};
    text-transform: uppercase;
    position: relative;
    &.active {
        &:after {
            ${afterLinkStyle}
        }
    }
    &:hover {
        &:after {
            ${afterLinkStyle}
        }
    }
`

function Header() {
    const [showNavbar, setShowNavbar] = useState(false)
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <StyledHeader>
            <StyledContainer className="container">
                <div className="logo">
                    <Link to="/">
                        <img
                            src="/logo.svg"
                            alt="Hélène Carriou, développeuse web"
                            width={88}
                            height={68}
                        />
                    </Link>
                </div>
                <StyledMenuICon onClick={handleShowNavbar}>
                    <StyledMenuBurger width={100} height={100} />
                </StyledMenuICon>
                <StyledNav className={`${showNavbar && 'nav-active'}`}>
                    <StyledLink to="/">Accueil</StyledLink>
                    <StyledLink to="/parcours">Parcours</StyledLink>
                    <StyledLink to="/portfolio">Portfolio</StyledLink>
                    <StyledLink to="/contact">Contact</StyledLink>
                </StyledNav>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header
