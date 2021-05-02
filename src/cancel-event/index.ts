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
 * @param event The event to be cancelled
 * 
 * @example
 * ```typescript
 * <div
 *     onPress={(event: Event) => {
 *         cancelEvent(event);
 *     }}
 * />
 * ```
 * 
 */
 export function cancelEvent(event: Event) {
    cancelEventInternal(event);
}
