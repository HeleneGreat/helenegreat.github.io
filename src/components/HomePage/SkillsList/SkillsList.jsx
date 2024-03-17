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
    padding: 40px 0;
`
const StyledElement = styled('li')`
    position: relative;
    width: 20%;
    height: 70px;
    text-align: center;
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
        font-family: ${fonts.colombo};
        padding: 0 10px;
        font-size: 28px;
    }
    &:not(:last-of-type):after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        background-color: ${colors.black};
    }
`

function SkillsList({ skills }) {
    return (
        <StyledTypes>
            <div className="container">
                <StyledList>
                    {skills.map((skill, index) => (
                        <StyledElement key={index}>
                            <p>{skill}</p>
                        </StyledElement>
                    ))}
                </StyledList>
            </div>
        </StyledTypes>
    )
}

export default SkillsList
