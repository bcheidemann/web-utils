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

Defined in: [no-bubble/index.ts:8](https://github.com/bcheidemann/web-utils/blob/4fa4d6b/src/no-bubble/index.ts#L8)

▸ **NoBubble**(`handler?`: EventHandler): EventHandler

#### Parameters:

| Name | Type |
| :------ | :------ |
| `handler?` | EventHandler |

**Returns:** EventHandler

Defined in: [no-bubble/index.ts:9](https://github.com/bcheidemann/web-utils/blob/4fa4d6b/src/no-bubble/index.ts#L9)

___

### cancelEvent

▸ **cancelEvent**(`event`: Event): *void*

This function accepts an event and attempts to cancel it.

**`example`** 
### Usage
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

Defined in: [cancel-event/index.ts:27](https://github.com/bcheidemann/web-utils/blob/4fa4d6b/src/cancel-event/index.ts#L27)
