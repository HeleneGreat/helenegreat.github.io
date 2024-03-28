import styled from 'styled-components'
import colors from '../../../utils/colors'
import fonts from '../../../utils/fonts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { breakpoints } from '../../../utils/css-breakpoints'

const StyledJobCard = styled('div')`
    padding: 30px;
    border: 1px solid ${colors.primary};
    border-radius: 7px;
    text-align: left;
    @media screen and ${breakpoints.tablet} {
        margin: 15px 0;
    }
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    float: right;
    color: ${colors.primary};
    font-size: 23px;
    @media screen and ${breakpoints.laptop} {
        font-size: 40px;
    }
`
const StyledName = styled('p')`
    font-family: ${fonts.colombo};
    font-size: 23px;
    @media screen and ${breakpoints.tablet} {
        font-size: 30px;
    }
`
const StyledWhere = styled('p')`
    font-size: 15px;
    line-height: 20px;
    @media screen and ${breakpoints.laptop} {
        line-height: 28px;
        font-size: 18px;
    }
`
const StyledIntro = styled('p')`
    display: none;
    @media screen and ${breakpoints.tablet} {
        display: block;
        line-height: 30px;
        font-size: 21px;
    }
`
const StyledLink = styled(Link)`
    display: block;
    margin: 15px auto 0;
    width: fit-content;
    font-size: 18px;
    padding: 8px 20px;
    @media screen and ${breakpoints.tablet} {
        font-size: 22px;
        padding: 8px 30px;
    }
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
