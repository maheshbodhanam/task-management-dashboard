import { setupWorker } from "msw/browser";
import { handlers } from "./handlers";

// Setup worker with your handlers
export const worker = setupWorker(...handlers);
