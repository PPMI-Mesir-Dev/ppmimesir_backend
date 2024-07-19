import { CollectionConfig } from "payload/types";

const BadanOtonom: CollectionConfig = {
  slug: "badan-otonom",
  labels: {
    singular: "Badan Otonom",
    plural: "Badan Otonom",
  },
  access: {
    read: () => true,
  },
  auth: false,
  fields: [
    {
      name: "Nama",
      label: "Nama Badan Otonom",
      type: "text",
      required: true,
    },
    {
      name: "Deskripsi",
      type: "richText",
      required: true,
    },
    {
      type: "row",
      fields: [
        { name: "website", label: "Website", type: "text", required: true },
        { name: "instagram", label: "Instagram", type: "text", required: true },
        { name: "whatsapp", label: "Whatsapp", type: "text", required: true },
      ],
    },
    {
      name: "logo",
      type: "upload",
      relationTo: "media",
      required: false,
    },
  ],
  admin: {
    useAsTitle: "Nama",
  },
};

export default BadanOtonom;
