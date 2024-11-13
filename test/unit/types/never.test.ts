// The `never` type in TypeScript represents values that should never occur. 
// It is typically used in scenarios where a function never successfully completes, such as functions that 
// always throw an error or those that contain infinite loops. The `never` type is also useful for 
// ensuring exhaustive checks in switch statements and conditionals, allowing TypeScript to enforce that all 
// possible cases have been handled.
//
// Examples of when to use `never`:
// - In functions that always throw an exception or have infinite loops.
// - In switch statements or conditional branches to catch unhandled cases (exhaustive checks).
// - For scenarios where the type is logically impossible, signaling to TypeScript that certain code should
//   never be reachable.


describe('never type', () => {
    
    test('function that throws an error', () => {
        function throwError(): never {
            throw new Error("This function always throws");
        }

        expect(() => throwError()).toThrow("This function always throws");
    });

    test('function with infinite loop', () => {
        function infiniteLoop(): never {
            while (true) {
                // This loop never ends, so the function has a never return type
            }
        }

        // We don't call the function here, but TypeScript enforces that the return type is `never`
        expectType<never>(infiniteLoop as never); // This enforces `never` as the return type without calling
    });

    test('unreachable code with never type', () => {
        function handleValue(value: string | number): string {
            if (typeof value === "string") {
                return `String: ${value}`;
            } else if (typeof value === "number") {
                return `Number: ${value}`;
            } else {
                const unreachable: never = value; // Compile-time check to ensure all cases are handled
                return unreachable; // TypeScript will enforce that this code is unreachable
            }
        }

        expect(handleValue("hello")).toBe("String: hello");
        expect(handleValue(42)).toBe("Number: 42");
    });

    function expectType<T>(value: T): void {} // helper function for compile-time check

    test('never type assertion at compile-time', () => {
        function fail(): never {
            throw new Error("This function never returns a value");
        }
    
        // Do not call `fail()`; instead, check the function reference
        expectType<() => never>(fail); // Compile-time check that `fail` is a function returning `never`
    });
    

    test('exhaustive checks in a switch statement', () => {
        type Direction = "up" | "down" | "left" | "right";

        function move(direction: Direction): string {
            switch (direction) {
                case "up":
                    return "Moving up";
                case "down":
                    return "Moving down";
                case "left":
                    return "Moving left";
                case "right":
                    return "Moving right";
                default:
                    const exhaustiveCheck: never = direction;
                    return exhaustiveCheck;
            }
        }

        expect(move("up")).toBe("Moving up");
        expect(move("down")).toBe("Moving down");
        expect(move("left")).toBe("Moving left");
        expect(move("right")).toBe("Moving right");
    });

});
