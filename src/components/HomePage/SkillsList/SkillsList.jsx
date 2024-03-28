import styled from 'styled-components'
import colors from '../../../utils/colors'
import fonts from '../../../utils/fonts'
import { breakpoints } from '../../../utils/css-breakpoints'

const StyledTypes = styled('div')`
    background-color: ${colors.secondary};
`
const StyledList = styled('ul')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    flex-direction: column;
    @media screen and ${breakpoints.tablet} {
        padding: 40px 0;
        flex-direction: row;
    }
`
const StyledElement = styled('li')`
    position: relative;
    height: 80px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    @media screen and ${breakpoints.laptop} {
        height: 70px;
        width: 20%;
    }
    p {
        font-family: ${fonts.colombo};
        padding: 0 10px;
        font-size: 22px;
        @media screen and ${breakpoints.tablet} {
            font-size: 28px;
        }
    }
    &:not(:last-of-type):after {
        content: '';
        position: absolute;
        background-color: ${colors.black};
        bottom: 0;
        width: 100px;
        height: 1px;
        left: 50%;
        transform: translatex(-50%);
        @media screen and ${breakpoints.tablet} {
            top: 0;
            right: 0;
            left: unset;
            width: 1px;
            height: 100%;
            transform: none;
        }
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
