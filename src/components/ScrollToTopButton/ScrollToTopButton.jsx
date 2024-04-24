import colors from '../../utils/colors'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { breakpoints } from '../../utils/css-breakpoints'
import { useState, useEffect } from 'react'

const StyledButton = styled('div')`
    width: 40px;
    height: 40px;
    border-radius: 25px;
    background-color: ${colors.tertiary};
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    opacity: ${({ visible }) => (visible ? 1 : 0)};
    pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
    @media screen and ${breakpoints.tablet} {
        width: 50px;
        height: 50px;
    }
    &:hover {
        cursor: pointer;
        background-color: ${colors.primary};
    }
`
const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
    color: ${colors.secondary};
    font-size: 25px;
`

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false)

    // Display bottom only when not at the top of the page
    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.pageYOffset > window.innerHeight / 2)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <StyledButton onClick={handleScrollToTop} visible={isVisible}>
            <StyledFontAwesomeIcon icon={faChevronUp} />
        </StyledButton>
    )
}

export default ScrollToTopButton
