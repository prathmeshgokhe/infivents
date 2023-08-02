import { PortableTextBlock } from "sanity";

export type featuresType = {
  _id: string;
  _createdAt: Date;
  image: {
    url: string;
  };
  heading: string;
  description: PortableTextBlock[];
};
