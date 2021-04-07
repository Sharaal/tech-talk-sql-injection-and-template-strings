[Previous](./4-what-are-template-strings.md)


# MVP of a SQL Template String library

## First a little sidenote, query with object parameter

One additional info, because we will use of it here: `pg` also allows to give the `query()` function an object as parameter:

```javascript
const email = 'tech-talk@sharaal.de'

const query = { text: `SELECT * FROM users WHERE email = $1`, values: [email] }

const result = await client.query(query)

console.log(query)
console.log(result.rows)
```


[Next](./5-2-how-we-want-it-looks-like.md)
