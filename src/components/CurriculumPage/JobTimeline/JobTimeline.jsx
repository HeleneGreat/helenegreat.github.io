import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import JobCard from '../JobCard/JobCard'
import jobs from '../../../datas/jobs'
import styled from 'styled-components'
import colors from '../../../utils/colors'
import fonts from '../../../utils/fonts'
import useMediaQuery from '../../../hooks/useMediaQuery'
import { breakpoints } from '../../../utils/css-breakpoints'

const StyledTimelineItem = styled(TimelineItem)`
    &&.MuiTimelineItem-positionRight::before {
        flex: 0;
        @media screen and ${breakpoints.tablet} {
            flex: 1;
        }
    }
`
const StyledTimelineOppositeContent = styled(TimelineOppositeContent)`
    &&.years {
        margin: auto 0;
        font-family: ${fonts.pt};
        color: ${colors.black};
        font-size: 15px;
        @media screen and ${breakpoints.tablet} {
            font-size: 20px;
            max-width: 12%;
        }
        @media screen and ${breakpoints.laptop} {
            max-width: unset;
        }
    }
`
const StyledTimelineSeparator = styled(TimelineSeparator)`
    .invisible {
        opacity: 0;
    }
`
const StyledTimelineConnector = styled(TimelineConnector)`
    background-color: ${colors.primary}!important;
`
const StyledTimelineDot = styled(TimelineDot)`
    border-color: ${colors.tertiary}!important;
`

function OppositeContentTimeline() {
    const isTablet = useMediaQuery(breakpoints.tablet)
    const isLaptop = useMediaQuery(breakpoints.laptop)
    return (
        <Timeline position={isLaptop ? 'alternate' : 'right'}>
            {jobs.map((job, index) => (
                <StyledTimelineItem key={index}>
                    {isTablet ? (
                        <StyledTimelineOppositeContent className="years">
                            {job.year}
                        </StyledTimelineOppositeContent>
                    ) : (
                        ''
                    )}
                    <StyledTimelineSeparator>
                        <StyledTimelineConnector
                            className={index === 0 ? 'invisible' : ''}
                        />
                        <StyledTimelineDot variant="outlined" />
                        <StyledTimelineConnector
                            className={
                                index < jobs.length - 1 ? '' : 'invisible'
                            }
                        />
                    </StyledTimelineSeparator>
                    <TimelineContent>
                        <JobCard key={job.id} job={job} />
                    </TimelineContent>
                </StyledTimelineItem>
            ))}
        </Timeline>
    )
}

export default OppositeContentTimeline
