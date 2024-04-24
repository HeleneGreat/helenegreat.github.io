import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import colors from '../../utils/colors'
import fonts from '../../utils/fonts'

const StyledCoverImg = styled('img')`
    width: 100%;
    height: 100%;
    filter: drop-shadow(5px 5px 10px ${colors.black});
    object-fit: cover;
    object-position: right;
`
const StyledButton = styled('div')`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translatex(-50%);
    text-wrap: nowrap;
    &:hover {
        background-color: ${colors.primary};
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
    color: ${colors.black};
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
            opacity: 0.2;
            transition: all 0.5s ease-in-out;
        }
    }
`

function Card({ project }) {
    return (
        <StyledCard>
            <Link to={`/projets/${project.slug}`} project={project}>
                <StyledName>{project.name}</StyledName>
                <StyledCoverImg
                    src={project.coverImage[0].src}
                    alt={project.name}
                    height={390}
                    width={390}
                />
                <StyledButton className="button">En savoir +</StyledButton>
            </Link>
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
