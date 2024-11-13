// Type assertions in TypeScript allow you to override the inferred or declared type of a variable. 
// They let you "assert" that a value is of a specific type, even if TypeScript cannot verify it directly. 
// Type assertions are useful when you have additional knowledge about the type of a value that TypeScript 
// is not aware of, such as when working with DOM elements or JSON data.
//
// Examples of when to use type assertions:
// - When working with DOM elements (e.g., casting `HTMLElement` to `HTMLInputElement`).
// - When working with JSON or any data where TypeScript cannot infer the exact type.
// - When using union types and you need to specify a more specific type.


describe('type assertions', () => {

    test('basic type assertion with "as" keyword', () => {
        let value: unknown = "hello";
        
        // TypeScript doesn't know `value` is a string, so we assert it
        const length = (value as string).length;
        
        expect(length).toBe(5);
    });

    test('type assertion to specific interface', () => {
        interface User {
            name: string;
            age: number;
        }

        const json = '{"name": "Alice", "age": 30}';
        const user = JSON.parse(json) as User; // Type assertion to User

        expect(user.name).toBe("Alice");
        expect(user.age).toBe(30);
    });

    test('type assertion with mock DOM-like object', () => {
        // Creating a mock object with the structure of an HTMLInputElement
        const mockElement = { value: "" } as HTMLInputElement;
    
        // Setting the value property
        mockElement.value = "Test";
    
        expect(mockElement.value).toBe("Test");
    });

    function expectType<T>(value: T): void {} // helper function for compile-time checks

    test('type assertion with union types', () => {
        type Shape = { kind: "circle"; radius: number } | { kind: "square"; sideLength: number };

        const shape: Shape = { kind: "circle", radius: 10 };

        if (shape.kind === "circle") {
            const radius = (shape as { kind: "circle"; radius: number }).radius;
            expect(radius).toBe(10);
        }
    });

    test('type assertion with angle bracket syntax', () => {
        let value: any = "world";
        
        // Alternative syntax for type assertions, mainly used in older TypeScript code
        const length = (<string>value).length;
        
        expect(length).toBe(5);
    });

    test('type assertion in function return type', () => {
        function getValue(): any {
            return "some string";
        }

        const result = getValue() as string;
        expect(result.length).toBe(11); // Asserting result is a string to access length property
    });

    test('double assertion from one type to another incompatible type', () => {
        let value: any = "123";
        
        // Convert the string to a number explicitly, instead of just asserting
        const numberValue = (value as unknown) as number;
    
        expect(typeof numberValue).toBe("string"); // Keeps runtime value check accurate as `value` remains a string
    });

    test('type assertion for complex nested types', () => {
        interface Address {
            street: string;
            city: string;
        }

        interface UserProfile {
            name: string;
            address: Address;
        }

        const data = {
            name: "Charlie",
            address: {
                street: "123 Main St",
                city: "Metropolis",
            },
        };

        const profile = data as UserProfile; // Assert data structure to UserProfile

        expect(profile.name).toBe("Charlie");
        expect(profile.address.city).toBe("Metropolis");
    });

});
