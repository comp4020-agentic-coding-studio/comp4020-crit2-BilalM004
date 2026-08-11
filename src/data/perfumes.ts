// Real product data sourced from https://aerre.co/ (fetched from each
// product's live page) for this course redesign exercise. Prices are the
// single sale price shown on each product page — the site's own further
// bundle-discount tiers ("FROM $x") are the promotional layer this redesign
// deliberately drops, so they aren't carried over here.
import type { ImageMetadata } from "astro";

import afterHours from "../assets/perfumes/after-hours.png";
import amberHaze from "../assets/perfumes/amber-haze.png";
import blackBlaze from "../assets/perfumes/black-blaze.png";
import blissRelease from "../assets/perfumes/bliss-release.png";
import deepBlue from "../assets/perfumes/deep-blue.png";
import forestSpice from "../assets/perfumes/forest-spice.png";
import goldenHour from "../assets/perfumes/golden-hour.png";
import joshuaTree from "../assets/perfumes/joshua-tree.png";
import londonCityLights from "../assets/perfumes/london-city-lights.png";
import midnightWhisper from "../assets/perfumes/midnight-whisper.png";
import newYorkSkyline from "../assets/perfumes/new-york-skyline.png";
import nightfall from "../assets/perfumes/nightfall.png";
import summerReverie from "../assets/perfumes/summer-reverie.png";
import sunsetInParis from "../assets/perfumes/sunset-in-paris.png";
import velvetUnderground from "../assets/perfumes/velvet-underground.png";
import wildfire from "../assets/perfumes/wildfire.png";
import winterFireworks from "../assets/perfumes/winter-fireworks.png";

export type Gender = "women" | "men" | "unisex";

export type ScentFamily =
  | "citrus-fresh"
  | "floral"
  | "woody"
  | "amber-spice"
  | "gourmand";

export interface ScentFamilyInfo {
  name: string;
  blurb: string;
}

export const SCENT_FAMILIES: Record<ScentFamily, ScentFamilyInfo> = {
  "citrus-fresh": {
    name: "Citrus & Fresh",
    blurb:
      "Bright top notes and light, aromatic bases — the wear-anywhere scents that open sharp and settle clean.",
  },
  floral: {
    name: "Floral",
    blurb:
      "Rose, jasmine and orchid hearts over soft musk and woods — classic, wearable florals.",
  },
  woody: {
    name: "Woody",
    blurb:
      "Cedar, sandalwood and vetiver bases with spiced or leathery hearts — grounded, long-wearing scents.",
  },
  "amber-spice": {
    name: "Amber & Spice",
    blurb:
      "Warm resins, incense and saffron over amber and oakmoss — dense, cold-weather fragrances.",
  },
  gourmand: {
    name: "Gourmand",
    blurb:
      "Vanilla, cocoa, coffee and fruit over soft musk — dessert-like scents built to feel sweet.",
  },
};

export interface Perfume {
  slug: string;
  name: string;
  price: number;
  genders: Gender[];
  inspiredBy: { brand: string; item: string };
  notes: { top: string[]; heart: string[]; base: string[] };
  family: ScentFamily;
  image: { src: ImageMetadata; alt: string };
  sourceUrl: string;
  // Editorial rank used for the "Best Selling" sort — aerre.co doesn't
  // publish per-product sales figures, so this mirrors the curated homepage
  // "Highlights" picks (lower = more popular) rather than claiming real data.
  popularity: number;
}

// Shared lowercase, hyphenated form for brand/note filter values and links,
// e.g. "Viktor&Rolf" -> "viktor-rolf".
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const PERFUMES: Perfume[] = [
  {
    slug: "sunset-in-paris",
    name: "Sunset in Paris",
    price: 45,
    genders: ["women"],
    inspiredBy: { brand: "Chanel", item: "Coco Mademoiselle" },
    notes: {
      top: ["Bergamot", "Orange", "Mandarin"],
      heart: ["Jasmine", "Rose", "Patchouli"],
      base: ["Oakmoss", "Vanilla", "Vetiver"],
    },
    family: "floral",
    image: { src: sunsetInParis, alt: "Bottle of Sunset in Paris perfume" },
    sourceUrl: "https://aerre.co/products/sunset-in-paris",
    popularity: 0,
  },
  {
    slug: "summer-reverie",
    name: "Summer Reverie",
    price: 45,
    genders: ["women"],
    inspiredBy: { brand: "Viktor&Rolf", item: "Flowerbomb" },
    notes: {
      top: ["Bergamot", "Green Tea", "Freesia"],
      heart: ["White Flowers", "Orchid", "Rose"],
      base: ["Musk", "Patchouli", "Vanilla"],
    },
    family: "floral",
    image: { src: summerReverie, alt: "Bottle of Summer Reverie perfume" },
    sourceUrl: "https://aerre.co/products/summer-reverie",
    popularity: 8,
  },
  {
    slug: "golden-hour",
    name: "Golden Hour",
    price: 45,
    genders: ["women"],
    inspiredBy: { brand: "Dior", item: "J'Adore" },
    notes: {
      top: ["Ylang Ylang", "Mandarin", "Sweet Pea"],
      heart: ["Damascus Rose", "Jasmine", "Peach"],
      base: ["Cedarwood", "Plum", "Musk"],
    },
    family: "floral",
    image: { src: goldenHour, alt: "Bottle of Golden Hour perfume" },
    sourceUrl: "https://aerre.co/products/golden-hour",
    popularity: 9,
  },
  {
    slug: "deep-blue",
    name: "Deep Blue",
    price: 49,
    genders: ["women"],
    inspiredBy: { brand: "YSL", item: "Libre" },
    notes: {
      top: ["Mandarin", "Neroli", "Blackcurrant"],
      heart: ["Jasmine", "Lavender", "Orange Blossom"],
      base: ["Vanilla", "Amber", "Musk"],
    },
    family: "floral",
    image: { src: deepBlue, alt: "Bottle of Deep Blue perfume" },
    sourceUrl: "https://aerre.co/products/deep-blue",
    popularity: 5,
  },
  {
    slug: "midnight-whisper",
    name: "Midnight Whisper",
    price: 45,
    genders: ["women"],
    inspiredBy: { brand: "Armani", item: "Sì" },
    notes: {
      top: ["Blackcurrant", "Strawberry"],
      heart: ["Rose", "Freesia", "Peach"],
      base: ["Patchouli", "Vanilla", "Blond Woods", "Musk"],
    },
    family: "floral",
    image: { src: midnightWhisper, alt: "Bottle of Midnight Whisper perfume" },
    sourceUrl: "https://aerre.co/products/midnight-whisper",
    popularity: 10,
  },
  {
    slug: "london-city-lights",
    name: "London City Lights",
    price: 45,
    genders: ["women"],
    inspiredBy: { brand: "Burberry", item: "Her" },
    notes: {
      top: ["Strawberry", "Sour Cherry", "Mandarin"],
      heart: ["Violet", "Jasmine"],
      base: ["Vanilla", "Musk", "Blond Woods", "Amber"],
    },
    family: "gourmand",
    image: {
      src: londonCityLights,
      alt: "Bottle of London City Lights perfume",
    },
    sourceUrl: "https://aerre.co/products/london-city-lights",
    popularity: 4,
  },
  {
    slug: "velvet-underground",
    name: "Velvet Underground",
    price: 55,
    genders: ["unisex"],
    inspiredBy: { brand: "Tom Ford", item: "Lost Cherry" },
    notes: {
      top: ["Sour Cherry", "Bitter Almond"],
      heart: ["Cloves", "Rose", "Jasmine", "Plum"],
      base: ["Peru Balsam", "Tonka Bean", "Vanilla"],
    },
    family: "gourmand",
    image: {
      src: velvetUnderground,
      alt: "Bottle of Velvet Underground perfume",
    },
    sourceUrl: "https://aerre.co/products/velvet-underground",
    popularity: 7,
  },
  {
    slug: "after-hours",
    name: "After Hours",
    price: 49,
    genders: ["women"],
    inspiredBy: { brand: "YSL", item: "Black Opium" },
    notes: {
      top: ["Mandarin Blossom", "Pear", "Pink Pepper"],
      heart: ["Jasmine", "Coffee"],
      base: ["Cedarwood", "Patchouli", "Vanilla"],
    },
    family: "gourmand",
    image: { src: afterHours, alt: "Bottle of After Hours perfume" },
    sourceUrl: "https://aerre.co/products/after-hours",
    popularity: 11,
  },
  {
    slug: "wildfire",
    name: "Wildfire",
    price: 39,
    genders: ["men"],
    inspiredBy: { brand: "Dior", item: "Sauvage" },
    notes: {
      top: ["Bergamot", "Pepper", "Star Anise"],
      heart: ["Lavender", "Nutmeg", "Geranium"],
      base: ["Patchouli", "Amberwood", "Vetiver"],
    },
    family: "citrus-fresh",
    image: { src: wildfire, alt: "Bottle of Wildfire perfume" },
    sourceUrl: "https://aerre.co/products/wildfire",
    popularity: 1,
  },
  {
    slug: "new-york-skyline",
    name: "New York Skyline",
    price: 45,
    genders: ["men"],
    inspiredBy: { brand: "Chanel", item: "Bleu de Chanel" },
    notes: {
      top: ["Grapefruit", "Mint", "Pink Pepper"],
      heart: ["Ginger", "Vetiver", "Nutmeg"],
      base: ["Amber", "Cedar", "Sandalwood"],
    },
    family: "citrus-fresh",
    image: { src: newYorkSkyline, alt: "Bottle of New York Skyline perfume" },
    sourceUrl: "https://aerre.co/products/new-york-skyline",
    popularity: 12,
  },
  {
    slug: "nightfall",
    name: "Nightfall",
    price: 39,
    genders: ["men"],
    inspiredBy: { brand: "YSL", item: "Y" },
    notes: {
      top: ["Bergamot", "Ginger", "Apple"],
      heart: ["Geranium", "Juniper", "Sage"],
      base: ["Vetiver", "Amberwood", "Cedarwood"],
    },
    family: "citrus-fresh",
    image: { src: nightfall, alt: "Bottle of Nightfall perfume" },
    sourceUrl: "https://aerre.co/products/nightfall",
    popularity: 13,
  },
  {
    slug: "black-blaze",
    name: "Black Blaze",
    price: 55,
    genders: ["men"],
    inspiredBy: { brand: "Creed", item: "Aventus" },
    notes: {
      top: ["Apple", "Pineapple", "Bergamot"],
      heart: ["Pink Pepper", "Birch Leaf", "Patchouli"],
      base: ["Musk", "Oakmoss", "Amber"],
    },
    family: "woody",
    image: { src: blackBlaze, alt: "Bottle of Black Blaze perfume" },
    sourceUrl: "https://aerre.co/products/black-blaze",
    popularity: 2,
  },
  {
    slug: "joshua-tree",
    name: "Joshua Tree",
    price: 49,
    genders: ["unisex"],
    inspiredBy: { brand: "Le Labo", item: "Santal 33" },
    notes: {
      top: ["Violet Leaves", "Cardamom"],
      heart: ["Orris", "Ambrox", "Cedarwood", "Leather"],
      base: ["Musk", "Sandalwood", "Amber"],
    },
    family: "woody",
    image: { src: joshuaTree, alt: "Bottle of Joshua Tree perfume" },
    sourceUrl: "https://aerre.co/products/joshua-tree",
    popularity: 6,
  },
  {
    slug: "forest-spice",
    name: "Forest Spice",
    price: 49,
    genders: ["unisex"],
    inspiredBy: { brand: "Tom Ford", item: "Oud Wood" },
    notes: {
      top: ["Rosewood", "Tobacco", "Pink Pepper", "Cardamom"],
      heart: ["Oud", "Patchouli", "Vetiver"],
      base: ["Tonka Bean", "Amber", "Cedarwood"],
    },
    family: "woody",
    image: { src: forestSpice, alt: "Bottle of Forest Spice perfume" },
    sourceUrl: "https://aerre.co/products/forest-spice",
    popularity: 14,
  },
  {
    slug: "winter-fireworks",
    name: "Winter Fireworks",
    price: 49,
    genders: ["unisex"],
    inspiredBy: { brand: "Tom Ford", item: "Black Orchid" },
    notes: {
      top: ["Truffle", "Mandarin", "Lemon"],
      heart: ["Ylang Ylang", "Orchid", "Lotus"],
      base: ["Sandalwood", "Vanilla", "Incense", "Chocolate"],
    },
    family: "amber-spice",
    image: { src: winterFireworks, alt: "Bottle of Winter Fireworks perfume" },
    sourceUrl: "https://aerre.co/products/winter-fireworks",
    popularity: 3,
  },
  {
    slug: "bliss-release",
    name: "Bliss Release",
    price: 55,
    genders: ["unisex"],
    inspiredBy: { brand: "MFK", item: "Baccarat Rouge 540" },
    notes: {
      top: ["Saffron", "Jasmine"],
      heart: ["Sugar", "Cedarwood"],
      base: ["Oakmoss", "Fir Balsam", "Amber"],
    },
    family: "amber-spice",
    image: { src: blissRelease, alt: "Bottle of Bliss Release perfume" },
    sourceUrl: "https://aerre.co/products/bliss-release",
    popularity: 15,
  },
  {
    slug: "amber-haze",
    name: "Amber Haze",
    price: 49,
    genders: ["unisex"],
    inspiredBy: { brand: "Tom Ford", item: "Tobacco Vanille" },
    notes: {
      top: ["Tobacco", "Ginger", "Apricot"],
      heart: ["Honey", "Vanilla", "Cocoa"],
      base: ["Tonka Bean", "Dry Fruits", "Blond Woods"],
    },
    family: "amber-spice",
    image: { src: amberHaze, alt: "Bottle of Amber Haze perfume" },
    sourceUrl: "https://aerre.co/products/amber-haze",
    popularity: 16,
  },
];
