import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { cloudinarySchemaPlugin } from "sanity-plugin-cloudinary";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  title: "Photography Portfolio",
  name: "default",
  projectId,
  dataset,
  plugins: [structureTool(), visionTool(), cloudinarySchemaPlugin()],
  schema: {
    types: schemaTypes,
  },
});
