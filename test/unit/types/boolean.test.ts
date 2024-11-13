describe('boolean', () => {
    
    test('implicit type boolean', () => {
        const isTrue = true; // implicit type
        expect(isTrue).toBe(true); // Asserts the value
        expect(typeof isTrue).toBe('boolean'); // Asserts the type at runtime
    });

    test('explicit type boolean', () => {
        const isTrue: boolean = true; // explicit type
        expect(isTrue).toBe(true); 
        expect(typeof isTrue).toBe('boolean');
    });

    function expectType<T>(value: T): void {} // this helper function only serves to check the type at compile-time without affecting the runtime behavior.

    test('boolean type assertion at compile-time', () => {
        const isTrue = true;
        expectType<boolean>(isTrue); // Type assertion at compile-time
        expect(isTrue).toBe(true);
    });

    test('boolean literal type', () => {
        // The following line would cause a TypeScript error if uncommented:
        const isTrue: true = true; // Correct assignment
        //const isFalse: true = false; // !Uncomment this to see the error: Type 'false' is not assignable to type 'true'
        expectType<true>(isTrue); // Compile-time check
        expect(isTrue).toBe(true);
        expect(typeof isTrue).toBe('boolean');
    });

});
