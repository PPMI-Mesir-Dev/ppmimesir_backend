import { CollectionConfig } from "payload/types";

const Publikasi: CollectionConfig = {
  slug: "publikasi",
  auth: false,
  labels: {
    singular: "Publikasi",
    plural: "Publikasi",
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
    {
      name: "featured",
      label: "Sematkan Publikasi Ini",
      type: "radio",
      options: [
        // required
        {
          label: "Ya",
          value: "yes",
        },
        {
          label: "Tidak",
          value: "no",
        },
      ],
      defaultValue: "no",
    },
  ],
  admin: {
    useAsTitle: "title",
  },
};

export default Publikasi;
