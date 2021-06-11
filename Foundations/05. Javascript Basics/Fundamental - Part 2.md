### Knowledge Check
- What are the eight data types in JavaScript?
  - string
  - number
  - BigInt
  - boolean
  - "null" value/type
  - "undefined" value/type
  - Object
  - Symbol
- Which data type is NOT primitive?
  - Object
- What is the relationship between null and undefined?
  - null is used to assign an “empty” or “unknown” value to a variable, undefined is reserved as a default initial value for unassigned things
- What is the difference between single, double, and backtick quotes for strings?
  - backticks or template literals can represent multiple lines and use interpolation to insert variables or expressions. No need to escape quotes.
  - single and double quotes need to escape one in another.
- What is the term for embedding variables/expressions in a string?
- Which type of quote lets you embed variables/expressions in a string?
  - string interpolation.
- How do you embed variables/expressions in a string?
  - using backticks instead of quotes
- How do you escape characters in a string?
  - using escape character \
- What are methods?
  - actions that can be performed on objects.
- What is the difference between slice/substring/substr?
  - slice: can use negative index (reverse)
  - slice:  when startIndex greater than endIndex, result will be an empty string
  - substring: will swap the 2 parameters if startIndex > endIndex
  - substring: returns an empty string if startIndex and endIndex are both greater than the length of the string or startIndex = endIndex
  - substr: second parameter is the length instead of index
- What are the three logical operators and what do they stand for?
  - AND &&
  - OR ||
  - NOT !
- What are the comparison operators?
  - \>, <, ==, ===, !=, !==
- What are truthy and falsy values?
  - true and false
- What are the falsy values in JavaScript?
  - false, null, undefined, 0, "" (empty string), NaN 
- What are conditionals?
  - if, else if, else, switch-case
- What is the syntax for an if/else conditional?
  - > if (condition) {  
    >     ...  
    > } else {  
    >     ...  
    > }
- What is the syntax for a switch statement?
  - > switch (expression) {  
    > case value1:  
    >   ...  
    >   break;  
    > case value2:  
    >   ...  
    >   break;  
    > default:  
    > }
- What is the syntax for a ternary operator?
  - (condition) ? true : false
- What is nesting?
  - if/else inside if/else