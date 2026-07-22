import { readFileSync } from "fs";

const html = readFileSync(`${import.meta.dir}/public/index.html`, "utf8");

export default {
  port: process.env.PORT || 3000,
  fetch(req: Request) {
    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  },
};
