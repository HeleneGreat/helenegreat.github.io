import styled from 'styled-components'
import colors from '../../../utils/colors'
import portrait from '../../../assets/helene_carriou2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { breakpoints } from '../../../utils/css-breakpoints'
import useMediaQuery from '../../../hooks/useMediaQuery'

const StyledTitle = styled('div')`
    background-color: ${colors.primary};
    color: #fff;
    padding: 40px 0;
`
const StyledContent = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and ${breakpoints.laptop} {
        justify-content: space-between;
        align-items: stretch;
        flex-direction: row;
    }
    h1 {
        font-size: 50px;
        @media screen and ${breakpoints.tablet} {
            font-size: 70px;
        }
        @media screen and ${breakpoints.desktop} {
            font-size: 100px;
        }
    }
`
const StyledImg = styled('img')`
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 100%;
    max-width: 320px;
    height: auto;
    @media screen and ${breakpoints.laptop} {
        padding: 0 40px;
        object-fit: cover;
        max-width: unset;
        width: 300px;
        height: 300px;
    }
    @media screen and ${breakpoints.desktop} {
        width: 400px;
        height: 400px;
    }
`
const StyledDescription = styled('div')`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;
    @media screen and ${breakpoints.laptop} {
        text-align: left;
    }
    h2 {
        font-size: 40px;
        @media screen and ${breakpoints.laptop} {
            font-size: 60px;
        }
        @media screen and ${breakpoints.desktop} {
            font-size: 70px;
        }
    }
`
const StyledLinks = styled('div')`
    a:not(:first-of-type) {
        margin-left: 50px;
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
    font-size: 50px;
    margin: 30px 0 15px;
    @media screen and ${breakpoints.laptop} {
        margin: 0;
    }
`
const StyledLink = styled(Link)`
    display: block;
    width: fit-content;
    margin: 15px auto 0;
    @media screen and ${breakpoints.laptop} {
        margin: 0;
    }
    &.button:hover {
        color: ${colors.primary};
        background-color: #fff;
    }
`

function Title() {
    const isLaptop = useMediaQuery(breakpoints.laptop)
    return (
        <StyledTitle>
            <div className="container">
                <StyledContent>
                    <h1>
                        Hélène
                        {isLaptop ? <br /> : ' '}
                        Carriou
                    </h1>
                    <StyledImg
                        src={portrait}
                        alt="Hélène Carriou, développeuse full-stack"
                    />
                    <StyledDescription>
                        <h2>
                            Développeuse
                            {isLaptop ? <br /> : ' '}
                            Full-Stack
                        </h2>
                        <StyledLinks>
                            <Link
                                to="https://www.linkedin.com/in/hélène-carriou/"
                                title="Profil LinkedIn"
                                target="_blank"
                            >
                                <StyledFontAwesomeIcon icon={faLinkedin} />
                            </Link>
                            <Link
                                to="https://github.com/HeleneGreat"
                                title="Profil GitHub"
                                target="_blank"
                            >
                                <StyledFontAwesomeIcon icon={faSquareGithub} />
                            </Link>
                        </StyledLinks>
                        <StyledLink className="button" to="/contact">
                            Contact
                        </StyledLink>
                    </StyledDescription>
                </StyledContent>
            </div>
        </StyledTitle>
    )
}

export default Title
