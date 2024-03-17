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

function ProjectIntroduction({ project, titleSize }) {
    const TitleSize = titleSize
    const StyledTitle = styled(TitleSize)`
        margin-top: 30px;
    `
    return (
        <div>
            <StyledTitle>{project.name}</StyledTitle>
            <StyledIntro>
                <p>{project.introduction}</p>
                <img
                    src={project.coverImage}
                    alt={project.name}
                    width={500}
                    height={500}
                />
            </StyledIntro>
        </div>
    )
}

export default ProjectIntroduction
