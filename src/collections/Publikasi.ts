import { CollectionConfig } from "payload/types";
import { DateField } from "@nouance/payload-better-fields-plugin";

const Publikasi: CollectionConfig = {
  slug: "publikasi",
  auth: false,
  labels: {
    singular: "Publikasi",
    plural: "Publikasi",
  },
  fields: [
    {
      name: "Judul",
      type: "text",
      required: true,
    },
    {
      name: "Deskripsi",
      type: "richText",
      required: true,
    },
    {
      name: "Lampiran",
      type: "upload",
      required: false,
      relationTo: "media",
    },
    {
      name: "Waktu",
      type: "date",
      required: true,
    },
  ],
  admin: {
    useAsTitle: "Judul",
  },
};

export default Publikasi;
