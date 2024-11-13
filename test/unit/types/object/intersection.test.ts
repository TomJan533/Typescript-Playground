// Intersection types in TypeScript allow you to combine multiple types into one, creating a type that 
// includes all properties of the intersected types. This can be useful when you want to combine traits 
// or ensure an object meets multiple type requirements. Intersection types are particularly useful for 
// mixing interfaces, combining different data models, or creating complex types.
//
// Examples of when to use intersection types:
// - To combine properties from multiple interfaces (e.g., mixins).
// - To enforce multiple type constraints on a variable or parameter.
// - To define types that extend across multiple domains or concerns (e.g., an object with both user and admin properties).

describe('intersection types', () => {

    interface Nameable {
        name: string;
    }

    interface Ageable {
        age: number;
    }

    type Person = Nameable & Ageable;

    test('basic intersection type', () => {
        const person: Person = { name: "Alice", age: 30 };
        
        expect(person.name).toBe("Alice");
        expect(person.age).toBe(30);
        expectType<Person>(person); // Compile-time check for intersection type
    });

    test('intersection of multiple interfaces', () => {
        interface Employee {
            employeeId: number;
        }

        interface Contactable {
            email: string;
        }

        type EmployeeContact = Nameable & Employee & Contactable;

        const employeeContact: EmployeeContact = {
            name: "Bob",
            employeeId: 123,
            email: "bob@example.com"
        };

        expect(employeeContact.name).toBe("Bob");
        expect(employeeContact.employeeId).toBe(123);
        expect(employeeContact.email).toBe("bob@example.com");
    });

    function expectType<T>(value: T): void {} // helper function for compile-time checks

    test('intersection type with literals', () => {
        type StatusActive = { status: "active" };
        type StatusInactive = { status: "inactive" };

        type ActiveUser = Nameable & StatusActive;
        type InactiveUser = Nameable & StatusInactive;

        const activeUser: ActiveUser = { name: "Charlie", status: "active" };
        const inactiveUser: InactiveUser = { name: "Dave", status: "inactive" };

        expect(activeUser.status).toBe("active");
        expect(inactiveUser.status).toBe("inactive");
    });

    test('intersection type with union types', () => {
        type Car = { wheels: 4; drive: () => string };
        type Boat = { sails: 2; sail: () => string };

        type AmphibiousVehicle = Car & Boat;

        const vehicle: AmphibiousVehicle = {
            wheels: 4,
            sails: 2,
            drive: () => "Driving on land",
            sail: () => "Sailing on water"
        };

        expect(vehicle.wheels).toBe(4);
        expect(vehicle.sails).toBe(2);
        expect(vehicle.drive()).toBe("Driving on land");
        expect(vehicle.sail()).toBe("Sailing on water");
    });

    test('intersection type with optional properties', () => {
        interface HasAddress {
            address?: string;
        }

        type DetailedPerson = Person & HasAddress;

        const personWithAddress: DetailedPerson = { name: "Eve", age: 28, address: "123 Main St" };
        const personWithoutAddress: DetailedPerson = { name: "Frank", age: 35 };

        expect(personWithAddress.address).toBe("123 Main St");
        expect(personWithoutAddress.address).toBeUndefined();
    });

    test('intersection type in function parameters', () => {
        interface Admin {
            role: "admin";
        }

        type AdminUser = Person & Admin;

        function getAdminInfo(user: AdminUser): string {
            return `${user.name}, Age: ${user.age}, Role: ${user.role}`;
        }

        const admin: AdminUser = { name: "Grace", age: 40, role: "admin" };
        expect(getAdminInfo(admin)).toBe("Grace, Age: 40, Role: admin");
    });

});
