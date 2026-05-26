export type Project = {
  slug: string;
  name: string;
  category: string;
  cardColor: string;
};

export const projects: Project[] = [
  {
    slug: "lagos-bloom",
    name: "Lagos Bloom Florist",
    category: "E-commerce — WooCommerce",
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