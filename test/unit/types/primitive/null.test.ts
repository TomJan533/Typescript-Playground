describe('null type', () => {
    
    test('explicit null assignment', () => {
        const value: null = null; // Explicitly typed as null
        expect(value).toBeNull(); // Checks if the value is null
        expect(typeof value).toBe('object'); // In JavaScript, typeof null is 'object'
    });

    test('variable with null or other type (union type)', () => {
        const value: string | null = null; // Union type that allows null
        expect(value).toBeNull();
    });

    function expectType<T>(value: T): void {} // helper function to check type at compile-time

    test('null type assertion at compile-time', () => {
        const value = null;
        expectType<null>(value); // Compile-time type assertion
        expect(value).toBeNull();
    });

    test('null in a union type and reassignment', () => {
        let value: number | null = null;
        expect(value).toBeNull();

        value = 42; // Reassign to a number
        expect(value).toBe(42);
        expect(typeof value).toBe('number');
    });

    test('function returning null', () => {
        function returnNull(): null {
            return null;
        }

        const result = returnNull();
        expectType<null>(result); // Compile-time check
        expect(result).toBeNull();
    });

    test('nullable object property', () => {
        interface User {
            name: string;
            age: number | null; // age can be null
        }

        const user: User = { name: 'Alice', age: null };
        expect(user.age).toBeNull();
        user.age = 30; // Reassign age to a number
        expect(user.age).toBe(30);
        expect(typeof user.age).toBe('number');
    });

});
