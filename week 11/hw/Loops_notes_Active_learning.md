# JavaScript Loops:

Loops allow us to execute a block of code multiple times

## Why Use Loops?

- Automate repetitive tasks without redundant code.
- Handle dynamic data sets of varying sizes.
- Simplify complex operations by breaking them into repeatable steps.



### `for` Loop

When the number of iterations is known.

```javascript
for (let i = 0; i < 5; i++) {
  // Code to execute
}
```

### `while` Loop

Executes as long as the condition is true.

```javascript
while (condition) {
  // Code to execute
}
```

### `do...while` Loop

Executes the block at least once before checking the condition.

```javascript
do {
  // Code to execute
} while (condition);
```

### `for...of` Loop

Iterates over iterable objects like arrays, strings, maps, etc.

```javascript
for (const item of iterable) {
  // Code to execute
}
```

### `for...in` Loop

Iterates over enumerable properties of an object.

```javascript
for (const key in object) {
  // Code to execute
}
```

## Loop Control Statements

- **`break`**: Exits the loop immediately.
- **`continue`**: Skips the current iteration and proceeds to the next one.

## Choosing the Right Loop

- Use `for` when the number of iterations is predetermined.
- Use `while` when the condition depends on dynamic factors.
- Use `do...while` when the loop should run at least once regardless of the condition.
- Use `for...of` for iterating over iterable objects.
- Use `for...in` for iterating over object properties.

---

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

for (const person of people) {
  if (person === 'Phil' || person === 'Lola') {
    refused.textContent += `${person}, `;
  } else {
    admitted.textContent += `${person}, `;
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';