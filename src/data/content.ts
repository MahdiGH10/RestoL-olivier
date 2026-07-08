export const RESTAURANT = {
  name: "L'Olivier",
  tagline: "Spécialité tunisienne et française, dans le respect des traditions et du savoir-faire.",
  address: {
    street: "98 Avenue Hédi Chaker",
    city: "Nabeul",
    postal: "8000",
    country: "Tunisie",
    maps: "https://www.google.com/maps/place/L'Olivier/@36.4525299,10.7345809,17z",
  },
  phones: ["+216 72 286 613", "+216 99 382 700"],
  email: "hamadibououd@gmail.com",
  social: {
    facebook: "https://www.facebook.com/Restaurant-lolivier-Nabeul",
    instagram: "https://www.instagram.com/restaurantloliviernabeul/",
  },
  hours: {
    label: "Tous les jours",
    lunch: { start: "12:00", end: "15:00" },
    dinner: { start: "18:30", end: "23:30" },
  },
  ratings: {
    google: { score: 4.4, max: 5, label: "Google" },
    tripadvisor: { rank: 2, total: 53, label: "TripAdvisor", reviews: 276 },
    restaurantGuru: { score: 4.5, max: 5, label: "Restaurant Guru", reviews: 512 },
  },
  features: [
    "Wi-Fi",
    "Cartes bancaires acceptées",
    "Plats végétariens et végétaliens",
    "Accès handicapés",
    "À emporter",
    "Réservation recommandée",
  ],
};

export const MENU_CATEGORIES = [
  {
    id: "entrees",
    name: "Entrées",
    items: [
      { name: "Salade artichaut-crevette", desc: "Fonds d'artichaut, crevettes fraîches, vinaigrette citronnée", price: "9.5 DT" },
      { name: "Assortiment de mezzés", desc: "Sélection de petits plats tunisiens à partager", price: "12 DT" },
    ],
  },
  {
    id: "specialites-mer",
    name: "Spécialités de la Mer",
    items: [
      { name: "Couscous au mérou", desc: "Le signature de la maison — mérou frais, légumes de saison, semoule fine", price: "~40 DT" },
      { name: "Mérou sauce crevette", desc: "Filet de mérot nappé d'une crème de crevettes", price: "35 DT" },
      { name: "Poisson du jour grillé", desc: "Selon arrivage — préparé simplement, huile d'olive et herbes", price: "Selon poids" },
      { name: "Sole grillée", desc: "Sole fraîche grillée, beurre citronné", price: "38 DT" },
      { name: "Poulpe grillé", desc: "Poulpe tendre, marinade aux herbes, grillé à la perfection", price: "32 DT" },
      { name: "Moules marinières", desc: "Moules fraîches, vin blanc, ail et persil", price: "22 DT" },
    ],
  },
  {
    id: "terroir",
    name: "Terroir & Traditions",
    items: [
      { name: "Agneau à la gargoulette", desc: "Cuisson lente en pot d'argile, légumes confits", price: "30 DT" },
      { name: "Tournedos L'Olivier", desc: "Filet de bœuf, sauce fruits de mer — la signature du chef", price: "25 DT" },
      { name: "Chateaubriand, deux sauces", desc: "Pièce de bœuf grillée, sauce béarnaise et sauce poivre", price: "42 DT" },
      { name: "Filet de bœuf sauce crevette", desc: "Filet tendre, crème de crevettes et légumes de saison", price: "36 DT" },
    ],
  },
  {
    id: "suggestions",
    name: "Suggestions du Chef",
    items: [
      { name: "Plateau de fruits de mer", desc: "Sur réservation — assortiment généreux de crustacés et coquillages", price: "Sur demande" },
      { name: "Catch of the day", desc: "Préparation du chef selon l'arrivage du matin", price: "Selon arrivage" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    quote: "Excellente soirée au restaurant L'Olivier ! Accueil chaleureux, ambiance agréable et conviviale. Les plats sont délicieux, frais et bien présentés. Le service est attentionné et rapide. Les prix sont très corrects pour la qualité proposée. C'est un véritable havre de gastronomie à Nabeul.",
    author: "Dhouha Ouni",
    source: "Avis Google ★★★★★",
    stars: 5,
  },
  {
    quote: "Très bonne table excellent accueil et de très bons conseils pour nous faire découvrir les spécialités locales. Une qualité irréprochable. Nous nous somme régalés… Le restaurant vaut le détour tant par la qualité de ses prestations que pour le professionnalisme du personnel.",
    author: "Ghislaine Estanislao",
    source: "Avis Google ★★★★★",
    stars: 5,
  },
  {
    quote: "Bravo à toute l'équipe ! Accueil convivial et repas fait maison. Mentions spéciales pour la bisque de crevettes et la souris d'agneau. De très bons conseils pour le choix des vins. La salle de restaurant est très cosy et chaleureuse.",
    author: "Olivier",
    source: "Avis Google ★★★★",
    stars: 4,
  },
  {
    quote: "Charming and relaxed vibe. Tasty delicious lunch recommended by our hotel. Service was top notch. Saef was very friendly and we enjoyed his food and wine recommendations.",
    author: "Sim Woon Yap",
    source: "Avis Google ★★★★★",
    stars: 5,
  },
  {
    quote: "L'Olivier est une véritable pépite ! Une cuisine raffinée, un service chaleureux et un cadre élégant. Chaque détail est soigné. Une adresse incontournable à Nabeul à découvrir sans hésiter.",
    author: "Walid Gouiaa",
    source: "Avis Google ★★★★★",
    stars: 5,
  },
  {
    quote: "J'ai eu le plaisir de déjeuner ici, et tout était excellent. L'accueil est chaleureux, le personnel professionnel et aux petits soins. Les plats sont délicieux et préparés avec des ingrédients frais. Le rapport qualité-prix est excellent.",
    author: "M.H.K.",
    source: "Avis Google ★★★★★",
    stars: 5,
  },
  {
    quote: "Nous avons passé une soirée mémorable dans ce charmant restaurant. L'ambiance est à la fois chaleureuse et intime, idéale pour une sortie en famille ou en couple. Les plats étaient exquis, préparés avec soin et présentés de manière élégante.",
    author: "Yasmine Bououd",
    source: "Avis Google ★★★★★",
    stars: 5,
  },
  {
    quote: "Lovely food, best meal I've had in Tunisia. Great atmosphere and delicious food. The menu has a variety of tasty dishes and the service is friendly and attentive. Perfect spot for a casual meal or special night out.",
    author: "Benjamin McDonnell",
    source: "Avis Google ★★★★★",
    stars: 5,
  },
  {
    quote: "Une très belle adresse. Tout était parfait : service au top et cuisine délicieuse. Je recommande !",
    author: "Sophie Brunaud",
    source: "Avis Google ★★★★★",
    stars: 5,
  },
  {
    quote: "Excellent accueil et nous avons très bien mangé. Avec en plus un excellent choix et conseils en vins locaux.",
    author: "Véro",
    source: "Avis Google ★★★★★",
    stars: 5,
  },
  {
    quote: "Eccezionale. Abbiamo mangiato spaghetti ai frutti di mare sublimi, alla italiana maniera, pesce pescato all'amo. Ci siamo trovati molto bene.",
    author: "TocTocTunisia",
    source: "Avis Google ★★★★★",
    stars: 5,
  },
  {
    quote: "Sehr leckere Paella, sehr freundliche Bedienung. Ein sehr gutes Restaurant.",
    author: "Cornelia Adam",
    source: "Avis Google ★★★★★",
    stars: 5,
  },
];

export const GALLERY_IMAGES = [
  { id: 1, src: "https://scontent-ord5-3.xx.fbcdn.net/v/t39.99422-6/725750999_1723089982036266_1261176129389924168_n.png?stp=dst-jpg_tt6&cstp=mx1638x2048&ctp=s1638x2048&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=rw1CEU8ts8YQ7kNvwG--JLW&_nc_oc=Adqi8qWpIwAdfsDFu1umzL4NPYnKAYKJQoS09YaI0UuaE66pd7Hy5iW6spYRxTkyQac&_nc_zt=14&_nc_ht=scontent-ord5-3.xx&_nc_gid=YveLwTanr2zVhwzB0Ae4CA&_nc_ss=72289&oh=00_AQD4LYIhs5SahM0tKpynYIr8dJhE6siEHQ-V4QXbVbrz2g&oe=6A545730", alt: "Pâtes aux fruits de mer", width: 800, height: 1000 },
  { id: 2, src: "https://scontent-ord5-3.xx.fbcdn.net/v/t39.99422-6/727360960_1358200339512166_5048991254037609456_n.png?stp=dst-jpg_tt6&cstp=mx1638x2048&ctp=s1638x2048&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HQlsrOLPhecQ7kNvwFoA4oP&_nc_oc=AdrtxjPuoaLeK2abZ2P795b4CNsrBw096DhlBvyX69BeYfE7uQblPj5qlzVye9Mmbc8&_nc_zt=14&_nc_ht=scontent-ord5-3.xx&_nc_gid=YveLwTanr2zVhwzB0Ae4CA&_nc_ss=72289&oh=00_AQCz7tOfY1uWGEdE6yKsy3ov9qGKo6uhxd2IO-O-l29YGw&oe=6A5450CC", alt: "Assiette de pâtes fraîches", width: 800, height: 800 },
  { id: 3, src: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.99422-6/726405903_1031935029523261_7063943626297609197_n.png?stp=dst-jpg_tt6&cstp=mx1638x2048&ctp=s1638x2048&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=g8DvVHhQrqAQ7kNvwGdCjNS&_nc_oc=AdpYZmsnVHO8CjrIpidc2Ug2-79_Y5gsvqZLQpOWMCBKt6l_BDJQcRc2-OLozLc5UPk&_nc_zt=14&_nc_ht=scontent-ord5-1.xx&_nc_gid=YveLwTanr2zVhwzB0Ae4CA&_nc_ss=72289&oh=00_AQDgM5zT3U_1jbiLcFRnVXJdqcMv3BfRm6MSXFCRphLFLA&oe=6A545771", alt: "Osso buco maison", width: 800, height: 900 },
  { id: 4, src: "https://scontent-ord5-2.xx.fbcdn.net/v/t39.99422-6/727051748_1028596466368003_337552860710859724_n.png?stp=dst-jpg_tt6&cstp=mx1638x2048&ctp=s1638x2048&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jnKfFYBjXRsQ7kNvwEx8Tlt&_nc_oc=AdqwxcSJEFHs_c3kfHLLTEeHj4WHOEp96hs66bM0JpJJPzy16zvo0grTZom1fbRdBvc&_nc_zt=14&_nc_ht=scontent-ord5-2.xx&_nc_gid=YveLwTanr2zVhwzB0Ae4CA&_nc_ss=72289&oh=00_AQBDqLaYFzqtVsXi15emWncZwpQCBc54D0KsNC0kT-awcw&oe=6A546757", alt: "Pâtes carbonara", width: 800, height: 700 },
  { id: 5, src: "https://scontent-ord5-1.xx.fbcdn.net/v/t39.99422-6/725199355_1536197071390648_1978053746881562984_n.png?stp=dst-jpg_tt6&cstp=mx1638x2048&ctp=s1638x2048&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=6IcJfYS81lQQ7kNvwEtuWtH&_nc_oc=Ado6HVA05PmMWH8jesI4ME8iIuedlfsXeG3HgRGzOiJVTvIE0wVwuQjWUIP9C6hAKBw&_nc_zt=14&_nc_ht=scontent-ord5-1.xx&_nc_gid=YveLwTanr2zVhwzB0Ae4CA&_nc_ss=72289&oh=00_AQAbeWCcMGIm4mhiPnWkkL3i-unbtYIyyuw6_dmE1-d_Ow&oe=6A547734", alt: "Plat gastronomique", width: 800, height: 600 },
  { id: 6, src: "https://scontent-lga3-1.xx.fbcdn.net/v/t39.99422-6/723256670_2699487310424016_7867182668665765529_n.png?stp=dst-jpg_tt6&cstp=mx1638x2048&ctp=s1638x2048&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ObuC1tJSL_sQ7kNvwG72tWB&_nc_oc=Adp2b2KDp2-9owz0-nlHlG9HdHGdN9vOlHmkqQMll8zNjwlAzCLeyvYfnmUeeKoDUDY&_nc_zt=14&_nc_ht=scontent-lga3-1.xx&_nc_gid=JIjwUU28mMS4qz3TdENeVA&_nc_ss=72289&oh=00_AQCsKXwtwChrjNIpuEprXrSm1qYz8tL-nBmVoPJSQe50pA&oe=6A544CCB", alt: "Osso buco et légumes", width: 800, height: 800 },
];

export const ATMOSPHERE = [
  {
    icon: "service",
    title: "Un service discret",
    desc: "La salle est conçue pour que l'équipe garde toujours un œil sur chaque table, sans jamais peser sur le repas.",
  },
  {
    icon: "hours",
    title: "Ouvert midi et soir",
    desc: "Service en continu de 12h à 15h pour le déjeuner et de 18h30 à 23h30 pour le dîner, tous les jours.",
  },
  {
    icon: "cuisine",
    title: "Une cuisine à deux voix",
    desc: "Spécialités marines et plats du terroir tunisien dialoguent avec une cuisine française et internationale soignée.",
  },
];
