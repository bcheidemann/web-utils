# @bcheidemann/web-utils

Utilities for simplifying your javascript code in the web.

## NoBubble

A function (which can be used as a wrapper or a decorator) and
prevents event bubbling when the wrapped/decorated function is
called.

### Wrapper

```typescript
// Wrapper
const handler = NoBubble(event => { /* implementation */ });

// React
const mySpan = (<span onPress={handler}>{'Press Me!'}</span>);
```

### Decorator

```typescript
// React Class Component
class MyComponent extends React.Component {
    @NoBubble
    public onPress(event: Event) {
        /* implementation */
    }

    public render() {
        return (<span onPress={handler}>{'Press Me!'}</span>);
    }
}
```