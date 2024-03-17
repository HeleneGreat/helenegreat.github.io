import styled from 'styled-components'

const StyledIntro = styled('div')`
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
        width: 350px;
        height: 350px;
        object-fit: cover;
        padding-left: 50px;
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
                    width={500}
                    height={500}
                />
            </StyledIntro>
        </StyledProjectIntro>
    )
}

export default ProjectIntroduction
