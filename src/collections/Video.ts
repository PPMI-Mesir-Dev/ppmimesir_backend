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
  ],
  admin: {
    useAsTitle: "title",
  },
};

export default Video;
