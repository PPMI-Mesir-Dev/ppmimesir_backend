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
      type: "textarea",
      required: true,
    },
    {
      name: "poster",
      label: "Tambahkan Poster Acara",
      labels: {
        singular: "Poster acara",
        plural: "Poster acara",
      },
      required: true,
      type: "array",
      maxRows: 10,
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: "poster",
          label: "Poster",
          type: "upload",
          relationTo: "media",
          required: true,
          filterOptions: {
            mimeType: { contains: "image" },
          },
        },
        {
          name: "description",
          label: "Deskripsi",
          type: "text",
        },
      ],
    },
    {
      name: "buttons",
      label: "Tambahkan Tombol",
      labels: {
        singular: "Tambahkan Tombol",
        plural: "Tambahkan Tombol",
      },
      required: false,
      type: "array",
      maxRows: 2,
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: "title",
          label: "Judul Tombol",
          type: "text",
        },
        {
          name: "url",
          label: "URL Tombol",
          type: "text",
        },
      ],
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
    {
      name: "Status",
      label: "Status Acara",
      required: true,
      type: "select",
      admin: {
        isClearable: true,
      },
      options: [
        {
          label: "Selesai",
          value: "done",
        },
        {
          label: "Upcoming",
          value: "upcoming",
        },
        {
          label: "Ditunda",
          value: "postponed",
        },
        {
          label: "Dibatalkan",
          value: "canceled",
        },
      ],
    },
  ],
  admin: {
    useAsTitle: "name",
  },
};

export default Agenda;
