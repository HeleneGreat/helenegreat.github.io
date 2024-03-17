import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../../utils/colors'
import projects from '../../../datas/projects'
import ProjectIntroduction from '../../ProjectIntroduction/ProjectIntroduction'

const StyledLastProject = styled('div')`
    background-color: ${colors.primary};
    color: #fff;
    padding: 40px 0 60px;
    h2 {
        text-align: center;
    }
`

const StyledLink = styled(Link)`
    display: block;
    width: fit-content;
    margin: 30px auto 0;
    &.button:hover {
        background-color: #fff;
        color: ${colors.primary};
    }
`

function LastProject() {
    const lastProject = projects[0]
    return (
        <StyledLastProject>
            <div className="container">
                <h2>Mon dernier projet</h2>
                <ProjectIntroduction project={lastProject} titleSize={'h3'} />
                <StyledLink
                    className="button"
                    to={`/portfolio/${lastProject.slug}`}
                    title={lastProject.name}
                >
                    En savoir +
                </StyledLink>
            </div>
        </StyledLastProject>
    )
}

export default LastProject
