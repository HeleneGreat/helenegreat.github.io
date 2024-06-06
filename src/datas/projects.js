// import DefaultPicture from '../assets/DefaultPicture.jpg'
//1 Istorel
import istorel from '../assets/projects/istorel-cover.png'
import istorel1 from '../assets/projects/istorel1.png'
import istorel2 from '../assets/projects/istorel2.png'
import istorel3 from '../assets/projects/istorel3.png'
//2 Parc Asterix
import asterix from '../assets/projects/asterix-cover.png'
import asterix1 from '../assets/projects/asterix1.png'
import asterix2 from '../assets/projects/asterix2.png'
import asterix3 from '../assets/projects/asterix3.png'
//3 WP Yulbaba
import yulbaba from '../assets/projects/wp-yulbaba-cover.png'
import yulbaba1 from '../assets/projects/wp-yulbaba1.png'
import yulbaba2 from '../assets/projects/wp-yulbaba2.png'
import yulbaba3 from '../assets/projects/wp-yulbaba3.png'
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
import psToyscolor1 from '../assets/projects/ps-toyscolor1.png'
import psToyscolor2 from '../assets/projects/ps-toyscolor2.png'
import psToyscolor3 from '../assets/projects/ps-toyscolor3.png'
//7 Script Casino
import casino from '../assets/projects/casino-cover.png'
import casino1 from '../assets/projects/casino1.png'
import casino2 from '../assets/projects/casino2.png'
import casino3 from '../assets/projects/casino3.png'
//8 
import bdd from '../assets/projects/bdd-cover.png'
import bdd1 from '../assets/projects/bdd1.png'
import bdd2 from '../assets/projects/bdd2.png'
import bdd3 from '../assets/projects/bdd3.png'
//9 Photo Solex
import photoSolex from '../assets/projects/photo-solex-cover.png'
import photoSolex1 from '../assets/projects/photo-solex1.png'
import photoSolex2 from '../assets/projects/photo-solex2.png'
import photoSolex3 from '../assets/projects/photo-solex3.png'
//10 Portfolio
import portfolio from '../assets/projects/portfolio-cover.png'
import portfolio1 from '../assets/projects/portfolio1.png'
import portfolio2 from '../assets/projects/portfolio2.png'
import portfolio3 from '../assets/projects/portfolio3.png'



const projects = [
    // {
    //     id: 8,
    //     slug: '',
    //     name: '',
    //     introduction: ``,
    //     coverImage: [
    //         {
    //             src: photoSolex,
    //             title: "",
    //             description: "Photo de couverture"
    //         }
    //     ],
    //     techno: ['PHP', 'Javascript'],
    //     description: `
    //     <p></p>
    //     `,
    //     images: [
    //         { src: photoSolex1, title: "", description: ""},
    //         { src: photoSolex2, title: "", description: ""},
    //         { src: photoSolex3, title: "", description: ""}
    //     ],
    // },
    {
        id: 10,
        slug: 'portfolio',
        name: 'Portfolio',
        introduction: `
        Mon portfolio, c'est le site sur lequel vous vous trouvez ! Il représente bien plus qu'un simple site web, c'est une vitrine de mes compétences et de ma passion pour le développement web. En plus de me présenter, il met en lumière les projets que j'ai développés sur mon temps libre, reflétant mon engagement et mon dévouement envers mon métier. Ce portfolio, ça a également été une excuse pour replonger dans le monde merveilleux de Reactjs, et de piocher parmi les nombreuses librairies de composants existantes pour expérimenter et améliorer mes compétences dans ce domaine. `,
        coverImage: [
            {
                src: portfolio,
                title: "Portfolio",
                description: "Photo de couverture"
            }
        ],
        techno: ['React', 'Javascript', 'Figma'],
        description: `
        <p>La réalisation de ce portfolio a été l'occasion de me replonger dans le framework Reactjs, que j'avais étudié lors de mon bachelor, mais que je n'avais pas eu l'occasion d'utiliser depuis. Pour concrétiser le plus simplement possible ce projet, il n'y a pas de back-office, c'est uniquement un site front. Les données telles que mes expériences et mes projets sont contenus dans des tableaux, que je modifie manuellement si besoin.</p>
        <p>Après avoir cherché de l'inspiration sur Dribbble, j'ai conçu la maquette du site sur Figma, ce qui m'a permis de rapidement identifier les principaux composants que j'aurai à coder. Pour gagner du temps, j'ai uniquement réalisé la maquette pour grands écrans, puisque grâce à mon expérience en agence web, je suis capable de développer facilement des pages responsives. Ce site est d'ailleurs intégré en mobile-first.</p>
        <p>J'ai profité des GitHub Pages pour héberger mon portfolio, car c'était pour moi la solution la plus simple et la plus économique. Cela a été facile grâce au package <i>gh-pages</i>, qui publie en une ligne de commande ce que je commite sur la branche main de ce projet. Le seul soucis que j'ai rencontré est que GitHub Pages ne gère pas le router de react si on ne passe pas par la page d'accueil du projet. Pour y remédier, j'ai créé une page 404.html non dynamique spécialement pour GitHub.</p>
        <p>Certains composants sont assez conséquents et aurait pu être redécoupés en plusieurs petits composants, mais comme ils n'ont pas vocation à être réutilisés autre part dans ce petit projet, je les ai laissés tels quels.</p>
        <p>Ce projet a été un vrai moment de détente, moi qui travaillait dernièrement surtout sur du back, ça m'a rappelé que j'apprécie également beaucoup le front. Finalement ce qui m'a pris le plus de temps, ça a été la rédaction des contenus !</p>

        `,
        images: [
            { src: portfolio1, title: "Portfolio", description: "La maquette du site, réalisée sur Figma."},
            { src: portfolio2, title: "Portfolio", description: "Appel des composants de la page d'accueil."},
            { src: portfolio3, title: "Portfolio", description: "Création d'une timeline responsive pour afficher la liste de mes expériences."}
        ],
        githubLink: 'https://github.com/HeleneGreat/helenegreat.github.io',
    },
    {
        id: 9,
        slug: 'photo-solex',
        name: 'Photo Solex',
        introduction: `Photo Solex c'est LE projet fil rouge de mon bachelor. C'est un site de partage de photos anciennes, pour que les utilisateurs s'entraident pour identifier les personnes présentes sur les photos. L'idée, c'est de préserver la mémoire familiale et de partager ses souvenirs avec ses proches. Ce projet est en constante évolution, je continue de le développer sur mon temps libre.`,
        coverImage: [
            {
                src: photoSolex,
                title: "Photo Solex",
                description: "Photo de couverture"
            }
        ],
        techno: ['PHP', 'Javascript', 'Twig', 'HTML', 'Sass', 'Doctrine', 'Figma'],
        description: `
        <p>Ce projet part d'un besoin personnel&#8239;: en tant que passionnée d'Histoire et de généalogie, j'ai numérisé et identifié de nombreuses photos anciennes. Il me manquait un outil pour partager mes trouvailles avec les membres de ma famille. J'ai donc réfléchi à une solution web qui permette à la fois aux utilisateurs de partager et identifier des photos, mais aussi de pouvoir intéragir entre membres d'une même famille.</p>
        <p>Avant de passer au code, j'ai d'abord pris le temps de bien concevoir ce projet&#8239;: quelles étaient les principales fonctionnalités que je souhaitais implémenter ? Comment le projet pourrait évoluer dans le temps ? J'ai commencé par rédiger un cahier des charges détaillé pour bien cerner les besoins auxquels répondra le site.</p>
        <p>J'ai choisi de réaliser ce projet en Symfony, car j'apprécie particulièrement PHP. De plus, je venais de découvrir le framework Symfony en cours, dont les possibilités et le potentiel m'ont immédiatement séduites.</p>
        <p>J'ai présenté ce projet lors d'un oral pour l'obtention de mon CDA (bac+3/4), que j'ai obtenu. Ce projet n'est pas terminé, et je continue de le développer sur mon temps libre, en fonction de mes disponibilités.</p>
        `,
        images: [
            { src: photoSolex1, title: "Photo Solex", description: "Page d'une photo : information sur l'image, personnes identifiées, commentaires des membres de la famille."},
            { src: photoSolex2, title: "Photo Solex", description: "Modèle conceptuel des données (MCD) du projet tel qu'il a été présenté lors de mon examen final. Il a depuis évolué, avec par exemple l'ajout des groupes d'utilisateurs (familles)."},
            { src: photoSolex3, title: "Photo Solex", description: "Exemple de code : un service pour gérer l'upload des fichiers images (photos partagées et avatar des utilisateurs)."}
        ],
    },
    {
        id: 8,
        slug: 'conception-base-de-donnees',
        name: 'Conception de bases de données et requêtes SQL',
        introduction: `Au cours de cet exercice, je me suis investie dans la pratique de la conception de bases de données (MCD, MLD) ainsi que dans l'écriture de requêtes SQL, allant des plus simples aux plus complexes. Cette démarche m'a permis de consolider mes compétences dans le domaine de la gestion des données et de la manipulation de bases de données relationnelles.`,
        coverImage: [
            {
                src: bdd,
                title: "Conception de bases de données et requêtes SQL",
                description: "Photo de couverture"
            }
        ],
        techno: ['SQL'],
        description: `
        <p></p>
        <ul>
        <li>Conception de Bases de Données</li>
        <p>A partir d'un texte qui explique les besoins des utilisateurs finaux, j'ai débuté cet exercice par la modélisation des bases de données en élaborant des Modèles Conceptuels de Données (MCD). Ces modèles m'ont aidé à visualiser la structure générale des informations à stocker et à établir les relations entre les différentes entités.</p>
        <p>Ensuite, j'ai affiné ces modèles en élaborant des Modèles Logiques de Données (MLD) qui décrivent de manière précise les tables, les attributs et les contraintes de la base de données.</p>
        <li>Requêtes SQL</li>
        <p>Une fois les bases de données conçues, j'ai mis en pratique mes compétences en rédigeant des requêtes SQL pour interagir avec ces bases de données. Ces requêtes vont de simples opérations de sélection, d'insertion et de mise à jour de données à des requêtes plus complexes impliquant des jointures, des sous-requêtes et des fonctions SQL avancées.</p>
        <li>Apprentissage Continu</li>
        <p>Ce projet m'a permis d'approfondir mes connaissances en conception de bases de données et en SQL, mais également de découvrir de nouveaux concepts et techniques pour optimiser la gestion et l'exploitation des données. Je reste engagé dans mon parcours d'apprentissage continu dans le domaine des bases de données pour pouvoir répondre aux défis futurs avec confiance et expertise.</p>
        </ul>
        `,
        images: [
            { src: bdd1, title: "Conception de bases de données et requêtes SQL", description: "Conception d'un MCD et MLD d'un site de réservation de billets d'avion"},
            { src: bdd2, title: "Conception de bases de données et requêtes SQL", description: "Différentes requêtes concernant les billets d'avion"},
            { src: bdd3, title: "Conception de bases de données et requêtes SQL", description: "Exercice avec le calcul de loyer et du prix du m2 de logements"}
        ],
    },
    {
        id: 7,
        slug: 'script-casino',
        name: 'Script de casino en bash',
        introduction: `Lors de mon cours d'initiation à Linux, j'ai créé un script Bash pour jouer à un casino virtuel comprenant plusieurs jeux. Ce projet m'a permis d'appliquer des concepts de scripting Linux tout en développant une interface interactive pour les utilisateurs. Il a été réalisé en 2h, dans le cadre d'une évaluation.`,
        coverImage: [
            {
                src: casino,
                title: "Script de casino en bash",
                description: "Photo de couverture"
            }
        ],
        techno: ['Linux', 'Shell'],
        description: `
        <p>Fonctionnalités principales de ce script :</p>
        <ul>
            <li>Gestion de la cagnotte : le joueur commence avec une cagnotte initiale de 100€ et doit définir un pari à atteindre (minimum 500€).</li>
            <li>Sélection de jeux : trois jeux sont disponibles :</li>
            <ol>
                <li>Pile ou Face</li>
                <li>Machine à sous (à compléter)</li>
                <li>Pierre Feuille Ciseaux</li>
            </ol>
            <li>Mises et gains : le joueur peut miser un montant pour chaque jeu, avec la possibilité de gagner ou perdre des fonds en fonction des résultats.</li>
        </ul>
       <p>Le script utilise des fonctions pour gérer les différentes étapes du jeu, telles que l'initialisation, le choix du jeu, la gestion des mises et la vérification des gains ou des pertes. Le script n'est pas terminé, je n'ai pas eu le temps d'implémenter la machine à sous dans le temps imparti. Plutôt que de commencer à coder quelque chose qui aurait peu de chance de fonctionner, j'ai préféré utiliser le peu de temps qui me restait pour agrémenter le jeu avec des couleurs et en améliorant les textes. Cela m'a permis d'améliorer grandement la lisibilité et l'expérience utilisateur.</p>
       <p>Ce projet a été une excellente opportunité pour mettre en pratique mes compétences en scripting Bash, tout en créant une application ludique et interactive. Il illustre également l'importance de la gestion des entrées utilisateurs et des vérifications conditionnelles dans le développement de scripts robustes et fiables.</p>
        `,
        images: [
            { src: casino1, title: "Script de casino en bash", description: "Jeu du Pile ou Face"},
            { src: casino2, title: "Script de casino en bash", description: "Jeu de Pierre Feuille Ciseaux"},
            { src: casino3, title: "Script de casino en bash", description: "Exécution du script dans le terminal"}
        ],
    },
    {
        id: 6,
        slug: 'ps-toyscolor',
        name: 'Prestashop Toyscolor',
        introduction: `Lors de mon bachelor, nous avons eu à réaliser en équipe un projet web qui réponde aux besoins d'un client réel. Nous avons donc conçu une boutique de vente en ligne dédiée aux produits de notre client&#8239;: des jeux créatifs pour enfants. De mon côté, en tant que développeuse, je me suis concentrée sur la partie technique du projet, c'est-à-dire l'intégration de la maquette sur un site Prestashop ainsi que le développement de deux modules pour mettre en avant les produits et l'entreprise. `,
        coverImage: [
            {
                src: psToyscolor,
                title: "Prestashop Toyscolor",
                description: "Photo de couverture"
            }
        ],
        techno: ['PHP', 'Symfony', 'Prestashop', 'SQL', 'Twig', 'HTML', 'Sass', 'Figma'],
        description: `
        <p>Pour ce projet intitulé <i>MyDigital Project</i>, nous étions cinq étudiantes à travailler ensemble, issues des 4 formations dispensées par l'école&#8239;: Bachelor web marketing et social media, Bachelor digital, Bachelor création numérique, et moi en Bachelor développement web. En plus d'avoir à réaliser la partie concernant notre métier, nous avons également dû gérer ensemble le bon déroulement du projet, et participer à la rédaction d'un rapport commun.</p>
        <p>En accord avec le client, j'ai choisi d'utiliser le CMS Prestashop pour générer la nouvelle boutique Toyscolor, pour deux principales raisons&#8239;: c'est un CMS qui gère déjà tout l'aspect e-commerce (gestion des stocks, paiement en ligne, fiche produit, commandes, clients...), et j'ai l'habitude de l'utiliser lors de mon alternance en agence web, ce qui simplifiera le développement. De plus, l'idée est que contrairement au développement d'un site de A à Z, l'utilisation d'un CMS permettra au client de continuer à faire évoluer sa boutique seul si besoin, à l'aide de nombreux modules à disposition.</p>
        <p>J'ai d'abord créé la maquette du site sur Figma, et une fois celle-ci validée, je l'ai intégrée sur Prestashop et j'ai choisi les modules pertinents. J'ai aussi créé deux modules sur-mesure pour la page d'accueil du site, l'un pour mettre en avant le produit principal de Toyscolor, l'autre pour présenter la boutique. Pour le moment la boutique est disponible uniquement en français, mais pour parer à toute évolution future, j'ai choisi de rendre mes modules traduisibles et compatibles avec le multi-boutique.</p>
        <p></p>
        <p></p>
        `,
        images: [
            { src: psToyscolor1, title: "Prestashop Toyscolor", description: "Les deux modules développés vus depuis le back-office, et l'UML de l'un des modules."},
            { src: psToyscolor2, title: "Prestashop Toyscolor", description: "A gauche, arborescence des titres de la page d'accueil pour le SEO. A droite, l'évolution des performances entre l'ancien et le nouveau site Toyscolor."},
            { src: psToyscolor3, title: "Prestashop Toyscolor", description: "Exemple de code du module pour présenter la boutique : création de tables en base de données lors de l'installation, puis supression des tables en cas de désinstallation du module."}
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
        <p>Dans le cadre de ce projet, notre mission était de concevoir un site de type wiki avec Symfony, en respectant un cahier des charges exigeant. Nous devions créer un site comprenant au minimum quatre articles répartis dans deux catégories spécifiques, chacun défini par des entités distinctes.</p>
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
        introduction: `Yulbaba c'est mon premier Wordpress ! Dans le cadre de ma formation au Greta, nous avons étudié Wordpress et avons réalisé un thème sur-mesure à partir d'une maquette et d'un cahier des charges. J'ai tenté de réaliser ce thème avec le moins de plugins possible, afin de découvrir au mieux les possibilités offertes par le CMS. Nous avions 5 jours pour nous auto-former sur Wordpress puis réaliser ce thème, je suis assez fière du résultat !`,
        coverImage: [
            {
                src: yulbaba,
                title: "Wordpress Yulbaba",
                description: "Photo de couverture"
            }
        ],
        techno: ['Wordpress', 'PHP', 'CSS', 'Javascript', 'HTML'],
        description: `
        <p>J'ai réalisé ce thème from scratch en cinq jours, en plus de me découvrir le CMS Wordpress. J'avais déjà utilisé ce CMS en tant que webmaster, mais c'était très agréable de comprendre comment fonctionne Wordpress, toutes les possibilités et les options ajustables, en fonction des besoins. Mes collègues se sont moqués de moi en disant que je réinventais la roue, mais je trouve que coder sans plugins quand on découvre le CMS c'est primordial, ça m'a permis de bien mieux comprendre sa logique et son potentiel.</p>
        <p>Nous avions un cahier des charges assez précis, en plus de la maquette de la page d'accueil. L'idée était de créer le blog d'une agence de voyage qui soit entièrement paramétrable par son administrateur. J'ai par exemple créé un type de contenu <i>Voyage</i>, ajouté des emplacements de contenus aux endroits opportuns (barre de recherche dans le header, îcones des réseaux sociaux dans le footer), créé le menu principal, ajouté des images pour les catégories...</p>
        <p>J'ai eu beaucoup de plaisir à réaliser ce projet, qui m'a souvent donné envie de fouiller le codex Wordpress à la recherche d'options et de paramétrages qui répondent au mieux aux besoins de mon thème.</p>
        `,
        images: [
            { src: yulbaba1, title: "Wordpress Yulbaba", description: "Maquette de la page d'accueil."},
            { src: yulbaba2, title: "Wordpress Yulbaba", description: "Cahier des charges du projet."},
            { src: yulbaba3, title: "Wordpress Yulbaba", description: "Exemple de code : le fichier function.php"}
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
        <p>Il s'agit d'un jeu de gestion d'un parc d'attractions. Il est possible de construire des attractions, de les entretenir et de les dégrader !</p>
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
        introduction: `Istorel représente une étape significative dans mon parcours de développement web&#8239;: c'est mon tout premier site ! L'idée de ce projet était de prendre en exemple un site existant mais non responsive et non conforme aux standards contemporains d'accessibilité et d'ergonomie. Pour ce faire, j'ai sélectionné le site d'une association d'historiens locaux, que j'ai modernisé grâce à une refonte complète.`,
        coverImage: [
            {
                src: istorel,
                title: "Istorel",
                description: "Photo de couverture"
            }
        ],
        techno: ['PHP', 'HTML', 'CSS', 'Javascript'],
        description: `
        <p>La première étape de ce projet a été de repenser entièrement l'organisation du site, pour une expérience utilisateur optimale. En effet, il était très difficile de naviguer entre les pages, certaines d'entres elles étaient beaucoup trop surchargées. C'était notamment le cas de la page d'accueil, que j'ai rationalisée et épurée de ses éléments superflus pour une navigation plus fluide et intuitive&#8239;: elle comportait beaucoup trop d'éléments, pas forcément pertinents.</p>
        <p>J'ai initialement construit la refonte de ce site en HTML/CSS avec une touche de Javascript pour des interactions dynamiques. Lorsque j'ai découvert PHP et la programmation orientée objet (POO), j'en ai profité pour étendre les fonctionnalités du site. Cela m'a permis d'implémenter une classe dédiée aux articles ('Article'), facilitant la gestion et l'affichage automatisé des actualités et des articles détaillés.</p>
        <p>Cependant, une limitation de ce projet réside dans l'absence de connexion à une base de données (BDD). Par conséquent, bien que le formulaire de contact ait été intégré, il demeure non fonctionnel.</p>
        <p>Malgré ce point, Istorel représente une étape cruciale dans mon apprentissage du développement web, m'offrant une solide base pour mes projets futurs.</p>`,
        images: [
            { src: istorel1, title: "Istorel", description: "Page HTML qui affiche la liste des articles du blog."},
            { src: istorel2, title: "Istorel", description: "Formulaire de contact avec API pour la saisie des adresses."},
            { src: istorel3, title: "Istorel", description: "Affichage de la liste des articles, tri possible par catégorie."}
        ],
        githubLink: 'https://github.com/HeleneGreat/istorel',
        websiteLink: 'https://helenegreat.alwaysdata.net/istorel/'
    },
   
]

export default projects