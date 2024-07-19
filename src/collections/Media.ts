import { CollectionConfig } from "payload/types";

const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  upload: {
    staticURL: "/media",
    staticDir: "media",
    adminThumbnail: "thumbnail",
    mimeTypes: ["image/*", "application/pdf"],
  },
  fields: [{ name: "Description", type: "text" }],
};

export default Media;
