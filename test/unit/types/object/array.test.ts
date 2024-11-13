// Array types in TypeScript represent collections of elements of a specific type. Arrays allow
// storing multiple values of the same type in a single variable, and TypeScript provides type safety
// by ensuring that all elements in an array adhere to the specified type. Arrays can be defined in 
// multiple ways, including generic syntax (`Array<Type>`) or shorthand (`Type[]`), and can contain 
// any type, from basic primitives to complex objects.
//
// Examples of when to use arrays:
// - To store lists of items, such as numbers, strings, or objects.
// - To ensure type consistency across a collection of elements.
// - To perform operations on groups of related values, like looping through items.

describe('array type', () => {

    test('basic array of numbers', () => {
        const numbers: number[] = [1, 2, 3, 4, 5];
        expect(numbers.length).toBe(5);
        expect(numbers[0]).toBe(1);
        expectType<number[]>(numbers); // Compile-time check for array type
    });

    test('array of strings with generic syntax', () => {
        const fruits: Array<string> = ["apple", "banana", "cherry"];
        expect(fruits.length).toBe(3);
        expect(fruits[1]).toBe("banana");
        expectType<Array<string>>(fruits); // Compile-time check using generic syntax
    });

    function expectType<T>(value: T): void {} // helper function for compile-time checks

    test('array of objects', () => {
        interface Person {
            name: string;
            age: number;
        }

        const people: Person[] = [
            { name: "Alice", age: 30 },
            { name: "Bob", age: 25 },
        ];

        expect(people[0].name).toBe("Alice");
        expect(people[1].age).toBe(25);
        expectType<Person[]>(people); // Compile-time check for array of objects
    });

    test('array of union types', () => {
        const mixedArray: (number | string)[] = [1, "two", 3, "four"];
        expect(mixedArray[0]).toBe(1);
        expect(mixedArray[1]).toBe("two");
        expectType<(number | string)[]>(mixedArray); // Compile-time check for union array
    });

    test('multidimensional array', () => {
        const matrix: number[][] = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

        expect(matrix[0][1]).toBe(2);
        expect(matrix[2][2]).toBe(9);
        expectType<number[][]>(matrix); // Compile-time check for multidimensional array
    });

    test('array with readonly modifier', () => {
        const readOnlyArray: readonly number[] = [1, 2, 3];
        expect(readOnlyArray[0]).toBe(1);

        // The following line would cause a TypeScript error if uncommented:
        // readOnlyArray[0] = 10; // Error: Cannot assign to '0' because it is a read-only property.
    });

    test('array as function parameter', () => {
        function printArray(items: string[]): string {
            return items.join(", ");
        }

        const colors = ["red", "green", "blue"];
        expect(printArray(colors)).toBe("red, green, blue");
    });

    test('array operations', () => {
        const numbers: number[] = [1, 2, 3];
        
        numbers.push(4);
        expect(numbers).toEqual([1, 2, 3, 4]);

        const lastNumber = numbers.pop();
        expect(lastNumber).toBe(4);
        expect(numbers).toEqual([1, 2, 3]);
    });

});
