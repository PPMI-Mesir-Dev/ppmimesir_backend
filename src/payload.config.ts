import path from "path";

import { payloadCloud } from "@payloadcms/plugin-cloud";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

import Users from "./collections/Users";
import News from "./collections/News";
import Kemenko from "./collections/Kemenko";
import Agenda from "./collections/Agenda";
import BadanOtonom from "./collections/BadanOtonom";
import Media from "./collections/Media";
import Publikasi from "./collections/Publikasi";
import Video from "./collections/Video";
import Kekeluargaan from "./collections/Kekeluargaan";
import Lembaga from "./collections/Lembaga";

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [
    Users,
    News,
    Kemenko,
    Agenda,
    BadanOtonom,
    Media,
    Publikasi,
    Video,
    Kekeluargaan,
    Lembaga,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
