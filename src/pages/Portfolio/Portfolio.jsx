import { useParams } from 'react-router-dom'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import DefaultPicture from '../../assets/DefaultPicture.jpg'
import styled from 'styled-components'
import { breakpoints } from '../../utils/css-breakpoints'
import colors from '../../utils/colors'

const projectList = [
    {
        id: 1,
        slug: 'un',
        name: 'Premier projet',
        introduction: '11111111111',
        coverImage: DefaultPicture,
        techno: [],
        description: '111111111111111111111111111111111111111',
        images: [],
        githubLink: '1',
    },
    {
        id: 2,
        slug: 'deux',
        name: 'Deuxième projet',
        introduction: '22222222222',
        // coverImage: DefaultPicture,
        techno: [],
        description: '222222222222222222222222222222222222222222',
        images: [],
        githubLink: '2',
    },
    {
        id: 3,
        slug: 'trois',
        name: 'Troisième projet',
        introduction: '3333333333333',
        coverImage: DefaultPicture,
        techno: [],
        description: '3333333333333333333333333333333333333333333333',
        images: [],
        githubLink: '3',
    },
    {
        id: 4,
        slug: 'quatre',
        name: 'Quatrième projet',
        introduction: '444444444444',
        coverImage: DefaultPicture,
        techno: [],
        description: '4444444444444444444444444444444444444444',
        images: [],
        githubLink: '4',
    },
]
const StyledHeader = styled('div')`
    color: #fff;
    background-color: ${colors.primary};
    padding: 50px 0 80px;
    p {
        margin-top: 30px;
        font-size: 23px;
        letter-spacing: 1px;
        line-height: 35px;
        margin-top: 50px;
        @media screen and ${breakpoints.laptop} {
            width: 80%;
        }
        @media screen and ${breakpoints.desktop} {
            width: 70%;
        }
    }
`

const StyledPortfolioBody = styled('div')`
    background-color: ${colors.secondary};
    padding-bottom: 80px;
    h2 {
        text-align: center;
        padding: 40px 0;
    }
`
const StyledProjectList = styled('ul')`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 25px;
`

function Portfolio() {
    // const { projectId } = useParams()

    return (
        <div>
            {/* <h2>Project n° {projectId}</h2> */}
            <StyledHeader>
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
            </StyledHeader>
            <StyledPortfolioBody>
                <div className="container">
                    <h2>Mes projets</h2>
                    <StyledProjectList>
                        {projectList.map((project) => (
                            <ProjectCard
                                key={project.id}
                                name={project.name}
                                description={project.introduction}
                                picture={project.coverImage}
                            />
                        ))}
                    </StyledProjectList>
                </div>
            </StyledPortfolioBody>
        </div>
    )
}

export default Portfolio
