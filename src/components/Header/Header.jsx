import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints } from '../../utils/css-breakpoints'
import fonts from '../../utils/fonts'

const StyledHeader = styled('header')`
    padding: 30px 0;
    background-color: ${colors.primary};
`
const StyledContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const afterStyle = `
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 7px;
    background-color: ${colors.tertiary};
`

const StyledLink = styled(NavLink)`
    padding: 15px;
    margin: 0 10px;
    font-size: 25px;
    font-family: ${fonts.colombo};
    color: ${colors.white};
    text-transform: uppercase;
    position: relative;
    &.active {
        &:after {
            ${afterStyle}
        }
    }
    &:hover {
        &:after {
            ${afterStyle}
        }
    }
`

function Header() {
    return (
        <StyledHeader>
            <StyledContainer className="container">
                <div className="logo">
                    <Link to="/" activeClassName="active">
                        <img
                            src="/logo.svg"
                            alt="Hélène Carriou, développeuse web"
                            width={88}
                            height={68}
                        />
                    </Link>
                </div>
                <nav>
                    <StyledLink to="/" activeClassName="active">
                        Accueil
                    </StyledLink>
                    <StyledLink to="/parcours" activeClassName="active">
                        Parcours
                    </StyledLink>
                    <StyledLink to="/portfolio" activeClassName="active">
                        Portfolio
                    </StyledLink>
                    <StyledLink to="/contact" activeClassName="active">
                        Contact
                    </StyledLink>
                </nav>
            </StyledContainer>
        </StyledHeader>
    )
}

export default Header
