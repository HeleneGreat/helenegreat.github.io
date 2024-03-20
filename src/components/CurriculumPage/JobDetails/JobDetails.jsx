import styled from 'styled-components'
import colors from '../../../utils/colors'
import fonts from '../../../utils/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link, Navigate, useParams } from 'react-router-dom'
import jobs from '../../../datas/jobs'

const StyledJobDetails = styled('div')`
    // background-color: ${colors.secondary};
`

function JobDetails({ jobSlug }) {
    const job = jobs.find((job) => job.slug === jobSlug)

    // // The slug has to belong to a job
    if (!job) {
        return <Navigate to="/404" />
    }

    return <StyledJobDetails className="container">{job.name}</StyledJobDetails>
}

export default JobDetails
