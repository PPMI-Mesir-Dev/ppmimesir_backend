import { CollectionConfig } from "payload/types";

const Agenda: CollectionConfig = {
  slug: "agenda",
  labels: {
    singular: "Agenda",
    plural: "Agenda",
  },
  access: {
    read: () => true,
  },
  auth: false,
  fields: [
    {
      name: "name",
      label: "Nama Kegiatan",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
    },
    {
      name: "date",
      label: "Tanggal Acara",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "d-MMM-YYY",
        },
      },
    },
    {
      name: "time_start",
      label: "Waktu Mulai Acara",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "timeOnly",
          displayFormat: "h:mm a",
        },
      },
    },
    {
      name: "time_end",
      label: "Waktu Selesai Acara",
      type: "date",
      admin: {
        date: {
          pickerAppearance: "timeOnly",
          displayFormat: "h:mm a",
        },
      },
    },
    {
      name: "penyelenggara",
      label: "Penyelenggara",
      type: "relationship",
      required: true,
      relationTo: ["kemenko", "badan-otonom", "kekeluargaan", "lembaga"],
      hasMany: true,
    },
  ],
  admin: {
    useAsTitle: "name",
  },
};

export default Agenda;
