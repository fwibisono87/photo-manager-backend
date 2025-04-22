import { Elysia } from "elysia";
import { cors } from '@elysiajs/cors';

const app = new Elysia()
    .use(cors({
      origin: '*' // Allow requests from any origin
    }))
    .get("/", () => "Hello Elysia")
    .get("/health-check", () => "Backend running OK!").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
