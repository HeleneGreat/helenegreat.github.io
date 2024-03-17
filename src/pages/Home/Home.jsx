import Title from '../../components/HomePage/Title/Title'
import Techno from '../../components/Techno/Techno'
import Presentation from '../../components/HomePage/Presentation/Presentation'
import LastProject from '../../components/HomePage/LastProject/LastProject'
import ProjectTypes from '../../components/HomePage/ProjectTypes/ProjectTypes'

function Home() {
    const mainTechnos = ['Symfony', 'React', 'HTML', 'Git', 'JS', 'SQL', 'CSS']
    return (
        <div className="main">
            <Title />
            <Techno technos={mainTechnos.map((techno) => techno)} />
            <Presentation />
            <LastProject />
            <ProjectTypes />
        </div>
    )
}

export default Home
