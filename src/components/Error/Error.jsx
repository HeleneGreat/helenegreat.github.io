import styled from 'styled-components'
import colors from '../../utils/colors'
import errorImg from '../../assets/404-error.svg'
import { breakpoints } from '../../utils/css-breakpoints'

const StyledError = styled('div')`
    background-color: ${colors.secondary};
    text-align: center;
    h1 {
        padding: 50px 0;
        font-size: 30px;
        @media screen and ${breakpoints.tablet} {
            font-size: 55px;
        }
    }
`
const StyledImg = styled('img')`
    width: 100%;
    height: auto;
    margin-bottom: 30px;
    @media screen and ${breakpoints.tablet} {
        width: 70%;
    }
`

function Error() {
    return (
        <StyledError className="main">
            <div className="container">
                <h1>Oups, cette page n'existe pas</h1>
                <StyledImg
                    src={errorImg}
                    alt="Pas non trouvée"
                    width={800}
                    height={530}
                />
            </div>
        </StyledError>
    )
}

export default Error
