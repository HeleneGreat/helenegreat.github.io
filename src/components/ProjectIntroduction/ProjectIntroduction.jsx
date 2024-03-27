import styled from 'styled-components'
import { breakpoints } from '../../utils/css-breakpoints'

const StyledIntro = styled('div')`
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    p {
        order: 2;
    }
    img {
        width: 100%;
        max-width: 450px;
        height: auto;
        order: 1;
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
            width: 450px;
            height: 450px;
            object-fit: cover;
        }
    }
`
const StyledProjectIntro = styled('div')`
    h1,
    h3 {
        margin-top: 30px;
    }
`

function ProjectIntroduction({ project, titleSize }) {
    const TitleSize = titleSize
    return (
        <StyledProjectIntro>
            <TitleSize>{project.name}</TitleSize>
            <StyledIntro>
                <p>{project.introduction}</p>
                <img
                    src={project.coverImage}
                    alt={project.name}
                    width={450}
                    height={450}
                />
            </StyledIntro>
        </StyledProjectIntro>
    )
}

export default ProjectIntroduction
