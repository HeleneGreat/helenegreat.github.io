import styled from 'styled-components'
import colors from '../../../utils/colors'
import portrait from '../../../assets/helene_carriou2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const StyledTitle = styled('div')`
    background-color: ${colors.primary};
    color: #fff;
    padding: 40px 0;
`
const StyledContent = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    h1 {
        font-size: 100px;
    }
`
const StyledImg = styled('img')`
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 400px;
    width: 400px;
    object-fit: cover;
    padding: 0 40px;
`
const StyledDescription = styled('div')`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2 {
        font-size: 70px;
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
`
const StyledLink = styled(Link)`
    display: block;
    width: fit-content;
    &.button:hover {
        color: ${colors.primary};
        background-color: #fff;
    }
`

function Title() {
    return (
        <StyledTitle>
            <div className="container">
                <StyledContent>
                    <h1>
                        Hélène
                        <br />
                        Carriou
                    </h1>
                    <StyledImg
                        src={portrait}
                        alt="Hélène Carriou, développeuse full-stack"
                    />
                    <StyledDescription>
                        <h2>
                            Développeuse
                            <br />
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
