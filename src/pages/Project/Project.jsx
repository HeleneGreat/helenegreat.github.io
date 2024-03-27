import { Link, useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import projects from '../../datas/projects'
import colors from '../../utils/colors'
import Techno from '../../components/Techno/Techno'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import ProjectIntroduction from '../../components/ProjectIntroduction/ProjectIntroduction'
import { breakpoints } from '../../utils/css-breakpoints'

const StyledProjectBody = styled('div')`
    background-color: ${colors.secondary};
`
const StyledChevronIcon = styled(FontAwesomeIcon)`
    font-size: 26px;
    padding-right: 10px;
`
const StyledButton = styled(Link)`
    &.button {
        &:hover {
            color: ${colors.tertiary};
            background-color: #fff;
        }
    }
`
const StyledLink = styled(Link)`
    display: block;
    width: fit-content;
    margin: 30px auto 0;
`
const StyledProjectImages = styled('div')`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    img {
        width: 100%;
        height: auto;
        padding: 10px 0;
    }
    @media screen and ${breakpoints.tablet} {
        img {
            width: 300px;
            height: 300px;
            object-fit: cover;
            padding: 0 10px 30px;
        }
    }
`
const StyledGitHubIcon = styled(FontAwesomeIcon)`
    padding-left: 20px;
    font-size: 45px;
    vertical-align: middle;
`

function Project() {
    const { projectSlug } = useParams()

    // The slug has to belong to a project
    const project = projects.find((project) => project.slug === projectSlug)
    if (!project) {
        return <Navigate to="/404" />
    }

    return (
        <div className="main">
            <div className="page-header">
                <div className="container">
                    <StyledButton
                        className="button"
                        to="/portfolio"
                        title="Retour au portfolio"
                    >
                        <StyledChevronIcon icon={faChevronLeft} />
                        Retour
                    </StyledButton>
                    <ProjectIntroduction project={project} titleSize={'h1'} />
                </div>
            </div>
            <Techno technos={project.techno} />
            <StyledProjectBody className="page-body">
                <div className="container">
                    <StyledProjectImages>
                        {project.images.map((image, index) => (
                            <img
                                src={image}
                                alt={project.name}
                                key={index}
                                width={300}
                                height={300}
                            />
                        ))}
                    </StyledProjectImages>
                    <p>{project.description}</p>
                    <StyledLink
                        className="button"
                        to={project.githubLink}
                        title="GitHub"
                        target="_blank"
                    >
                        Repository
                        <StyledGitHubIcon icon={faSquareGithub} />
                    </StyledLink>
                </div>
            </StyledProjectBody>
        </div>
    )
}

export default Project
