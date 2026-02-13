import { treaty } from "@elysiajs/eden";
import type { App } from '../app/api/[[...slugs]]/route'

export const client = treaty<App>('realtime-chat-iota-six.vercel.app').api