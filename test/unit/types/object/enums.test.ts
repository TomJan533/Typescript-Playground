// Enumerated types (enums) in TypeScript allow defining a set of named constants that represent specific values.
// Enums provide a way to give more readable names to a set of values, making the code more understandable 
// and less prone to errors. They can represent both numeric and string values, and are especially useful for 
// defining distinct, finite sets of values like directions, statuses, or modes.
// 
// Examples of when to use enums:
// - To represent a fixed set of options or states (e.g., directions, colors, roles).
// - To enforce strict typing with a limited set of possible values.
// - To improve readability by using descriptive names instead of raw numbers or strings.

describe('enum type', () => {

    enum Direction {
        Up,
        Down,
        Left,
        Right
    }

    test('numeric enum values', () => {
        expect(Direction.Up).toBe(0);
        expect(Direction.Down).toBe(1);
        expect(Direction.Left).toBe(2);
        expect(Direction.Right).toBe(3);
    });

    test('reverse mapping for numeric enums', () => {
        expect(Direction[0]).toBe("Up");
        expect(Direction[1]).toBe("Down");
        expect(Direction[2]).toBe("Left");
        expect(Direction[3]).toBe("Right");
    });

    enum Status {
        Success = "SUCCESS",
        Failure = "FAILURE",
        Pending = "PENDING"
    }

    test('string enum values', () => {
        expect(Status.Success).toBe("SUCCESS");
        expect(Status.Failure).toBe("FAILURE");
        expect(Status.Pending).toBe("PENDING");
    });

    function expectType<T>(value: T): void {} // helper function for compile-time checks

    test('enum type assertion at compile-time', () => {
        const direction: Direction = Direction.Left;
        expectType<Direction>(direction); // Compile-time check for enum type
        expect(direction).toBe(Direction.Left);
    });

    test('using enums in switch statements', () => {
        function getDirectionMessage(dir: Direction): string {
            switch (dir) {
                case Direction.Up:
                    return "Moving up";
                case Direction.Down:
                    return "Moving down";
                case Direction.Left:
                    return "Moving left";
                case Direction.Right:
                    return "Moving right";
                default:
                    const exhaustiveCheck: never = dir; // Ensures all cases are handled
                    return exhaustiveCheck;
            }
        }

        expect(getDirectionMessage(Direction.Up)).toBe("Moving up");
        expect(getDirectionMessage(Direction.Left)).toBe("Moving left");
    });

    test('enum as function parameter', () => {
        function canProceed(status: Status): boolean {
            return status === Status.Success;
        }

        expect(canProceed(Status.Success)).toBe(true);
        expect(canProceed(Status.Failure)).toBe(false);
        expect(canProceed(Status.Pending)).toBe(false);
    });

});
