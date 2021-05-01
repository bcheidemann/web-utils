import { NoBubble } from "..";

describe('NoBubble', () => {
    describe('wrapper', () => {
        it('calling the wrapped function should cancel the event', () => {
            throw new Error('TEST FAIL IN CI');
            // Arrange
            const event: Partial<Event> = {
                cancelable: true,
                cancelBubble: false,
                preventDefault: jest.fn(),
            };

            const callback = jest.fn();
            const wrappedCallback = NoBubble(callback);

            // Act
            wrappedCallback(event as Event);

            // Assert
            expect(event.cancelBubble).toBeTruthy();
            expect(event.preventDefault).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledTimes(1);
            expect(callback).toHaveBeenCalledWith(event);
        });
    })

    describe('method decorator', () => {
        it('calling the decorated method should cancel the event', () => {
            // Arrange
            const event: Partial<Event> = {
                cancelable: true,
                cancelBubble: false,
                preventDefault: jest.fn(),
            };

            const mockEventBody = jest.fn();

            class Component {
                // public onEvent(event: Event) {}
                @NoBubble
                public onEvent(event: Event) {
                    mockEventBody(event);
                };
            }

            const ComponentInstance = new Component();

            // Act
            ComponentInstance.onEvent(event as Event);

            // Assert
            expect(event.cancelBubble).toBeTruthy();
            expect(event.preventDefault).toHaveBeenCalledTimes(1);
            expect(mockEventBody).toHaveBeenCalledTimes(1);
            expect(mockEventBody).toHaveBeenCalledWith(event);
        });
    });

    describe('property decorator', () => {
        it.todo('tests for using NoBubble as a property decorator.');
    });
});
