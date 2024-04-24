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
    li {
        text-align: center;
    }
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
    flex-wrap: wrap;
    &.allIcons {
        justify-content: space-between;
        align-items: center;
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
    .home-icons {
        width: 30%;
        min-width: fit-content;
        padding-bottom: 20px;
        @media screen and ${breakpoints.mobile} {
            width: unset;
            min-width: unset;
            padding-bottom: 0;
            position: relative;
            &:hover .name {
                visibility: visible;
                opacity: 1;
            }
        }
    }
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    font-size: 30px;
    @media screen and ${breakpoints.tablet} {
        font-size: 60px;
    }
`
const StyledIconImg = styled('img')`
    width: auto;
    height: 54px;
`
const StyledName = styled('div')`
    text-align: center;
    font-size: 15px;
    @media screen and ${breakpoints.laptop} {
        visibility: hidden;
        opacity: 0.7;
        position: absolute;
        bottom: -45px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${colors.tertiary};
        padding: 0px 18px;
        border-radius: 5px;
        transition: all 0.2s ease-in;
        &::before {
            content: '';
            display: block;
            position: absolute;
            left: 50%;
            top: -10px;
            transform: translateX(-50%);
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-bottom: 10px solid ${colors.tertiary};
        }
    }
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
                        const isSpecialTechno =
                            technoIcon.name === 'Photoshop' ||
                            technoIcon.name === 'Twig' ||
                            technoIcon.name === 'Doctrine' ||
                            technoIcon.name === 'Prestashop'
                        return (
                            <li
                                key={index}
                                className={!allIcons ? 'home-icons' : ''}
                            >
                                {isSpecialTechno ? (
                                    <StyledIconImg
                                        src={technoIcon.icon}
                                        alt={technoIcon.name}
                                        className={technoIcon.name}
                                    />
                                ) : (
                                    <StyledFontAwesomeIcon
                                        icon={technoIcon.icon}
                                    />
                                )}
                                {!allIcons && (
                                    <StyledName className="name">
                                        {technoIcon.name}
                                    </StyledName>
                                )}
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
