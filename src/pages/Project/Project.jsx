import { useState } from 'react'
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
import Lightbox from 'yet-another-react-lightbox'
import {
    Captions,
    Thumbnails,
    Zoom,
    Counter,
} from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/styles.css'
import 'yet-another-react-lightbox/plugins/captions.css'
import 'yet-another-react-lightbox/plugins/thumbnails.css'
import 'yet-another-react-lightbox/plugins/counter.css'

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
        margin: 10px 0;
        &:hover {
            cursor: pointer;
        }
    }
    @media screen and ${breakpoints.tablet} {
        img {
            width: 300px;
            height: 300px;
            object-fit: cover;
            margin: 0 10px 30px;
        }
    }
`
const StyledGitHubIcon = styled(FontAwesomeIcon)`
    padding-left: 20px;
    font-size: 45px;
    vertical-align: middle;
`
const StyledLightbox = styled(Lightbox)`
    z-index: 99999999999999999999;
    .yarl__slide_title {
        text-align: center;
    }
    .yarl__container:hover {
        cursor: pointer;
    }
    .yarl__slide_image:hover {
        cursor: default;
    }
`

function Project() {
    const { projectSlug } = useParams()
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)

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
                                onClick={() => {
                                    setOpen(true)
                                    setIndex(index)
                                }}
                                src={image.src}
                                alt={image.legend}
                                key={index}
                                width={300}
                                height={300}
                            />
                        ))}
                    </StyledProjectImages>
                    <StyledLightbox
                        closeOnBackdropClick={true}
                        controller={{ closeOnBackdropClick: true }}
                        open={(open, index >= 0)}
                        close={() => setIndex(-1)}
                        index={index}
                        slides={project.images}
                        plugins={[Captions, Thumbnails, Counter, Zoom]}
                        captions={{
                            descriptionTextAlign: 'center',
                        }}
                        zoom={{ maxZoomPixelRatio: 5, scrollToZoom: true }}
                    />
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
