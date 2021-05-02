import { cancelEvent } from "..";

describe('cancelEvent', () => {
    it('should call preventDefault and set cancelBubble to true when cnacelable is undefined', () => {
        // Arrange
        const event: Partial<Event> = {
            cancelBubble: false,
            preventDefault: jest.fn(),
        };

        // Act
        cancelEvent(event as Event);

        // Assert
        expect(event.cancelBubble).toBeTruthy();
        expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('should call preventDefault and set cancelBubble to true when cancelable is true', () => {
        // Arrange
        const event: Partial<Event> = {
            cancelable: true,
            cancelBubble: false,
            preventDefault: jest.fn(),
        };

        // Act
        cancelEvent(event as Event);

        // Assert
        expect(event.cancelBubble).toBeTruthy();
        expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });

    it('should not call preventDefault or set cancelBubble to true when cancelable is false', () => {
        // Arrange
        const event: Partial<Event> = {
            cancelable: false,
            cancelBubble: false,
            preventDefault: jest.fn(),
        };

        // Act
        cancelEvent(event as Event);

        // Assert
        expect(event.cancelBubble).toBeFalsy();
        expect(event.preventDefault).not.toHaveBeenCalled();
    });
});
