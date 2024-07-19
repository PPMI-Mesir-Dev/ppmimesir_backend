import { CollectionConfig } from "payload/types";

const News: CollectionConfig = {
  slug: "news",
  auth: false,
  fields: [
    {
      name: "title",
      label: "Judul",
      type: "text",
      required: true,
    },
    {
      name: "website",
      label: "Website",
      type: "text",
      required: true,
    },
  ],
  admin: {
    useAsTitle: "title",
  },
};

export default News;
