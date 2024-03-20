import styled from 'styled-components'
import colors from '../../../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Navigate } from 'react-router-dom'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import jobs from '../../../datas/jobs'
import Techno from '../../Techno/Techno'

const StyledJobDetails = styled('div')`
    // background-color: ${colors.secondary};
`
const StyledButton = styled(Link)`
    height: fit-content;
    position: absolute;
    top: 0;
    left: 0;
`
const StyledChevronIcon = styled(FontAwesomeIcon)`
    font-size: 26px;
    padding-right: 10px;
`
const StyledJobIcon = styled(FontAwesomeIcon)`
    color: ${colors.primary};
    font-size: 40px;
    position: absolute;
    top: 0;
    right: 0;
`
const StyledTitle = styled('div')`
    position: relative;
    &&& h2 {
        padding: 0 0 20px 0;
    }
`
const StyledWhere = styled('p')`
    font-size: 28px;
    text-align: center;
`
const StyledWhen = styled('p')`
    font-size: 18px;
    text-align: center;
    &:last-of-type {
        line-height: 25px;
    }
`
const StyledH3 = styled('h3')`
    padding: 40px 0 20px;
`
const StyledDescription = styled('div')`
    width: 80%;
    margin: 0 auto;
    h3 {
        padding: 40px 0 20px;
    }
    p,
    li {
        font-size: 21px;
        line-height: 30px;
    }
    ul {
        list-style-type: disc;
        padding-left: 40px;
    }
`

function JobDetails({ jobSlug }) {
    const job = jobs.find((job) => job.slug === jobSlug)

    // // The slug has to belong to a job
    if (!job) {
        return <Navigate to="/404" />
    }

    return (
        <div>
            <Techno technos={job.techno} />
            <div className="page-body">
                <StyledJobDetails className="container">
                    <StyledTitle>
                        <StyledButton
                            to="/parcours"
                            title="Retour au CV"
                            className="button"
                        >
                            <StyledChevronIcon icon={faChevronLeft} />
                            Retour
                        </StyledButton>
                        <h2>{job.name}</h2>
                        <StyledJobIcon icon={job.icon} />
                    </StyledTitle>
                    <StyledWhere>
                        {job.company}, {job.city}
                    </StyledWhere>
                    <StyledWhen>{job.fullDate}</StyledWhen>
                    <StyledWhen>{job.contrat}</StyledWhen>

                    <StyledDescription>
                        <StyledH3>Missions</StyledH3>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: job.description,
                            }}
                        ></div>
                    </StyledDescription>
                </StyledJobDetails>
            </div>
        </div>
    )
}

export default JobDetails
