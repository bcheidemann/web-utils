import { EventHandler } from "../types";
import { wrapEventHandler } from "./wrapper";

interface EventHandlerDescriptor extends PropertyDescriptor {
    value?: EventHandler;
}

export function NoBubble(target: any, propertyKey: PropertyKey, descriptor: EventHandlerDescriptor): PropertyDescriptor;
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
