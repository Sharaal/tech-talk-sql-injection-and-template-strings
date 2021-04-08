[Previous](./4-2-what-are-template-strings.md)


# MVP of a SQL Template String library

## How we want it looks like

So first let us have a look how we want to use that library:

```javascript
const email = 'tech-talk@sharaal.de'

const query = sql`SELECT * FROM users WHERE email = ${email}`

const result = await client.query(query)

console.log(query)
console.log(result.rows)
```

It's easy, it's our first example with just adding the tag for the Template String naming `sql`.


[Next](./4-4-the-tag-function.md)
