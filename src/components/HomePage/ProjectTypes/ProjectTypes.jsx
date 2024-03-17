import styled from 'styled-components'
import colors from '../../../utils/colors'
import fonts from '../../../utils/fonts'

const StyledTypes = styled('div')`
    background-color: ${colors.secondary};
`
const StyledList = styled('ul')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
`
const StyledElement = styled('li')`
    position: relative;
    width: 20%;
    height: 70px;
    text-align: center;
    font-family: ${fonts.colombo};
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        padding: 0 10px;
    }
    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background-color: ${colors.black};
    }
`

function ProjectTypes() {
    return (
        <StyledTypes>
            <div className="container">
                <StyledList>
                    <StyledElement>
                        <p>e-commerce</p>
                    </StyledElement>
                    <StyledElement>
                        <p>site vitrine</p>
                    </StyledElement>
                    <StyledElement>
                        <p>single page application</p>
                    </StyledElement>
                    <StyledElement>
                        <p>application web</p>
                    </StyledElement>
                    <StyledElement>
                        <p>mobile</p>
                    </StyledElement>
                </StyledList>
            </div>
        </StyledTypes>
    )
}

export default ProjectTypes
