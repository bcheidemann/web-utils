import { cancelEvent } from "../cancel-event";
import { EventHandler } from "../types";

export function wrapEventHandler(handler: EventHandler | undefined) {
    return function(event: Event) {
        cancelEvent(event);
        if (handler) {
            handler(event);
        }
    }
}
