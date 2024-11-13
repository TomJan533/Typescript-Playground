// The `unknown` type in TypeScript is a safer alternative to `any` for representing values that could be of any type.
// Unlike `any`, variables of type `unknown` must be narrowed down through type-checking before you can use 
// them, making `unknown` ideal for situations where the type is uncertain, such as API responses or user input.
// This approach ensures type safety by requiring you to confirm the type before accessing properties or methods.
//
// Examples of when to use `unknown`:
// - When handling values from external sources, such as API responses or user input.
// - When the type cannot be known ahead of time and must be checked at runtime.
// - To encourage type-checking by preventing direct access to properties or methods on unknown values.

describe('unknown type', () => {

    test('assigning various types to unknown', () => {
        let value: unknown;
        
        value = "hello";
        expect(typeof value).toBe("string");

        value = 42;
        expect(typeof value).toBe("number");

        value = true;
        expect(typeof value).toBe("boolean");
    });

    test('narrowing unknown type with typeof', () => {
        let value: unknown = "TypeScript";

        if (typeof value === "string") {
            expect(value.toUpperCase()).toBe("TYPESCRIPT");
        } else {
            throw new Error("Expected value to be a string");
        }
    });

    test('narrowing unknown type with instanceof', () => {
        let value: unknown = new Date();

        if (value instanceof Date) {
            expect(value.getFullYear()).toBe(new Date().getFullYear());
        } else {
            throw new Error("Expected value to be a Date instance");
        }
    });

    test('handling unknown type with custom type guard', () => {
        function isUser(obj: any): obj is { name: string; age: number } {
            return obj && typeof obj.name === "string" && typeof obj.age === "number";
        }

        const value: unknown = { name: "Alice", age: 30 };

        if (isUser(value)) {
            expect(value.name).toBe("Alice");
            expect(value.age).toBe(30);
        } else {
            throw new Error("Expected value to match User interface");
        }
    });

    test('type assertion with unknown', () => {
        let value: unknown = "hello world";

        // Assert that value is a string
        const strLength = (value as string).length;
        expect(strLength).toBe(11);
    });

    test('unknown type with union type', () => {
        function processValue(value: string | unknown): string {
            if (typeof value === "string") {
                return `String: ${value}`;
            }
            return "Unknown value";
        }

        expect(processValue("test")).toBe("String: test");
        expect(processValue(123)).toBe("Unknown value");
    });

    function expectType<T>(value: T): void {} // helper function for compile-time checks

    test('compile-time type assertion for unknown', () => {
        const value: unknown = "compile-time test";
        expectType<unknown>(value); // Compile-time check
        expect(typeof value).toBe("string");
    });

    test('unknown type with JSON.parse', () => {
        const json = '{"name": "Bob", "age": 25}';
        const parsed: unknown = JSON.parse(json);

        if (typeof parsed === "object" && parsed !== null && "name" in parsed && "age" in parsed) {
            const { name, age } = parsed as { name: string; age: number };
            expect(name).toBe("Bob");
            expect(age).toBe(25);
        } else {
            throw new Error("Expected parsed JSON to have name and age properties");
        }
    });

});
