/**
 * @copyright DrReMain
 * @author DrReMain
 */
import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import microConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(microConfig);

  const post = orm.em.create(Post, { title: "my first post" });
  orm.em.persistAndFlush(post);
  console.log("--------------------sql 2--------------------");
  await orm.em.nativeInsert(Post, { title: "my first post 2" });
};

main().catch((err) => {
  console.error(err);
});