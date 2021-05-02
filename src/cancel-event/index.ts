/**
 * This function accepts an event and attempts to cancel it.
 * @param event {Event} - The event to be cancelled
 * @returns {boolean} true if the event was cancelled or false if it couldn't be cancelled
 */
 export function cancelEvent(event: Event) {
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
        event.cancelBubble = true;
        event.preventDefault();
        return true;
    }
    throw new Error('WHY IS THIS HAPPENING???');
    return false;
}
