[Previous](./5-3-the-tag-function.md)


# MVP of a SQL Template String library

## But there was more, or?

But wasn't it more complex use cases?

e.g. an object with column names and values we want to use as `WHERE` condition:

```javascript
const user = { email: 'tech-talk@sharaal.de', name: 'Sharaal' }

const result = await sql.any(sql`
  SELECT * FROM users WHERE ${sql.conditions(user)}
`)

// text: SELECT * FROM users WHERE "email" = $1 AND "name" = $2
// values: ['tech-talk@sharaal.de', 'Sharaal']
```

And what about we accidentally forget to tagging a query with the `sql`?

```javascript
const email = 'tech-talk@sharaal.de'

const query = `SELECT * FROM users WHERE email = ${email}`
const users = await sql.any(query)

// Own sql.query function throwing an error if we forgot the tagging
```

And do we really want to write always SQL, also for very simple insert/update statements or just get a row by an ID?

```javascript
// Insert a new user
const id = await sql.insert(
  'users',
  { name: 'new Sharaal', email: 'tech-talk@sharaal.de', passwordhash: 'example' }
)

// Selecting one user by the email
const user = await sql.one('users', { name: 'New Sharaal' })

// Updating a row
await sql.update('users', { passwordhash: 'new example' }, { id })

// Delete a row
await sql.delete('users', { id })
```


[Next](./5-what-about-knex.md)
