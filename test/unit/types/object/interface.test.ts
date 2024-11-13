// Interface Tests
// This file includes tests to validate the behavior of TypeScript interfaces. Interfaces in TypeScript 
// define the structure of objects, specifying the properties and methods that a type must have without 
// implementing them. They are useful for creating consistent types across different parts of the code, 
// enabling type safety and enhancing code readability.
//
// Examples of when to use interfaces:
// - To define the shape of data that must be used in various parts of the application.
// - To enforce consistent structures for objects with similar functionality.
// - To facilitate type-safe code when interacting with external data, such as APIs.

describe('Interface Tests', () => {

    interface Person {
        name: string;
        age: number;
        greet(): string;
    }

    test('basic interface implementation', () => {
        const person: Person = {
            name: "Alice",
            age: 30,
            greet() {
                return `Hello, my name is ${this.name}`;
            }
        };

        expect(person.name).toBe("Alice");
        expect(person.age).toBe(30);
        expect(person.greet()).toBe("Hello, my name is Alice");
    });

    test('interface with optional properties', () => {
        interface Product {
            id: number;
            name: string;
            description?: string;
        }

        const productWithDescription: Product = { id: 1, name: "Widget", description: "A useful widget" };
        const productWithoutDescription: Product = { id: 2, name: "Gadget" };

        expect(productWithDescription.description).toBe("A useful widget");
        expect(productWithoutDescription.description).toBeUndefined();
    });

    test('interface with readonly properties', () => {
        interface User {
            readonly id: number;
            username: string;
        }

        const user: User = { id: 101, username: "user101" };
        expect(user.id).toBe(101);

        // The following line would cause an error if uncommented:
        // user.id = 202;
    });

    test('interface with method signatures', () => {
        interface Calculator {
            add(a: number, b: number): number;
            subtract(a: number, b: number): number;
        }

        const calculator: Calculator = {
            add: (a, b) => a + b,
            subtract: (a, b) => a - b
        };

        expect(calculator.add(5, 3)).toBe(8);
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('interface with index signatures', () => {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            key1: "value1",
            key2: "value2",
        };

        expect(dictionary.key1).toBe("value1");
        expect(dictionary["key2"]).toBe("value2");
    });

    test('interface inheritance', () => {
        interface Animal {
            species: string;
            sound(): string;
        }

        interface Dog extends Animal {
            breed: string;
        }

        const dog: Dog = {
            species: "Canine",
            breed: "Labrador",
            sound() {
                return "Woof!";
            }
        };

        expect(dog.species).toBe("Canine");
        expect(dog.breed).toBe("Labrador");
        expect(dog.sound()).toBe("Woof!");
    });

});
