import styled from 'styled-components'
import portrait from '../../assets/helene_carriou1.png'
import colors from '../../utils/colors'
import jobs from '../../datas/jobs'
import JobCard from '../../components/JobCard/JobCard'

const StyledPageHeader = styled('div')`
    display: flex;
    align-items: flex-end;
`
const StyledPresentation = styled('div')`
    padding-right: 40px;
    p {
        width: 100% !important;
    }
`
const StyledCurriculumBody = styled('div')`
    background-color: ${colors.secondary};
    h2 {
        text-align: center;
        padding-bottom: 40px;
    }
`
const StyledImg = styled('img')`
    border-top-left-radius: 200px;
    border-top-right-radius: 200px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    height: 500px;
    width: 400px;
    object-fit: cover;
`

function Curriculum() {
    return (
        <div className="main">
            <div className="page-header">
                <StyledPageHeader className="container">
                    <StyledPresentation>
                        <h1>Une passion qui mène à une reconversion</h1>
                        <p className="presentation">
                            Lorem ipsum dolor sit amet consectetur. Amet
                            ultricies commodo imperdiet quam magna in mi. Et
                            mauris nulla non arcu eget eget tincidunt. Habitasse
                            malesuada velit vehicula dolor mauris tincidunt
                            viverra semper nibh. Dictumst neque aliquam
                            tristique nibh elementum. Nisl potenti neque enim id
                            dui. Augue lorem diam ridiculus a pharetra lorem
                            purus fringilla consectetur. Ullamcorper accumsan
                            mattis sed neque. Mattis tellus rhoncus dapibus
                            magna id risus risus arcu. Neque at ut quam tellus
                            a. Vestibulum sed viverra curabitur mattis accumsan
                            dictum at aliquet nibh. At non ultricies commodo
                            nunc quam neque dolor amet consequat. Turpis quisque
                            pretium porta auctor ultrices. Orci non lorem
                            dignissim non et.
                        </p>
                    </StyledPresentation>
                    <StyledImg
                        src={portrait}
                        alt="Hélène Carriou, développeuse full-stack"
                    />
                </StyledPageHeader>
            </div>
            <StyledCurriculumBody className="page-body">
                <div className="container">
                    <h2>Mon parcours</h2>
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} />
                    ))}
                </div>
            </StyledCurriculumBody>
        </div>
    )
}

export default Curriculum
