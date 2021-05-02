import { EventHandler, EventHandlerDescriptor } from "../types";
import { wrapEventHandler } from "./wrapper";

/**
 * Method decorator for event handlers. When calling the decorated method, if the event is
 * cancellable, bubbling will be cancelled before executing the handler method.
 * 
 * @param target 
 * @param propertyKey 
 * @param descriptor 
 * 
 * @example
 * ```typescript
 * // Wrapper
 * const handler = NoBubble(event => { /* implementation *\/ });
 * 
 * // React
 * const mySpan = (<span onPress={handler}>{'Press Me!'}</span>);
 * ```
 * 
 */
export function NoBubble(target: any, propertyKey: PropertyKey, descriptor: EventHandlerDescriptor): PropertyDescriptor;

/**
 * Function wrapper for event handlers. When calling the wrapped function, if the event is
 * cancellable, bubbling will be cancelled before executing the handler function.
 * 
 * @param handler event handler
 * 
 * @example
 * ```typescript
 * // React Class Component
 * class MyComponent extends React.Component {
 *     @NoBubble
 *     public onPress(event: Event) {
 *         /* implementation *\/
 *     }
 * 
 *     public render() {
 *         return (<span onPress={this.onPress}>{'Press Me!'}</span>);
 *     }
 * }
 * ```
 * 
 */
export function NoBubble(handler?: EventHandler): EventHandler;

export function NoBubble(targetOrHandler: any, propertyKey?: PropertyKey, descriptor?: EventHandlerDescriptor) {
    // Function wrapper
    if (!propertyKey || !descriptor) {
        const handler = targetOrHandler as EventHandler;
        return wrapEventHandler(handler);
    }

    // Property decorator
    // TODO: support decorating properties

    // Method decorator
    const handler = descriptor.value;
    descriptor.value = wrapEventHandler(handler);
    return descriptor;
}
