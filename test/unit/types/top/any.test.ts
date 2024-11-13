describe('any type', () => {
    
    test('assign any type with different values', () => {
        let value: any; // explicit 'any' type

        value = 'a string';
        expect(value).toBe('a string');
        expect(typeof value).toBe('string');

        value = 123;
        expect(value).toBe(123);
        expect(typeof value).toBe('number');

        value = true;
        expect(value).toBe(true);
        expect(typeof value).toBe('boolean');

        value = { key: 'value' };
        expect(value).toEqual({ key: 'value' });
        expect(typeof value).toBe('object');
    });

    test('any type allows calling arbitrary methods', () => {
        const random: any = 'some string';
        // const random: string = 'some string';  //! Uncomment this to see the error

        // This would normally be an error if random was typed as 'string'
        expect(() => random.nonExistentMethod()).toThrow(); // Runtime error, no compile-time check
    });
    
    test('any type allows array with mixed types', () => {
        const mixedArray: any[] = [1, 'two', true, { key: 'value' }];

        expect(mixedArray[0]).toBe(1);
        expect(typeof mixedArray[1]).toBe('string');
        expect(typeof mixedArray[2]).toBe('boolean');
        expect(mixedArray[3]).toEqual({ key: 'value' });
    });

    test('any type bypasses compile-time checks', () => {
        const value: any = 'string initially';

        // Bypasses compile-time checks allowing any operation
        const result = value + 100; // This could lead to unexpected behavior if not careful
        expect(result).toBe('string initially100');
    });

    function expectType<T>(value: T): void {} // helper function to check type at compile-time

    test('any type assertion at compile-time', () => {
        const value: any = 100;
        expectType<any>(value); // Type assertion at compile-time, no error
        expect(value).toBe(100);
    });
});
