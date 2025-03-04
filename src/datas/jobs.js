import { faGraduationCap, faBriefcase } from '@fortawesome/free-solid-svg-icons'
//13 UBS
//12 Dream me up
//11 CDA Mydi 
//10 ioleSolutions
//9 Kercode 
//8 AT Le Faouet
//7 Mr.Bricolage
//6 M2 Caen
//5 NUI Galway
//4 M1 Lille
//3 L3 Mexique
//2 ADMR
//1 Licence Nantes

const jobs = [
    {
        id: 13,
        slug: '13-ingenieure-developpement-deploiement',
        icon: faBriefcase,
        name: 'Ingénieure développement et déploiement web',
        company: "Université Bretagne Sud",
        contrat: "Contractuelle",
        city: 'Vannes',
        year: "Depuis 2024",
        fullDate: "Septembre 2024 à aujourd'hui",
        introduction: `À l’université, je contribue au bon fonctionnement des applications métier utilisées par les services et les étudiants. Entre maintenance, développement et administration de bases de données, ce poste me permet de faciliter le quotidien des utilisateurs.`,
        techno: ['Linux', 'Shell','SQL'],
        description: `
        <h3>Missions</h3>
        <p>À l’Université Bretagne Sud, j’occupe un poste d’ingénieure développement et déploiement web au sein de la Direction des Systèmes d’Information (DSI), plus précisément dans le service Application Métier des Systèmes d’Information. Mon rôle est de garantir la disponibilité, l’évolution et la fiabilité des applications utilisées par les différents services et étudiants de l’université.</p>
        <p>Mon quotidien s’articule autour du maintien en condition opérationnelle des applications : déploiement des mises à jour, correction des bugs et optimisation des performances. J’assure également le support technique aux utilisateurs, en intervenant rapidement pour résoudre les incidents et garantir une utilisation fluide de leurs outils.</p>
        <p>Une autre facette de mon travail concerne l’administration des serveurs et des bases de données (MySQL et Oracle). J’interviens sur la gestion des utilisateurs, la structuration des bases et l’optimisation des requêtes. SQL me permet de développer des connecteurs entre les différentes applications de l’université, en utilisant des vues, des vues matérialisées, des fonctions et des procédures stockées, ainsi que des liens entre bases de données (dblink).</p>
        <p>J’apprécie particulièrement l’environnement universitaire, qui offre un cadre de travail stimulant et collaboratif. Travailler en lien étroit avec les services opérationnels qui utilisent mes applications est un réel atout, car cela me permet de mieux comprendre leurs besoins et d’adapter les outils pour les rendre toujours plus performants et intuitifs.</p>
        <p>Ce poste me permet d’évoluer dans un environnement où mes compétences en développement, administration et support sont pleinement exploitées, tout en contribuant directement à l’amélioration des services numériques de l’université.</p>
        `,
    },   
    {
        id: 12,
        slug: '12-developpeuse-full-stack',
        icon: faBriefcase,
        name: 'Développeuse Full-Stack',
        company: "Dream me up",
        contrat: "Contrat en alternance",
        city: 'Saint-Avé',
        year: "2022-2023",
        fullDate: "Septembre 2022 à août 2023",
        introduction: `En alternance au sein d'une agence web spécialisée dans les sites vitrine et e-commerce, j'ai collaboré avec les différents métiers pour concevoir et améliorer des sites personnalisés, et répondre au mieux aux besoins du client. `,
        techno: ['PHP', 'Symfony', 'Javascript', 'Sass', 'HTML', 'Prestashop', 'SQL'],
        description: `
        <h3>Missions</h3>
        <p>Mon poste de développeuse web full-stack en alternance au sein d'une agence web a été une opportunité passionnante de mettre en pratique mes compétences dans un environnement professionnel dynamique. J'ai eu le privilège de travailler aux côtés d'équipes pluriciplinaires comprenant des chefs de projet, un designer et des experts en SEO pour créer des sites web vitrine et e-commerce personnalisés répondant aux besoins spécifiques de chaque client.</p>
        <p>Une partie importante de mon travail a été axée sur le développement de modules sur Prestashop, utilisant le framework Symfony. Cela comprenait la création, la correction et l'amélioration de modules existants pour répondre aux exigences fonctionnelles et esthétiques des clients. J'ai apporté une attention particulière à l'optimisation des performances et à la compatibilité avec les dernières versions de Prestashop, assurant ainsi une expérience utilisateur optimale.</p>
        <p>En plus du développement de modules, j'ai également été impliquée dans l'intervention sur des sites en production. Cela incluait la résolution de problèmes techniques, l'ajout de nouvelles fonctionnalités et la correction de bugs pour garantir le bon fonctionnement continu des sites web de nos clients. Mon travail s'est concentré sur la rapidité et l'efficacité afin de minimiser les interruptions de service et d'assurer la satisfaction des clients.</p>
        <p>Par ailleurs, j'ai intégré des maquettes sur Prestashop, en collaborant étroitement avec le designer pour traduire ses concepts visuels en interfaces utilisateur fonctionnelles, esthétiques et responsives. J'ai veillé à respecter les bonnes pratiques en matière d'intégration web, en assurant la compatibilité avec différents navigateurs et appareils.</p>
        <p>Travailler au sein de cette agence web m'a permis de développer non seulement mes compétences techniques, mais aussi ma capacité à collaborer efficacement au sein d'une équipe pluridisciplinaire et à répondre aux besoins variés des clients. Cette expérience m'a également offert une vue d'ensemble sur le processus de développement web, de la conception à la mise en production, renforçant ainsi ma polyvalence en tant que développeuse web full-stack.</p>
        <h3>Quelques réalisations</h3>
        <ul>
        <li>Intégrations de maquettes&#8239;: Seanertek, Girouette.fr, Casafan... </li>
        <li>Mise à jour et amélioration de modules Prestashop</li>
        <li>Création de modules Prestashop</li>
        <li>Manipulation de bases de données</li>
        <li>Réalisation de scripts de migration vers Prestashop</li>
        <li>Interventions sur les sites en production</li>
        </ul>
        `,
    },   
    {
        id: 11,
        slug: '11-concepteur-developpeur-dapplication',
        icon: faGraduationCap,
        name: "Bac+3/4 Concepteur développeur d'applications",
        company: "MyDigitalSchool",
        city: 'Plescop',
        year: "2022-2023",
        fullDate: "Septembre 2022 à juin 2023",
        introduction: `J'ai poursuivi une formation Bac+3/4 en alternance. Cette expérience m'a immergée dans un environnement dynamique où j'ai perfectionné mes compétences en développement, en conception de bases de données et en gestion de projets. `,
        techno: ['Symfony', 'React', 'ReactNative', 'Node', 'Sass'],
        description: `
        <h3>Cursus</h3>
        <p>Suite à ma reconversion et à l'obtention de mon bac+2 en développement web, j'ai décidé de continuer à me former afin de consolider mes compétences et d'améliorer la qualité de mon code. Cette fois-ci j'ai préféré choisir l'alternance, afin d'obtenir de l'expérience professionnelle et d'appliquer mes connaissances dans un environnement de travail réél.</p>
        <p>Au cœur de cette formation, j'ai été initiée à une multitude de technologies et de méthodologies essentielles pour le développement d'applications modernes. J'ai approfondi mes connaissances en développement web avec des frameworks populaires tels que Node.js, Symfony et React, ainsi que la création et la consommation d'API, ce qui m'a permis de construire des applications web dynamiques et réactives.</p>
        <p>La conception et la gestion de bases de données ont également été au centre de mon apprentissage. J'ai acquis une compréhension approfondie des concepts d'ORM (Object-Relational Mapping), de versionnage et de design pattern, ce qui m'a permis de créer des solutions robustes et évolutives.</p>
        <p>En parallèle du développement technique, j'ai également été formé à la gestion de projet, un aspect essentiel de toute carrière dans le domaine informatique. J'ai appris à organiser, planifier et coordonner des projets, en utilisant des méthodologies agiles pour assurer une progression efficace et adaptative.</p>
        <p>Enfin, la réalisation de divers projets individuels et en groupe a été l'occasion parfaite de mettre en pratique mes connaissances et compétences acquises en cours. Ces projets m'ont permis de développer ma créativité, ma résolution de problèmes et ma capacité à travailler en équipe, des compétences cruciales pour réussir dans le monde professionnel.</p>
        <p>En somme, cette formation en alternance m'a fourni une base solide pour une carrière réussie en tant que Concepteur Développeur d'Applications, et je suis enthousiaste à l'idée d'apporter ma contribution à des projets innovants et stimulants.</p>
        <h3>Projets étudiants</h3>
        <ul>
        <li>Photo Solex&#8239;: c'est un projet que j'ai présenté pour l'obtention de mon diplôme. Il s'agit d'une application de partage de photos anciennes conçue pour les membres d'une même famille. L'objectif est de permettre aux utilisateurs d'identifier les personnes sur les photos et de préserver ainsi la mémoire familiale. J'ai également intégré des fonctionnalités de collaboration et d'échange afin de favoriser l'entraide au sein de la famille. C'est un projet sur lequel je continue de travailler aujourd'hui et que j'aimerai un jour mettre en production.</li>
        <li>Toyscolors&#8239;:  c'était un projet collaboratif impliquant des web designers, des spécialistes du marketing et moi-même. Notre objectif était de répondre aux besoins d'un client réel en élaborant une nouvelle charte graphique et un site e-commerce. J'ai opté pour PrestaShop comme solution pour le site, et intégré la maquette graphique que j'avais moi-même conçue sur Figma. J'ai choisi et intégré les modules pertinents pour optimiser les fonctionnalités de la boutique en ligne. J'ai également développé des modules personnalisés pour répondre aux besoins spécifiques du client.</li>
        <li>English Game&#8239;: il s'agit d'un projet collaboratif réalisé avec les autres promotions de l'école. Avec mon équipe, nous avons conçu et développé un jeu éducatif sur le thème du développement durable. J'ai contribué à la conception du jeu et à son développement technique. Pendant la semaine dédié à ce projet, nous devions communiquer exclusivement en anglais. Il n'y avait pas de développement web lors de ce projet.</li>
        </ul>
        `,
    },   
    {
        id: 10,
        slug: '10-developpeuse-web-python',
        icon: faBriefcase,
        name: 'Développeuse web python',
        company: "iole Solutions",
        contrat: "Stage",
        city: 'Vannes',
        year: "2022",
        fullDate: "Mai à juin 2022",
        introduction: ` Ma mission principale lors de ce stage était de concevoir un script automatisé pour exécuter le framework de test Cypress, générer des rapports CSV détaillés, et rendre les résultats des tests accessibles à tous, même aux non-informaticiens. Mission au sein d'une équipe agile.`,
        techno: ['Python', 'Wordpress', 'HTML'],
        description: `
        <h3>Mission principale</h3>
        <p>Dans le cadre de mon stage en tant que développeuse web python, j'ai eu l'opportunité de plonger dans l'univers du langage Python de manière autonome. J'ai pris en charge la manipulation de fichiers XML et CSV, ce qui m'a permis d'acquérir une expertise dans la gestion de données structurées. De plus, j'ai travaillé activement avec Git/Gitea pour assurer une gestion efficace des branches et des versions de mon code.</p>
        <p>Ma mission principale consistait à développer un script en Python pour automatiser l'exécution du framework de test Cypress. Ce script devait être capable de récupérer les données issues des fichiers XML des tests Cypress, les renommer pour éviter toute erreur lors des prochaines exécutions, puis les consolider dans un fichier CSV. Ce dernier devait contenir une liste de tous les modules testés, leur temps d'exécution, ainsi que les éventuelles erreurs rencontrées. De plus, j'ai mis en place un deuxième fichier CSV contenant des statistiques clés sur les tests, telles que le temps d'exécution moyen et maximal, la liste des modules avec des erreurs, et le nombre total d'erreurs.</p>
        <p>L'objectif principal de ce script était de rendre les résultats des tests facilement interprétables et compréhensibles, même pour les non-informaticiens. Pour garantir la robustesse et la fiabilité du script, j'ai pris soin de typer chaque fonction, variable et retour pour éviter toute erreur potentielle. De plus, j'ai commenté mon code en français et en anglais afin de faciliter les évolutions futures du script. Enfin, j'ai rédigé un README détaillé à l'intention de l'utilisateur pour assurer une utilisation fluide et optimale du script.</p>
        <p>Travaillant en mode agile, j'ai participé activement aux réunions quotidiennes (daily) et aux itérations pour assurer une progression efficace du projet.</p>
        <h3>Missions secondaires</h3>
        <p>En parallèle de ma mission principale, j'ai également contribué à d'autres projets, tels que la création d'un questionnaire sur le site de l'entreprise et l'amélioration du référencement SEO du site iole.fr. J'ai également rédigé des contenus pour le site, démontrant ainsi ma polyvalence et ma capacité à mener plusieurs tâches de front.</p>
        `,
    }, 
    {
        id: 9,
        slug: '9-kercode',
        icon: faGraduationCap,
        name: "Bac+2 Développeur intégrateur en réalisation d'applications web",
        company: "Greta",
        city: 'Vannes',
        year: "2021-2022",
        techno: ['HTML', 'CSS', 'Javascript', 'PHP', 'Git', 'SQL', 'Bootstrap', 'Figma', 'Photoshop'],
        fullDate: "Novembre 2021 à juin 2022",
        introduction: `Je me suis reconvertie dans le développement web grâce à la formation Kercode du Greta. Cette puissante montée en compétence a tout de suite conforté ma passion pour le code.`,
        description: `
        <h3>Cursus</h3>
        <p>En 2021, suite à plusieurs périodes de contrats courts et temporaires, j'ai décidé de sauter le pas et de me reconvertir. C'est dans ce contexte que j'ai découvert un peu par hasard le développement web. J'ai été immédiatement passionnée par le code, qui s'est avéré être un formidable outil pour nourrir ma curiosité naturelle en me formant en permanence, autant par la veille technologique que par la montée en compétence.</p>
        <p>Ma reconversion professionnelle m'a conduite à entreprendre un parcours intensif en suivant la formation Kercode du Greta de Vannes. Cette formation de niveau Bac+2 a été une plongée profonde dans l'univers complexe et dynamique du développement web.</p>
        <p>J'ai commencé par maîtriser les bases fondamentales, telles que HTML et CSS, pour créer des interfaces web attractives, fonctionnelles et responsives. L'intégration de librairies tels que Bootstrap m'a permis d'accélérer le processus de développement tout en assurant une compatibilité multiplateforme optimale.</p>
        <p>En progressant, j'ai exploré les langages de programmation côté client comme Javascript et sa bibliothèque JQuery, pour rendre les sites web interactifs et dynamiques. Côté serveur, j'ai découvert PHP, qui s'est très vite révélé être une véritable passion pour moi. J'ai ensuite approfondi mes connaissances, en mettant en pratique les principes de la Programmation Orientée Objet (POO) et en utilisant le framework Laravel pour développer des applications web robustes et évolutives, soutenues par une base de données MySQL.</p>
        <p>Parallèlement au développement, j'ai également étudié des CMS populaires tels que Wordpress et Drupal, me permettant de créer des sites web dynamiques et facilement administrables. La gestion de versions avec Git/GitHub, le référencement naturel (SEO), l'accessibilité et l'utilisation de méthodes agiles comme les user stories ont également été au cœur de mon apprentissage.</p>
        <p>En outre, j'ai été initié à des compétences complémentaires essentielles pour un développeur web, telles que la virtualisation et l'utilisation d'outils de conception graphique tels que Photoshop, Illustrator, Figma et Adobe XD. Comprendre les principes de l'ergonomie et de l'expérience utilisateur (UX) a également été une partie intégrante de ma formation, afin de garantir des applications web conviviales et intuitives.</p>
        <p>J'ai été ravie de découvrir que mes formations passées me seront utiles pour ma carrière de développeuse, notamment la maîtrise de l'anglais, langue indispensable en informatique, la communication, mais aussi la sensibilisation au développemenet durable via l'éco-conception de sites.</p>
        <p>En conclusion, cette formation a été une expérience immersive et intense, me préparant pleinement à relever les défis d'une carrière réussie dans le développement web. Forte de ces compétences polyvalentes, je suis prête à contribuer de manière significative à des projets web ambitieux et innovants.</p>
        `,
    }, 
    {
        id: 8,
        slug: '8-assistante-de-territoire',
        icon: faBriefcase,
        name: "Assistante de territoire en protection de l'enfance",
        company: "Département du Morbihan",
        contrat: "CDD",
        city: 'Le Faouët / Vannes / Auray',
        year: "2019-2021",
        fullDate: "Juillet 2019 à octobre 2021",
        introduction: `Au sein du Département du Morbihan, mes responsabilités incluaient la gestion administrative des dossiers de prévention de l'enfance, la saisie et la liquidation des demandes d'aides financières, ainsi que le soutien logistique pour la vie du territoire et du centre médico-social.`,
        description: `
        <h3>Missions</h3>
        <p>Mon rôle en tant qu'assistante de territoire au département du Morbihan était d'assurer le bon déroulement administratif des activités de prévention familiale dans le territoire d'intervention sociale du Faouët. Sous la supervision de la Référente Prévention Familiale, j'ai contribué à divers aspects de la gestion administrative et opérationnelle, garantissant ainsi le soutien nécessaire aux familles et aux enfants vulnérables.</p>
        <p>Une part importante de mon travail consistait à assurer la gestion administrative des dossiers de prévention de l'enfance. Cela impliquait l'organisation des instances de prévention telles que les instances de régulation et la commission de protection de l'enfance (CPE). J'étais chargée de diffuser les informations pertinentes aux parties prenantes concernées, y compris les collègues, les partenaires externes et les personnes accompagnées. De plus, j'ai joué un rôle clé dans la création, l'amélioration et la mise à jour des outils de suivi des procédures, ainsi que dans l'application des règles d'archivage pour garantir la conformité et la traçabilité des dossiers.</p>
        <p>Une autre facette de mon travail était la saisie et la liquidation des demandes d'aides financières, notamment le Fond Unique d'Aide, le Fond de Solidarité Logement et le Fond Énergie Eau. J'ai veillé à ce que les procédures soient suivies rigoureusement et que les demandes soient traitées de manière efficace et équitable.</p>
        <p>En parallèle, j'ai contribué à la vie du territoire et du centre médico-social (CMS) en organisant des réunions inter-services et inter-partenariales, en assurant le secrétariat et la gestion du courrier, et en assurant ponctuellement l'accueil au CMS. De plus, j'ai agi en tant que correspondante Temps pour les agents du territoire, veillant à la gestion efficace des ressources humaines et au respect des réglementations en vigueur.</p>
        <p>Dans l'ensemble, mon rôle d'assistante de territoire en protection de l'enfance a été une expérience enrichissante et valorisante, me permettant de découvrir de manière significative le fonctionnement de la protection de l'enfance au niveau départemental. Cela a aussi été l'occasion de découvrir le travail en collectivité territoriale et de participer à des missions de service public.</p>
        `,
    }, 
    {
        id: 7,
        slug: '7-chargee-de-missionmr-bricolage',
        icon: faBriefcase,
        name: "Chargée de Missions Qualité et Développement Durable",
        company: "Mr.Bricolage",
        contrat: "Stage",
        city: 'La Chapelle Saint-Mesmin (45)',
        year: "2018",
        fullDate: "Mars 2018 à août 2018",
        introduction: `J'ai travaillé au service qualité et développement durable et géré divers projets axés sur la sensibilisation environnementale, la conformité réglementaire et l'amélioration des pratiques durables.`,
        description: `
        <h3>Mission principale</h3>
        <p>Mon expérience en tant que chargée de missions qualité et développement durable a été une immersion enrichissante dans le monde de la responsabilité sociale des entreprises et du développement durable. Mon rôle était varié et impliquait la gestion de projets visant à promouvoir les pratiques durables au sein de l'organisation.</p>
        <p>L'un de mes principaux projets a été la coordination de l'événement "Mois du Développement Durable", visant à sensibiliser les salariés sur différentes thématiques environnementales pendant un mois.</p>
        <p>Dans un premier temps, j'ai procédé à une analyse approfondie pour déterminer les thèmes les plus pertinents à aborder. J'ai tenu compte des enjeux actuels en matière d'environnement, ainsi que des intérêts et des besoins spécifiques de l'entreprise et de ses salariés. Sur cette base, j'ai sélectionné une variété de sujets, allant de la réduction des déchets à l'efficacité énergétique en passant par la sensibilisation à la biodiversité.</p>
        <p>J'ai également élaboré un plan d'action détaillé, définissant les différentes activités et initiatives qui seraient mises en place tout au long du mois. Cela comprenait des ateliers de sensibilisation, des défis écologiques au sein de l'entreprise, ainsi que des campagnes de communication internes pour mobiliser et impliquer les salariés. J'ai également établi des partenariats avec des organisations externes pour enrichir le contenu et offrir des perspectives variées.</p>
        <p>Pendant le Mois du Développement Durable, j'ai coordonné toutes les activités prévues, assurant leur bon déroulement et leur impact maximal. J'ai été responsable de la logistique, de la communication, de la gestion des intervenants et de l'évaluation des résultats. J'ai également recueilli les retours d'expérience des participants pour évaluer l'efficacité des initiatives mises en place et identifier les pistes d'amélioration pour les éditions futures.</p>
        <p>Enfin, j'ai rédigé un rapport complet résumant les réalisations du Mois du Développement Durable, mettant en avant les points forts, les succès et les domaines à améliorer. Ce projet a été une expérience enrichissante qui m'a permis de développer mes compétences en gestion de projets, en communication et en sensibilisation environnementale, tout en renforçant l'engagement de l'entreprise en faveur du développement durable.</p>
        <h3>Missions secondaires</h3>
        <p>Parallèlement, j'ai travaillé sur les programmes Bricoprime et Mr.Bricolage Rénovation Énergétique, où j'ai contribué à la création d'un outil de veille réglementaire et concurrentielle, ainsi qu'à la mise à jour de la communication envers les magasins concernant les certificats d'économie d'énergie (CEE).</p>
        <p>Un autre volet important de mon travail a été la gestion des déchets, où j'ai réalisé un état des lieux du tri des déchets et organisé des rappels des consignes de tri auprès des salariés du siège social. J'ai également apporté un soutien aux magasins pour assurer leur conformité réglementaire en matière de gestion des déchets.</p>
        <p>En outre, j'ai effectué une veille réglementaire et technologique sur les produits et l'exploitation des magasins, assurant ainsi la conformité des différentes entités du groupe aux réglementations en vigueur. De plus, j'ai été impliquée dans le suivi des indicateurs environnementaux à travers la collecte et la consolidation des données, notamment la consommation énergétique des bâtiments et les tonnages de déchets produits.</p>
        <p>Enfin, j'ai contribué à la mise à jour des fiches de données de sécurité des produits vendus en magasin, assurant ainsi la conformité réglementaire et la sécurité des produits commercialisés par l'entreprise.</p>
        <p>Ce poste m'a permis de développer mes compétences en gestion de projets, en sensibilisation environnementale et en conformité réglementaire, tout en me sensibilisant davantage aux enjeux du développement durable dans le contexte professionnel.</p>
        `,
    },
    {
        id: 6,
        slug: '6-master-2-ddsc',
        icon: faGraduationCap,
        name: "M2 LEA Développement durable : stratégie de concertation et de communication",
        company: "Université de Caen-Normandie",
        city: 'Caen',
        year: "2016-2017",
        introduction: `Cette formation pluridisciplinaire m'a permis d'explorer les défis du développement durable, tout en développant mes compétences en langues étrangères, en communication interculturelle et en gouvernance.`,
        description: `
        <h3>Cursus</h3>
        <p>Ce Master 2 en LEA m'a permis d'allier mes intérêts pour les langues, la communication et l'environnement. Le programme dispensé m'a plongée au cœur des problématiques actuelles du développement durable, m'offrant une compréhension approfondie des enjeux écologiques, sociaux et économiques auxquels notre société est confrontée.</p>
        <p>L'une des forces de cette formation réside dans son approche pluridisciplinaire. J'ai eu l'opportunité d'étudier les fondements du développement durable, en examinant les politiques environnementales, les aspects socio-économiques et les innovations technologiques qui façonnent notre avenir. Les cours axés sur les langues étrangères et l'interculturalité ont été essentiels pour élargir mes horizons et me permettre de collaborer efficacement avec des partenaires internationaux.</p>
        <p>La communication et la gouvernance ont été des axes centraux de mon apprentissage. J'ai appris à élaborer des stratégies de communication efficaces pour sensibiliser et mobiliser les parties prenantes autour des questions liées au développement durable. Parallèlement, j'ai étudié les principes de gouvernance participative et de concertation, qui sont essentiels pour promouvoir des actions durables et inclusives.</p>
        <p>Enfin, les technologies de l'information et de la communication ont été intégrées à chaque étape de ma formation. De la collecte et l'analyse de données à la création de supports de communication innovants, j'ai acquis des compétences pratiques pour utiliser les outils numériques dans le contexte du développement durable.</p>
        <p>En complément de mes études, j'ai participé activement à un projet étudiant de gestion des biodéchets. Cette expérience pratique m'a permis d'appliquer mes connaissances théoriques à des situations réelles, tout en contribuant à des initiatives concrètes en faveur de l'environnement.</p>
        <p>Ce Master 2 m'a fourni une base solide pour évoluer dans le domaine complexe et en constante évolution du développement durable. Je suis convaincue que les compétences acquises au cours de cette formation me seront précieuses pour ma carrière de développeuse web, et mon attrait pour l'éco-conception des sites s'en trouve renforcé.</p>
        `,
    }, 
    {
        id: 5,
        slug: '5-chargee-de-communication-internationale',
        icon: faBriefcase,
        name: "Chargée de communication internationale",
        company: "NUI Galway",
        contrat: "CDD",
        city: 'Galway (Irlande)',
        year: "2016",
        fullDate: "Avril 2016 à août 2016",
        introduction: `Au sein de l'université de Galway, j'ai travaillé avec les équipes des Admissions internationales puis du service Erasmus, pour améliorer l'attractivité de l'université auprès des étudiants étrangers.`,
        description: `
        <h3>Missions</h3>
        <p>Ma mission en tant que chargée de communication internationale a été une opportunité passionnante de promouvoir l'excellence académique et la diversité culturelle de cette université irlandaise à l'échelle mondiale. Mon rôle s'est articulé autour de plusieurs axes majeurs, allant de la gestion des admissions internationales à l'amélioration de l'expérience des étudiants Erasmus.</p>
        <p>Dans le cadre de mon travail au Bureau des Admissions Internationales, j'ai en charge du marketing et du mailing destinés à attirer les étudiants internationaux et européens vers l'université. J'ai coordonné le traitement des candidatures, veillant à offrir un processus transparent et efficace pour les futurs étudiants. De plus, j'ai géré les demandes et les attributions de bourses, facilitant ainsi l'accès à l'éducation pour des étudiants talentueux du monde entier.</p>
        <p>Un aspect crucial de ma mission a été de renforcer l'attractivité de l'université à l'international. Pour ce faire, j'ai lancé une campagne de collecte de témoignages d'anciens étudiants, mettant en lumière leurs expériences positives et leurs réussites après leur passage dans notre établissement. Ces témoignages ont été intégrés au site internet de l'université, offrant ainsi une perspective authentique et inspirante aux futurs étudiants potentiels.</p>
        <p>En parallèle, j'ai été responsable de la refonte et de la mise à jour du site internet du Service Erasmus, fournissant aux étudiants et aux partenaires toutes les informations nécessaires sur le programme. L'objectif de cette refonte était que le site du service Erasmus respecte la charte graphique de l'Université, et que les informations soient claires et faciles à trouver, surtout pour des étudiants dont l'anglais n'est pas la langue maternelle. J'ai également rédigé un guide d'utilisation du back-office du site internet, permettant à l'équipe de gestion de maintenir et de mettre à jour facilement le contenu en ligne.</p>
        <p>Mon expérience en tant que Chargée de Communication Internationale a été enrichissante à bien des égards, me permettant de développer mes compétences en communication, en gestion de projet et en relations interculturelles tout en contribuant au rayonnement international de l'université de Galway.</p>
        `,
    }, 
    {
        id: 4,
        slug: '4-master-1-rici',
        icon: faGraduationCap,
        name: "Master 1 LEA Relations interculturelles et coopération internationale",
        company: "Université Lille 3",
        city: 'Lille',
        year: "2015-2016",
        introduction: `Ce programme a façonné ma capacité à évoluer dans un environnement international et interculturel, en me dotant de compétences essentielles telles que le management de projet, la communication et la recherche en langue étrangère.`,
        description: `
        <h3>Cursus</h3>
        <p>Ce Master 1 a été une étape cruciale dans mon parcours académique et professionnel. Au cœur de ce programme, j'ai acquis des compétences polyvalentes qui m'ont préparée à évoluer dans un monde de plus en plus connecté et diversifié.</p>
        <p>Le management de projet a été au centre de ma formation, m'enseignant les techniques nécessaires pour planifier, organiser et coordonner des initiatives à l'échelle internationale. La communication interculturelle est devenue une seconde nature, m'aidant à naviguer avec succès dans des contextes multiculturels et à construire des ponts entre différentes communautés. La recherche en langue étrangère m'a permis de développer une compréhension approfondie des cultures et des sociétés étrangères, renforçant ainsi ma capacité à m'adapter à des environnements divers.</p>
        <p>De plus, la maîtrise des technologies de l'information et de la communication a été un aspect important de ma formation. Apprendre à utiliser efficacement ces outils m'a permis de rester compétente dans un monde numérique en constante évolution. Enfin, la gestion de sites web m'a donné une base solide pour développer mes compétences techniques, tout en explorant de nouvelles façons de communiquer et de partager des idées à travers le monde.</p>
        <p>En somme, ce Master m'a doté des compétences et des connaissances nécessaires pour relever les défis d'un environnement professionnel international et interculturel.</p>
        `,
    }, 
    {
        id: 3,
        slug: '3-mexique-licence-lea',
        icon: faGraduationCap,
        name: "Licenciatura en negocios turísticos y comercio internacional",
        company: "Universidad Autónoma de Querétaro",
        city: 'Querétaro (Mexique)',
        year: "2014-2015",
        introduction: `Cette dernière année de licence a été un chapitre marquant de mon parcours académique. Ma décision de suivre des cours axés sur le commerce international et l'économie du tourisme s'est avérée être une opportunité exceptionnelle pour élargir ma perspective et comprendre les réalités latino-américaines.`,
        description: `
        <h3>Cursus</h3>
        <p>Ma dernière année de licence à l'Université de Querétaro au Mexique a été une étape décisive dans mon parcours académique. Plongé au cœur de la culture mexicaine, j'ai vécu une immersion totale qui a profondément enrichi mes compétences linguistiques et culturelles. J'y ai choisi des matières axées sur le commerce international et l'économie du tourisme afin d'obtenir une équivalence au diplôme français. Cette décision s'est avérée être une opportunité exceptionnelle pour comprendre les dynamiques économiques et commerciales dans un contexte latino-américain.</p>
        <p>Étant moi-même passionnée d'histoire et désireuse de mieux comprendre la société mexicaine, j'ai également suivi des cours sur le Mexique pré-colombien. J'ai ensuite étudié la période plus moderne qui concerne l'indépendance du pays puis la révolution des années 1910.</p>
        <p>Cette année d'immersion a été bien plus qu'un simple chapitre de ma formation&#8239;: elle a été une véritable aventure humaine qui a forgé ma vision du monde et renforcé ma détermination à poursuivre une carrière tournée vers l'international. Je suis reconnaissante pour les enseignements et les souvenirs précieux que j'ai acquis lors de cette période inoubliable.</p>
        <p>A noter que nous n'étions que huit étudiants étrangers dans cette université, l'immersion a donc été totale.</p>
        <h3>Voyages</h3>
        <p>Au-delà des salles de classe, j'ai exploré les richesses culturelles du Mexique, tissant des liens avec la population locale et découvrant les subtilités de la vie quotidienne. Cette expérience m'a permis de développer ma capacité d'adaptation, ma curiosité et mon ouverture d'esprit.</p>
        <p>Je me suis régulièrement organisé des excursions pour découvrir les environs de Querétaro. Le pays étant très grand, j'ai également voyagé seule pendant un mois pour découvrir le centre et le sud du Mexique, à la découverte de nombreux sites archéologiques.</p>

        `,
    },
    {
        id: 2,
        slug: '2-aide-a-la-personne',
        icon: faBriefcase,
        name: "Aide à la personne",
        company: "ADMR",
        contrat: "CDD",
        city: 'Ploemeur',
        year: "2013-2017",
        fullDate: "Étés 2013 à 2017",
        introduction: `Lorsque j'étais étudiante, j'ai souvent travaillé l'été en tant qu'aide à domicile auprès de personnes âgées et/ou handicapées, pour les accompagner dans leur quotidien.`,
        description: `
        <h3>Missions</h3>
        <p>J'ai commencé à l'ADMR sur des missions de ménages, mais mes compétences relationnelles m'ont rapidement amenée à aider des personnes âgées et/ou handicapées dans leurs gestes du quotidien :</p>
        <ul>
        <li>Préparation des repas</li>
        <li>Compagnie amicale (socialisation)</li>
        <li>Aide pour les courses</li>
        <li>Entretien du logement</li>
        </ul>
        <p>J'ai beaucoup aimé ces jobs d'été, ils m'ont apporté énormément sur le plan humain. Ils ont aussi été l'occasion de mettre en pratique diverses qualités personnelles qui m'ont été utiles pour mes postes suivants&#8239;: patience, adaptabilité, empathie, écoute, responsabilité, rigueur, diplomatie, confidentialité...</p>
        `,
    },  
    {
        id: 1,
        slug: '1-nantes-licence-lea',
        icon: faGraduationCap,
        name: "Licence en Langues Étrangères Appliquées (LEA)",
        company: "Université de Nantes",
        city: 'Nantes',
        year: "2012-2015",
        introduction: `J'ai commencé mes études en LEA à Nantes, où j'ai découvert le monde étudiant mais aussi le monde du travail dans un contexte international et interculturel.`,
        description: `
        <h3>Cursus</h3>
        <p>Ma licence en Langues Étrangères Appliquées à l'Université de Nantes a été une aventure passionnante où j'ai exploré les méandres des langues et des cultures à travers des cours stimulants en anglais, espagnol et russe. Mais ce n'était pas tout ! J'ai également plongé dans des disciplines aussi variées que les civilisations étrangères, l'économie des entreprises, les statistiques, la communication, le droit fiscal et du travail.  Cette diversité m'a permis d'acquérir une compréhension approfondie des enjeux linguistiques, culturels et commerciaux dans un contexte international.</p>
        <h3>Activités étudiantes</h3>
        <p>En dehors des cours, je me suis engagées dans plusieurs associations. Le Muggle Quidditch était l'un de mes passe-temps préférés. Et puis, il y avait les English Nights, où nous discutions et débations en anglais entre étudiants français mais aussi avec les étudiants et professeurs internationaux.</p> 
        `,
    }, 
]

export default jobs