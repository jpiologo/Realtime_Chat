import { Redis } from "@upstash/redis";

//This is a really cool way to retrieve .env infos 🔌
export const redis = Redis.fromEnv()