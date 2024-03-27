import styled from 'styled-components'
import colors from '../../utils/colors'
import technoIcons from '../../datas/technoIcons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TechnoLevel from '../TechnoLevel/TechnoLevel'
import { breakpoints } from '../../utils/css-breakpoints'

const StyledTechno = styled('div')`
    background-color: ${colors.black};
    color: #fff;
    width: 100%;
    &.allIcons {
        background-color: ${colors.primary};
        padding: 30px 0;
        h2 {
            text-align: center;
        }
    }
`
const StyledList = styled('ul')`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px 0;
    &.allIcons {
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        background-color: ${colors.primary};
        li {
            text-align: center;
            padding: 30px 0;
            width: 50%;
            min-width: fit-content;
            @media screen and ${breakpoints.mobile} {
                width: 33%;
            }
            @media screen and ${breakpoints.tablet} {
                width: 25%;
            }
            @media screen and ${breakpoints.laptop} {
                width: 20%;
            }
        }
    }
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 60px;
`
function Techno({ technos, allIcons = false }) {
    return (
        <StyledTechno className={allIcons ? 'allIcons' : ''}>
            <div className="container">
                {allIcons && <h2>Mes compétences techniques</h2>}
                <StyledList className={allIcons ? 'allIcons' : ''}>
                    {technos.map((techno, index) => {
                        const technoIcon = technoIcons.find(
                            (item) => item.name === techno
                        )
                        if (!technoIcon) return null
                        return (
                            <li key={index}>
                                <StyledFontAwesomeIcon
                                    icon={technoIcon.icon}
                                    title={technoIcon.name}
                                />
                                {allIcons && <p>{technoIcon.name}</p>}
                                {allIcons && (
                                    <TechnoLevel level={technoIcon.level} />
                                )}
                            </li>
                        )
                    })}
                </StyledList>
            </div>
        </StyledTechno>
    )
}

export default Techno
