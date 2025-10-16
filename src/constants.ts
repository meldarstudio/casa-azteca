import type { CollectionKey } from "astro:content";

export const twitter = "@casa_realmexicanarestaurant";

export const orderUrl =
  "https://www.foodbooking.com/ordering/restaurant/menu?company_uid=1e49066a-c69e-4685-b7da-e8cf3be95fd5&restaurant_uid=ff1b9f8b-bd36-450c-8e03-c92a037728a0";

export const defaultMeta = {
  title: "Casa Azteca Mexican Restaurant | Authentic Mexican Food in Barre, VT",
  description:
    "Experience authentic Mexican cuisine at Casa Azteca in Barre, Vermont. Family-owned restaurant serving fresh tacos, sizzling fajitas, handmade burritos, and traditional specialties. Dine-in, takeout, and delivery available.",
  ogImagePath: "og.webp",
};

export const socialLinks = {
  DoorDash: "https://www.doordash.com/store/casa-azteca-barre-32244477/",
  Facebook: "https://www.facebook.com/p/Casa-Azteca-Barre-VT-61570317904529/",
  Yelp: "https://www.yelp.com/biz/casa-azteca-barre",
};

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Menu",
    href: "/menu",
  },
];

export const categories: {
  title: string;
  slug: CollectionKey;
}[] = [
  {
    title: "Appetizers",
    slug: "appetizers",
  },
  {
    title: "Burritos",
    slug: "burritos",
  },
  {
    title: "Chicken",
    slug: "chicken",
  },
  {
    title: "Desserts",
    slug: "desserts",
  },
  {
    title: "Enchiladas",
    slug: "enchiladas",
  },
  {
    title: "Fajitas",
    slug: "fajitas",
  },
  {
    title: "House Specialties",
    slug: "house-specialties",
  },
  {
    title: "Kids Menu",
    slug: "kids-menu",
  },
  {
    title: "Lunch Specials",
    slug: "lunch-specials",
  },
  {
    title: "Nachos",
    slug: "nachos",
  },
  {
    title: "Quesadillas",
    slug: "quesadillas",
  },
  {
    title: "Salads",
    slug: "salads",
  },
  {
    title: "Seafood",
    slug: "seafood",
  },
  {
    title: "Steak",
    slug: "steaks",
  },
  {
    title: "Tacos",
    slug: "tacos",
  },
];
