// Symbols are a unique and immutable primitive data type introduced in ES6. 
// Each symbol value is unique, even if created with the same description. 
// Symbols are often used as unique property keys in objects, ensuring there’s no accidental name collision 
// between properties. They’re especially useful in cases where properties should be private or hidden,
// or when working with library code that requires unique identifiers.
// Global symbols created with Symbol.for allow for the reuse of symbols with a shared key, 
// making them accessible across different parts of the application with Symbol.keyFor.

// Examples of when to use symbols:
// - To create unique keys for object properties that won’t conflict with other properties.
// - To create private fields within classes or objects.
// - To define constants that are guaranteed to be unique.
// - To use well-known symbols, like Symbol.iterator, which are used to customize how objects behave with certain JavaScript features.

describe('symbol type', () => {

    test('basic symbol creation', () => {
        const sym1 = Symbol();
        const sym2 = Symbol();
        
        expect(typeof sym1).toBe("symbol");
        expect(sym1).not.toBe(sym2); // Every symbol is unique
    });

    test('symbol with description', () => {
        const sym = Symbol("uniqueDescription");
        
        expect(sym.description).toBe("uniqueDescription");
    });

    function expectType<T>(value: T): void {} // helper function for compile-time checks

    test('symbol type assertion at compile-time', () => {
        const sym = Symbol();
        expectType<symbol>(sym); // Compile-time type assertion
        expect(typeof sym).toBe("symbol");
    });

    test('using symbols as object keys', () => {
        const key1 = Symbol("key1");
        const key2 = Symbol("key2");
    
        const obj: { [key: symbol]: string } = {  // Explicitly define the type to allow symbol keys
            [key1]: "value1",
            [key2]: "value2"
        };
    
        expect(obj[key1]).toBe("value1");
        expect(obj[key2]).toBe("value2");
        expect(obj[Symbol("key1")]).toBeUndefined(); // Symbols are unique, so a new symbol won't match key1
    });

    test('global symbols with Symbol.for', () => {
        const globalSym1 = Symbol.for("sharedKey");
        const globalSym2 = Symbol.for("sharedKey");

        expect(globalSym1).toBe(globalSym2); // Symbol.for creates or retrieves a global symbol
        expect(Symbol.keyFor(globalSym1)).toBe("sharedKey"); // Retrieves the key for a global symbol
    });

    test('unique symbols vs global symbols', () => {
        const localSym = Symbol("local");
        const globalSym = Symbol.for("global");

        expect(localSym).not.toBe(globalSym); // Unique symbol is different from global symbol, even if descriptions match
        expect(Symbol.keyFor(localSym)).toBeUndefined(); // Only global symbols have keys
        expect(Symbol.keyFor(globalSym)).toBe("global");
    });

    test('symbol in a class for private fields', () => {
        const privateField = Symbol("privateField");

        class MyClass {
            [privateField]: string = "private value";

            getPrivateValue() {
                return this[privateField];
            }
        }

        const instance = new MyClass();
        expect(instance.getPrivateValue()).toBe("private value");
        expect(instance[privateField]).toBe("private value");
    });

});
