import styled from 'styled-components'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const StyledJobCard = styled('div')`
    padding: 30px;
    margin: 15px 0;
    border: 1px solid ${colors.primary};
    border-radius: 7px;
    width: 40%;
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    float: right;
    color: ${colors.primary};
    font-size: 40px;
`
const StyledName = styled('p')`
    font-family: ${fonts.colombo};
    font-size: 30px;
`
const StyledWhere = styled('p')`
    font-size: 18px;
`
const StyledIntro = styled('p')`
    line-height: 30px;
    font-size: 21;
`
const StyledLink = styled(Link)`
    display: block;
    margin: 15px auto 0;
    width: fit-content;
    font-size: 22px;
    &:hover {
        background-color: ${colors.primary};
    }
`

function JobCard({ job }) {
    return (
        <StyledJobCard>
            <StyledFontAwesomeIcon icon={job.icon} />
            <StyledName>{job.name}</StyledName>
            <StyledWhere>
                {job.company}, {job.city}
            </StyledWhere>
            <StyledIntro>{job.introduction}</StyledIntro>
            <StyledLink
                className="button"
                to={`/parcours/${job.slug}`}
                job={job}
            >
                En savoir +
            </StyledLink>
        </StyledJobCard>
    )
}

export default JobCard
