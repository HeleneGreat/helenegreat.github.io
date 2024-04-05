import styled from 'styled-components'
import { breakpoints } from '../../utils/css-breakpoints'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { useState } from 'react'

const StyledIntro = styled('div')`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    p {
        order: 2;
    }
    img {
        width: 100%;
        max-width: 450px;
        height: auto;
        order: 1;
        &:hover {
            cursor: pointer;
        }
    }
    @media screen and ${breakpoints.laptop} {
        flex-wrap: nowrap;
        img {
            order: 2;
            width: 40%;
            max-width: unset;
            padding-left: 50px;
        }
    }
    @media screen and ${breakpoints.desktop} {
        img {
            width: auto;
            height: 375px;
        }
    }
`
const StyledProjectIntro = styled('div')`
    h1,
    h3 {
        margin-top: 30px;
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

function ProjectIntroduction({ project, titleSize }) {
    const TitleSize = titleSize
    const [open, setOpen] = useState(false)

    return (
        <StyledProjectIntro>
            <TitleSize>{project.name}</TitleSize>
            <StyledIntro>
                <p>{project.introduction}</p>
                <img
                    src={project.coverImage[0].src}
                    alt={project.title}
                    width={450}
                    height={450}
                    onClick={() => setOpen(true)}
                />
                <StyledLightbox
                    closeOnBackdropClick={true}
                    controller={{ closeOnBackdropClick: true }}
                    open={open}
                    close={() => setOpen(false)}
                    slides={project.coverImage}
                    carousel={{ finite: 1 }}
                />
            </StyledIntro>
        </StyledProjectIntro>
    )
}

export default ProjectIntroduction
