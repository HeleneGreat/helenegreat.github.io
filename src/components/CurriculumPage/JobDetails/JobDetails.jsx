import styled, { css } from 'styled-components'
import colors from '../../../utils/colors'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Navigate } from 'react-router-dom'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import jobs from '../../../datas/jobs'
import Techno from '../../Techno/Techno'

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
const StyledJobTitle = css`
    margin-left: 190px; // Bouton retour
    margin-right: 70px; // Icone
`
const StyledH2 = styled('h2')`
    ${StyledJobTitle}
`
const StyledWhere = styled('p')`
    ${StyledJobTitle}
    font-size: 28px;
    text-align: center;
`
const StyledWhen = styled('p')`
    ${StyledJobTitle}
    font-size: 18px;
    text-align: center;
    &:last-of-type {
        line-height: 25px;
    }
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
        padding-bottom: 12px;
    }
    ul {
        list-style-type: disc;
        padding-left: 40px;
    }
`

function JobDetails({ jobSlug }) {
    const job = jobs.find((job) => job.slug === jobSlug)

    // The slug has to belong to a job
    if (!job) {
        return <Navigate to="/404" />
    }

    return (
        <div>
            {job.techno ? <Techno technos={job.techno} /> : ''}
            <div className="page-body">
                <JobDetails className="container">
                    <StyledTitle>
                        <StyledButton
                            to="/parcours"
                            title="Retour au CV"
                            className="button"
                        >
                            <StyledChevronIcon icon={faChevronLeft} />
                            Retour
                        </StyledButton>
                        <StyledH2>{job.name}</StyledH2>
                        <StyledJobIcon icon={job.icon} />
                    </StyledTitle>
                    <StyledWhere>
                        {job.company}, {job.city}
                    </StyledWhere>
                    <StyledWhen>{job.fullDate}</StyledWhen>
                    <StyledWhen>{job.contrat}</StyledWhen>

                    <StyledDescription>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: job.description,
                            }}
                        ></div>
                    </StyledDescription>
                </JobDetails>
            </div>
        </div>
    )
}

export default JobDetails
