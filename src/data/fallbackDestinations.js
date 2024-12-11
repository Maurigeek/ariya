import image01 from "@/assets/images/tourism1.jpg";
import image02 from "@/assets/images/tourism2.jpg";
import image03 from "@/assets/images/tourism3.jpg";
import image04 from "@/assets/images/tourism4.jpg";
import image05 from "@/assets/images/tourism5.jpg";

export default [
  {
    id: 1,
    name: "Parc National de la Pendjari",
    location: "Atacora, Bénin",
    tags: ["Nature", "Faune", "Aventure"],
    description:
      "Le Parc National de la Pendjari est l'une des plus grandes réserves naturelles d'Afrique de l'Ouest. Il abrite une grande diversité de faune, incluant des éléphants, des lions, des buffles, des antilopes, et de nombreuses espèces d'oiseaux. Situé dans le nord du Bénin, ce parc offre des paysages époustouflants avec ses savanes et ses montagnes environnantes. Les safaris y sont très prisés, permettant aux visiteurs de s'immerger dans la nature sauvage tout en observant les animaux dans leur habitat naturel. La Pendjari est également un site important pour la conservation des espèces menacées et participe à des projets de préservation de la biodiversité.",
    gallery: [image01, image02, image03],
    reviews: [
      { author: "Augustin", date: "Il y a 3 jours", text: "Une expérience exceptionnelle ! Voir les éléphants en liberté, c'était magique." },
      { author: "Maurias", date: "Il y a 1 semaine", text: "Un safari inoubliable dans un cadre naturel préservé." },
      { author: "Gilberte", date: "Il y a 2 jours", text: "Les paysages sont magnifiques, et la faune est incroyable." },
    ],
  },
  {
    id: 2,
    name: "Musée des Bio Guera",
    location: "Savé, Bénin",
    tags: ["Culture", "Histoire"],
    description:
      "Le Musée des Bio Guera retrace l'histoire fascinante des guerriers Bio Guera, qui ont lutté contre l'occupation coloniale française dans le nord du Bénin à la fin du XIXe siècle. Ce musée, situé dans la ville de Savé, met en lumière les exploits de ces figures historiques qui ont marqué l'histoire du Bénin par leur bravoure et leur résistance. Vous y découvrirez des objets historiques, des récits de batailles et des expositions consacrées aux traditions locales.",
    gallery: [image02, image03, image01],
    reviews: [
      { author: "Marie Claire", date: "Il y a 1 jour", text: "Une visite émouvante qui nous rappelle l'importance de notre histoire." },
      { author: "Augustin", date: "Il y a 4 jours", text: "Le musée est bien organisé et les guides sont passionnants." },
      { author: "Maurias", date: "Il y a 2 semaines", text: "Un hommage touchant à ces héros du Bénin." },
    ],
  },
  {
    id: 3,
    name: "Statue des Amazones du Dahomey",
    location: "Cotonou, Bénin",
    tags: ["Histoire", "Culture"],
    description:
      "La Statue des Amazones du Dahomey rend hommage aux célèbres femmes guerrières du Royaume du Dahomey, une armée féminine redoutée qui a joué un rôle crucial dans l'histoire précoloniale du Bénin. Ces femmes, connues pour leur bravoure et leur loyauté, défendaient le roi du Dahomey contre les ennemis. Aujourd'hui, la statue est un symbole de force et de résilience, commémorant un aspect unique de l'histoire africaine.",
    gallery: [image03, image02, image03],
    reviews: [
      { author: "Augustin", date: "Il y a 5 jours", text: "Un symbole puissant du courage des femmes dans l'histoire africaine." },
      { author: "Fatima D.", date: "Il y a 1 semaine", text: "Impressionnant ! Un morceau d'histoire que tout le monde devrait connaître." },
      { author: "Gilberte", date: "Il y a 3 jours", text: "Une statue monumentale qui inspire le respect et l'admiration." },
    ],
  },
  {
    id: 4,
    name: "Ganvié",
    location: "Lac Nokoué, Bénin",
    tags: ["Culture", "Tradition", "Nature"],
    description:
      "Ganvié, surnommée la 'Venise de l'Afrique', est un village lacustre situé sur le lac Nokoué, non loin de Cotonou. Ce village unique est construit entièrement sur l'eau, avec des maisons sur pilotis. Ganvié est un témoignage vivant de l'ingéniosité et de l'adaptation humaine à l'environnement. Le village a été fondé au XVIIe siècle par le peuple Tofinu, qui fuyait les chasseurs d'esclaves. Aujourd'hui, Ganvié est une destination touristique prisée pour son cadre unique et son histoire fascinante.",
    gallery: [image04, image03, image01],
    reviews: [
      { author: "Maurias", date: "Il y a 2 jours", text: "Une expérience incroyable de découvrir la vie sur l'eau." },
      { author: "Augustin", date: "Il y a 6 jours", text: "Une visite unique, hors des sentiers battus." },
      { author: "Gilberte", date: "Il y a 4 jours", text: "Le calme et la beauté de ce lieu m'ont vraiment marqué." },
    ],
  },
  {
    id: 5,
    name: "Palais Royal de Dahomey",
    location: "Abomey, Bénin",
    tags: ["Histoire", "Patrimoine", "Culture"],
    description:
      "Le Palais Royal de Dahomey, situé à Abomey, est l'un des sites les plus emblématiques du Bénin. Classé au patrimoine mondial de l'UNESCO, ce palais est un témoignage vivant de l'histoire du Royaume du Dahomey, qui a prospéré du XVIIe au XIXe siècle. Le palais était le centre du pouvoir politique et spirituel du royaume, abritant les rois et leur cour. Aujourd'hui, le Palais Royal est un musée où les visiteurs peuvent découvrir l'histoire fascinante du royaume et la richesse de la culture béninoise.",
    gallery: [image05, image01, image02],
    reviews: [
      { author: "Augustin", date: "Il y a 1 jour", text: "Un lieu chargé d'histoire qui nous plonge dans l'époque des rois du Dahomey." },
      { author: "Maurias", date: "Il y a 3 jours", text: "Les collections du musée sont impressionnantes." },
      { author: "Gilberte", date: "Il y a 2 semaines", text: "Un voyage fascinant dans l'histoire du Bénin." },
    ],
  },
];
