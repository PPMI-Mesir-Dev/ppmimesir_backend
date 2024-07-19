import { CollectionConfig } from "payload/types";

const Lembaga: CollectionConfig = {
  slug: "lembaga",
  labels: {
    singular: "Lembaga Lainnya",
    plural: "Lembaga Lainnya",
  },
  access: {
    read: () => true,
  },
  auth: false,
  fields: [
    {
      name: "name",
      label: "Nama Lembaga/Institusi",
      type: "text",
      required: true,
    },
    {
      name: "descriptiom",
      label: "Deskripsi Lembaga",
      type: "text",
      required: false,
    },
    {
      name: "logo",
      label: "Logo Lembaga",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      type: "row",
      fields: [
        { name: "website", label: "Website", type: "text", required: false },
        {
          name: "instagram",
          label: "Instagram",
          type: "text",
          required: false,
        },
        { name: "whatsapp", label: "Whatsapp", type: "text", required: false },
      ],
    },
  ],
  admin: {
    useAsTitle: "name",
  },
};

export default Lembaga;
