[Previous](./3-how-solve-it-with-pg.md)


# MVP of a SQL Template String library

## First a little sidenote, query with object parameter

One additional info, because we will use of it here: `pg` also allows to give the `query()` function an object as parameter instead of two parameters:

```javascript
const email = 'tech-talk@sharaal.de'

const query = { text: `SELECT * FROM users WHERE email = $1`, values: [email] }

const result = await client.query(query)

console.log(query)
console.log(result.rows)
```


[Next](./4-2-what-are-template-strings.md)
