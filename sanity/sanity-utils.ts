import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

import { heroType } from "@/types/hero-type";
//import { featuresType } from "@/types/features-type";
import { mainFeaturesType } from "@/types/main-features-type";
import { featuresType } from "@/types/features-type";

export async function getHero(): Promise<heroType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "hero"] {
      _id,
      _createdAt,
      heading,
      description,
      url,
      "image": {
        "url": image.asset->url,
      },
    }`
  );
}

export async function getMainFeature(): Promise<mainFeaturesType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "mainFeatures"] | order(_createdAt asc){
      _id,
      _createdAt,
      title,
      description,
      "image": {
        "url": image.asset->url,
      },
    }`
  );
}

export async function getFeature(): Promise<featuresType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "features"] | order(_createdAt asc){
      _id,
      _createdAt,
      "image": {
        "url": image.asset->url,
      },
      heading,
      description,
    }`
  );
}
