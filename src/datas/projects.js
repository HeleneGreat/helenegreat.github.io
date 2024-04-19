import DefaultPicture from '../assets/DefaultPicture.jpg'
//1 Istorel
import istorel from '../assets/projects/istorel-cover.png'
//2 Parc Asterix
import asterix from '../assets/projects/asterix-cover.png'
import asterix1 from '../assets/projects/asterix1.png'
import asterix2 from '../assets/projects/asterix2.png'
import asterix3 from '../assets/projects/asterix3.png'
//3 WP Yulbaba
//4 The Bookshelf Corner
import bookshelfCorner from '../assets/projects/bookshelf-corner-cover.png'
import bookshelfCorner1 from '../assets/projects/bookshelf-corner1.png'
import bookshelfCorner2 from '../assets/projects/bookshelf-corner2.png'
import bookshelfCorner3 from '../assets/projects/bookshelf-corner3.png'
//5 Wiki Disney
import wikiDisney from '../assets/projects/wiki-disney-cover.png'
import wikiDisney1 from '../assets/projects/wiki-disney1.png'
import wikiDisney2 from '../assets/projects/wiki-disney2.png'
import wikiDisney3 from '../assets/projects/wiki-disney3.png'
//6 PS Toycolor
import psToyscolor from '../assets/projects/ps-toyscolor-cover.png'
//7 Photo Solex
import photoSolex from '../assets/projects/photo-solex-cover.png'
//8 Portfolio
import portfolio from '../assets/projects/portfolio-cover.png'



const projects = [
    {
        id: 8,
        slug: 'portfolio',
        name: 'Portfolio',
        introduction: ``,
        coverImage: [
            {
                src: portfolio,
                title: "Portfolio",
                description: "Photo de couverture"
            }
        ],
        techno: ['React', 'Javascript'],
        description: ``,
        images: [
            { src: DefaultPicture, title: "", description: ""},
            { src: DefaultPicture, title: "", description: ""},
            { src: DefaultPicture, title: "", description: ""}
        ],
        githubLink: 'https://github.com/HeleneGreat/portfolio-v2',
    },
    {
        id: 7,
        slug: 'photo-solex',
        name: 'Photo Solex',
        introduction: `Photo Solex c'est LE projet fil rouge de mon bachelor. C'est un site de partage de photos anciennes, pour les utilisateurs s'entraident pour identifier les personnes présentes sur les photos. C'est un projet en constant évolution, que je continue de développer sur mon temps libre.`,
        coverImage: [
            {
                src: photoSolex,
                title: "Photo Solex",
                description: "Photo de couverture"
            }
        ],
        techno: ['PHP', 'Javascript', 'Twig', 'HTML', 'Sass', 'Doctrine'],
        description: ``,
        images: [
            { src: DefaultPicture, title: "", description: ""},
            { src: DefaultPicture, title: "", description: ""},
            { src: DefaultPicture, title: "", description: ""}
        ],
    },
    {
        id: 6,
        slug: 'ps-toyscolor',
        name: 'Prestashop Toyscolor',
        introduction: ``,
        coverImage: [
            {
                src: psToyscolor,
                title: "Prestashop Toyscolor",
                description: "Photo de couverture"
            }
        ],
        techno: ['PHP', 'Symfony', 'Prestashop', 'SQL', 'Twig', 'HTML', 'Sass'],
        description: ``,
        images: [
            { src: DefaultPicture, title: "", description: ""},
            { src: DefaultPicture, title: "", description: ""},
            { src: DefaultPicture, title: "", description: ""}
        ],
        githubLink: 'https://github.com/HeleneGreat/ps_toyscolor',
    },
    {
        id: 5,
        slug: 'wiki-disney',
        name: 'Wiki Disney',
        introduction: `Premier projet en Symfony, ce wiki a été l'occasion d'expérimenter sur les entités, leurs relations, mais aussi de travailler à trois développeurs, avec Git et GitHub. Nous avions un cahier des charges à respecter, avec trois entités et différentes relations, pour découvrir et tester les différentes possibilités offertes par le framework Symfony. Ce projet était orienté back, ce qui explique le peu d'effort fourni pour la charte graphique du site !`,
        coverImage: [
            {
                src: wikiDisney,
                title: "Wiki Disney",
                description: "Photo de couverture"
            }
        ],
        techno: ['Symfony', 'PHP', 'Sass', 'Twig', 'Bootstrap', 'Doctrine'],
        description: `
        <p>Dans le cadre de ce projet, notre mission était de concevoir un site de type WIKI avec Symfony, en respectant un cahier des charges exigeant. Nous devions créer un site comprenant au minimum quatre articles répartis dans deux catégories spécifiques, chacun défini par des entités distinctes.</p>
        <p>Nous avons choisi de répertorier les personnages de l'univers Disney. Les utilisateurs inscrits peuvent ajouter les personnages de leur choix et ainsi agrandir chaque jour un peu plus ce catalogue.</p>
        <p>La structure du site devait comporter des éléments standard tels qu'un menu de navigation, une bannière, un footer et un bouton de connexion. La partie publique du site devait inclure une page d'accueil présentant une description du thème du Wiki, des listes de catégories et d'articles aléatoires, ainsi que des pages dédiées aux catégories et aux articles. La partie privée devait permettre aux utilisateurs de gérer les articles qu'ils ont créés, avec la possibilité de créer de nouveaux articles.</p>
        <p>L'évaluation de ce travail couvrait divers aspects tels que :</p>
        <ul>
            <li>le respect de la structure de données,</li>
            <li>la persistance des données avec Doctrine,</li>
            <li>l'utilisation efficace des fonctionnalités de Symfony,</li>
            <li>la gestion des formulaires,</li>
            <li>la gestion de la connexion et des droits d'accès.</li>
        </ul>
        <p>En plus de se familiariser avec Symfony, ce projet a été l'occasion de découvrir Twig et le concept d'héritage de templates, que je réutiliserai presque constamment dans mes projets suivants.</p>
        `,
        images: [
            { src: wikiDisney1, title: "Wiki Disney", description: "UML du projet"},
            { src: wikiDisney2, title: "Wiki Disney", description: "Cahier des charges du projet"},
            { src: wikiDisney3, title: "Wiki Disney", description: "Exemple de code : ajout de la liste des catégories en tant que variables globales Twig pour pouvoir y accéder par exemple dans le header"}
        ],
        githubLink: 'https://github.com/HeleneGreat/wiki_disney',
    },
    {
        id: 4,
        slug: 'the-bookshelf-corner',
        name: 'The Bookshelf Corner',
        introduction: `The Bookshelf Corner c'est un blog littéraire fictif qui permet aux administrateurs de publier leur avis sur des livres. Il y a également tout une communauté, avec des utilisateurs qui peuvent s'inscrire pour poster des commentaires sur les articles. Le back office complet permet de gérer son compte en fonction de ses autorisations. C'est le projet que j'ai présenté pour l'obtention de mon titre de Développeur intégrateur web (bac+2).`,
        coverImage: [
            {
                src: bookshelfCorner,
                title: "The Bookshelf Corner",
                description: "Photo de couverture"
            }
        ],
        techno: ['PHP', 'Javascript', 'SQL', 'HTML', 'CSS'],
        description: `
        <p>The Bookshelf Corner est un projet web conçu pour héberger un blog axé sur la passion de la lecture. Le site a été réalisé en utilisant PHP, HTML, CSS, JavaScript et SQL, sans recours à aucun framework.</p>
        <p>Le projet suit une architecture MVC (Model - View - Controller) pour une organisation claire et une maintenance simplifiée. Chaque table de la base de données est associée à son propre controller et model. L'ensemble du site est construit de manière responsive, privilégiant une approche mobile-first en CSS.</p>
        <p>Fonctionnalités principales :</p>
        <ul>
            <li><b>Espace administrateur :</b> Les administrateurs ont accès à un panel complet permettant la gestion des articles, des commentaires, des utilisateurs et des messages. Ils peuvent également modifier la liste des livres qui seront affichés en page d'accueil (<i>Les coups de coeur de la rédation</i>).</li>
            <li><b>Création de compte et connexion :</b> Les visiteurs peuvent créer un compte pour poster des commentaires sur les articles.</li>
            <li><b>Gestion des livres :</b> Les articles sont organisés par catégorie et genre littéraire. Chaque livre dispose d'une page individuelle avec un espace réservé aux commentaires des utilisateurs enregistrés.</li>
            <li><b>Tableau de bord utilisateur :</b> Les utilisateurs enregistrés ont accès à un tableau de bord leur permettant de consulter des statistiques sur leurs commentaires publiés et de gérer leurs propres commentaires et données de compte.</li>
            <li><b>Modération et paramètres du site :</b> Les administrateurs peuvent modérer les commentaires et gérer les messages reçus via le formulaire de contact. Ils ont également la possibilité de configurer les paramètres globaux du site, tels que le nom et le logo du blog.</li>
        </ul>
        <p></p>
        `,
        images: [
            { src: bookshelfCorner1, title: "The Bookshelf Corner", description: "Back office d'un administrateur"},
            { src: bookshelfCorner2, title: "The Bookshelf Corner", description: "Requêtes SQL pour le CRUD d'un livre"},
            { src: bookshelfCorner3, title: "The Bookshelf Corner", description: "Requête SQL pour récupérer les commentaires d'un livre"}
        ],
        githubLink: 'https://github.com/HeleneGreat/bookshelf-corner',
        websiteLink: 'https://helenegreat.alwaysdata.net/bookshelf_corner/'
    },
    {
        id: 3,
        slug: 'wp-yulbaba',
        name: 'Wordpress Yulbaba',
        introduction: ``,
        coverImage: [
            {
                src: DefaultPicture,
                title: "Wordpress Yulbaba",
                description: "Photo de couverture"
            }
        ],
        techno: ['Wordpress', 'PHP', 'CSS', 'Javascript', 'HTML'],
        description: ``,
        images: [
            { src: DefaultPicture, title: "", description: ""},
            { src: DefaultPicture, title: "", description: ""},
            { src: DefaultPicture, title: "", description: ""}
        ],
        githubLink: 'https://github.com/HeleneGreat/wp-yulbaba',
    },
    {
        id: 2,
        slug: 'parc-asterix',
        name: 'Parc Asterix',
        introduction: `Dans les débuts de ma découverte du PHP orienté objet, j'ai entrepris un projet modeste mais passionnant. Plongeant dans les méandres de la programmation orientée objet (POO), j'ai élaboré un petit jeu de gestion de parc d'attraction, qui se lance dans la console de VS Code.`,
        coverImage: [
            {
                src: asterix,
                title: "Parc Astérix",
                description: "Index.php : appel des informations qui s'afficheront dans la console"
            }
        ],
        techno: ['PHP'],
        description: `
        <p>Ce projet incarnait pour moi un laboratoire d'exploration des fondements de la POO. J'ai pris plaisir à expérimenter avec ses principes fondamentaux, explorant les concepts de classe, d'objet, d'encapsulation, d'héritage et de polymorphisme.</p>
        <p>Il s'agit d'un jeu de gestion d'un parc d'attractions. Il est possible de construire des attractions, les entretenir et les dégrader !</p>
        <p>Ce jeu n'est qu'une ébauche. Il suffit de décommenter les différentes lignes de index.php en fonction des consignes qu'on veut implémenter, puis de le lancer via la commande <i>php index.php</i>.</p>
        <p>Toute ressemblance avec le jeu Planet Coaster n'est absolument pas fortuite...</p>
        `,
        images: [
            { src: asterix1, title: "Parc Asterix", description: "UML du projet : seules les parties 'Parc' et 'Attraction' ont été implémentée"},
            { src: asterix2, title: "Parc Asterix", description: "Class Parc"},
            { src: asterix3, title: "Parc Asterix", description: "Execution du script dans le terminal"}
        ],
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