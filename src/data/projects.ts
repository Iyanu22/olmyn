export type Project = {
  slug: string;
  name: string;
  category: string;
  image?: string;
  cardColor: string;
};

export const projects: Project[] = [
  {
    slug: "pickup",
    name: "Pickup Logistics",
    category: "Logistics WebApp — React",
    image: "/projects/flyer_2.jpg",
    cardColor: "bg-cream-soft",
  },
  {
    slug: "adeyemi-legal",
    name: "Adeyemi Legal",
    category: "Business site — WordPress",
    cardColor: "bg-olive",
  },
  {
    slug: "northstar-saas",
    name: "Northstar SaaS",
    category: "Landing page — React",
    cardColor: "bg-ink",
  },
  {
    slug: "eze-catering",
    name: "Eze Catering",
    category: "Restaurant — WordPress",
    cardColor: "bg-gold",
  },
];