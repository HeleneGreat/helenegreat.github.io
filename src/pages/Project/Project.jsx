import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import projects from '../../datas/projects'
import colors from '../../utils/colors'
import Techno from '../../components/Techno/Techno'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faChevronLeft,
    faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons'
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
const StyledProjectImages = styled('div')`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .img-container {
        overflow: hidden;
        margin: 10px 0;
        border: 3px solid ${colors.black};
        border-radius: 5px;
        img {
            width: 100%;
            height: auto;
            transition: all 0.3s ease-in-out;
        }
        &:hover img {
            cursor: pointer;
            transform: scale(1.1);
        }
    }
    @media screen and ${breakpoints.tablet} {
        .img-container {
            margin: 0 10px 30px;
            img {
                width: 300px;
                height: 300px;
                min-width: 100%;
                min-height: 100%;
                object-fit: cover;
            }
        }
    }
`
const StyledDescription = styled('div')`
    h3 {
        padding: 40px 0 20px;
    }
    p,
    li {
        padding-bottom: 12px;
    }
    ul {
        list-style-type: disc;
        padding-left: 40px;
    }
`
const StyledLink = styled(Link)`
    display: table-cell;
    vertical-align: middle;
    width: fit-content;
    &.button {
        height: 40px;
        padding: 0 15px;
        line-height: 40px;
        @media screen and ${breakpoints.laptop} {
            height: 60px;
            padding: 0 30px;
            line-height: 55px;
        }
        &:last-of-type {
            margin-left: 30px;
            @media screen and ${breakpoints.laptop} {
                margin-left: 50px;
            }
        }
    }
`
const StyledButtons = styled('div')`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`
const StyledIcon = styled(FontAwesomeIcon)`
    padding-left: 20px;
    vertical-align: middle;
    &.fa-arrow-up-right-from-square {
        font-size: 20px;
        @media screen and ${breakpoints.laptop} {
            font-size: 22px;
        }
    }
    &.fa-square-github {
        font-size: 30px;
        @media screen and ${breakpoints.laptop} {
            font-size: 45px;
        }
    }
`
const StyledLightbox = styled(Lightbox)`
    z-index: 99999999999999999999;
    .yarl__slide_title {
        text-align: center;
    }
    .yarl__container:hover {
        cursor: pointer;
    }
    .yarl__slide_image {
        background-color: #323232;
        padding: 50px;
        &:hover {
            cursor: default;
        }
    }
`

function Project() {
    const { projectSlug } = useParams()
    const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(-1)
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(-1)
    }

    // The slug has to belong to a project
    const project = projects.find((project) => project.slug === projectSlug)
    if (!project) {
        return <Navigate to="/404" />
    }

    return (
        <div className="main">
            <div className="page-header">
                <div className="container">
                    <StyledButton className="button" onClick={handleClick}>
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
                            <div className="img-container">
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
                            </div>
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
                    <StyledDescription>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: project.description,
                            }}
                        ></div>
                    </StyledDescription>

                    <StyledButtons>
                        {project.githubLink ? (
                            <StyledLink
                                className="button"
                                to={project.githubLink}
                                title="GitHub"
                                target="_blank"
                            >
                                Repository
                                <StyledIcon icon={faSquareGithub} />
                            </StyledLink>
                        ) : (
                            ''
                        )}
                        {project.websiteLink ? (
                            <StyledLink
                                className="button"
                                to={project.websiteLink}
                                title="Voir le sit en ligne"
                                target="_blank"
                            >
                                {project.name}
                                <StyledIcon icon={faArrowUpRightFromSquare} />
                            </StyledLink>
                        ) : (
                            ''
                        )}
                    </StyledButtons>
                </div>
            </StyledProjectBody>
        </div>
    )
}

export default Project
