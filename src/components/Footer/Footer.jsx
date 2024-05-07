import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { breakpoints } from '../../utils/css-breakpoints'
import ReactGA from 'react-ga4'

const StyleFooter = styled('footer')`
    padding: 30px 0;
    background-color: ${colors.black};
    color: #fff;
`
const StyledContainer = styled('div')`
    @media screen and ${breakpoints.tablet} {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`
const StyledName = styled('div')`
    p {
        font-family: ${fonts.colombo};
        &.name {
            font-size: 30px;
            @media screen and ${breakpoints.tablet} {
                font-size: 45px;
            }
            @media screen and ${breakpoints.laptop} {
                font-size: 55px;
            }
        }
        &.job {
            font-size: 20px;
            @media screen and ${breakpoints.tablet} {
                font-size: 28px;
            }
            @media screen and ${breakpoints.laptop} {
                font-size: 35px;
            }
        }
    }
`
const StyledLinks = styled('div')`
    a:not(:first-of-type) {
        margin-left: 20px;
        @media screen and ${breakpoints.tablet} {
            margin-left: 20px;
        }
        @media screen and ${breakpoints.laptop} {
            margin-left: 50px;
        }
    }
    svg {
        transition: all 0.4s ease-in-out;
    }
    a:hover svg {
        transform: scale(1.2);
    }
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 40px;
    @media screen and ${breakpoints.tablet} {
        font-size: 50px;
    }
`

function Footer() {
    const handleClick = (platform) => {
        ReactGA.event({
            category: 'Réseaux sociaux',
            action: 'Click',
            label: platform,
        })
    }

    return (
        <StyleFooter>
            <StyledContainer className="container">
                <StyledName>
                    <p className="name">Hélène Carriou</p>
                    <p className="job">
                        Développeuse full-stack à Vannes et Lorient (56)
                    </p>
                </StyledName>
                <StyledLinks>
                    <Link
                        to="https://www.linkedin.com/in/hélène-carriou/"
                        title="Profil LinkedIn"
                        target="_blank"
                        onClick={() => handleClick('LinkedIn Footer')}
                    >
                        <StyledFontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link
                        to="https://github.com/HeleneGreat"
                        title="Profil GitHub"
                        target="_blank"
                        onClick={() => handleClick('GitHub Footer')}
                    >
                        <StyledFontAwesomeIcon icon={faSquareGithub} />
                    </Link>
                </StyledLinks>
            </StyledContainer>
        </StyleFooter>
    )
}

export default Footer
