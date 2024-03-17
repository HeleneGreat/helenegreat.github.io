import Title from '../../components/HomePage/Title/Title'
import Techno from '../../components/Techno/Techno'
import Presentation from '../../components/HomePage/Presentation/Presentation'
import LastProject from '../../components/HomePage/LastProject/LastProject'
import ProjectTypes from '../../components/HomePage/ProjectTypes/ProjectTypes'
import technoIcons from '../../datas/technoIcons'

function Home() {
    return (
        <div className="main">
            <Title />
            <Techno technos={technoIcons.map((item) => item.name)} />
            <Presentation />
            <LastProject />
            <ProjectTypes />
        </div>
    )
}

export default Home
