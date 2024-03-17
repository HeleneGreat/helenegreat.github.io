import styled from 'styled-components'
import colors from '../../utils/colors'
import technoIcons from '../../datas/technoIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledTechno = styled('div')`
    background-color: ${colors.black};
    color: #fff;
    width: 100%;
`
const StyledList = styled('ul')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0;
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 60px;
`
function Techno({ technos }) {
    return (
        <StyledTechno>
            <div className="container">
                <StyledList>
                    {technos.map((techno, index) => {
                        const technoIcon = technoIcons.find(
                            (item) => item.name === techno
                        )
                        if (!technoIcon) return null
                        return (
                            <li key={index}>
                                <StyledFontAwesomeIcon
                                    icon={technoIcon.icon}
                                    title={technoIcon.name}
                                />
                            </li>
                        )
                    })}
                </StyledList>
            </div>
        </StyledTechno>
    )
}

export default Techno
