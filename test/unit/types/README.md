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
