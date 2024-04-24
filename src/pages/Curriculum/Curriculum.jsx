import { useParams } from 'react-router-dom'
import portrait from '../../assets/helene_carriou1.png'
import colors from '../../utils/colors'
import JobList from '../../components/CurriculumPage/JobList/JobList'
import JobDetails from '../../components/CurriculumPage/JobDetails/JobDetails'
import styled from 'styled-components'
import { breakpoints } from '../../utils/css-breakpoints'

const StyledPageHeader = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (${breakpoints.laptop}) {
        flex-direction: row;
        align-items: flex-end;
    }
`
const StyledPresentation = styled('div')`
    @media screen and ${breakpoints.laptop} {
        padding-right: 40px;
    }
    p {
        width: 100% !important;
    }
    h1 {
        font-size: 55px;
        @media screen and ${breakpoints.desktop} {
            font-size: 70px;
        }
    }
`
const StyledCurriculumBody = styled('div')`
    background-color: ${colors.secondary};
    h2 {
        text-align: center;
        @media screen and ${breakpoints.laptop} {
            padding-bottom: 40px;
            flex-direction: row;
            align-items: flex-end;
        }
    }
`
const StyledImg = styled('img')`
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: none;
    height: 400px;
    width: 300px;
    padding-top: 20px;
    object-fit: cover;
    @media screen and ${breakpoints.laptop} {
        display: block;
        padding: 0;
    }
    @media screen and ${breakpoints.desktop} {
        height: 500px;
        width: 400px;
    }
`

function Curriculum() {
    const { jobSlug } = useParams()

    return (
        <div className="main">
            <div className="page-header">
                <StyledPageHeader className="container">
                    <StyledPresentation>
                        <h1>
                            Développeuse passionnée, curieuse et polyvalente
                        </h1>
                        <p className="presentation">
                            Je suis une développeuse full-stack passionnée par
                            la création d'expériences numériques innovantes.
                            Forte d'une solide formation en développement web et
                            d'une expérience professionnelle diversifiée, je
                            maîtrise les technologies front-end et back-end. Mon
                            parcours m'a permis d'acquérir une expertise dans la
                            conception, le développement et la maintenance
                            d'applications web. Créative, méthodique et avide
                            d'apprentissage, je m'engage à relever les défis
                            techniques avec enthousiasme et à contribuer au
                            succès des projets grâce à ma polyvalence et mon
                            engagement envers l'excellence technique.
                        </p>
                    </StyledPresentation>
                    <StyledImg
                        src={portrait}
                        alt="Hélène Carriou, développeuse full-stack"
                    />
                </StyledPageHeader>
            </div>
            <StyledCurriculumBody>
                {jobSlug ? <JobDetails jobSlug={jobSlug} /> : <JobList />}
            </StyledCurriculumBody>
        </div>
    )
}

export default Curriculum
