import path from "path";
import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { __prod__ } from "./constants";

export default {
  type: "postgresql",
  dbName: "shijiao",
  entities: [Post],
  user: "shijiao",
  password: "shijiao",
  debug: !__prod__,
  migrations: {
    path: path.join(__dirname, "./migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
} as Parameters<typeof MikroORM.init>[0];
