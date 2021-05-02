export type EventHandler = (event: Event) => void;
export interface EventHandlerDescriptor extends PropertyDescriptor {
    value?: EventHandler;
}
