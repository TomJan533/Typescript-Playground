describe('void type', () => {

    beforeEach(() => {
        jest.spyOn(console, 'log').mockImplementation(() => {}); // Mock console.log so it doesn't print to the console while testing
    });

    afterEach(() => {
        jest.restoreAllMocks(); // Restore console.log after each test
    });

    test('function with void return type', () => {
        function logMessage(): void {
            console.log("This is a log message");
        }

        const result = logMessage();
        expect(result).toBeUndefined(); // void functions implicitly return undefined
    });

    test('void type assignment', () => {
        let noValue: void;

        noValue = undefined; // Only undefined is assignable to void in strict mode
        expect(noValue).toBeUndefined();
    });

    function expectType<T>(value: T): void {} // helper function to check type at compile-time

    test('void type assertion at compile-time', () => {
        function logMessage(): void {
            console.log("Logging message");
        }

        const result = logMessage();
        expectType<void>(result); // Compile-time check that the result is of type void
        expect(result).toBeUndefined();
    });

    test('void as a return type in callbacks', () => {
        function executeCallback(callback: () => void): void {
            callback(); // void function passed as callback
        }

        const mockCallback = jest.fn(() => {});
        executeCallback(mockCallback);

        expect(mockCallback).toHaveBeenCalled(); // Verify the callback was called
        expect(mockCallback()).toBeUndefined(); // Confirm the return type of the callback is void
    });

});
