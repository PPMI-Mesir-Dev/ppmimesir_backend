import { CollectionConfig } from "payload/types";

const Video: CollectionConfig = {
  slug: "video",
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      label: "Nama Playlist",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Deskripsi Playlist",
    },
    {
      name: "video",
      label: "Video",
      labels: {
        singular: "Video",
        plural: "Video",
      },
      required: false,
      type: "array",
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: "title",
          label: "Judul Video",
          type: "text",
        },
        {
          name: "url",
          label: "URL Video",
          type: "text",
        },
      ],
    },
    {
      name: "featured",
      label: "Sematkan Video Ini",
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
    {
      name: "provider",
      label: "Penyedia Video",
      type: "relationship",
      required: true,
      relationTo: ["lembaga"],
    },
  ],
  admin: {
    useAsTitle: "name",
  },
};

export default Video;
