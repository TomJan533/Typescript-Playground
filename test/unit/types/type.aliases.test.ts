// Type aliases in TypeScript allow you to create custom names for types. These aliases can simplify complex 
// types, improve readability, and make your code more maintainable. Type aliases can represent any valid TypeScript type, 
// including primitive types, union types, intersection types, function types, and even complex objects. 
// By using type aliases, you can create more meaningful names that describe the intended usage of a type.
//
// Examples of when to use type aliases:
// - To simplify complex types, making them easier to reuse and maintain.
// - To create self-documenting code by using descriptive names for types.
// - To build more flexible and reusable type definitions.

describe('type aliases', () => {

    test('basic type alias for primitive types', () => {
        type Age = number;
        type Name = string;

        const age: Age = 25;
        const name: Name = "Alice";

        expect(typeof age).toBe("number");
        expect(typeof name).toBe("string");
    });

    test('type alias for a union type', () => {
        type ID = number | string;

        const userId1: ID = 123;
        const userId2: ID = "abc123";

        expect(typeof userId1).toBe("number");
        expect(typeof userId2).toBe("string");
    });

    test('type alias for an object type', () => {
        type User = {
            name: string;
            age: number;
            isActive: boolean;
        };

        const user: User = { name: "Bob", age: 30, isActive: true };

        expect(user.name).toBe("Bob");
        expect(user.age).toBe(30);
        expect(user.isActive).toBe(true);
    });

    test('type alias with intersection types', () => {
        type Nameable = { name: string };
        type Ageable = { age: number };
        
        type Person = Nameable & Ageable;

        const person: Person = { name: "Charlie", age: 40 };

        expect(person.name).toBe("Charlie");
        expect(person.age).toBe(40);
    });

    test('type alias with function types', () => {
        type Greet = (name: string) => string;

        const greet: Greet = (name) => `Hello, ${name}!`;

        expect(greet("Dave")).toBe("Hello, Dave!");
    });

    test('type alias for arrays', () => {
        type StringArray = string[];
        type NumberArray = Array<number>;

        const names: StringArray = ["Eve", "Frank", "Grace"];
        const numbers: NumberArray = [1, 2, 3, 4];

        expect(names.length).toBe(3);
        expect(numbers.length).toBe(4);
    });

    test('type alias for tuple types', () => {
        type Point = [number, number];
        
        const point: Point = [10, 20];

        expect(point[0]).toBe(10);
        expect(point[1]).toBe(20);
    });

    test('type alias with union and intersection types', () => {
        type SuccessResponse = { status: "success"; data: string };
        type ErrorResponse = { status: "error"; message: string };

        type APIResponse = SuccessResponse | ErrorResponse;

        const success: APIResponse = { status: "success", data: "OK" };
        const error: APIResponse = { status: "error", message: "Something went wrong" };

        expect(success.status).toBe("success");
        expect((success as SuccessResponse).data).toBe("OK");
        expect(error.status).toBe("error");
        expect((error as ErrorResponse).message).toBe("Something went wrong");
    });

    test('type alias for complex object structures', () => {
        type Address = {
            street: string;
            city: string;
            postalCode: string;
        };

        type UserProfile = {
            name: string;
            age: number;
            address: Address;
        };

        const profile: UserProfile = {
            name: "Hannah",
            age: 27,
            address: {
                street: "123 Main St",
                city: "Metropolis",
                postalCode: "12345"
            }
        };

        expect(profile.name).toBe("Hannah");
        expect(profile.address.city).toBe("Metropolis");
    });

});
