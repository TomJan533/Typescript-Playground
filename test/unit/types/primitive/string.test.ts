
describe('string', () => {
    
    test('implicit type string', () => {
        const text = 'a'; // implicit type
        expect(text).toBe('a'); // Asserts the value
        expect(typeof text).toBe('string'); // Asserts the type at runtime
    });

    test('explicit type string', () => {
        const text: string = 'a'; // explicit type
        expect(text).toBe('a'); 
        expect(typeof text).toBe('string');
    });

    function expectType<T>(value: T): void {} // this helper function only serves to check the type at compile-time without affecting the runtime behavior.

    test('string type assertion at compile-time', () => {
        const text = 'a';
        expectType<string>(text); // Type assertion at compile-time
        expect(text).toBe('a');
    });

    test('string literal type', () => {
        const greeting: 'hello' = 'hello'; // Error: Type '"hi"' is not assignable to type '"hello"'
        expectType<'hello'>(greeting); // Compile-time check
        expect(greeting).toBe('hello');
        expect(typeof greeting).toBe('string');
    });

})