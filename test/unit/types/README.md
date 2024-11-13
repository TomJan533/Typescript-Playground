# TypeScript Tests Categorization

This project organizes TypeScript tests into categories based on the type characteristics and functionality they focus on. These categories provide structure and clarity, making it easy to locate and understand tests for different TypeScript concepts. Here’s a breakdown of each category and examples of the types that belong to each:

## Categories

1. **Primitive**
   - **Description**: This category includes tests for basic, immutable types in TypeScript, such as `string`, `number`, `boolean`, and `symbol`.
   - **Examples**: 
     - `symbol.test.ts`: Tests for the `symbol` type, which is a unique, immutable primitive.
   
2. **Object**
   - **Description**: Tests for structured types that describe collections of properties or methods, typically defined with interfaces or type aliases.
   - **Examples**:
     - `intersection.test.ts`: Tests for intersection types, which are often used to combine object structures, merging multiple interfaces or types.

3. **Top**
   - **Description**: This broad category includes tests for high-level type constructs that can represent multiple underlying types or help manipulate them.
   - **Examples**:
     - `union.test.ts`: Tests for union types, which allow variables to hold values of different types.
     - `type.aliases.test.ts`: Tests for type aliases, which can be used to simplify and define many different types.
     - `type.assertions.test.ts`: Tests for type assertions, which override TypeScript’s inferred types.

4. **Bottom**
   - **Description**: Reserved for types that represent values that should logically never occur. This category includes the `never` type, used for cases like exhaustive type checks.
   - **Examples**:
     - Tests for `never` (if included) would fall into this category, as `never` is used in cases where values are logically impossible.

## Additional Categories (Optional)

For larger projects or for more detailed organization, the following optional categories may be useful:

- **Complex**: Tests that involve combining types, such as intersections and unions, creating more intricate type structures.
- **Utility**: Tests that focus on utility types or type manipulation tools, such as `Partial`, `Readonly`, or custom helper functions for type handling.

This structure allows for a clear and organized approach to TypeScript testing, making it easier to locate tests based on type-specific functionalities and simplifying type-based debugging and exploration.

# TypeScript Special Types Comparison

This document provides a quick comparison of TypeScript’s special types—`null`, `undefined`, `never`, `any`, and `unknown`. These types are used in specific scenarios where typical type annotations are insufficient, helping to ensure safe handling of values with varying levels of certainty or constraints.

| **Type**      | **Keyword**              | **Description**                                                                                                         | **Use Case**                                                                                             | **Key Characteristics**                           |
|---------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| **`null`**    | **Absence of value**     | Represents the intentional absence of any value.                                                                       | Used when a value is explicitly empty or non-existent.                                                   | Can only be assigned `null`; `typeof` returns `object`. |
| **`undefined`** | **Uninitialized**       | Indicates a variable has been declared but not assigned a value.                                                      | Used when a variable might be uninitialized or optional properties are absent.                           | Can only be assigned `undefined`; `typeof` returns `undefined`. |
| **`never`**   | **Impossible**     | Represents values that should never occur. Functions that throw errors or have infinite loops return `never`.         | Used to ensure unreachable code (exhaustive checks in switch statements).                                | No assignable values; `typeof` is never accessible at runtime. |
| **`any`**     | **Disabled typing**    | Disables type checking, allowing any type to be assigned.                                                              | Used for backward compatibility, dynamic content, or when strict typing is not required.                | Completely bypasses type checking, allowing any operations. |
| **`unknown`** | **Type-check before usage** | A safer alternative to `any` for values of uncertain type; requires type-checking before usage.                       | Used when the type is unknown at the time, such as user input or API responses.                         | Requires type narrowing or assertions before use. |

This comparison provides a quick reference for understanding when to use each type, helping to write TypeScript code that is both type-safe and expressive.


# Choosing Between Types and Interfaces in TypeScript

In TypeScript, both **types** and **interfaces** allow you to define the shape of an object or data structure. While they have similarities, each has unique features and use cases. This guide helps clarify when to use a **type** and when to use an **interface**.

## Quick Reference

| **Feature**           | **Type**                                                                                   | **Interface**                                                                               |
|-----------------------|--------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Basic Use**         | Use for defining aliases for primitive, union, intersection, or complex types.             | Use for defining the shape of objects or classes with properties and method signatures.     |
| **Extensibility**     | Cannot be extended after creation, but can be intersected with other types.                | Easily extendable with additional properties or by merging with other interfaces.           |
| **Object Structure**  | Best for creating aliases for complex types (e.g., unions, intersections, or tuples).      | Best for defining the structure of an object or class with known properties and methods.    |
| **Compatibility**     | Works well with primitives, complex types, and function signatures.                        | Preferred for defining data models and classes.                                             |
| **Declaration Merging** | Not supported.                                                                            | Supported—interfaces can merge with other interfaces with the same name.                    |

## When to Use Types

- **Complex Data Structures**: Use types for unions, intersections, and mapped types, as well as defining arrays and tuples.
  ```typescript
  type Response = { success: boolean } | { error: string };
  ```

- **Primitive Type Aliases**: Use types to create more readable aliases for primitive types.
  ```typescript
  type ID = string | number;
  ```
- **Function Signatures**: Types are flexible for defining function signatures or callback types.
  ```typescript
  type Callback = (data: string) => void;
  ```

## When to Use Interfaces
- **Object and Class Shapes**: Use interfaces to define the structure of an object or class with known properties and methods.
  ```typescript
  interface User {
      name: string;
      age: number;
      greet(): string;
  }
  ```
- **Extending and Merging**: Use interfaces when you need to extend or merge types, as they support inheritance and declaration merging.

  ```typescript
    interface Animal { species: string; }
    interface Dog extends Animal { bark(): void; }
  ```
**Summary**
Use type when working with complex types, unions, intersections, or when creating aliases for primitive types.
Use interface when defining the shape of an object or class, or when you need to extend or merge types.
