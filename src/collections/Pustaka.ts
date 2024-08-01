import { CollectionConfig } from "payload/types";

const Pustaka: CollectionConfig = {
  slug: "pustaka",
  auth: false,
  labels: {
    singular: "Pustaka",
    plural: "Pustaka",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Judul",
      type: "text",
      required: true,
    },
    {
      name: "author",
      type: "text",
      label: "Penulis",
      required: true,
    },
    {
      name: "description",
      label: "Deskripsi",
      type: "richText",
      required: true,
    },
    {
      name: "attachment",
      label: "Lampiran",
      type: "upload",
      required: false,
      relationTo: "media",
    },
    {
      name: "time",
      label: "Waktu",
      type: "date",
      required: true,
    },
  ],
  admin: {
    useAsTitle: "title",
  },
};

export default Pustaka;
