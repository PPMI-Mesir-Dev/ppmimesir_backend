import { CollectionConfig } from "payload/types";

const Kekeluargaan: CollectionConfig = {
  slug: "kekeluargaan",
  labels: {
    singular: "Kekeluargaan",
    plural: "Kekeluargaan",
  },
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "singkatan",
      label: "Nama Singkatan Kekeluargaan",
      type: "text",
      required: true,
    },
    {
      name: "name",
      label: "Nama Kekeluargaan",
      type: "text",
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
      name: "description",
      label: "Deskripsi",
      type: "richText",
    },
    {
      name: "logo",
      label: "Logo Kekeluargaan",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
  admin: {
    useAsTitle: "singkatan",
  },
};

export default Kekeluargaan;
