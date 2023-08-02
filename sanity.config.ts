import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";

const config = defineConfig({
  projectId: "o8yceytn",
  dataset: "production",
  title: "infivent studio",
  apiVersion: "2023-07-21",
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
});

export default config;
