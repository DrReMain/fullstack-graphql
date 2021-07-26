import { Post } from "./entities/Post";
import { __prod__ } from "./constants";

export default {
  type: "postgresql" as "postgresql",
  dbName: "shijiao",
  entities: [Post],
  user: "shijiao",
  password: "shijiao",
  debug: !__prod__,
};
