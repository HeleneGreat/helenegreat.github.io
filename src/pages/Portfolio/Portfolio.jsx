import ProjectCard from '../../components/ProjectCard/ProjectCard'
import styled from 'styled-components'
import colors from '../../utils/colors'
import projects from '../../datas/projects'
import Techno from '../../components/Techno/Techno'
import technoIcons from '../../datas/technoIcons'
import { breakpoints } from '../../utils/css-breakpoints'

const StyledPortfolioBody = styled('div')`
    background-color: ${colors.secondary};
    h2 {
        text-align: center;
        padding-bottom: 40px;
    }
`
const StyledProjectList = styled('ul')`
    display: grid;
    grid-column-gap: 25px;
    grid-row-gap: 25px;
    grid-template-columns: repeat(1, 1fr);
    @media screen and ${breakpoints.tablet} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media screen and ${breakpoints.laptop} {
        grid-template-columns: repeat(3, 1fr);
    }
`

function Portfolio() {
    document.title = 'Projets | Hélène Carriou'

    return (
        <div className="main">
            <div className="page-header">
                <div className="container">
                    <h1>Mes projets</h1>
                    <p className="presentation">
                        Bienvenue dans la section dédiée à mes projets web !
                        Ici, je vous invite à découvrir une sélection de
                        réalisations qui reflètent mon expertise et ma passion
                        pour le développement web. Des sites vitrines aux
                        applications interactives, chaque projet a été conçu
                        avec soin et créativité pour répondre aux besoins
                        définis. Que ce soit pour améliorer l'expérience
                        utilisateur, optimiser la performance ou créer des
                        solutions innovantes, chaque projet représente un
                        nouveau défi relevé avec enthousiasme. Explorez ces
                        réalisations pour découvrir mon savoir-faire et ma
                        vision du web. N'hésitez pas à me contacter pour en
                        savoir plus ou pour discuter de vos propres projets web.
                    </p>
                </div>
            </div>
            <StyledPortfolioBody className="page-body">
                <div className="container">
                    <StyledProjectList>
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </StyledProjectList>
                </div>
            </StyledPortfolioBody>
            <Techno
                technos={technoIcons.map((item) => item.name)}
                allIcons={true}
            />
        </div>
    )
}

export default Portfolio
