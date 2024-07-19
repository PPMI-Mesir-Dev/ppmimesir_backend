import { CollectionConfig } from "payload/types";

const Kemenko: CollectionConfig = {
  slug: "kemenko",
  labels: {
    singular: "Kemenko",
    plural: "Kemenko",
  },
  access: {
    read: () => true,
  },
  auth: false,
  fields: [
    {
      name: "Nama",
      label: "Nama Kemenko",
      type: "text",
      required: true,
    },
    {
      name: "Deskripsi",
      type: "richText",
      required: true,
    },
  ],
  admin: {
    useAsTitle: "Nama",
  },
};

export default Kemenko;
