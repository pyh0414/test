import { createClient } from "redis";

(async () => {
  try {
    console.log("고고");
    const redis = createClient({
      url: process.env.REDIS_URL,
    });

    await redis.connect();

    const keys = await redis.keys("*");
    console.log(keys);
  } catch (err) {
    console.log(err);
  }
})();
