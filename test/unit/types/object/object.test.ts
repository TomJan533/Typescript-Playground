describe('object type', () => {

    test('explicitly typed object', () => {
        const obj: object = { key: "value" };
        expect(obj).toEqual({ key: "value" });
        expect(typeof obj).toBe("object");
    });

    test('object with specific shape', () => {
        const person: { name: string; age: number } = { name: "Alice", age: 30 };
        expect(person.name).toBe("Alice");
        expect(person.age).toBe(30);
        expect(typeof person).toBe("object");
    });

    test('object with optional properties', () => {
        interface User {
            name: string;
            age?: number; // Optional property
        }

        const userWithAge: User = { name: "Bob", age: 25 };
        const userWithoutAge: User = { name: "Charlie" };

        expect(userWithAge).toHaveProperty("age", 25);
        expect(userWithoutAge.age).toBeUndefined(); // !Optional property
    });

    function expectType<T>(value: T): void {} // helper function for compile-time checks

    test('object type assertion at compile-time', () => {
        const obj = { key: "value" };
        expectType<object>(obj); // Compile-time check
        expect(obj).toEqual({ key: "value" });
    });

    test('object with readonly properties', () => {
        interface Point {
            readonly x: number;
            readonly y: number;
        }

        const point: Point = { x: 10, y: 20 };
        expect(point.x).toBe(10);
        expect(point.y).toBe(20);

        // The following line would cause a TypeScript error if uncommented:
        // point.x = 15;
    });

    test('object with index signatures', () => {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            key1: "value1",
            key2: "value2",
        };

        expect(dictionary["key1"]).toBe("value1");
        expect(dictionary["key3"]).toBeUndefined(); // Non-existent keys are undefined
    });

    test('object with method', () => {
        interface Calculator {
            add: (a: number, b: number) => number;
        }

        const calculator: Calculator = {
            add: (a, b) => a + b,
        };

        expect(calculator.add(2, 3)).toBe(5);
    });

    test('object type with union properties', () => {
        interface Animal {
            type: "dog" | "cat";
            sound: string;
        }

        const dog: Animal = { type: "dog", sound: "bark" };
        const cat: Animal = { type: "cat", sound: "meow" };

        expect(dog.sound).toBe("bark");
        expect(cat.type).toBe("cat");
    });

    test('nested object structure', () => {
        interface Address {
            street: string;
            city: string;
        }

        interface Company {
            name: string;
            address: Address;
        }

        const company: Company = {
            name: "Tech Corp",
            address: {
                street: "123 Main St",
                city: "Metropolis",
            },
        };

        expect(company.name).toBe("Tech Corp");
        expect(company.address.street).toBe("123 Main St");
    });

});
