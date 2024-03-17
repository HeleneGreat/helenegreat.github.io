import styled from 'styled-components'
import colors from '../../../utils/colors'
import { Link } from 'react-router-dom'
import SkillsList from '../SkillsList/SkillsList'

const StyledPresentation = styled('div')`
    background-color: ${colors.secondary};
    padding-bottom: 70px;
`

const StyledWhoAmI = styled('div')`
    max-width: 70%;
    margin: 0 auto;
    h2,
    p {
        padding-bottom: 30px;
    }
`
const StyledLink = styled(Link)`
    display: block;
    width: fit-content;
    margin: 0 auto;
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
                <StyledWhoAmI>
                    <h2>Qui suis-je ?</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur iure nobis rerum mollitia laudantium ut harum
                        modi numquam molestias, quas ad at optio. Deleniti esse
                        repudiandae maiores cumque voluptatem dicta
                        necessitatibus aperiam aut reprehenderit saepe natus,
                        ex, error, id tempore atque ad sit pariatur dolor quos?
                        Hic perspiciatis facilis quis doloremque, nihil
                        laboriosam nobis. Veniam quasi consectetur temporibus
                        sed, minima earum nisi, officia omnis ipsa modi dolore
                        laudantium iure. Doloremque, deleniti id deserunt unde
                        aspernatur repudiandae voluptatum, adipisci quia optio
                        corrupti animi? Accusantium illum obcaecati in, saepe
                        maxime quibusdam itaque voluptates beatae, minus, dicta
                        similique explicabo dolores! Aliquam, mollitia
                        architecto?
                    </p>
                    <StyledLink className="button" to="/portfolio">
                        Voir mon parcours
                    </StyledLink>
                </StyledWhoAmI>
            </div>
        </StyledPresentation>
    )
}

export default Presentation
