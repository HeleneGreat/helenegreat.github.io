import styled from 'styled-components'
import colors from '../../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons'

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 12px;
`

const StyledTechnoLevel = styled('div')`
    line-height: 12px;
`

function TechnoLevel({ level }) {
    const stars = []
    if (level) {
        for (let i = 0; i < 5; i++) {
            if (i < level) {
                stars.push(<StyledFontAwesomeIcon key={i} icon={filledStar} />)
            } else {
                stars.push(<StyledFontAwesomeIcon key={i} icon={emptyStar} />)
            }
        }
    }

    return <StyledTechnoLevel>{stars}</StyledTechnoLevel>
}
export default TechnoLevel
