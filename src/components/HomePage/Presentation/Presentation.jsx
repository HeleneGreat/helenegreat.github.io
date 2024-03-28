import styled from 'styled-components'
import colors from '../../../utils/colors'
import { Link } from 'react-router-dom'
import SkillsList from '../SkillsList/SkillsList'
import { breakpoints } from '../../../utils/css-breakpoints'

const StyledPresentation = styled('div')`
    background-color: ${colors.secondary};
    padding-bottom: 70px;
`

const StyledWhoAmI = styled('div')`
    @media screen and ${breakpoints.laptop} {
        max-width: 70%;
    }
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
            <SkillsList skills={skills} />
            <div className="container">
                <StyledWhoAmI>
                    <h2>Qui suis-je ?</h2>
                    <p>
                        Bienvenue sur mon site ! Je suis une passionnée de
                        développement web et une exploratrice infatigable du
                        monde numérique. J'ai choisi il y a quelques années de
                        me consacrer pleinement au développement web. Après une
                        reconversion professionnelle réussie, une formation
                        solide en informatique et une expérience professionnelle
                        diversifiée, je suis constamment en quête de nouveaux
                        défis et de nouvelles connaissances pour enrichir mon
                        expertise. Mon parcours m'a permis d'explorer les
                        domaines du développement front-end et back-end, ainsi
                        que les dernières tendances en matière de technologies
                        web. Curieuse et créative de nature, j'aime repousser
                        les limites de la technologie pour créer des solutions
                        innovantes et efficaces. À travers ce site, je partage
                        avec vous mon portfolio, mes projets, et mon parcours
                        professionnel, dans l'espoir de vous inspirer et de vous
                        faire découvrir ma passion pour le développement web.
                        N'hésitez pas à explorer et à me contacter pour toute
                        collaboration ou opportunité professionnelle.
                    </p>
                    <StyledLink className="button" to="/parcours">
                        Voir mon parcours
                    </StyledLink>
                </StyledWhoAmI>
            </div>
        </StyledPresentation>
    )
}

export default Presentation
