// Class Tests
// This file includes tests to validate the behavior of TypeScript classes. Classes in TypeScript 
// allow us to create reusable blueprints for creating objects with shared properties and methods. 
// With TypeScript’s type system, classes can be designed with explicit types, constructors, 
// inheritance, access modifiers, and static methods.
//
// Examples of when to use classes:
// - To create structured, reusable templates for objects with shared functionality.
// - To implement inheritance and polymorphism in TypeScript.
// - To encapsulate data and behavior within a single unit.

describe('Class Tests', () => {

    class Person {
        private readonly age: number;
        constructor(public name: string, age: number) {
            this.age = age;
        }
        greet(): string {
            return `Hello, my name is ${this.name}`;
        }
        getAge(): number {
            return this.age;
        }
    }

    test('basic class instance', () => {
        const person = new Person("Alice", 30);
        expect(person.name).toBe("Alice");
        expect(person.getAge()).toBe(30);
        expect(person.greet()).toBe("Hello, my name is Alice");
    });

    test('class inheritance', () => {
        class Employee extends Person {
            constructor(name: string, age: number, public position: string) {
                super(name, age);
            }
            getPosition(): string {
                return this.position;
            }
        }

        const employee = new Employee("Bob", 40, "Developer");
        expect(employee.name).toBe("Bob");
        expect(employee.getAge()).toBe(40);
        expect(employee.getPosition()).toBe("Developer");
    });

    test('access modifiers', () => {
        class User {
            private password: string;
            protected email: string;
            public username: string;
            
            constructor(username: string, email: string, password: string) {
                this.username = username;
                this.email = email;
                this.password = password;
            }

            checkPassword(password: string): boolean {
                return this.password === password;
            }
        }

        const user = new User("user123", "user@example.com", "securePass");
        expect(user.username).toBe("user123");
        expect(user.checkPassword("securePass")).toBe(true);
    });

    test('static methods and properties', () => {
        class Calculator {
            static pi = 3.14159;

            static calculateArea(radius: number): number {
                return Calculator.pi * radius * radius;
            }
        }

        expect(Calculator.pi).toBe(3.14159);
        expect(Calculator.calculateArea(2)).toBeCloseTo(12.56636);
    });

    test('readonly properties', () => {
        class Book {
            readonly title: string;
            constructor(title: string) {
                this.title = title;
            }
        }

        const book = new Book("The Great Gatsby");
        expect(book.title).toBe("The Great Gatsby");

        // The following line would cause an error if uncommented:
        // book.title = "New Title";
    });

});
