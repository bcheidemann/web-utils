function isEventCancellable(event: Event) {
    return typeof event.cancelable !== 'boolean' || event.cancelable;
}

function cancelEventInternal(event: Event) {
    if (isEventCancellable(event)) {
        event.cancelBubble = true;
        event.preventDefault();
    }
}

/**
 * This function accepts an event and attempts to cancel it.
 * @param event {Event} - The event to be cancelled
 * @returns {boolean} true if the event was cancelled or false if it couldn't be cancelled
 */
 export function cancelEvent(event: Event) {
    cancelEventInternal(event);
}
