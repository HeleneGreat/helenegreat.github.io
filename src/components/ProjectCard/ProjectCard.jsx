import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { breakpoints } from '../../utils/css-breakpoints'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

const StyledCoverImg = styled('img')`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const StyledLink = styled(Link)`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translatex(-50%);
    background-color: ${colors.tertiary};
    color: #fff;
    padding: 8px 30px;
    font-size: 22px;
    font-family: ${fonts.colombo};
    &:hover {
        background-color: ${colors.primary};
        transition: all 0.2s ease-in-out;
    }
`
const StyledName = styled('span')`
    display: none;
    position: absolute;
    width: 100%;
    text-align: center;
    top: 30%;
    transform: translatey(-50%);
    font-family: ${fonts.colombo};
    font-size: 33px;
`
const StyledCard = styled('li')`
    width: 100%;
    height: 100%;
    position: relative;
    &:hover {
        ${StyledName} {
            display: block;
            transition: all 0.2s ease-in-out;
        }
        ${StyledCoverImg} {
            opacity: 0.3;
            transition: all 0.5s ease-in-out;
        }
    }
`

function Card({ project }) {
    return (
        <StyledCard>
            <StyledName>{project.name}</StyledName>
            <StyledCoverImg
                src={project.coverImage}
                alt={project.name}
                height={80}
                width={80}
            />
            <StyledLink to={`/portfolio/${project.slug}`} project={project}>
                En savoir +
            </StyledLink>
        </StyledCard>
    )
}

Card.propTypes = {
    projet: PropTypes.shape({
        name: PropTypes.string.isRequired,
        coverImage: PropTypes.string,
    }),
}

export default Card
