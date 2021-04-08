[Previous](./4-1-first-a-little-sidenote-query-with-object-parameter.md)


# What are Template Strings

JavaScript provides Template Strings which contains variables, like we already saw:

```javascript
const variable = 'Hello'
const text = `Another ${variable} World!`
```

As extension of that JavaScript provides the feature to define how the variables comes into the string by tagging the Template String with a name and providing a function with that name to handle it:

```javascript
const variable = 'Hello'
const text = tagName`Another ${variable} World!`

function tagName(textFragments, ...values) {
  console.log(textFragments)
  console.log(values)
}
```

Is it only me that it comes directly in mind we could use this for SQL Statements? Let's start a quick coding excursion.


[Next](./4-3-how-we-want-it-looks-like.md)
