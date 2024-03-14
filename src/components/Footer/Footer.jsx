import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { breakpoints } from '../../utils/css-breakpoints'
import fonts from '../../utils/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const StyleFooter = styled('footer')`
    padding: 30px 0;
    background-color: ${colors.black};
    color: #fff;
`
const StyledContainer = styled('div')`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const StyledName = styled('div')`
    p {
        font-family: ${fonts.colombo};
        &.name {
            font-size: 55px;
        }
        &.job {
            font-size: 35px;
        }
    }
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: #fff;
    font-size: 50px;
    margin-left: 50px;
`

const StyledLinks = styled('div')``

function Footer() {
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
                    <Link to="/" activeClassName="active" title="LinkedIn">
                        <StyledFontAwesomeIcon icon={faLinkedin} />
                    </Link>
                    <Link to="/contact" activeClassName="active" title="GitHub">
                        <StyledFontAwesomeIcon icon={faSquareGithub} />
                    </Link>
                </StyledLinks>
            </StyledContainer>
        </StyleFooter>
    )
}

export default Footer
