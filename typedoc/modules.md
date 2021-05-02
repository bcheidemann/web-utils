[WebUtils - v1.1.0](README.md) / Exports

# WebUtils - v1.1.0

## Table of contents

### Functions

- [NoBubble](modules.md#nobubble)
- [cancelEvent](modules.md#cancelevent)

## Functions

### NoBubble

▸ **NoBubble**(`target`: *any*, `propertyKey`: PropertyKey, `descriptor`: EventHandlerDescriptor): PropertyDescriptor

#### Parameters:

| Name | Type |
| :------ | :------ |
| `target` | *any* |
| `propertyKey` | PropertyKey |
| `descriptor` | EventHandlerDescriptor |

**Returns:** PropertyDescriptor

Defined in: [no-bubble/index.ts:8](https://github.com/bcheidemann/web-utils/blob/2e21796/src/no-bubble/index.ts#L8)

▸ **NoBubble**(`handler?`: EventHandler): EventHandler

#### Parameters:

| Name | Type |
| :------ | :------ |
| `handler?` | EventHandler |

**Returns:** EventHandler

Defined in: [no-bubble/index.ts:9](https://github.com/bcheidemann/web-utils/blob/2e21796/src/no-bubble/index.ts#L9)

___

### cancelEvent

▸ **cancelEvent**(`event`: Event): *void*

This function accepts an event and attempts to cancel it.

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | Event | The event to be cancelled |

**Returns:** *void*

true if the event was cancelled or false if it couldn't be cancelled

Defined in: [cancel-event/index.ts:17](https://github.com/bcheidemann/web-utils/blob/2e21796/src/cancel-event/index.ts#L17)
