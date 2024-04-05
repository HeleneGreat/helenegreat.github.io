import DefaultPicture from '../assets/DefaultPicture.jpg'
import istorel from '../assets/projects/istorel-cover.png'
import bookshelfCorner from '../assets/projects/bookshelf-corner-cover.png'
import photoSolex from '../assets/projects/photo-solex-cover.png'
import psToyscolor from '../assets/projects/ps-toyscolor-cover.png'
import wikiDisney from '../assets/projects/wiki-disney-cover.png'
import portfolio from '../assets/projects/portfolio-cover.png'


//1 Istorel
//2 Parc Asterix
//3 WP Yulbaba
//4 The Bookshelf Corner
//5 Wiki Disney
//6 PS Toycolor
//7 Photo Solex
//8 Portfolio

const projects = [
    {
        id: 8,
        slug: 'portfolio',
        name: 'Portfolio',
        introduction: 'Lorem ipsum dolor sit amet consectetur. Eget massa odio nec in lacus mauris est. Malesuada viverra risus ut euismod dignissim. Eget diam id egestas tellus. Commodo varius sit habitant consectetur orci adipiscing cras consequat ipsum. Orci eget sagittis consectetur nullam sed amet cras mattis. Pellentesque sagittis ut pulvinar porttitor sed eu augue non bibendum. Ut eget viverra ac purus quis orci. Erat enim ac pharetra blandit imperdiet. Adipiscing viverra dictum at eros.',
        coverImage: [
            {
                src: portfolio,
                title: "Portfolio",
                description: "Photo de couverture"
            }
        ],
        techno: ['React', 'Javascript'],
        description: 'Lorem ipsum dolor sit amet consectetur. Vel imperdiet nunc tempor placerat. Eu lacus lorem mollis lectus. Amet in in lorem varius tristique vehicula amet. Donec ipsum sapien leo leo gravida sit aliquam. Ipsum mauris praesent volutpat sagittis tristique aliquet non consectetur velit. Sit nisl est tellus nulla. Nisi nunc sapien laoreet nisl varius. Iaculis lacinia enim nunc odio faucibus at commodo. Vivamus quam ac maecenas nulla amet risus sem tellus. Turpis nunc amet sed nisi. In consectetur magnis vitae nibh tellus vel nec erat. Nunc amet odio tincidunt id pulvinar quisque auctor. Pharetra lacus ante at quam fermentum consequat vestibulum accumsan. Id metus posuere tincidunt elementum aliquam faucibus faucibus. Sit mauris lobortis tempor volutpat tellus laoreet elit. Nec mauris fermentum platea proin vel risus massa duis. Luctus nibh in pulvinar vestibulum purus. Et ipsum diam leo augue in orci. Laoreet odio est in diam in sed facilisis eu consectetur.',
        images: [],
        githubLink: 'https://github.com/HeleneGreat/portfolio-v2',
    },
    {
        id: 7,
        slug: 'photo-solex',
        name: 'Photo Solex',
        introduction: '3333333333333',
        coverImage: [
            {
                src: photoSolex,
                title: "Photo Solex",
                description: "Photo de couverture"
            }
        ],
        techno: ['PHP', 'Javascript', 'Twig', 'HTML', 'Sass', 'Doctrine'],
        description: '3333333333333333333333333333333333333333333333',
        images: [],
        githubLink: 'https://github.com/HeleneGreat/family-pictures',
    },
    {
        id: 6,
        slug: 'ps-toyscolor',
        name: 'PS Toyscolor',
        introduction: '11111111111',
        coverImage: [
            {
                src: psToyscolor,
                title: "PS Toyscolor",
                description: "Photo de couverture"
            }
        ],
        techno: ['PHP', 'Symfony', 'Prestashop', 'SQL', 'Twig', 'HTML', 'Sass'],
        description: '111111111111111111111111111111111111111',
        images: [],
        githubLink: 'https://github.com/HeleneGreat/ps_toyscolor',
    },
    {
        id: 5,
        slug: 'wiki-disney',
        name: 'Wiki Disney',
        introduction: '11111111111',
        coverImage: [
            {
                src: wikiDisney,
                title: "Wiki Disney",
                description: "Photo de couverture"
            }
        ],
        techno: ['Symfony', 'PHP', 'Sass', 'Twig', 'Bootstrap', 'Doctrine'],
        description: '111111111111111111111111111111111111111',
        images: [],
        githubLink: 'https://github.com/HeleneGreat/wiki_disney',
    },
    {
        id: 4,
        slug: 'the-bookshelf-corner',
        name: 'The Bookshelf Corner',
        introduction: '22222222222',
        coverImage: [
            {
                src: bookshelfCorner,
                title: "The Bookshelf Corner",
                description: "Photo de couverture"
            }
        ],
        techno: ['PHP', 'Javascript', 'SQL', 'HTML', 'CSS'],
        description: '222222222222222222222222222222222222222222',
        images: [],
        githubLink: 'https://github.com/HeleneGreat/bookshelf-corner',
    },
    {
        id: 3,
        slug: 'wp-yulbaba',
        name: 'WP Yulbaba',
        introduction: '11111111111',
        coverImage: [
            {
                src: DefaultPicture,
                title: "WP Yulbaba",
                description: "Photo de couverture"
            }
        ],
        techno: ['Wordpress', 'PHP', 'CSS', 'Javascript', 'HTML'],
        description: '111111111111111111111111111111111111111',
        images: [],
        githubLink: 'https://github.com/HeleneGreat/wp-yulbaba',
    },
    {
        id: 2,
        slug: 'parc-asterix',
        name: 'Parc Asterix',
        introduction: '11111111111',
        coverImage: [
            {
                src: DefaultPicture,
                title: "Parc Astérix",
                description: "Photo de couverture"
            }
        ],
        techno: ['PHP'],
        description: '111111111111111111111111111111111111111',
        images: [],
        githubLink: 'https://github.com/HeleneGreat/parc-asterix',
    },
    {
        id: 1,
        slug: 'istorel',
        name: 'Istorel',
        introduction: `Istorel représente une étape significative dans mon parcours de développement web, marquant mes premiers pas dans la création et la refonte d'un site web. L'objectif principal était de moderniser un site existant, initialement non responsive et non conforme aux standards d'accessibilité et d'ergonomie contemporains. Pour ce faire, j'ai sélectionné le site d'une association d'historiens locaux comme terrain d'expérimentation.`,
        coverImage: [
            {
                src: istorel,
                title: "Istorel",
                description: "Photo de couverture"
            }
        ],
        techno: ['PHP', 'HTML', 'CSS', 'Javascript'],
        description: `
        <p>Au cœur de ce projet résidait la nécessité de repenser entièrement le design tout en réorganisant les informations pour une expérience utilisateur optimale. La page d'accueil, initialement surchargée, a été rationalisée, épurée de ses éléments superflus pour une navigation plus fluide et intuitive.</p>
        <p>J'ai choisi le site d'une association d'historiens locaux. En plus du design, l'objectif était aussi de réorganiser les informations et d'épurer la page d'accueil, qui comportait beaucoup trop d'éléments, pas forcément pertinents.</p>
        <p>Initialement construit en HTML/CSS avec une touche de JavaScript pour des interactions dynamiques, j'ai étendu les fonctionnalités du site avec l'introduction de la programmation orientée objet (POO) en PHP. Cela m'a permis d'implémenter une classe dédiée aux articles ('Article') facilitant la gestion et l'affichage automatisé des actualités et des articles détaillés.</p>
        <p>Cependant, une limitation de ce projet résidait dans l'absence de connexion à une base de données (BDD). Par conséquent, bien que le formulaire de contact ait été intégré, il demeurait non fonctionnel. Malgré cette contrainte, Istorel représente une étape cruciale dans mon apprentissage du développement web, m'offrant une solide base pour mes projets futurs.</p>`,
        images: [
            { src: bookshelfCorner, title: "Istorel", description: "A beautiful project"},
            { src: psToyscolor, title: "Istorel", description: "A beautiful project"},
            { src: photoSolex, title: "Istorel", description: "A beautiful project"}
        ],
        githubLink: 'https://github.com/HeleneGreat/istorel',
        websiteLink: 'https://helenegreat.alwaysdata.net/istorel/'
    },
   
]

export default projects