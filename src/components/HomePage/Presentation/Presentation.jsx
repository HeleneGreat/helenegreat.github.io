import styled from 'styled-components'
import colors from '../../../utils/colors'
import SkillsList from '../SkillsList/SkillsList'

const StyledPresentation = styled('div')`
    background-color: ${colors.secondary};
`

function Presentation() {
    const skills = [
        'Curiosité',
        'Adaptabilité',
        "Esprit d'équipe",
        'Autonomie',
        'Rigueur',
    ]
    return (
        <StyledPresentation>
            <div className="container">
                <SkillsList skills={skills} />
            </div>
        </StyledPresentation>
    )
}

export default Presentation
