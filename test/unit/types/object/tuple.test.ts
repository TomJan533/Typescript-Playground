// Tuple types in TypeScript represent arrays with a fixed number of elements, where each element can have a distinct type.
// Tuples are useful when you need to define a specific structure of values in an array, such as a pair of coordinates 
// or a response with a status and a message. They add clarity and type safety by enforcing the exact number 
// and types of elements expected.
//
// Examples of when to use tuples:
// - To represent a fixed structure where each element has a specific meaning (e.g., [x, y] coordinates).
// - To return multiple values from a function in a structured way.
// - To define data that includes multiple, distinct types in a specific order.

describe('tuple type', () => {

    test('basic tuple with fixed types', () => {
        const point: [number, number] = [10, 20]; // Tuple with two numbers
        expect(point[0]).toBe(10);
        expect(point[1]).toBe(20);
        expectType<[number, number]>(point); // Compile-time check for tuple type
    });

    test('tuple with mixed types', () => {
        const response: [number, string] = [200, "OK"]; // Tuple with number and string
        expect(response[0]).toBe(200);
        expect(response[1]).toBe("OK");
        expectType<[number, string]>(response); // Compile-time check
    });

    function expectType<T>(value: T): void {} // helper function for compile-time checks

    test('accessing tuple elements', () => {
        const userInfo: [string, number, boolean] = ["Alice", 30, true];
        const [name, age, isActive] = userInfo; // Destructuring a tuple

        expect(name).toBe("Alice");
        expect(age).toBe(30);
        expect(isActive).toBe(true);
    });

    test('optional tuple elements', () => {
        const optionalTuple: [string, number?] = ["Test"]; // Tuple with an optional number
        expect(optionalTuple[0]).toBe("Test");
        expect(optionalTuple[1]).toBeUndefined(); // Optional element can be undefined

        optionalTuple[1] = 42;
        expect(optionalTuple[1]).toBe(42);
    });

    test('tuple with rest elements', () => {
        const headAndTail: [string, ...number[]] = ["head", 1, 2, 3]; // Tuple with a rest element
        expect(headAndTail[0]).toBe("head");
        expect(headAndTail.slice(1)).toEqual([1, 2, 3]);

        expectType<[string, ...number[]]>(headAndTail); // Compile-time check for tuple with rest
    });

    test('using tuple as function return type', () => {
        function getUser(): [string, number] {
            return ["Bob", 25]; // Tuple returned by function
        }

        const [name, age] = getUser();
        expect(name).toBe("Bob");
        expect(age).toBe(25);
    });

    test('using tuple as function parameters', () => {
        function printCoordinates([x, y]: [number, number]): string {
            return `X: ${x}, Y: ${y}`;
        }

        expect(printCoordinates([5, 10])).toBe("X: 5, Y: 10");
    });

});
