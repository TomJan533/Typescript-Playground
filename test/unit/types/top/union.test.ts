// Union types in TypeScript allow a variable to hold values of multiple specified types, enabling
// more flexibility while still enforcing type safety. By using union types, you can define variables,
// parameters, or return types that can be one of several types, making the code more adaptable and 
// easier to work with while retaining type checks.
//
// Examples of when to use union types:
// - To represent data that could be one of a limited set of types (e.g., number or string).
// - To handle inputs or outputs that may vary based on context (e.g., success or error response).
// - To define flexible function parameters or return types that accept different data forms.

describe('union types', () => {

    test('basic union type with number and string', () => {
        let value: number | string;
        
        value = 42;
        expect(typeof value).toBe("number");
        expect(value).toBe(42);

        value = "hello";
        expect(typeof value).toBe("string");
        expect(value).toBe("hello");
    });

    test('union type in function parameters', () => {
        function formatId(id: number | string): string {
            return `ID: ${id}`;
        }

        expect(formatId(123)).toBe("ID: 123");
        expect(formatId("abc")).toBe("ID: abc");
    });

    function expectType<T>(value: T): void {} // helper function for compile-time checks

    test('union type assertion at compile-time', () => {
        const mixedValue: number | boolean = true;
        expectType<number | boolean>(mixedValue); // Compile-time check for union type
        expect(typeof mixedValue).toBe("boolean");
    });

    test('array of union types', () => {
        const mixedArray: (number | string)[] = [1, "two", 3, "four"];
        
        expect(mixedArray[0]).toBe(1);
        expect(mixedArray[1]).toBe("two");
        expectType<(number | string)[]>(mixedArray); // Compile-time check
    });

    test('union type with literal types', () => {
        type Status = "success" | "error" | "pending";
        
        let currentStatus: Status;
        
        currentStatus = "success";
        expect(currentStatus).toBe("success");

        currentStatus = "error";
        expect(currentStatus).toBe("error");

        currentStatus = "pending";
        expect(currentStatus).toBe("pending");
    });

    test('union type with function return type', () => {
        function getRandomValue(): number | string {
            return Math.random() > 0.5 ? 42 : "forty-two";
        }

        const result = getRandomValue();
        expect(typeof result === "number" || typeof result === "string").toBe(true);
    });

    test('union type with interfaces', () => {
        interface Dog {
            type: "dog";
            bark: () => string;
        }

        interface Cat {
            type: "cat";
            meow: () => string;
        }

        type Pet = Dog | Cat;

        function getSound(pet: Pet): string {
            if (pet.type === "dog") {
                return pet.bark();
            } else {
                return pet.meow();
            }
        }

        const dog: Dog = { type: "dog", bark: () => "Woof!" };
        const cat: Cat = { type: "cat", meow: () => "Meow!" };

        expect(getSound(dog)).toBe("Woof!");
        expect(getSound(cat)).toBe("Meow!");
    });

    test('type narrowing with union types', () => {
        function processValue(value: number | string): string {
            if (typeof value === "number") {
                return `Number: ${value}`;
            } else {
                return `String: ${value}`;
            }
        }

        expect(processValue(10)).toBe("Number: 10");
        expect(processValue("hello")).toBe("String: hello");
    });

});
