[# WebUtils - v1.1.0](README.md) / Exports

# # WebUtils - v1.1.0

## Table of contents

### Interfaces

- [EventHandlerDescriptor](interfaces/eventhandlerdescriptor.md)

### Type aliases

- [EventHandler](modules.md#eventhandler)

### Functions

- [NoBubble](modules.md#nobubble)
- [cancelEvent](modules.md#cancelevent)

## Type aliases

### EventHandler

Ƭ **EventHandler**: (`event`: Event) => *void*

#### Type declaration:

▸ (`event`: Event): *void*

#### Parameters:

| Name | Type |
| :------ | :------ |
| `event` | Event |

**Returns:** *void*

Defined in: [src/types.ts:1](https://github.com/bcheidemann/web-utils/blob/2e6ada2/src/types.ts#L1)

## Functions

### NoBubble

▸ **NoBubble**(`target`: *any*, `propertyKey`: PropertyKey, `descriptor`: [*EventHandlerDescriptor*](interfaces/eventhandlerdescriptor.md)): PropertyDescriptor

Method decorator for event handlers. When calling the decorated method, if the event is
cancellable, bubbling will be cancelled before executing the handler method.

**`example`** 
```typescript
// Wrapper
const handler = NoBubble(event => {
    // implementation
});

// React
const mySpan = (<span onPress={handler}>{'Press Me!'}</span>);
```

#### Parameters:

| Name | Type |
| :------ | :------ |
| `target` | *any* |
| `propertyKey` | PropertyKey |
| `descriptor` | [*EventHandlerDescriptor*](interfaces/eventhandlerdescriptor.md) |

**Returns:** PropertyDescriptor

Defined in: [src/no-bubble/index.ts:24](https://github.com/bcheidemann/web-utils/blob/2e6ada2/src/no-bubble/index.ts#L24)

▸ **NoBubble**(`handler?`: [*EventHandler*](modules.md#eventhandler)): [*EventHandler*](modules.md#eventhandler)

Function wrapper for event handlers. When calling the wrapped function, if the event is
cancellable, bubbling will be cancelled before executing the handler function.

**`example`** 
```typescript
// React Class Component
class MyComponent extends React.Component {
    @NoBubble
    public onPress(event: Event) {
        // implementation
    }

    public render() {
        return (<span onPress={this.onPress}>{'Press Me!'}</span>);
    }
}
```

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `handler?` | [*EventHandler*](modules.md#eventhandler) | event handler |

**Returns:** [*EventHandler*](modules.md#eventhandler)

Defined in: [src/no-bubble/index.ts:48](https://github.com/bcheidemann/web-utils/blob/2e6ada2/src/no-bubble/index.ts#L48)

___

### cancelEvent

▸ **cancelEvent**(`event`: Event): *void*

This function accepts an event and attempts to cancel it.

**`example`** 
```typescript
<div
    onPress={(event: Event) => {
        cancelEvent(event);
    }}
/>
```

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | Event | The event to be cancelled |

**Returns:** *void*

Defined in: [src/cancel-event/index.ts:26](https://github.com/bcheidemann/web-utils/blob/2e6ada2/src/cancel-event/index.ts#L26)
