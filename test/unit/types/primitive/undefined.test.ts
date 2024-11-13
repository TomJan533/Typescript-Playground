describe('undefined type', () => {

    test('explicit undefined assignment', () => {
        const value: undefined = undefined; // Explicitly typed as undefined
        expect(value).toBeUndefined(); // Checks if the value is undefined
        expect(typeof value).toBe('undefined');
    });

    test('variable with undefined or other type (union type)', () => {
        const value: string | undefined = undefined; // Union type that allows undefined
        expect(value).toBeUndefined();
    });

    function expectType<T>(value: T): void {} // helper function to check type at compile-time

    test('undefined type assertion at compile-time', () => {
        const value = undefined;
        expectType<undefined>(value); // Compile-time type assertion
        expect(value).toBeUndefined();
    });

    test('undefined in a union type and reassignment', () => {
        let value: number | undefined = undefined;
        expect(value).toBeUndefined();

        value = 42; // Reassign to a number
        expect(value).toBe(42);
        expect(typeof value).toBe('number');
    });

    test('function returning undefined', () => {
        function doSomething(): undefined {
            return undefined;
        }

        const result = doSomething();
        expectType<undefined>(result); // Compile-time check
        expect(result).toBeUndefined();
    });

    test('optional object property with undefined', () => {
        interface User {
            name: string;
            age?: number; // Optional property, may be undefined
        }

        const user: User = { name: 'Alice' };
        expect(user.age).toBeUndefined();

        user.age = 30; // Assign a value to the optional property
        expect(user.age).toBe(30);
        expect(typeof user.age).toBe('number');
    });

    test('undefined as a missing function return', () => {
        function noReturnValue(): void {
            // Does not explicitly return, so returns undefined by default
        }

        const result = noReturnValue();
        expectType<void>(result); // Check type as void
        expect(result).toBeUndefined(); // Confirms the default return is undefined
    });

});
