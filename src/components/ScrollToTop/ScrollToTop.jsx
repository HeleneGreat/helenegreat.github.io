import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.startsWith('/parcours/')) {
            const element = document.getElementById('job-details')
            if (element) {
                // Si l'élément avec l'ID spécifique est trouvé, faire défiler jusqu'à cet élément
                element.scrollIntoView({ behavior: 'smooth' })
            } else {
                // Si l'élément avec l'ID spécifique n'est pas trouvé, faire défiler vers le haut
                window.scrollTo(0, 0)
            }
        } else {
            // Pour toutes les autres URL, faire défiler vers le haut
            window.scrollTo(0, 0)
        }
    }, [location])
    return null
}

export default ScrollToTop
