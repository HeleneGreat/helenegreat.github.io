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
        coverImage: portfolio,
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
        coverImage: photoSolex,
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
        coverImage: psToyscolor,
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
        coverImage: wikiDisney,
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
        coverImage: bookshelfCorner,
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
        coverImage: DefaultPicture,
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
        coverImage: DefaultPicture,
        techno: ['PHP'],
        description: '111111111111111111111111111111111111111',
        images: [],
        githubLink: 'https://github.com/HeleneGreat/parc-asterix',
    },
    {
        id: 1,
        slug: 'istorel',
        name: 'Istorel',
        introduction: 'Lorem ipsum dolor sit amet consectetur. Eget massa odio nec in lacus mauris est. Malesuada viverra risus ut euismod dignissim. Eget diam id egestas tellus. Commodo varius sit habitant consectetur orci adipiscing cras consequat ipsum. Orci eget sagittis consectetur nullam sed amet cras mattis. Pellentesque sagittis ut pulvinar porttitor sed eu augue non bibendum. Ut eget viverra ac purus quis orci. Erat enim ac pharetra blandit imperdiet. Adipiscing viverra dictum at eros.',
        coverImage: istorel,
        techno: ['PHP', 'HTML', 'CSS', 'Javascript'],
        description: "Lorem ipsum dolor sit amet consectetur. Vel imperdiet nunc tempor placerat. Eu lacus lorem mollis lectus. Amet in in lorem varius tristique vehicula amet. Donec ipsum sapien leo leo gravida sit aliquam. Ipsum mauris praesent volutpat sagittis tristique aliquet non consectetur velit. Sit nisl est tellus nulla. Nisi nunc sapien laoreet nisl varius. Iaculis lacinia enim nunc odio faucibus at commodo. Vivamus quam ac maecenas nulla amet risus sem tellus. Turpis nunc amet sed nisi. In consectetur magnis vitae nibh tellus vel nec erat. Nunc amet odio tincidunt id pulvinar quisque auctor. Pharetra lacus ante at quam fermentum consequat vestibulum accumsan. Id metus posuere tincidunt elementum aliquam faucibus faucibus. Sit mauris lobortis tempor volutpat tellus laoreet elit. Nec mauris fermentum platea proin vel risus massa duis. Luctus nibh in pulvinar vestibulum purus. Et ipsum diam leo augue in orci. Laoreet odio est in diam in sed facilisis eu consectetur.",
        images: [
            DefaultPicture,
            DefaultPicture,
            DefaultPicture,
        ],
        githubLink: 'https://github.com/HeleneGreat/istorel',
    },
   
]

export default projects