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

const StyledTimelineOppositeContent = styled(TimelineOppositeContent)`
    &&.years {
        margin: auto 0;
        font-family: ${fonts.pt};
        color: ${colors.black};
        font-size: 20px;
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
    return (
        <Timeline position="alternate">
            {jobs.map((job, index) => (
                <TimelineItem key={index}>
                    <StyledTimelineOppositeContent className="years">
                        {job.year}
                    </StyledTimelineOppositeContent>
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
                </TimelineItem>
            ))}
        </Timeline>
    )
}

export default OppositeContentTimeline
