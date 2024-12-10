import image01 from "@/assets/images/01.webp";
import image02 from "@/assets/images/01.jpg";
import image03 from "@/assets/images/02.jpg";

const fallbackEvents = [
  {
    id: 1,
    title: "Festival de Ouidah",
    date: "Samedi, 16 Décembre 2023 à 14:00",
    description: "Un événement culturel unique célébrant la diversité au Bénin.",
    image: image01,
    tags: ["Culture", "Musique"],
    organizer: {
      name: "Groupe Ariya",
      role: "Organisateur Principal",
      avatar: "https://via.placeholder.com/60x60?text=GA",
    },
  },
  {
    id: 2,
    title: "Marché des Arts Africains",
    date: "Dimanche, 17 Décembre 2023 à 10:00",
    description: "Explorez les œuvres d'artistes talentueux du Bénin.",
    image: image02,
    tags: ["Art", "Marché"],
    organizer: {
      name: "Groupe Ariya",
      role: "Organisateur Principal",
      avatar: "https://via.placeholder.com/60x60?text=GA",
    },
  },
  {
    id: 3,
    title: "Conférence Tech Cotonou",
    date: "Lundi, 18 Décembre 2023 à 09:00",
    description: "Une conférence réunissant les meilleurs experts technologiques.",
    image: image03,
    tags: ["Technologie", "Conférence"],
    organizer: {
      name: "Groupe Ariya",
      role: "Organisateur Principal",
      avatar: "https://via.placeholder.com/60x60?text=GA",
    },
  },
];

export default fallbackEvents;
