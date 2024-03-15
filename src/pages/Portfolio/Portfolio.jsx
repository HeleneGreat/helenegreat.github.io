import ProjectCard from '../../components/ProjectCard/ProjectCard'
import styled from 'styled-components'
import colors from '../../utils/colors'
import projects from '../../datas/projects'

const StyledPortfolioBody = styled('div')`
    background-color: ${colors.secondary};
    h2 {
        text-align: center;
        padding-bottom: 40px;
    }
`
const StyledProjectList = styled('ul')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
`

function Portfolio() {
    return (
        <div className="main">
            <div className="page-header">
                <div className="container">
                    <h1>Portfolio</h1>
                    <p className="presentation">
                        Lorem ipsum dolor sit amet consectetur. Amet ultricies
                        commodo imperdiet quam magna in mi. Et mauris nulla non
                        arcu eget eget tincidunt. Habitasse malesuada velit
                        vehicula dolor mauris tincidunt viverra semper nibh.
                        Dictumst neque aliquam tristique nibh elementum. Nisl
                        potenti neque enim id dui. Augue lorem diam ridiculus a
                        pharetra lorem purus fringilla consectetur. Ullamcorper
                        accumsan mattis sed neque. Mattis tellus rhoncus dapibus
                        magna id risus risus arcu. Neque at ut quam tellus a.
                        Vestibulum sed viverra curabitur mattis accumsan dictum
                        at aliquet nibh. At non ultricies commodo nunc quam
                        neque dolor amet consequat. Turpis quisque pretium porta
                        auctor ultrices. Orci non lorem dignissim non et.
                    </p>
                </div>
            </div>
            <StyledPortfolioBody className="page-body">
                <div className="container">
                    <h2>Mes projets</h2>
                    <StyledProjectList>
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </StyledProjectList>
                </div>
            </StyledPortfolioBody>
        </div>
    )
}

export default Portfolio
