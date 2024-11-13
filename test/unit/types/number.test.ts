
describe('number', () => {
    
    test('implicit type number', () => {
        const num = 1; // implicit type
        expect(num).toBe(1); // Asserts the value
        expect(typeof num).toBe('number'); // Asserts the type at runtime
    });

    test('explicit type number', () => {
        const num: number = 1; // explicit type
        expect(num).toBe(1); 
        expect(typeof num).toBe('number');
    });

    test('decimal number', () => {
        const num: number = 0.1;
        expect(num).toBe(0.1);
        expect(typeof num).toBe('number');
    });

    function expectType<T>(value: T): void {} // this helper function only serves to check the type at compile-time without affecting the runtime behavior.

    test('number type assertion at compile-time', () => {
        const num = 1;
        expectType<number>(num); // Type assertion at compile-time
        expect(num).toBe(1);
    });

})