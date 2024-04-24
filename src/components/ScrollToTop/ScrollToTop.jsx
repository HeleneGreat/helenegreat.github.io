import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useMediaQuery from '../../hooks/useMediaQuery'
import { breakpoints } from '../../utils/css-breakpoints'

const ScrollToTop = () => {
    const isLaptop = useMediaQuery(breakpoints.laptop)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.startsWith('/parcours/')) {
            const element = document.getElementById('job-details')
            if (element) {
                // Si l'élément avec l'ID spécifique est trouvé, faire défiler jusqu'à cet élément, en fonction de la hauteur du header
                let headerHeight
                if (isLaptop) {
                    headerHeight = 91
                } else {
                    headerHeight = 72
                }
                const { top } = element.getBoundingClientRect()
                window.scrollTo({
                    top: window.pageYOffset + top - headerHeight,
                    behavior: 'smooth',
                })
            } else {
                // Si l'élément avec l'ID spécifique n'est pas trouvé, faire défiler vers le haut
                window.scrollTo(0, 0)
            }
        } else {
            // Pour toutes les autres URL, faire défiler vers le haut
            window.scrollTo(0, 0)
        }
    }, [location, isLaptop])
    return null
}

export default ScrollToTop
